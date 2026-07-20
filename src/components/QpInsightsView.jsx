import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import SimpleBarChart from './SimpleBarChart';
import { QpInteractionMix, QpScoreDistribution } from './QpDistributionChart';
import {
  formatDelta,
  getAllProfilesData,
  getQpData,
  getQpProfile,
  getQpLensInsights,
  getQpLensInsightsForProfile,
  getPortfolioQpLensInsights,
  analysisSharePct,
  matchedSharePct,
} from '../qpInsightsData';
import {
  trackQpAnalyticsAiInsightViewed,
  trackQpAnalyticsDistributionViewed,
  trackQpAnalyticsEscalationViewed,
  trackQpAnalyticsKpiBreakdownViewed,
} from '../analytics';
import { getCqaHostContext } from '../cqaHostContext';
import { getQpAgentProfile, getQpAgents, getQpAgentDetail } from '../qpAgentData';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Alert, Box, Chip, Divider, Paper, Stack, Typography,
} from '@exotel-npm-dev/signal-design-system';

function QpSectionHeader({ title, caption, heading }) {
  return (
    <div className="qp-section-header">
      <div className={`section-heading${heading ? ' qp-drill-nav-heading' : ''}`}>
        {heading ?? title}
      </div>
      {caption && <p className="section-scope-caption">{caption}</p>}
    </div>
  );
}

function QpProfileDetailNav({ profile, summary, totalUnique, onBack }) {
  const matched = summary?.matched ?? 0;
  const pct = totalUnique ? matchedSharePct(matched, totalUnique) : null;

  return (
    <div className="qp-section-header qp-drill-nav">
      <div className="qp-drill-nav-row">
        <button type="button" className="qp-drill-nav-back" onClick={onBack} aria-label="Back to portfolio">
          <Icon name="arrow_back" />
        </button>
        <div className="qp-drill-nav-body">
          <div className="section-heading qp-drill-nav-heading">
            <span className="qp-drill-nav-name">{profile.label}</span>
            {summary?.severity && summary.severity !== 'unused' && (
              <SeverityBadge severity={summary.severity} />
            )}
            {summary?.avgScore != null && (
              <span className="qp-drill-nav-score" style={{ color: scoreColor(summary.avgScore) }}>
                {summary.avgScore}%
              </span>
            )}
          </div>
          <p className="section-scope-caption">
            {matched > 0 ? (
              <>
                {matched.toLocaleString()} matched calls{pct != null ? ` (${pct}% of all unique interactions)` : ''} this period
                {summary?.avgScore != null && <> · avg score {summary.avgScore}%</>}
              </>
            ) : (
              'No calls matched this profile in the selected period.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function ViewScopeBanner({ variant, profileName }) {
  if (variant === 'profile') {
    return (
      <div className="qp-scope-banner">
        <Icon name="description" />
        <div>
          <div className="qp-scope-banner-title">Single-profile view</div>
          <div className="qp-scope-banner-text">
            Every metric below is scoped to <strong>{profileName}</strong> only — not the full portfolio.
            Switch to Portfolio to see org-wide totals.
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function TruncatedText({ text, className = '', clampClass = 'qp-truncated-text' }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 120;

  return (
    <div
      className={`qp-truncated-wrap${expanded ? ' is-expanded' : ''}${isLong ? ' has-toggle' : ''}${className ? ` ${className}` : ''}`}
    >
      <p className={`${clampClass}${expanded ? ' is-expanded' : ''}`}>
        {text}
        {isLong && expanded && (
          <>
            {' '}
            <button
              type="button"
              className="qp-truncated-toggle-inline"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            >
              see less
            </button>
          </>
        )}
      </p>
      {isLong && !expanded && (
        <button
          type="button"
          className="qp-truncated-toggle-inline qp-truncated-toggle-end"
          onClick={() => setExpanded(true)}
        >
          see more
        </button>
      )}
    </div>
  );
}

function KpiQuestionCell({ text }) {
  return (
    <div className="qp-kpi-question-cell">
      <TruncatedText text={text} clampClass="qp-kpi-question" />
    </div>
  );
}

function CoachingInsightsPanel({ profileLabel, aiInsights, escalations, escRef }) {
  const sourceLabel =
    aiInsights.source === 'gen_ai'
      ? 'Gen-AI insight'
      : aiInsights.source === 'aggregated'
        ? 'Data-driven insight'
        : null;

  return (
    <div className="qp-coaching-section">
      <QpSectionHeader
        title="Coaching Insights"
        caption={(
          <>
            {sourceLabel ? (
              <>
                <span className="qp-insight-source-badge">{sourceLabel}</span>
                {' '}
              </>
            ) : null}
            AI-generated coaching guidance for <strong>{profileLabel}</strong> this period
          </>
        )}
      />

      <div className="qp-coaching-panel">
        <div className="qp-coaching-summary info-card focus">
          <Icon name="auto_awesome" className="qp-coaching-summary-icon" />
          <TruncatedText text={aiInsights.headline} clampClass="qp-coaching-summary-text" />
        </div>

        {aiInsights.needsAttention.length > 0 || aiInsights.performingWell.length > 0 ? (
          <div className="qp-coaching-kpi-row">
            {aiInsights.needsAttention.length > 0 && (
              <div className="qp-coaching-card info-card priority">
                <div className="qp-coaching-card-head">
                  <Icon name="warning" />
                  <span className="info-card-title">Needs Attention</span>
                  <span className="qp-coaching-count">{aiInsights.needsAttention.length}</span>
                </div>
                <div className="qp-coaching-list">
                  {aiInsights.needsAttention.map((k) => (
                    <div key={k.name} className="qp-coaching-item">
                      <div className="qp-coaching-item-head">
                        <span className="info-card-kpi">{k.name}</span>
                        <span className="improve-badge below">{k.score}</span>
                      </div>
                      <TruncatedText text={k.detail} clampClass="qp-coaching-item-text" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {aiInsights.performingWell.length > 0 && (
              <div className="qp-coaching-card info-card strength">
                <div className="qp-coaching-card-head">
                  <Icon name="verified" />
                  <span className="info-card-title">Performing Well</span>
                  <span className="qp-coaching-count">{aiInsights.performingWell.length}</span>
                </div>
                <div className="qp-coaching-list">
                  {aiInsights.performingWell.map((k) => (
                    <div key={k.name} className="qp-coaching-item">
                      <div className="qp-coaching-item-head">
                        <span className="info-card-kpi">{k.name}</span>
                        <span className="improve-badge above">{k.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}

        <div className="qp-coaching-recommendation info-card focus">
          <div className="qp-coaching-card-head">
            <Icon name="lightbulb" />
            <span className="info-card-kpi">Recommended Action</span>
          </div>
          <TruncatedText text={aiInsights.recommendation} clampClass="qp-coaching-item-text" />
        </div>

        {escalations.length > 0 && (
          <div className="qp-coaching-escalations" ref={escRef}>
            <div className="qp-coaching-escalations-label">Escalations to review</div>
            <div className="qp-coaching-escalation-grid">
              {escalations.map((e) => (
                <div
                  key={`${e.type}-${e.kpi}`}
                  className={`qp-coaching-escalation info-card ${e.type === 'dispute' ? 'priority' : 'focus'}`}
                >
                  <div className="qp-coaching-card-head">
                    <Icon name={e.type === 'dispute' ? 'gavel' : 'trending_down'} />
                    <span className="info-card-kpi">{e.kpi}</span>
                  </div>
                  <TruncatedText text={e.detail} clampClass="qp-coaching-item-text" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── QP-scoped agent insight helpers ──────────────────── */

function qpScoreSemantic(score) {
  if (score >= 82) return 'success';
  if (score >= 70) return 'warning';
  return 'error';
}

function QpAgentAreasToImprove({ areas }) {
  const [expandedArea, setExpandedArea] = useState(null);
  const [copied, setCopied] = useState(null);
  const copyTimerRef = useRef(null);

  const handleCopy = (e, i, text) => {
    e.stopPropagation();
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setCopied(i);
    clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(null), 1600);
  };

  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography variant="title3" sx={{ mb: 0.5 }}>Areas Affecting QP Score</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        These areas are pulling down the overall QP score. Click to expand coaching guidance.
      </Typography>
      {areas.map((area, i) => {
        const isExpanded = expandedArea === i;
        const below = area.belowTeamAvgBy > 0;
        return (
          <Accordion key={area.kpi} expanded={isExpanded}
            onChange={() => setExpandedArea(isExpanded ? null : i)}
            disableGutters elevation={0} square
            sx={{
              border: '1px solid', borderColor: 'divider',
              '&:not(:last-child)': { borderBottom: 0 },
              '&::before': { display: 'none' },
            }}>
            <AccordionSummary>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ flex: 1, mr: 1 }}>
                <Box sx={{
                  width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                  bgcolor: below ? 'error.main' : 'warning.main',
                }} />
                <Typography variant="label2" sx={{ flex: 1 }}>{area.kpi}</Typography>
                <Chip label={area.score} variant="tonal" color={below ? 'error' : 'warning'} size="small" />
                <Typography variant="caption" color="text.secondary">team avg {area.teamAvg}</Typography>
                {below && (
                  <Chip label={`${area.belowTeamAvgBy}% below`} variant="tonal" color="error" size="small" />
                )}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="label2" sx={{ mb: 0.5 }}>What this means for your QP score</Typography>
                  <Typography variant="body2" color="text.secondary">{area.whatThisMeans}</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="label2" sx={{ mb: 0.5 }}>Highlights from calls</Typography>
                  <Typography variant="body2" color="text.secondary">{area.highlightsFromCalls}</Typography>
                </Paper>
                <Paper variant="outlined" sx={{
                  p: 2, bgcolor: 'background.paper',
                  borderColor: 'primary.main', borderLeftWidth: 4,
                }}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="label2">Say this on your next call</Typography>
                    <Box onClick={(e) => handleCopy(e, i, area.sayThisOnNextCall)}
                      sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5,
                        color: copied === i ? 'success.main' : 'primary.main',
                        fontSize: 12, fontWeight: 600 }}>
                      <Icon name={copied === i ? 'check' : 'content_copy'} />
                      {copied === i ? 'Copied!' : 'Copy'}
                    </Box>
                  </Stack>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                    {area.sayThisOnNextCall}
                  </Typography>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

function QpAgentSelfView({ qpId, period }) {
  const agentProfile = getQpAgentProfile(qpId);
  if (!agentProfile) return null;

  // In production, this would come from getCqaHostContext().userId
  // For demo, pick a mid-pack agent for the selected profile
  const ctx = getCqaHostContext();
  const fallbackAgentId = agentProfile.label === 'Branch Profile 1' ? 'BP0024' : 'H18047';
  const agentId = ctx.userId || fallbackAgentId;
  const detail = getQpAgentDetail(agentId, period, qpId);

  if (!detail) {
    return (
      <Paper elevation={0} sx={{ mt: 3, p: 4, textAlign: 'center', bgcolor: 'surface.elevation1', borderRadius: 2 }}>
        <Typography variant="title3" color="text.secondary">
          No QP evaluation data found for your agent ID
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ mt: 3, bgcolor: 'surface.elevation1', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ px: 3, pt: 3, pb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Typography variant="title2" component="h2">Your QP Performance</Typography>
          <Chip label={`${detail.score}%`} variant="tonal" color={qpScoreSemantic(detail.score)} />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Your performance on "{agentProfile.label}" quality profile
        </Typography>
      </Box>

      <Divider sx={{ mx: 3, my: 1 }} />

      {/* Priority */}
      <Box sx={{ px: 3, py: 1.5 }}>
        <Alert severity={qpScoreSemantic(detail.score) === 'success' ? 'success' : 'warning'} variant="outlined">
          <Typography variant="body2">
            <strong>Your Focus:</strong> {detail.priority}
          </Typography>
        </Alert>
      </Box>

      {/* Score overview */}
      <Box sx={{ px: 3, py: 1.5 }}>
        <div className="kpi-grid">
          <MetricCard label="Your QP Score" value={`${detail.score}%`} valueColor={scoreColor(detail.score)}
            sub={`Your score on "${agentProfile.label}"`}
            delta={{ value: detail.delta, suffix: 'pp' }} />
          <MetricCard label="Your QP Rank" value={`#${detail.rank} of ${agentProfile.totalAgents}`}
            sub="Your position among all agents on this QP" />
          <MetricCard label="Calls Analyzed" value={detail.calls}
            sub="Total evaluations against this quality profile" />
        </div>
      </Box>

      <Divider sx={{ mx: 3 }} />

      {/* Good Job */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="title3" sx={{ mb: 1.5 }}>Performing Well</Typography>
        <Paper variant="outlined" sx={{ p: 2, borderColor: 'success.main', borderLeftWidth: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Icon name="verified" style={{ color: 'var(--green-text)' }} />
            <Typography variant="label1">{detail.goodJob.kpi}</Typography>
            <Chip label={detail.goodJob.score} variant="tonal" color="success" size="small" />
            <Typography variant="caption" color="text.secondary">team avg {detail.goodJob.teamAvg}</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">{detail.goodJob.text}</Typography>
        </Paper>
      </Box>

      <Divider sx={{ mx: 3 }} />

      {/* Areas to Improve */}
      {detail.areasToImprove.length > 0 && (
        <QpAgentAreasToImprove areas={detail.areasToImprove} />
      )}
    </Paper>
  );
}

function QpAgentInsightsPanel({ qpId, period, onOpenAgent, role }) {
  const agentProfile = getQpAgentProfile(qpId);
  if (!agentProfile) return null;

  const data = getQpAgents(period, qpId);
  if (!data) return null;

  const { agents, avgScore, totalAgents, aboveAvg, belowAvg,
    topAgents, bottomAgents, priority, strength, previousFocus,
    coachingRecommendations, agentsNeedingAttention } = data;

  const bandCounts = useMemo(() => {
    const bands = [
      { label: '90–100%', min: 90, max: 101, semantic: 'success' },
      { label: '80–90%', min: 80, max: 90, semantic: 'success' },
      { label: '70–80%', min: 70, max: 80, semantic: 'warning' },
      { label: '60–70%', min: 60, max: 70, semantic: 'warning' },
      { label: '<60%', min: 0, max: 60, semantic: 'error' },
    ];
    return bands.map((b) => ({
      ...b,
      count: agents.filter((a) => a.score >= b.min && a.score < b.max).length,
    }));
  }, [agents]);

  return (
    <Paper elevation={0} sx={{ mt: 3, p: 0, bgcolor: 'surface.elevation1', borderRadius: 2 }}>
      <Box sx={{ px: 3, pt: 3, pb: 1 }}>
        <Typography variant="title2" component="h2">
          Agent Performance on this QP
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {role === 'admin' || role === 'superadmin'
            ? `Organization-wide: ${totalAgents} agents evaluated on "${agentProfile.label}"`
            : `Your team: ${totalAgents} agents evaluated on "${agentProfile.label}"`}
        </Typography>
      </Box>

      <Divider sx={{ mx: 3, my: 1 }} />

      {/* Banners */}
      <Stack spacing={1.5} sx={{ px: 3, py: 1.5 }}>
        <Alert severity="info" variant="outlined">
          <Typography variant="body2">
            <strong>Previous Focus:</strong> {previousFocus.kpi} — {previousFocus.text}
          </Typography>
        </Alert>
        <Alert severity="error" variant="outlined">
          <Typography variant="body2">
            <strong>Priority:</strong> {priority}
          </Typography>
        </Alert>
        <Alert severity="success" variant="outlined">
          <Typography variant="body2">
            <strong>Strength:</strong> {strength}
          </Typography>
        </Alert>
      </Stack>

      {/* QP Score Overview */}
      <Box sx={{ px: 3, py: 1.5 }}>
        <div className="kpi-grid">
          <MetricCard label="Total Agents" value={totalAgents} sub="Agents evaluated under this quality profile" />
          <MetricCard label="QP Avg Score" value={`${avgScore}%`} valueColor={scoreColor(avgScore)}
            sub="Mean score across all agents on this QP" />
          <MetricCard label="Above QP Average" value={aboveAvg}
            sub={`${Math.round((aboveAvg / totalAgents) * 100)}% of agents scoring above ${avgScore}%`} />
          <MetricCard label="Below QP Average" value={belowAvg}
            valueColor={belowAvg > totalAgents / 2 ? 'var(--red-text)' : undefined}
            sub={`${Math.round((belowAvg / totalAgents) * 100)}% of agents need coaching on this QP`} />
        </div>
      </Box>

      <Divider sx={{ mx: 3 }} />

      {/* Collapsible sections */}
      <Box sx={{ px: 1 }}>
        {/* Score Distribution */}
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography variant="title3">QP Score Distribution</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Agent distribution by quality profile score band
            </Typography>
            <Stack spacing={1}>
              {bandCounts.map((band) => (
                <Stack key={band.label} direction="row" alignItems="center" spacing={1.5}>
                  <Typography variant="body2" sx={{ width: 70, textAlign: 'right', flexShrink: 0 }}>
                    {band.label}
                  </Typography>
                  <Box sx={{ flex: 1, height: 24, bgcolor: 'action.hover', borderRadius: 1, overflow: 'hidden' }}>
                    <Box sx={{
                      height: '100%',
                      width: `${(band.count / totalAgents) * 100}%`,
                      bgcolor: band.semantic === 'success' ? 'success.main'
                        : band.semantic === 'warning' ? 'warning.main' : 'error.main',
                      borderRadius: 1,
                      transition: 'width 0.4s ease',
                      minWidth: band.count > 0 ? 4 : 0,
                    }} />
                  </Box>
                  <Chip
                    label={`${band.count} agent${band.count !== 1 ? 's' : ''}`}
                    variant="tonal"
                    color={band.semantic}
                    size="small"
                  />
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Top / Bottom Agents */}
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography variant="title3">Top & Bottom Agents</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Ranked by QP score — click an agent to see their detail
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
              {/* Top 5 */}
              <Paper variant="outlined" sx={{ flex: 1, p: 0, overflow: 'hidden' }}>
                <Box sx={{ px: 2, py: 1.5, bgcolor: 'success.main', color: 'success.contrastText' }}>
                  <Typography variant="label1">Top 5 Agents</Typography>
                </Box>
                {topAgents.map((a) => (
                  <Box key={a.agentId}
                    onClick={() => onOpenAgent(a.agentId)}
                    sx={{
                      px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1.5,
                      cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' },
                      borderBottom: '1px solid', borderColor: 'divider',
                    }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, flex: 1 }}>{a.agentId}</Typography>
                    <Chip label={`${a.score}%`} variant="tonal" color="success" size="small" />
                    <Typography variant="caption" color="text.secondary">{a.calls} calls</Typography>
                    <Typography variant="caption" color="text.secondary">#{a.rank}</Typography>
                  </Box>
                ))}
              </Paper>

              {/* Bottom 5 */}
              <Paper variant="outlined" sx={{ flex: 1, p: 0, overflow: 'hidden' }}>
                <Box sx={{ px: 2, py: 1.5, bgcolor: 'error.main', color: 'error.contrastText' }}>
                  <Typography variant="label1">Bottom 5 Agents</Typography>
                </Box>
                {bottomAgents.map((a) => (
                  <Box key={a.agentId}
                    onClick={() => onOpenAgent(a.agentId)}
                    sx={{
                      px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1.5,
                      cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' },
                      borderBottom: '1px solid', borderColor: 'divider',
                    }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, flex: 1 }}>{a.agentId}</Typography>
                    <Chip label={`${a.score}%`} variant="tonal" color="error" size="small" />
                    <Typography variant="caption" color="text.secondary">{a.calls} calls</Typography>
                    <Typography variant="caption" color="text.secondary">#{a.rank}</Typography>
                  </Box>
                ))}
              </Paper>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Coaching Recommendations */}
        <Accordion>
          <AccordionSummary>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="title3">Coaching Recommendations</Typography>
              <Chip label={`${coachingRecommendations.length}`} variant="tonal" color="primary" size="small" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1.5}>
              {coachingRecommendations.map((c) => (
                <Paper key={c.priority} variant="outlined" sx={{ p: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Chip label={c.priority} variant="tonal" color={c.priority === 1 ? 'error' : 'warning'} size="small"
                      sx={{ minWidth: 28, justifyContent: 'center' }} />
                    <Box>
                      <Typography variant="label2" sx={{ mb: 0.5 }}>{c.kpi}</Typography>
                      <Typography variant="body2" color="text.secondary">{c.text}</Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Agents Needing Attention */}
        <Accordion>
          <AccordionSummary>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="title3">Agents Needing Attention</Typography>
              <Chip label={`${agentsNeedingAttention.length}`} variant="tonal" color="error" size="small" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Agents with the lowest QP scores — click to view their performance detail
            </Typography>
            <Stack spacing={1}>
              {agentsNeedingAttention.map((a) => (
                <Paper key={a.agentId} variant="outlined"
                  onClick={() => onOpenAgent(a.agentId)}
                  sx={{ p: 2, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Box sx={{
                      width: 36, height: 36, borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      bgcolor: 'error.main', color: 'error.contrastText',
                      fontSize: 12, fontWeight: 700,
                    }}>
                      {a.agentId.slice(0, 2)}
                    </Box>
                    <Typography variant="label1" sx={{ flex: 1 }}>{a.agentId}</Typography>
                    <Chip label={`${a.score}%`} variant="tonal" color="error" size="small" />
                    <Typography variant="body2" color="text.secondary">{a.calls} calls</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">{a.text}</Typography>
                </Paper>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
}

function QpAgentDetailView({ agentId, period, qpId, onBack }) {
  const agentProfile = getQpAgentProfile(qpId);
  const detail = getQpAgentDetail(agentId, period, qpId);
  if (!detail || !agentProfile) {
    return (
      <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'surface.elevation1', borderRadius: 2 }}>
        <Typography variant="title3" color="text.secondary">Agent not found</Typography>
      </Paper>
    );
  }

  const semantic = qpScoreSemantic(detail.score);

  return (
    <Paper elevation={0} sx={{ bgcolor: 'surface.elevation1', borderRadius: 2, overflow: 'hidden' }}>
      {/* Agent Header */}
      <Box sx={{ px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box onClick={onBack}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', p: 0.5, borderRadius: 1,
            '&:hover': { bgcolor: 'action.hover' } }}>
          <Icon name="arrow_back" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Typography variant="title2" component="h2">{agentId}</Typography>
            <Chip label={`${detail.score}%`} variant="tonal" color={semantic} />
            <Chip label={`Rank #${detail.rank}`} variant="tonal" color="info" size="small" />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {detail.calls} calls analyzed on "{agentProfile.label}" ·
            {detail.delta > 0 ? ' +' : ' '}{detail.delta}% vs prev period
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Priority Banner */}
      <Box sx={{ px: 3, py: 1.5 }}>
        <Alert severity={semantic === 'success' ? 'success' : 'warning'} variant="outlined">
          <Typography variant="body2">
            <strong>QP Focus:</strong> {detail.priority}
          </Typography>
        </Alert>
      </Box>

      {/* QP Score Overview */}
      <Box sx={{ px: 3, py: 1.5 }}>
        <div className="kpi-grid">
          <MetricCard label="QP Score" value={`${detail.score}%`} valueColor={scoreColor(detail.score)}
            sub={`Score on "${agentProfile.label}" quality profile`} />
          <MetricCard label="QP Rank" value={`#${detail.rank} of ${agentProfile.totalAgents}`}
            sub="Position among all agents on this QP" />
          <MetricCard label="Calls Analyzed" value={detail.calls}
            sub="Total evaluations against this quality profile" />
        </div>
      </Box>

      <Divider sx={{ mx: 3 }} />

      {/* Good Job - QP perspective */}
      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="title3" sx={{ mb: 1.5 }}>Performing Well</Typography>
        <Paper variant="outlined" sx={{
          p: 2, borderColor: 'success.main', borderLeftWidth: 4,
          bgcolor: 'background.paper',
        }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Icon name="verified" style={{ color: 'var(--green-text)' }} />
            <Typography variant="label1">{detail.goodJob.kpi}</Typography>
            <Chip label={detail.goodJob.score} variant="tonal" color="success" size="small" />
            <Typography variant="caption" color="text.secondary">
              team avg {detail.goodJob.teamAvg}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">{detail.goodJob.text}</Typography>
        </Paper>
      </Box>

      <Divider sx={{ mx: 3 }} />

      {/* Areas to Improve - QP perspective */}
      {detail.areasToImprove.length > 0 && (
        <QpAgentAreasToImprove areas={detail.areasToImprove} />
      )}
    </Paper>
  );
}

const ChartCard = forwardRef(function ChartCard({ title, subtitle, headerRight, children, className = '' }, ref) {
  return (
    <div ref={ref} className={`section-card${className ? ` ${className}` : ''}`}>
      <div className="section-card-header chart-card-header">
        <div>
          <div className="section-card-title">{title}</div>
          {subtitle && <div className="section-card-sub">{subtitle}</div>}
        </div>
        {headerRight}
      </div>
      <div className="section-card-body">{children}</div>
    </div>
  );
});

function SeverityBadge({ severity }) {
  if (severity === 'critical') return <span className="improve-badge below">Critical</span>;
  if (severity === 'attention') return <span className="tab-badge team">Attention</span>;
  if (severity === 'unused') return <span className="tab-badge agent">Unused</span>;
  return <span className="improve-badge above">Healthy</span>;
}

function KpiTypeBadge({ type }) {
  if (type === 'critical') return <span className="improve-badge below">Critical</span>;
  if (type === 'failing') return <span className="tab-badge team">Failing</span>;
  return null;
}

function MetricCard({ label, value, sub, delta, valueColor }) {
  const d = formatDelta(delta?.value, delta?.suffix);
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value" style={valueColor ? { color: valueColor } : undefined}>
        {value}
      </div>
      {d && (
        <div className="kpi-delta-row">
          <Icon name={d.up ? 'arrow_upward' : 'arrow_downward'} className={d.up ? 'up' : 'down'} />
          <span className={`kpi-delta ${d.up ? 'up' : 'down'}`}>{d.text}</span>
          <span className="kpi-delta-caption">vs prev period</span>
        </div>
      )}
      {sub && <div className="kpi-sub">{sub}</div>}
    </div>
  );
}

function useIntersectionOnce(ref, onVisible, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function scoreColor(score) {
  if (score == null) return undefined;
  if (score >= 82) return 'var(--green-text)';
  if (score >= 75) return 'var(--text)';
  return 'var(--red-text)';
}

function ScrollableTable({ head, children, totalRows, bodyClassName = '', visibleRows = 10 }) {
  const scrollHint = totalRows > visibleRows ? ` · scroll for all ${totalRows}` : '';
  return (
    <div className="rank-table-card qp-table-scroll">
      <div className="qp-table-scroll-head">{head}</div>
      <div
        className={`qp-table-scroll-body${bodyClassName ? ` ${bodyClassName}` : ''}`}
        style={{ '--qp-table-visible-rows': visibleRows }}
        aria-label={`Table body, up to ${visibleRows} rows visible${scrollHint}`}
      >
        {children}
      </div>
    </div>
  );
}

const STATUS_FILTER_OPTIONS = [
  { value: 'all', label: 'All statuses' },
  { value: 'critical', label: 'Critical' },
  { value: 'attention', label: 'Attention' },
  { value: 'healthy', label: 'Healthy' },
  { value: 'unused', label: 'Unused' },
];

const EMPTY_TABLE_FILTERS = {
  search: '',
  status: 'all',
  scoreMin: '',
  scoreMax: '',
};

function matchesSearch(query, ...fields) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => String(field ?? '').toLowerCase().includes(q));
}

function matchesScoreRange(score, scoreMin, scoreMax) {
  const hasMin = scoreMin !== '';
  const hasMax = scoreMax !== '';
  if (!hasMin && !hasMax) return true;
  if (score == null) return false;

  const min = hasMin ? Number(scoreMin) : -Infinity;
  const max = hasMax ? Number(scoreMax) : Infinity;
  if (Number.isNaN(min) || Number.isNaN(max)) return true;
  return score >= min && score <= max;
}

function QpTableToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  scoreMin,
  scoreMax,
  onScoreMinChange,
  onScoreMaxChange,
  showStatus = false,
  searchPlaceholder = 'Search profiles…',
}) {
  const hasFilters = Boolean(
    search.trim() || (showStatus && status !== 'all') || scoreMin !== '' || scoreMax !== '',
  );

  const clearFilters = () => {
    onSearchChange('');
    if (showStatus) onStatusChange('all');
    onScoreMinChange('');
    onScoreMaxChange('');
  };

  return (
    <div className="qp-table-toolbar">
      <div className="qp-table-toolbar-search">
        <Icon name="search" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label="Search table"
        />
      </div>

      <div className="qp-table-toolbar-filters">
        {showStatus && (
          <div className="qp-table-toolbar-field">
            <label className="qp-table-toolbar-label" htmlFor="qp-priority-status-filter">
              Status
            </label>
            <div className="selector-wrap">
              <select
                id="qp-priority-status-filter"
                className="selector qp-table-toolbar-select"
                value={status}
                onChange={(e) => onStatusChange(e.target.value)}
              >
                {STATUS_FILTER_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <Icon name="arrow_drop_down" className="selector-arrow" />
            </div>
          </div>
        )}

        <div className="qp-table-toolbar-field">
          <span className="qp-table-toolbar-label">Avg score</span>
          <div className="qp-table-toolbar-range">
            <input
              type="number"
              className="qp-table-toolbar-input"
              min={0}
              max={100}
              step={0.1}
              value={scoreMin}
              onChange={(e) => onScoreMinChange(e.target.value)}
              placeholder="Min"
              aria-label="Minimum average score"
            />
            <span className="qp-table-toolbar-range-sep">–</span>
            <input
              type="number"
              className="qp-table-toolbar-input"
              min={0}
              max={100}
              step={0.1}
              value={scoreMax}
              onChange={(e) => onScoreMaxChange(e.target.value)}
              placeholder="Max"
              aria-label="Maximum average score"
            />
          </div>
        </div>

        {hasFilters && (
          <button type="button" className="qp-table-toolbar-clear" onClick={clearFilters}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

/* ───── QP-Lens Insight Components ───── */

function scoreFillColor(v) {
  if (v == null) return undefined;
  if (v >= 75) return 'var(--green)';
  if (v >= 50) return 'var(--yellow)';
  return 'var(--red)';
}

/** Compact weekly score sparkline from ClickHouse weeklyTrends (≤6 points). */
function QpScoreSparkline({ series, color }) {
  if (!series || series.length < 2) return null;
  const w = 88;
  const h = 28;
  const pad = 2;
  const scores = series.map((p) => p.score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const span = Math.max(max - min, 1);
  const pts = series.map((p, i) => {
    const x = pad + (i / (series.length - 1)) * (w - pad * 2);
    const y = pad + (1 - (p.score - min) / span) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  const title = series.map((p) => `${p.week}: ${p.score}%`).join(' · ');

  return (
    <Box
      component="svg"
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      title={title}
      sx={{ display: 'block', flexShrink: 0, overflow: 'visible' }}
      aria-hidden
    >
      <polyline
        fill="none"
        stroke={color || 'currentColor'}
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={pts}
      />
      {series.map((p, i) => {
        const x = pad + (i / (series.length - 1)) * (w - pad * 2);
        const y = pad + (1 - (p.score - min) / span) * (h - pad * 2);
        return <circle key={p.week} cx={x} cy={y} r={i === series.length - 1 ? 2.25 : 1.5} fill={color || 'currentColor'} />;
      })}
    </Box>
  );
}

function QpHealthCard({ card, onOpenProfile }) {
  const statusColor = card.status === 'healthy' ? 'success' : card.status === 'attention' ? 'warning' : 'error';
  const clickable = Boolean(onOpenProfile);
  const sparkColor = scoreFillColor(card.score);

  return (
    <Paper
      variant="outlined"
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={() => clickable && onOpenProfile(card.id, 'health_card')}
      onKeyDown={(e) => clickable && e.key === 'Enter' && onOpenProfile(card.id, 'health_card')}
      sx={{
        p: 2,
        borderRadius: 2,
        borderLeft: 4,
        borderLeftColor: `${statusColor}.main`,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        bgcolor: 'surface.elevation2',
        overflow: 'hidden',
        minWidth: 0,
        cursor: clickable ? 'pointer' : 'default',
        '&:hover': { boxShadow: 1 },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="title2" noWrap sx={{ flex: 1, minWidth: 0 }} title={card.name}>{card.name}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h4" sx={{ color: sparkColor }}>{card.score}%</Typography>
          {card.trendDelta != null && (
            <Typography variant="body3" sx={{ color: card.trendDelta >= 0 ? 'success.main' : 'error.main' }}>
              {card.trendDelta >= 0 ? '↑' : '↓'}{Math.abs(card.trendDelta)}pp
            </Typography>
          )}
        </Stack>
        <QpScoreSparkline series={card.scoreSeries} color={sparkColor} />
      </Stack>

      <Stack direction="row" spacing={1}>
        <Chip label={`${card.volumeLabel} evals`} size="small" variant="outlined" />
        <Chip label={`${card.kpiCount} KPIs`} size="small" variant="outlined" />
      </Stack>

      <Divider />

      <Stack spacing={0.5} sx={{ minWidth: 0 }}>
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ minWidth: 0 }}>
          <Chip label="Weak" size="small" variant="tonal" color="error" sx={{ flexShrink: 0 }} />
          <Typography variant="body3" noWrap sx={{ flex: 1, minWidth: 0 }} title={card.weakestCat}>{card.weakestCat}</Typography>
          <Typography variant="label1" sx={{ flexShrink: 0, color: scoreFillColor(card.weakestScore) }}>{card.weakestScore}%</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ minWidth: 0 }}>
          <Chip label="Top" size="small" variant="tonal" color="success" sx={{ flexShrink: 0 }} />
          <Typography variant="body3" noWrap sx={{ flex: 1, minWidth: 0 }} title={card.bestCat}>{card.bestCat}</Typography>
          <Typography variant="label1" sx={{ flexShrink: 0, color: scoreFillColor(card.bestScore) }}>{card.bestScore}%</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

function NarrativeInsightCard({ insight, onOpenProfile, onScrollUnused }) {
  const severityColor = { high: 'error', medium: 'warning', low: 'info' };
  const severityLabel = { high: 'High Priority', medium: 'Medium', low: 'Observation' };
  const borderColor = { high: 'error.main', medium: 'warning.main', low: 'info.main' };
  const ctaAction = insight.ctaAction || (insight.ctaProfileId ? 'open_profile' : null);
  const canCta = ctaAction === 'scroll_unused'
    ? Boolean(onScrollUnused)
    : ctaAction === 'open_profile' && Boolean(insight.ctaProfileId && onOpenProfile);

  const handleCta = () => {
    if (ctaAction === 'scroll_unused') {
      onScrollUnused?.();
      return;
    }
    if (ctaAction === 'open_profile' && insight.ctaProfileId) {
      onOpenProfile(insight.ctaProfileId, 'portfolio_insight');
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderTop: 3,
        borderTopColor: borderColor[insight.severity],
        bgcolor: 'surface.elevation2',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2.5, pt: 2, pb: 1.5 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Icon name={insight.icon} />
          <Typography variant="title2">{insight.title}</Typography>
        </Stack>
        <Chip label={severityLabel[insight.severity]} variant="tonal" color={severityColor[insight.severity]} size="small" />
      </Stack>

      {/* Key Metrics */}
      {insight.metrics && (
        <Stack
          direction="row"
          spacing={0}
          sx={{ mx: 2.5, mb: 2, borderRadius: 1.5, overflow: 'hidden', border: 1, borderColor: 'divider' }}
        >
          {insight.metrics.map((m, i) => (
            <Box
              key={m.label}
              sx={{
                flex: 1,
                py: 1.5,
                px: 2,
                textAlign: 'center',
                borderRight: i < insight.metrics.length - 1 ? 1 : 0,
                borderColor: 'divider',
                bgcolor: 'surface.elevation1',
              }}
            >
              <Typography variant="h5" sx={{ mb: 0.5 }}>{m.value}</Typography>
              <Stack spacing={0.25} alignItems="center">
                <Typography variant="label1" color="text.secondary" component="div" display="block">
                  {m.label}
                </Typography>
                {m.sub && (
                  <Typography variant="body3" color="text.secondary" component="div" display="block">
                    {m.sub}
                  </Typography>
                )}
              </Stack>
            </Box>
          ))}
        </Stack>
      )}

      {/* AI-Powered Insight Narrative */}
      <Box sx={{ mx: 2.5, mb: 2, p: 2, borderRadius: 1.5, bgcolor: 'surface.elevation1' }}>
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
          <Icon name="auto_awesome" style={{ fontSize: 14 }} />
          <Typography variant="label1" color="text.secondary">AI-Powered Insight</Typography>
        </Stack>
        <Typography variant="body2" color="text.primary">{insight.narrative}</Typography>
      </Box>

      {/* Data Visualization — horizontal bar chart for dataPoints */}
      {insight.dataPoints && (
        <Stack spacing={1} sx={{ mx: 2.5, mb: 2 }}>
          {insight.dataPointsTitle && (
            <Typography variant="label1" color="text.secondary">{insight.dataPointsTitle}</Typography>
          )}
          {insight.dataPoints.map((d) => (
            <Stack key={d.name} direction="row" alignItems="center" spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={0.75} sx={{ width: 200, minWidth: 200, justifyContent: 'flex-end' }}>
                {d.level && (
                  <Chip label={d.level} size="small" variant="tonal" color="info" sx={{ flexShrink: 0, height: 20, '& .MuiChip-label': { px: 0.75, fontSize: 10 } }} />
                )}
                <Typography variant="body3" noWrap sx={{ flex: 1, minWidth: 0, textAlign: 'right' }} title={d.name}>{d.name}</Typography>
              </Stack>
              <Box sx={{ flex: 1, position: 'relative' }}>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: 'action.hover', overflow: 'hidden' }}>
                  <Box
                    sx={{
                      height: '100%',
                      width: `${d.score}%`,
                      borderRadius: 4,
                      bgcolor: d.type === 'strong' ? 'success.main' : d.type === 'weak' ? 'error.main' : 'primary.main',
                    }}
                  />
                </Box>
              </Box>
              <Typography variant="label1" sx={{ width: 40, textAlign: 'right', color: scoreFillColor(d.score) }}>{d.score}%</Typography>
            </Stack>
          ))}
        </Stack>
      )}

      {/* Trend visualization for trendData */}
      {insight.trendData && (
        <Box sx={{ mx: 2.5, mb: 2 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
            {[
              { label: 'Personalization', color: 'error.main' },
              { label: 'Cross-sell', color: 'warning.main' },
              { label: 'Empathy', color: 'primary.main' },
            ].map((l) => (
              <Stack key={l.label} direction="row" alignItems="center" spacing={0.5}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: l.color }} />
                <Typography variant="body3" color="text.secondary">{l.label}</Typography>
              </Stack>
            ))}
          </Stack>
          <Stack spacing={1}>
            {insight.trendData.map((d) => (
              <Stack key={d.week} direction="row" alignItems="center" spacing={1.5}>
                <Typography variant="body3" sx={{ width: 56, minWidth: 56 }}>{d.week}</Typography>
                <Stack spacing={0.5} sx={{ flex: 1 }}>
                  <Box sx={{ height: 6, borderRadius: 3, bgcolor: 'error.main', width: `${d.personalization}%` }} title={`${d.personalization}%`} />
                  <Box sx={{ height: 6, borderRadius: 3, bgcolor: 'warning.main', width: `${d.crossSell}%` }} title={`${d.crossSell}%`} />
                  <Box sx={{ height: 6, borderRadius: 3, bgcolor: 'primary.main', width: `${d.empathy}%` }} title={`${d.empathy}%`} />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
      )}

      {/* Volume + Score dual chart */}
      {insight.weeklyVolume && (() => {
        const maxVol = Math.max(...insight.weeklyVolume.map((v) => v.volume));
        return (
          <Box sx={{ mx: 2.5, mb: 2, display: 'flex', gap: 0.5, alignItems: 'flex-end', height: 140 }}>
            {insight.weeklyVolume.map((d) => (
              <Box key={d.week} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <Box sx={{ flex: 1, width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: `${(d.volume / maxVol) * 100}%`,
                      minHeight: 4,
                      bgcolor: 'primary.main',
                      borderRadius: '4px 4px 0 0',
                      opacity: 0.7,
                    }}
                    title={`${(d.volume / 1000).toFixed(0)}K interactions`}
                  />
                </Box>
                <Typography variant="label1" color="text.primary" component="div" display="block" sx={{ mt: 0.5 }}>{d.score}%</Typography>
                <Typography variant="body3" color="text.secondary" component="div" display="block">{d.week.split(' ')[0]}</Typography>
              </Box>
            ))}
          </Box>
        );
      })()}

      {/* Recommendation */}
      <Alert severity="info" variant="standard" sx={{ mx: 2.5, mb: canCta ? 1.5 : 2.5, borderRadius: 1.5 }}>
        <Stack spacing={0.5}>
          <Typography variant="label2">Recommendation</Typography>
          <Typography variant="body2">{insight.recommendation}</Typography>
        </Stack>
      </Alert>

      {canCta && (
        <Box sx={{ px: 2.5, pb: 2.5 }}>
          <Chip
            label={insight.ctaLabel || 'Open in By Profile'}
            variant="tonal"
            color="primary"
            clickable
            onClick={handleCta}
            sx={{ cursor: 'pointer' }}
          />
        </Box>
      )}
    </Paper>
  );
}

function AllProfilesView({ period, onOpenProfile }) {
  const data = getAllProfilesData(period);
  const {
    metrics,
    crossQpHeadline,
    unusedProfiles,
    aiInsightRows,
    interactionMix,
    scoreDistribution,
    distributionInsight,
  } = data;

  const qpLens = useMemo(() => getQpLensInsights(), []);
  const portfolioNarratives = useMemo(
    () => getPortfolioQpLensInsights(period).narrativeInsights,
    [period],
  );

  const aiRef = useRef(null);
  const distRef = useRef(null);

  useIntersectionOnce(
    aiRef,
    () => {
      trackQpAnalyticsAiInsightViewed({
        viewType: 'cross_qp',
        profileId: null,
        profileName: null,
        hasWeakKpis: aiInsightRows.some((r) => r.severity === 'critical' || r.severity === 'attention'),
        hasEscalationIndicators: aiInsightRows.some((r) => r.alert),
        profileCount: aiInsightRows.length,
        unusedProfileCount: unusedProfiles.length,
      });
    },
    [period],
  );

  useIntersectionOnce(
    distRef,
    () => {
      trackQpAnalyticsDistributionViewed({
        viewType: 'score_distribution',
        period,
        avgScore: metrics.totalScore,
        topBand: scoreDistribution.reduce((a, b) => (b.share > a.share ? b : a)).band,
      });
    },
    [period, metrics.totalScore],
  );

  return (
    <>
      <div>
        <QpSectionHeader title="Portfolio Metrics" caption="Combined across every quality profile for the selected period" />
        <div className="kpi-grid">
          <MetricCard
            label="Total Unique Interactions"
            value={metrics.uniqueInteractions.toLocaleString()}
            sub="Distinct calls that matched at least one quality profile — each call is counted once, even if several profiles analyzed it"
            delta={{ value: metrics.uniqueDelta }}
          />
          <MetricCard
            label="Total Analyses"
            value={metrics.totalAnalysis.toLocaleString()}
            sub="Every profile evaluation added together — higher than Unique Interactions whenever a call is analyzed by more than one profile"
            delta={{ value: metrics.analysisDelta }}
          />
          <MetricCard
            label="Portfolio Avg Score"
            value={`${metrics.totalScore}%`}
            sub="Simple average of each profile's own average score — not weighted by call volume, so a low-volume profile counts as much as a high-volume one"
            delta={{ value: metrics.totalScoreDelta, suffix: 'pp' }}
            valueColor={scoreColor(metrics.totalScore)}
          />
        </div>
      </div>

      {/* Charts side by side */}
      <div className="rank-tables-grid chart-card-grid">
        <ChartCard title="Interactions Distribution">
          <QpInteractionMix rows={interactionMix} totalUnique={metrics.uniqueInteractions} onOpenProfile={onOpenProfile} insight={data.interactionInsight} />
        </ChartCard>

        <ChartCard title="Score Distribution" className="chart-card--dist" ref={distRef}>
          <QpScoreDistribution
            bands={scoreDistribution}
            insight={distributionInsight}
            avgScore={metrics.totalScore}
          />
        </ChartCard>
      </div>

      {/* ── QP-Lens Insights ── */}
      <div ref={aiRef}>
        <QpSectionHeader title="QP Health" caption="Score, volume, and category extremes per quality profile" />

        {/* QP Health Cards */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 3,
        }}>
          {qpLens.healthCards.map((card) => (
            <QpHealthCard
              key={card.id}
              card={card}
              onOpenProfile={onOpenProfile}
            />
          ))}
        </Box>

        {portfolioNarratives.length > 0 && (
          <>
            <QpSectionHeader
              title="Portfolio Insights"
              caption="Cross-QP patterns from health, volume mix, and score bands"
            />
            <Stack spacing={2.5}>
              {portfolioNarratives.map((insight) => (
                <NarrativeInsightCard
                  key={insight.id}
                  insight={insight}
                  onOpenProfile={insight.ctaProfileId ? onOpenProfile : undefined}
                />
              ))}
            </Stack>
          </>
        )}
      </div>
    </>
  );
}

// Deterministic per-day-of-week wobble so daily bars derived from a weekly
// average don't all render as flat, identical-height bars.
const DAY_JITTER = [0, -1.4, 0.9, -0.6, 1.3, -0.9, 0.5];

function parseWeekEndDate(label) {
  const endPart = label.split(/[–-]/).pop()?.trim();
  if (!endPart) return null;
  const parsed = new Date(`${endPart}, ${new Date().getFullYear()}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

// Expands the weekly scoreTrend buckets into a fixed 30-day daily series so
// the chart always shows the same range — the period filter only changes
// which days are highlighted, not what's fetched or displayed.
function buildDailyScoreTrend(scoreTrend, totalDays = 30) {
  if (!scoreTrend.length) return [];
  const endDate = parseWeekEndDate(scoreTrend[scoreTrend.length - 1].label) ?? new Date();

  const raw = [];
  for (let i = totalDays - 1; i >= 0; i -= 1) {
    const date = new Date(endDate);
    date.setDate(date.getDate() - i);
    const weeksAgo = Math.floor(i / 7);
    const week = scoreTrend[Math.max(scoreTrend.length - 1 - weeksAgo, 0)];
    const noData = week.value <= 0;
    const jitter = noData ? 0 : DAY_JITTER[i % DAY_JITTER.length];
    const value = noData ? 0 : Math.max(0, Math.min(100, Math.round((week.value + jitter) * 10) / 10));
    raw.push({ date, value, noData });
  }

  // Axis shows just the day number per bar (fits all 30 without rotation),
  // with the month name surfaced only where it changes.
  return raw.map((d, idx) => {
    const monthChanged = idx === 0 || d.date.getMonth() !== raw[idx - 1].date.getMonth();
    return {
      label: String(d.date.getDate()),
      monthLabel: monthChanged ? d.date.toLocaleDateString('en-US', { month: 'short' }) : null,
      fullLabel: d.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: d.value,
      noData: d.noData,
      color: d.value >= 82 ? 'var(--green)' : d.value >= 75 ? 'var(--accent)' : 'var(--red)',
    };
  });
}

const PERIOD_TREND_LABELS = {
  yesterday: 'Yesterday',
  week: 'Last 7 Days',
  month: 'Last 30 Days',
};

function PerQpView({ qpId, period, role }) {
  const profile = getQpProfile(qpId);
  const data = getQpData(qpId, period);
  const { metrics, aiInsights, escalations, topIntents, kpis, smarterAssignment, scoreTrend } = data;
  const profileNarratives = useMemo(() => getQpLensInsightsForProfile(qpId), [qpId]);
  const aiRef = useRef(null);
  const kpiRef = useRef(null);
  const escRef = useRef(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useIntersectionOnce(
    aiRef,
    () => {
      trackQpAnalyticsAiInsightViewed({
        viewType: 'per_qp',
        profileId: qpId,
        profileName: profile.label,
        hasWeakKpis: aiInsights.needsAttention.length > 0,
        hasEscalationIndicators: escalations.length > 0,
        profileCount: 1,
        unusedProfileCount: metrics.analysisCount === 0 ? 1 : 0,
      });
    },
    [qpId, period],
  );

  useIntersectionOnce(
    kpiRef,
    () => {
      if (!kpis.length) return;
      trackQpAnalyticsKpiBreakdownViewed({
        profileId: qpId,
        profileName: profile.label,
        totalKpis: kpis.length,
        criticalKpiCount: kpis.filter((k) => k.type === 'critical').length,
        failingKpiCount: kpis.filter((k) => k.type === 'failing').length,
        period,
      });
    },
    [qpId, period, kpis.length],
  );

  useIntersectionOnce(
    escRef,
    () => {
      trackQpAnalyticsEscalationViewed({
        profileId: qpId,
        profileName: profile.label,
        escalationCount: escalations.length,
        disputeCount: escalations.filter((e) => e.type === 'dispute').length,
        scoreDropCount: escalations.filter((e) => e.type === 'score_drop').length,
      });
    },
    [qpId, escalations.length],
  );

  const sharePct = analysisSharePct(metrics.analysisCount, metrics.totalAnalysis);
  const isEmpty = metrics.analysisCount === 0;

  if (isEmpty) {
    return (
      <div className="cxo-lens-state cxo-lens-state--info">
        <div className="cxo-lens-state-icon-wrap">
          <Icon name="analytics" />
        </div>
        <div className="section-card-title">No data for {profile.label}</div>
        <div className="info-card-text" style={{ maxWidth: 480, marginTop: 8 }}>
          {aiInsights.headline}
        </div>
        <div className="info-card focus" style={{ marginTop: 16, maxWidth: 520, textAlign: 'left' }}>
          <div className="info-card-heading-row">
            <Icon name="lightbulb" />
            <span className="info-card-kpi">Recommendation</span>
          </div>
          <div className="info-card-text">{aiInsights.recommendation}</div>
        </div>
      </div>
    );
  }

  const dailyTrend = buildDailyScoreTrend(scoreTrend, 30);

  if (selectedAgent) {
    return (
      <QpAgentDetailView
        agentId={selectedAgent}
        period={period}
        qpId={qpId}
        onBack={() => { setSelectedAgent(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />
    );
  }

  const highlightCount = period === 'yesterday' ? 1 : period === 'week' ? 7 : dailyTrend.length;
  const highlightStart = Math.max(dailyTrend.length - highlightCount, 0);
  const highlightRange = dailyTrend.length ? [highlightStart, dailyTrend.length - 1] : null;
  const highlightedDays = dailyTrend.slice(highlightStart).filter((d) => d.value > 0);
  const highlightedAvg = highlightedDays.length
    ? Math.round((highlightedDays.reduce((sum, d) => sum + d.value, 0) / highlightedDays.length) * 10) / 10
    : null;

  return (
    <>
      <div>
        <div className="qp-profile-metrics-layout">
          <div className="qp-profile-metrics-kpis">
            <MetricCard
              label="Analyses (This Profile)"
              value={metrics.analysisCount.toLocaleString()}
              sub={`${metrics.analysisCount.toLocaleString()} of ${metrics.totalAnalysis.toLocaleString()} portfolio analyses (${sharePct}%)`}
            />
            <MetricCard
              label="Profile Avg Score"
              value={`${metrics.qpScore}%`}
              sub="This profile's mean score — open Portfolio tab to compare against the org average"
              delta={metrics.qpScoreDelta != null ? { value: metrics.qpScoreDelta, suffix: 'pp' } : null}
              valueColor={scoreColor(metrics.qpScore)}
            />
          </div>

          {dailyTrend.length > 0 && (
            <ChartCard
              className="qp-profile-metrics-chart"
              title="Score Trend"
              subtitle={`Daily average for ${profile.label} — last 30 days`}
            >
              <SimpleBarChart points={dailyTrend} height={150} highlightRange={highlightRange} />
              {highlightedAvg != null && (
                <div className="week-detail-panel qp-score-trend-detail">
                  <span className="week-detail-stat" style={{ color: scoreColor(highlightedAvg) }}>
                    {PERIOD_TREND_LABELS[period] ?? 'Selected period'} avg score {highlightedAvg}%
                  </span>
                </div>
              )}
            </ChartCard>
          )}
        </div>
      </div>

      <div ref={aiRef}>
        <CoachingInsightsPanel
          profileLabel={profile.label}
          aiInsights={aiInsights}
          escalations={escalations}
          escRef={escRef}
        />
      </div>

      {smarterAssignment && topIntents.length > 0 && (
        <div>
          <QpSectionHeader title="Top Intents" />
          <div className="qp-intent-row">
            {topIntents.map((intent) => (
              <span key={intent.label} className="tab-badge active">
                {intent.label}
                <span className="qp-intent-count">{intent.count.toLocaleString()}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {kpis.length > 0 && (
        <div>
          <QpSectionHeader
            title="Quality Rubric"
            caption={
              kpis.some((k) => k.avgPct != null)
                ? "Avg Score is the mean points this KPI earned per analysis, out of Max Score (the KPI's maximum possible points) — Avg % is Avg Score ÷ Max Score."
                : 'KPI questions from the quality profile definition. Re-run fetch with CQA_API_KEY for per-KPI scores when available.'
            }
          />
          <div ref={kpiRef} className="improve-list">
            <div className="roster-grid-row roster-head qp-kpi-head">
              <span>KPI Question</span>
              <span>Type</span>
              <span>Avg Score</span>
              <span>Max Score</span>
              <span>Avg %</span>
              <span>Change</span>
            </div>
            {kpis.map((k) => {
              const pctDelta =
                k.prevPct != null && k.avgPct != null
                  ? Math.round((k.avgPct - k.prevPct) * 10) / 10
                  : null;
              const deltaFmt = formatDelta(pctDelta, 'pp');
              const rowTone = k.type === 'critical' ? 'var(--red-text)' : k.type === 'failing' ? 'var(--yellow-text)' : 'var(--text)';
              return (
                <div key={k.question} className="roster-grid-row roster-row qp-kpi-row" style={{ color: rowTone }}>
                  <KpiQuestionCell text={k.question} />
                  <span><KpiTypeBadge type={k.type} /></span>
                  <span className="roster-calls">{k.avgScore ?? '—'}</span>
                  <span className="roster-calls">{k.maxScore}</span>
                  <span className="roster-calls" style={{ fontWeight: k.type ? 700 : 500 }}>
                    {k.avgPct != null ? `${k.avgPct}%` : '—'}
                  </span>
                  <span className={`kpi-delta ${deltaFmt ? (deltaFmt.up ? 'up' : 'down') : ''}`}>
                    {deltaFmt ? deltaFmt.text : '—'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Agent-Level Insights — role-aware */}
      {role === 'agent' ? (
        <QpAgentSelfView qpId={qpId} period={period} />
      ) : (
        <QpAgentInsightsPanel
          qpId={qpId}
          period={period}
          role={role}
          onOpenAgent={(agentId) => setSelectedAgent(agentId)}
        />
      )}

      {/* Additive Profile Insights (ClickHouse narratives) — leave existing By Profile UI above untouched */}
      {profileNarratives.length > 0 && (
        <div>
          <QpSectionHeader
            title="Profile Insights"
            caption="AI-powered analysis for this quality profile"
          />
          <Stack spacing={2.5}>
            {profileNarratives.map((insight) => (
              <NarrativeInsightCard key={insight.id} insight={insight} />
            ))}
          </Stack>
        </div>
      )}
    </>
  );
}

export default function QpInsightsView({ tab, qpId, period, onProfileDrill, onBackToPortfolio, showBackToPortfolio }) {
  const hostCtx = useMemo(() => getCqaHostContext(), []);
  const [devRole, setDevRole] = useState(null);
  const activeRole = devRole || hostCtx.role;
  const isDev = import.meta.env.DEV;

  const handleOpenProfile = (profileId, source) => {
    onProfileDrill?.(profileId, source);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    onBackToPortfolio?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="qp-insights">
      {tab === 'all-profiles' ? (
        <AllProfilesView period={period} onOpenProfile={handleOpenProfile} />
      ) : showBackToPortfolio ? (
        <>
          <QpProfileDetailNav
            profile={getQpProfile(qpId)}
            summary={getAllProfilesData(period).summaryTable.find((r) => r.id === qpId)}
            totalUnique={getAllProfilesData(period).metrics.uniqueInteractions}
            onBack={handleBackToOverview}
          />
          <PerQpView qpId={qpId} period={period} role={activeRole} />
        </>
      ) : (
        <>
          <ViewScopeBanner variant="profile" profileName={getQpProfile(qpId).label} />
          <PerQpView qpId={qpId} period={period} role={activeRole} />
        </>
      )}

      {isDev && (
        <div style={{
          position: 'fixed', bottom: 16, right: 16, zIndex: 9999,
          background: '#fff', borderRadius: 12, padding: '8px 14px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', gap: 8,
          border: '1px solid #e0e0e0',
        }}>
          <span style={{ fontSize: 12, color: '#666', marginRight: 4 }}>View as:</span>
          {['admin', 'supervisor', 'agent'].map((r) => (
            <button key={r} onClick={() => setDevRole(r)}
              style={{
                padding: '4px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600,
                cursor: 'pointer', border: 'none', transition: 'all 0.15s',
                background: activeRole === r ? '#1976d2' : '#f0f0f0',
                color: activeRole === r ? '#fff' : '#333',
              }}>
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
