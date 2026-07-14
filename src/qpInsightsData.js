// Auto-generated from CQA tenant "cxdemo" (1600257d18) on 2026-07-14T12:18:04.458Z.
// Regenerate: npm run fetch:qp-insights

export const QP_DATA_SOURCE = {
  tenant: "cxdemo",
  accountId: "1600257d18",
  fetchedAt: "2026-07-14T12:18:04.458Z",
  integrationType: "ecc4x",
  subscriptionType: "paid",
};

export const QP_PROFILES = [
  {
    "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
    "label": "HSL - QA Compliance (All Calls)"
  },
  {
    "id": "def97e3c-6733-43ca-a768-2d0b02f7abc2",
    "label": "test suggestion with sop"
  },
  {
    "id": "389a0c4b-7351-4962-be72-958731688342",
    "label": "Non-SOP QP"
  },
  {
    "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
    "label": "HSL - Enquiry & Account Query"
  },
  {
    "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
    "label": "HSL - Advisory, Portfolio & Sales"
  },
  {
    "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
    "label": "HSL - Confirmation & Follow Up"
  },
  {
    "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
    "label": "HSL - Non-Conversation"
  },
  {
    "id": "dbc24f70-d0cb-4ac7-ba49-3bfbb7099146",
    "label": "EFV1"
  },
  {
    "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
    "label": "HSL - Others"
  },
  {
    "id": "d482214d-737a-45d9-9a46-939398338496",
    "label": "HSL - Market Update"
  },
  {
    "id": "9cbbf7e0-4a46-4844-99aa-938b74e81b28",
    "label": "EFV3"
  },
  {
    "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
    "label": "HSL - Order Placement"
  },
  {
    "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
    "label": "HSL - Activation"
  },
  {
    "id": "ace05b63-6b50-4b9c-95b6-8d9dd3ad5c53",
    "label": "EFV2"
  },
  {
    "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
    "label": "HSL - Onboarding & KYC"
  },
  {
    "id": "ec43d0e5-31f6-4f51-8cd7-aae9da8105b9",
    "label": "madhu-test-default"
  },
  {
    "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
    "label": "HSL - Complaint & Escalation"
  },
  {
    "id": "fa6ad09a-0a5e-40a9-ad3d-5f2a30dcc956",
    "label": "Empathy - Natural Scale"
  },
  {
    "id": "355f5d39-d72a-40c2-9096-ce401ab76a61",
    "label": "qp-1"
  },
  {
    "id": "127caefe-47c6-43e0-88c8-b684a1150540",
    "label": "V7final bluedart"
  },
  {
    "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
    "label": "test profile with sop watu"
  },
  {
    "id": "db75f996-a066-41fe-9642-d4639c090bc8",
    "label": "01_HSL_Advisory_Portfolio_Sales.xlsx"
  },
  {
    "id": "4347a256-5a0f-4f85-8d84-f8f4de3d02b2",
    "label": "HSL Test"
  },
  {
    "id": "cc3870a5-5060-4f92-88da-8adbc587518b",
    "label": "nasa-test-demo-1001"
  },
  {
    "id": "1b69e9cc-4a60-4459-a193-b35dc31f2b6a",
    "label": "v10Bluedart_Final"
  }
];

export const QP_PERIODS = [
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Last Week' },
  { key: 'month', label: 'Last Month' },
];

const baseAllProfiles = {
  "month": {
    "uniqueInteractions": 550,
    "totalAnalysis": 1368,
    "totalScore": 65.2,
    "totalScoreDelta": null,
    "uniqueDelta": null,
    "analysisDelta": null,
    "crossQpHeadline": "Across 43 active quality profiles on cxdemo, 65.2% avg score from 1368 analyses on 550 calls. HSL - QA Compliance (All Calls) is the primary risk at 67.7%. 12 active profiles had zero matches.",
    "topPriorityAlert": "HSL - QA Compliance (All Calls) has the lowest avg score (67.7%) across 300 evaluations.",
    "unusedProfiles": [
      {
        "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
        "name": "test profile with sop watu",
        "matched": 0
      },
      {
        "id": "db75f996-a066-41fe-9642-d4639c090bc8",
        "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
        "matched": 0
      },
      {
        "id": "4347a256-5a0f-4f85-8d84-f8f4de3d02b2",
        "name": "HSL Test",
        "matched": 0
      },
      {
        "id": "cc3870a5-5060-4f92-88da-8adbc587518b",
        "name": "nasa-test-demo-1001",
        "matched": 0
      },
      {
        "id": "1b69e9cc-4a60-4459-a193-b35dc31f2b6a",
        "name": "v10Bluedart_Final",
        "matched": 0
      },
      {
        "id": "25fa04fb-affa-4bf5-85e3-58683e0199c8",
        "name": "Bluedart Complete QP",
        "matched": 0
      }
    ],
    "scoreDistribution": [
      {
        "band": "<60%",
        "count": 501,
        "share": 37
      },
      {
        "band": "60–70%",
        "count": 292,
        "share": 21.6
      },
      {
        "band": "70–75%",
        "count": 164,
        "share": 12.1
      },
      {
        "band": "75–80%",
        "count": 116,
        "share": 8.6
      },
      {
        "band": "80–85%",
        "count": 95,
        "share": 7
      },
      {
        "band": "85–100%",
        "count": 186,
        "share": 13.7
      }
    ],
    "distributionInsight": "37% of analyses fall in the <60% band — largest concentration this period."
  },
  "week": {
    "uniqueInteractions": 304,
    "totalAnalysis": 1034,
    "totalScore": 64.7,
    "totalScoreDelta": null,
    "uniqueDelta": null,
    "analysisDelta": null,
    "crossQpHeadline": "Across 14 active quality profiles on cxdemo, 64.7% avg score from 1034 analyses on 304 calls. HSL - QA Compliance (All Calls) is the primary risk at 67.7%. 12 active profiles had zero matches.",
    "topPriorityAlert": "HSL - QA Compliance (All Calls) has the lowest avg score (67.7%) across 300 evaluations.",
    "unusedProfiles": [
      {
        "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
        "name": "test profile with sop watu",
        "matched": 0
      },
      {
        "id": "db75f996-a066-41fe-9642-d4639c090bc8",
        "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
        "matched": 0
      },
      {
        "id": "8d888882-f8ff-456f-99b1-a8270e3eca35",
        "name": "ai ingestion profile",
        "matched": 0
      },
      {
        "id": "4347a256-5a0f-4f85-8d84-f8f4de3d02b2",
        "name": "HSL Test",
        "matched": 0
      },
      {
        "id": "cc3870a5-5060-4f92-88da-8adbc587518b",
        "name": "nasa-test-demo-1001",
        "matched": 0
      },
      {
        "id": "214cbad9-aabe-4d12-9229-2f3ce4c4a7f4",
        "name": "nasa-test-demo",
        "matched": 0
      }
    ],
    "scoreDistribution": [
      {
        "band": "<60%",
        "count": 398,
        "share": 38.5
      },
      {
        "band": "60–70%",
        "count": 262,
        "share": 25.3
      },
      {
        "band": "70–75%",
        "count": 114,
        "share": 11
      },
      {
        "band": "75–80%",
        "count": 92,
        "share": 8.9
      },
      {
        "band": "80–85%",
        "count": 70,
        "share": 6.8
      },
      {
        "band": "85–100%",
        "count": 98,
        "share": 9.5
      }
    ],
    "distributionInsight": "38.5% of analyses fall in the <60% band — largest concentration this period."
  },
  "yesterday": {
    "uniqueInteractions": 100,
    "totalAnalysis": 249,
    "totalScore": 81.2,
    "totalScoreDelta": null,
    "uniqueDelta": null,
    "analysisDelta": null,
    "crossQpHeadline": "Across 10 active quality profiles on cxdemo, 81.2% avg score from 249 analyses on 100 calls. HSL - QA Compliance (All Calls) leads at 82.6%. 12 active profiles had zero matches.",
    "topPriorityAlert": "12 active quality profiles received no matched interactions — verify assignment rules.",
    "unusedProfiles": [
      {
        "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
        "name": "test profile with sop watu",
        "matched": 0
      },
      {
        "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
        "name": "HSL - Others",
        "matched": 0
      },
      {
        "id": "db75f996-a066-41fe-9642-d4639c090bc8",
        "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
        "matched": 0
      },
      {
        "id": "8d888882-f8ff-456f-99b1-a8270e3eca35",
        "name": "ai ingestion profile",
        "matched": 0
      },
      {
        "id": "4347a256-5a0f-4f85-8d84-f8f4de3d02b2",
        "name": "HSL Test",
        "matched": 0
      },
      {
        "id": "cc3870a5-5060-4f92-88da-8adbc587518b",
        "name": "nasa-test-demo-1001",
        "matched": 0
      }
    ],
    "scoreDistribution": [
      {
        "band": "<60%",
        "count": 4,
        "share": 1.6
      },
      {
        "band": "60–70%",
        "count": 23,
        "share": 9.2
      },
      {
        "band": "70–75%",
        "count": 41,
        "share": 16.5
      },
      {
        "band": "75–80%",
        "count": 65,
        "share": 26.1
      },
      {
        "band": "80–85%",
        "count": 49,
        "share": 19.7
      },
      {
        "band": "85–100%",
        "count": 67,
        "share": 26.9
      }
    ],
    "distributionInsight": "26.9% of analyses fall in the 85–100% band — largest concentration this period."
  }
};

const baseSummaryRowsByPeriod = {
  "month": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "matched": 300,
      "avgScore": 67.7,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "During the conversation has the RM shared any unpublished price sensitive information (UPSI) with clients, either directly or indirectly, in violation of organizational policies or regulatory guidelines. This includes sharing or discussing details about upcoming quarterly results, mergers, acquisitions, board decisions, dividend announcements, strategic tie-ups, or any material events before they are publicly disclosed, or suggesting investment actions based on such insider information? Consider direct statements or phrases that imply this, such as \"This is insider info\", \"Don’t tell anyone\", \"Company is going to announce\", \"Before market knows\", \"Confidential update\", \"Not yet public\", \"This will be in news soon\", \"Advance information\", \"Internal info\". Answer with a \"Yes\" or \"No\".                                                                                                                                                                Important clarification:\n\nDiscussions within authorized internal teams (e.g., research, compliance, strategy, treasury, internal review, management discussions) should NOT be marked as “Yes” if the conversation is clearly internal and within official organizational processes.\nDiscussions based on publicly available research, analyst opinions, market rumors already in the public domain, published reports, or officially released information should NOT be marked as “Yes”.\nGeneral research recommendations, analyst coverage discussions, or investment views without indication of non-public/confidential information should NOT be marked as “Yes”.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the agent's conversation suggest they have used or will use the client’s personal, confidential credentials (e.g., login, OTP, authentication details) OR shared the same with the customer without their consent?\nMark YES if:\nThe agent asked for client’s credentials like login details, OTP, or any other authentication details to perform actions like placing an order, resetting a password, or pledging shares for MTF.\nThe agent shared details like Login ID or PAN details to the client without their consent or confirmation.\nThe agent uses or implies actions through phrases such as: “Give me your login”, “Share OTP”, “I’ll log in for you”, “Resetting password for you”, “Pledging your shares”, “Send your ID and password”, “I’ll do it for you”, “Just forward the OTP”, “Allow me access to your account”, “Just send the OTP”.\nMark NO if:\nThe agent did not ask for or share any client login credentials, OTPs, or authentication details AND the agent did not share details like Login ID or PAN details to them without their consent or confirmation.        Important clarification:\n\nSharing or discussing non-sensitive identifiers such as Trading ID, Client Code, Customer ID,PAN CARD NO,MOBILE NUMBER,AADHAR NO, or reference/account identifiers alone should NOT be marked as “Yes”, provided no confidential authentication credentials or unauthorized sensitive information are requested/shared.\nRoutine verification steps that do not involve collecting confidential credentials (e.g., confirming name, registered number, client code, or trading ID) should NOT be marked as “Yes”.\nIf the customer voluntarily states their own credentials without agent prompting or misuse, it should only be marked “Yes” if the agent encourages, accepts, uses, stores, or proceeds with such credentials improperly.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the call suggest that the RM/agent is placing, discussing, facilitating, or agreeing to place trades/instructions through an unregistered proxy, third party, family member, or non-registered phone number/account holder without proper authorization, verification, or explicit confirmation from the registered customer?\n\nThis includes situations where:\n\nThe RM/agent identifies or becomes aware that the caller is not the registered customer/account holder.\nThe caller states or implies they are a proxy/family member/assistant/relative/friend handling the account.\nThe RM/agent asks questions such as “Who are you?”, “Are you the account holder?”, or otherwise identifies a mismatch in identity or registered contact details.\nDespite identifying the caller as an unregistered or unauthorized person, the RM/agent continues discussing trades, positions, account actions, investment instructions, or operational requests instead of refusing or redirecting appropriately.\nThe RM/agent proceeds without asking the registered customer to call directly or without following official authorization/verification procedures.\n\nExamples of indicative proxy references include:\n\n“I am calling on behalf of my father/husband/wife/sister/brother/son/daughter”\n“This is his/her phone”\n“I handle the account for him/her”\n“Please place the trade, they are not available”\n“I manage the account”\n“I’ll confirm later with them”\n\nExpected compliant behavior:\n\nThe RM/agent should deny proceeding with trading/account actions for unregistered proxies unless proper authorization exists.\nThe RM/agent should ask the registered client to call directly or follow official authorization procedures.\n\nImportant clarification:\n\nMere mention of family relationships or shared discussion does NOT automatically qualify as “Yes”.\nMark “Yes” only if the RM/agent continues with trade/account-related discussion, execution, or facilitation after identifying or reasonably suspecting that the caller is not the authorized registered customer and does not appropriately deny or redirect the request.\nIf the RM/agent explicitly refuses, redirects to official process, requests registered-user confirmation, or declines to proceed, mark “No”.\n\nAnswer with:\n\n“Yes” – if the RM/agent proceeds or facilitates activity despite recognizing an unregistered/unauthorized proxy or third party.\n“No” – if no such situation occurs or if the RM/agent appropriately refuses or redirects the interaction.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent promote or position an insurance product in a misleading manner by presenting it primarily as an investment, return-generating, or liquidity product without clearly explaining insurance-related risks, charges, lock-in, surrender conditions, or policy terms?\n\nThis includes situations where the RM/Agent:\n\nPositions insurance like a mutual fund, FD, market investment, or wealth creation product without proper disclosure.\nEmphasizes returns, NAV growth, tax-free benefits, portfolio creation, or market-linked gains without discussing risks or policy conditions.\nUses urgency or sales pressure tactics such as:\n“Offer expires today”\n“Special offer”\n“Limited-time benefit”\nHighlights short payment terms such as:\n“One-time premium”\n“Pay for 2 years only”\nwithout clearly explaining long-term obligations or surrender implications.\nSuggests easy liquidity or exit using phrases such as:\n“Any time exit”\n“Like MF redemption”\nwithout clarifying lock-in period, surrender charges, or exit conditions.\n\nExamples of indicative phrases include:\n\n“Like a mutual fund”\n“Tax-free investment”\n“Guaranteed wealth creation”\n“Market-linked returns”\n“Portfolio building”\n“NAV growth”\n“Additional benefit”\n“Investment plan”\n“High return insurance”\n\nImportant clarification:\n\nMark “Yes” only if the product is positioned misleadingly without adequate explanation of insurance features, risks, lock-in, charges, surrender conditions, or policy limitations.\nMark “No” if the RM/Agent clearly explains policy structure, insurance coverage, risks, lock-in, surrender conditions, charges, and product suitability.\nMark “NA” if insurance products are not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent encourage, assist, process, or facilitate activation/enabling of F&O (Futures & Options) trading without clearly explaining the associated risks, including the possibility of significant financial loss?\n\nThis includes situations where the RM/Agent:\n\nEncourages the customer to activate F&O trading.\nAssists with F&O activation, onboarding, permission enablement, or documentation.\nPromotes F&O trading as a profit opportunity without proper risk disclosure.\nExplains only benefits, margin, leverage, or profit potential without discussing risks.\nEncourages call/put/options trading without explaining possible losses.\n\nExamples of indicative phrases include:\n\n“Activate F&O”\n“You can trade in options/calls/puts”\n“This can generate quick profit”\n“Enable derivatives segment”\n“I will help activate F&O”\n“You can recover losses through options”\n“Use leverage for better returns”\n\nImportant clarification:\n\nMark “Yes” only if F&O activation/facilitation/promotion happens without adequate risk disclosure.\nProper disclosure should include mention of risks such as volatility, leverage risk, possibility of partial/full capital loss, or suitability concerns.\nMark “No” if the RM/Agent clearly explains trading risks before or during the activation discussion.\nGeneral educational discussions about derivatives without activation/facilitation should not automatically be marked “Yes”.\n\nAnswer with:\n\n“Yes” – if F&O activation/facilitation occurs without proper risk explanation.\n“No” – if adequate risk disclosure is provided.\n“NA” – if F&O activation or trading access is not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM reference or recommend any research calls related to F&O (Futures & Options) or Equity that fall outside of the organization's approved research channels (e.g., HSL research) or not provided by the organization's approved research team?\n\nNote: Promoting or recommending investment advice from external firms, unauthorized analysts, or financial bloggers is strictly not allowed.\n\nAnswer: Yes / No\n\nTrackable Keywords:\n\nresearch\n\nrecommended\n\nHSL recommended\n\nHSL research team\n\nHDFC Securities research\n\nHDFC Security recommended",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the RM/agent, either directly or indirectly, indicate that the investment/product/service would be routed through a personal, unofficial, or third-party distribution arrangement outside HDFC’s approved and monitored channels, especially where the RM/agent’s own involvement, compensation, or relationship to that distributor/entity is unclear or personal in nature?\n\nThis includes but is not limited to:\n\nMentioning their own or an immediate family member’s (spouse, child, parent, sibling, friends) business, firm, or distribution setup.\nReferring to personal mutual fund distribution activities (e.g., “my own distribution”, “I can do it through my setup/business”).\nSuggesting investment under a family member’s distributor code or account.\nIndicating that the investment will be handled outside normal HDFC visibility, supervision, reporting, or portfolio tracking.\nPromoting or routing investments through unofficial third-party arrangements not clearly identified as HDFC-approved channels.\nMentioning that the investment can be done with “no commission”, “zero charges” or similar fee-related benefits specifically as part of routing the investment outside official HDFC channels.\nImportant clarification:\n\nMere mention of external products, AMCs, platforms, brokers, or distributors (e.g., Zerodha, Groww, MF Central, CAMS, BSE Star MF, NSE NMF, AMC names, etc.) should NOT be marked as “Yes” unless the RM/agent is personally promoting, routing, or facilitating investment through a non-HDFC/personal arrangement.\n\nAnswer with:\n\n“Yes” – if the RM/agent promotes, routes, or suggests an unofficial/personal/off-book third-party investment arrangement outside HDFC channels.\n“No” – if products/platforms are discussed only for informational, comparison, market, or legitimate official-channel purposes.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM's conversation contain any promise or offer to share profits, commissions, or revenue from the client's trades or investments? Does it suggest any financial arrangement where the RM would personally benefit from the client's funds in a manner outside of their official compensation or has mentions of phrases like \"Share profits\", \"I'll manage your money\", \"I’ll invest for you\", \"Guarantee returns\", \"Send me the money\", \"Transfer funds to me\", \"Split profits\", \"Personal account\", \"I’ll trade on your behalf\", \"commision\". Answer with a \"Yes\" or \"No\".   ",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "def97e3c-6733-43ca-a768-2d0b02f7abc2",
      "name": "test suggestion with sop",
      "matched": 205,
      "avgScore": 55.7,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent greet the customer using the standard greeting script?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves by name?",
          "type": null,
          "avgScore": null,
          "maxScore": 3,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "What was the overall tone of the agent during the greeting?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent verify the customer's identity before sharing account details?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "How many verification factors did the agent use?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent ask for the registered mobile number or account number?",
          "type": null,
          "avgScore": null,
          "maxScore": 3,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "What was the customer's primary concern?",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent listen to the customer's issue without interrupting?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "389a0c4b-7351-4962-be72-958731688342",
      "name": "Non-SOP QP",
      "matched": 171,
      "avgScore": 58,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Check the company SOP for agent opening steps. Did the agent follow these opening procedures?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did agent mention processing fee details -- amount as well as tax?",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "matched": 81,
      "avgScore": 67.5,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "matched": 80,
      "avgScore": 67.3,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "matched": 78,
      "avgScore": 72,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "matched": 67,
      "avgScore": 68.5,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": " \n         \nDid the agent  not say anything on a set of 2 min or longer calls. Do not mark \"Yes\" if forwareded to voicemail. Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the call blank without the agent not saying anything. Do not mark \"Yes\" if forwarded to voicemail.  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "dbc24f70-d0cb-4ac7-ba49-3bfbb7099146",
      "name": "EFV1",
      "matched": 63,
      "avgScore": 71.6,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nNone / Other / NA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. Mark \"Multiple\" if:\n\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nSelect \"Multiple\" instead of choosing a single category when multiple behaviours are present and materially evidenced in the interaction.\nMark \"None / Other / NA\" if:\nNo high-risk or non-compliant behaviour is observed during the conversation.\nThe conversation does not contain any of the listed behaviours.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
      "name": "HSL - Others",
      "matched": 47,
      "avgScore": 61.3,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "matched": 37,
      "avgScore": 65.2,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "9cbbf7e0-4a46-4844-99aa-938b74e81b28",
      "name": "EFV3",
      "matched": 37,
      "avgScore": 76.8,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nGeneral Assessment Rule:\nSelect a behaviour only when there is clear evidence that the ST/CRO initiated, encouraged, promoted, pressured, or participated in the behaviour in a manner inconsistent with company policy.\nDo not select a behaviour solely because the customer initiated the discussion, voluntarily provided information, or requested the action.\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nMultiple \nNA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process.\nST/CRO asks the customer to contact them on WhatsApp or any messaging platform, regardless of whether a phone number is explicitly stated.\nST/CRO solicits the customer's mobile number under any pretext, including for follow-up, confirmation, or convenience\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. \nMark \"Multiple\" if:\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nMark \"NA\" if:\nNone of the five predefined behaviour categories — Influencing SR Cancellation, Requesting Personal Phone Number, Offering Offline/Cheap Service, Asking to Change Slot, or Expressing Reluctance — are present in the conversation.\nCustomer independently requests cancellation.\nIssue has already been resolved and cancellation is discussed solely as a closure process.\nST/CRO explains the cancellation process after the customer requests it.\nCustomer voluntarily shares a number.\nNumber is requested for approved service coordination.\nNumber is requested for account verification, OTP validation, invoice sharing, AMC processing, complaint management, or service delivery.\nCustomer provides an alternate contact because they will not be available.\nCustomer requests the rescheduling.\nST/CRO merely facilitates or confirms a customer-requested change.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.\nCritical Rule: NA must NEVER be selected if any one of the five predefined categories is clearly evidenced in the conversation. \n",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "matched": 31,
      "avgScore": 66.2,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on self-research. Do not mark \"Yes\" if agent state previous or current market trends and tell expected return. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "matched": 28,
      "avgScore": 66.7,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "ace05b63-6b50-4b9c-95b6-8d9dd3ad5c53",
      "name": "EFV2",
      "matched": 26,
      "avgScore": 73.1,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nGeneral Assessment Rule:\nSelect a behaviour only when there is clear evidence that the ST/CRO initiated, encouraged, promoted, pressured, or participated in the behaviour in a manner inconsistent with company policy.\nDo not select a behaviour solely because the customer initiated the discussion, voluntarily provided information, or requested the action.\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nMultiple \nNA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process.\nST/CRO asks the customer to contact them on WhatsApp or any messaging platform, regardless of whether a phone number is explicitly stated.\nST/CRO solicits the customer's mobile number under any pretext, including for follow-up, confirmation, or convenience\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. \nMark \"Multiple\" if:\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nMark \"NA\" if:\nNone of the five predefined behaviour categories — Influencing SR Cancellation, Requesting Personal Phone Number, Offering Offline/Cheap Service, Asking to Change Slot, or Expressing Reluctance — are present in the conversation.\nThe conversation has been fully reviewed and no ST/CRO-initiated non-compliant behaviour was detected.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.\nCritical Rule: NA must NEVER be selected if any one of the five predefined categories is clearly evidenced in the conversation. \n",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "matched": 11,
      "avgScore": 64.8,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "ec43d0e5-31f6-4f51-8cd7-aae9da8105b9",
      "name": "madhu-test-default",
      "matched": 11,
      "avgScore": null,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": []
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "matched": 9,
      "avgScore": 58,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "fa6ad09a-0a5e-40a9-ad3d-5f2a30dcc956",
      "name": "Empathy - Natural Scale",
      "matched": 8,
      "avgScore": 75,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. Focus on whether the customer felt heard, understood, and cared for — not on whether the agent followed a script.\n\nConsider: Was the agent's voice warm and naturally caring? When the customer expressed frustration, did the agent acknowledge it before moving to resolution? Was the empathy specific to this customer's situation or generic? Did the tone stay consistent throughout?\n\nUse the full 0-10 range. Higher scores for genuine warmth, timely emotional responses, and personalized acknowledgments. Lower scores for flat tone, generic phrases, skipping emotional moments, or jumping straight to procedure when the customer is distressed.",
          "type": "critical",
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "355f5d39-d72a-40c2-9096-ce401ab76a61",
      "name": "qp-1",
      "matched": 6,
      "avgScore": 38.9,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did agent follow the steps for opening?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did agent mention processing fee details -- amount as well as tax?",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "127caefe-47c6-43e0-88c8-b684a1150540",
      "name": "V7final bluedart",
      "matched": 5,
      "avgScore": 75.4,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) ever 60 seconds when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\nScore 0/2 if ANY of the following:\n- Extended dead air or silence after asking the customer to wait (assess from audio, not transcript)\n- No bridging update during a long wait\n- Agent returns without thanking the customer or acknowledging the wait\n- Customer was left feeling ignored\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "036ed93d-4b46-47bc-8675-19a4d7023240",
      "name": "v10Bluedart_v3",
      "matched": 5,
      "avgScore": 77.9,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening on a scale of 1 to 5.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening using the required Blue Dart structure: greeting, self-introduction, and an offer to assist?\n\nRequired structure (wording may vary slightly; assess intent and structure, not verbatim match):\n\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"\n\nSTT / transcription tolerance: Speech-to-text may mishear the brand name (e.g. \"Go Air\", \"Blue Dot\"). Do NOT heavily penalize solely because the brand name was transcribed incorrectly if the rest of the opening structure is clearly present in audio — welcome + name + offer to help.\n\nEvaluate:\n- Greeting structure: Did the agent follow the required opening pattern (welcome + name + offer to help)?\n- Introduction & assistance offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\n- Clarity & confidence: Was the opening audible, professionally delivered, and free from unclear speech or excessive hesitation?\n- Timeliness: Did the agent greet promptly after the call connected?\n- Professional presence: Did the opening create a welcoming first impression rather than sounding casual, incomplete, or robotic?\n\nHard scoring caps (apply strictly):\n- If \"Welcome to Blue Dart\" (or clear audio equivalent) is completely absent and opening is incoherent (e.g. \"I'm going to work on it\") → score cannot exceed 1\n- If agent name is not stated (e.g. \"My name is.\" with no name) → score cannot exceed 2\n- If required welcome + introduction + assistance offer are not all present → score cannot exceed 2\n- Full score (5) only when all three elements are clearly delivered\n\nScore higher when the required opening structure is delivered clearly and promptly.\n\nScore lower when the agent skips introduction, skips the assistance offer, opens with process questions, or delivers an incomplete or unprofessional opening.\n\nScoring instruction: Return ONLY an integer from 1 to 5. The maximum score for this KPI is 5. Do not use 0. Do not return a score above 5. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's hold management and customer communication on a scale of 1 to 2.\n\nContext: Every call on this profile is a complaint call. Customers are already frustrated. Poor wait handling — dead air, silence, or being left hanging — is a serious failure on complaint calls.\n\nIf NO hold or wait occurred during the call:\n- Award the maximum score (2/2).\n- Do NOT deduct because hold management was \"not demonstrated.\"\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold/wait event even if no formal hold music plays. Assess dead air and silence from AUDIO — transcript alone will not show gaps.\n\nScore 0/2 if ANY of the following (apply strictly):\n- Extended dead air or silence after asking the customer to wait (assess from audio)\n- No bridging update during a long wait\n- Agent returns without thanking the customer or acknowledging the wait\n- Customer was left feeling ignored or neglected during the wait\n- Agent says \"give me a minute\" then goes silent with no follow-up\n\nScore 2/2 if:\n- No wait occurred at all and the call proceeded without unnecessary dead air, OR\n- A wait occurred AND the agent sought permission, explained why, bridged during long waits, and thanked the customer on return\n\nDo NOT score 1 as a default when unsure — if a wait occurred and was poorly managed, score 0.\n\nEvaluate higher for: clear permission, transparent reason, regular updates on long holds, appreciation on return.\n\nEvaluate lower for: hold/wait without informing customer, no reason given, long silence without updates, returning without acknowledging the wait.\n\nScoring instruction: Return ONLY an integer from 1 to 2. The maximum score for this KPI is 2. Do not use 0. Do not return a score above 2. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 1 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nRequired closing sequence — all three parts must be present and delivered with genuine warmth (minor wording variation is acceptable; assess intent and completeness):\n\n(i) Further assistance:\n\"I hope I have addressed all your queries for today\" (or equivalent confirming no remaining concerns)\n\n(ii) Feedback invitation:\n\"May I connect this call for a short survey of 20 seconds to share your feedback based on our conversation\" (or equivalent — must convey a short survey tied to this conversation, not a generic transfer)\n\n(iii) Formal closure:\n\"Thank you for calling Blue Dart. Have a great day\" / \"Have a nice day\"\n\nDo not penalize if the customer declines the survey — score only on how the agent extended the invitation.\n\nEvaluate:\n- Whether all three closing elements were present\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation sounded genuine and personal, not a scripted tick-mark step\n- Whether tone and energy at closing matched the warmth of the rest of the call\n- Whether the customer was given space to respond before the call concluded\n\nHard scoring caps (apply strictly):\n- Any required closing element missing → score cannot exceed 4\n- Feedback invitation delivered mechanically or repeated without acknowledging customer confusion → score cannot exceed 5\n- If customer still sounds upset at closing → score cannot exceed 5\n\nScore higher when the closing feels like a natural, warm conclusion — all three parts delivered with personal intent.\n\nScore lower when any required element is missing, the closing is rushed or abrupt, or the agent's energy drops in the final moments.\n\nScoring instruction: Return ONLY an integer from 1 to 8. The maximum score for this KPI is 8. Do not use 0. Do not return a score above 8. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 1 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — generic filler; does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — process action; not evidence of empathy\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — missed delivery, false \"not at home\" status, missed call from delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nHard scoring caps (apply strictly):\n- If the agent's first response is process-first with no specific emotional acknowledgment → score cannot exceed 3\n- If the only apology is generic (\"sorry for the inconvenience\") with no situation-specific acknowledgment → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call empathy\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge repeated frustration.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 1 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low if delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — minimum professional standard, not warmth\n- Providing correct information — competence, not warmth\n- Using the customer's name once after collecting it — insufficient alone for rapport\n- Professional tone without liveliness — professional and warm are not the same\n- Absence of rudeness — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n- Liveliness: Agent sounds alive and present, not flat or mechanical — assess from audio\n- Rapport: Deliberate human connection — natural use of name, referencing their specific situation personally\n- Vocal quality (audio): medium pace, comfortable volume, pleasing warm tone\n- Language (transcript): natural and conversational, not formulaic or templated\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 4\n- No rapport-building effort at any point → score cannot exceed 5\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call warmth\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport, and leaves the customer feeling they spoke to someone who cared.\n\nScore lower when delivery is mechanical, rapport is absent, or warmth drops at hold, process steps, or closing.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10.\n\nAgents on these calls cannot resolve the delivery delay — field operations determine outcome. Assistance means registering the complaint, communicating that the company is working on it, and giving the customer clarity on what was escalated and what to expect next.\n\nThe customer must leave with clarity — even if the outcome remains uncertain.\n\nEvaluate:\n- Whether the agent clearly communicated what specific action was escalated or flagged\n- Whether the agent provided a realistic, specific expectation of next steps\n- Whether language was clear and direct, not vague or non-committal\n- Whether necessary details were collected and used meaningfully for the complaint\n- Whether the customer understood the company is actively working on resolution\n\nScore higher when the agent demonstrates ownership of actions taken and gives a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps unclear, or complaint registration was incomplete.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — information collection, not listening\n- Reading back address or complaint number — process verification, not active listening\n- Offering to help or registering a complaint — assistance, not mindset\n- Completing the call without being rude — minimum standard only\n- Talking over the customer or responding before they finish their sentence — this is NOT listening\n\nDo not infer active listening from process steps — complaint registration, address collection, and follow-through are not evidence of listening.\n\nWHAT MINDSET IS — only the following should raise the score:\n- Willingness to serve: Agent sounds personally invested beyond the script (assess from audio: tone, pace, pauses when customer speaks)\n- Active listening — evidence in transcript AND audio:\n  - Verbal acknowledgment while customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n  - Paraphrasing the customer's specific concern in human terms — not reading back data\n  - Referencing a detail the customer mentioned earlier without asking them to repeat it\n  - Patient pauses, engaged tone while listening, NOT talking over the customer\n  If none of these signals are present, active listening is absent — do not infer from question-asking alone.\n- Brand representation: Consultant taking responsibility vs operator executing a task\n- Customer focus: Interaction tailored to this customer vs interchangeable with any complaint call\n\nHard scoring caps (apply strictly):\n- Agent talks over customer or responds before customer completes their thought (including mid-sentence interruptions like \"because...\" or \"I can't...\") → score cannot exceed 4\n- No evidence of active listening (verbal ack, paraphrase, or audio engagement) → score cannot exceed 4\n- Interrupting during AWB/number collection by speaking over the customer → score cannot exceed 3\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nScore higher when active listening is clearly evidenced in both words and delivery, with personal investment throughout.\n\nScore lower when the interaction is transactional — details collected, next steps given, but no signal the customer was individually heard.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10.\n\nAssess this KPI primarily from audio. Words matter less than delivery. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done.\n\nEvaluate:\n- Consistently warm, composed, professional tone from start to finish\n- Genuinely willing to help vs disengagement, impatience, or flat/robotic delivery in audio\n- Calm and respectful when customer is frustrated, emotional, or difficult\n- Any tone shift after information collection, during hold/wait, or during closing\n- Attitude conveys this customer's concern mattered\n- Agent does not talk over the customer — interrupting or overspeaking lowers this score\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 5\n- Noticeable impatience, indifference, or mechanical delivery at any point → score cannot exceed 5\n- Agent talks over customer or interrupts mid-sentence → score cannot exceed 4\n- Tone clearly drops at closing or during feedback transfer → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nPoliteness in words does NOT offset flat or robotic audio delivery.\n\nScore higher when tone is consistently warm, patient, and professional throughout with no drop in engagement.\n\nScore lower when tone shifts, drops, reveals impatience, sounds mechanical, or the agent interrupts the customer.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "b80f9a0f-3ef7-46a7-ac09-ce4e666b0f5e",
      "name": "BluedartV9.1_QP",
      "matched": 5,
      "avgScore": 63.4,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening on a scale of 1 to 5 (maximum score for this KPI is 5).\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening using the required Blue Dart structure: greeting, self-introduction, and an offer to assist?\n\nRequired structure (wording may vary slightly; assess intent and structure, not verbatim match):\n\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"\n\nSTT / transcription tolerance: Speech-to-text may mishear the brand name (e.g. \"Go Air\", \"Blue Dot\"). Do NOT heavily penalize or zero the score solely because the brand name was transcribed incorrectly if the rest of the opening structure is clearly present — introduction, assistance offer, professional delivery.\n\nEvaluate:\n- Greeting structure: Did the agent follow the required opening pattern (welcome + name + offer to help)?\n- Introduction & assistance offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\n- Clarity & confidence: Was the opening audible, professionally delivered, and free from unclear speech or excessive hesitation?\n- Timeliness: Did the agent greet promptly after the call connected?\n- Professional presence: Did the opening create a welcoming first impression rather than sounding casual, incomplete, or robotic?\n\nScore higher when the required opening structure is delivered clearly and promptly, even if STT garbled the brand name.\n\nScore lower when the agent skips introduction, skips the assistance offer, opens with process questions, or delivers an incomplete or unprofessional opening.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's hold management and customer communication on a scale of 1 to 2 (maximum score for this KPI is 2).\n\nFocus on whether the customer was kept informed, respected, and comfortable during hold — not just script compliance.\n\nIf no hold occurred, score based on whether the call proceeded without unnecessary dead air or customer neglect.\n\nEvaluate: permission before hold, reason explained, bridging updates on long holds, thanks on return, customer not feeling ignored.\n\nScore higher for clear permission, transparent communication, regular updates, appreciation on return.\n\nScore lower for hold without permission, no reason, long wait without updates, or returning without acknowledging the wait.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 1 to 8 (maximum score for this KPI is 8).\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nRequired closing sequence — all three parts must be present and delivered with genuine warmth (minor wording variation is acceptable; assess intent and completeness):\n\n(i) Further assistance:\n\"I hope I have addressed all your queries for today\" (or equivalent confirming no remaining concerns)\n\n(ii) Feedback invitation:\n\"May I connect this call for a short survey of 20 seconds to share your feedback based on our conversation\" (or equivalent — must convey a short survey tied to this conversation, not a generic transfer)\n\n(iii) Formal closure:\n\"Thank you for calling Blue Dart. Have a great day\" / \"Have a nice day\"\n\nDo not penalize if the customer declines the survey — score only on how the agent extended the invitation.\n\nEvaluate:\n- Whether all three closing elements were present\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation sounded genuine and personal, not a scripted tick-mark step\n- Whether tone and energy at closing matched the warmth of the rest of the call\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion — all three parts delivered with personal intent and the customer feels acknowledged until the end.\n\nScore lower when any required closing element is missing, the closing is rushed or abrupt, feedback is pushed mechanically, or the agent's energy drops in the final moments.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — generic filler; does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — process action; not evidence of empathy\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — missed delivery, false \"not at home\" status, missed call from delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nHard scoring caps (apply strictly):\n- If the agent's first response is process-first with no specific emotional acknowledgment → score cannot exceed 3\n- If the only apology is generic (\"sorry for the inconvenience\") with no situation-specific acknowledgment → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call empathy\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge repeated frustration.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low if delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — minimum professional standard, not warmth\n- Providing correct information — competence, not warmth\n- Using the customer's name once after collecting it — insufficient alone for rapport\n- Professional tone without liveliness — professional and warm are not the same\n- Absence of rudeness — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n- Liveliness: Agent sounds alive and present, not flat or mechanical — assess from audio\n- Rapport: Deliberate human connection — natural use of name, referencing their specific situation personally\n- Vocal quality (audio): medium pace, comfortable volume, pleasing warm tone\n- Language (transcript): natural and conversational, not formulaic or templated\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 4\n- No rapport-building effort at any point → score cannot exceed 5\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call warmth\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport, and leaves the customer feeling they spoke to someone who cared.\n\nScore lower when delivery is mechanical, rapport is absent, or warmth drops at hold, process steps, or closing.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nAgents on these calls cannot resolve the delivery delay — field operations determine outcome. Assistance means registering the complaint, communicating that the company is working on it, and giving the customer clarity on what was escalated and what to expect next.\n\nThe customer must leave with clarity — even if the outcome remains uncertain.\n\nEvaluate:\n- Whether the agent clearly communicated what specific action was escalated or flagged\n- Whether the agent provided a realistic, specific expectation of next steps\n- Whether language was clear and direct, not vague or non-committal\n- Whether necessary details were collected and used meaningfully for the complaint\n- Whether the customer understood the company is actively working on resolution\n\nScore higher when the agent demonstrates ownership of actions taken and gives a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps unclear, or complaint registration was incomplete.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — information collection, not listening\n- Reading back address or complaint number — process verification, not active listening\n- Offering to help or registering a complaint — assistance, not mindset\n- Completing the call without being rude — minimum standard only\n\nWHAT MINDSET IS — only the following should raise the score:\n- Willingness to serve: Agent sounds personally invested beyond the script — genuine concern beyond completing the process (assess from audio: tone, pace, pauses when customer speaks)\n- Active listening — evidence in transcript AND audio:\n  - Verbal acknowledgment while customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n  - Paraphrasing the customer's specific concern in human terms — not reading back data\n  - Referencing a detail the customer mentioned earlier without asking them to repeat it\n  - Audio cues: patient pauses, engaged tone while listening, not talking over the customer\n  If none of these signals are present, active listening is absent — do not infer from question-asking alone.\n- Brand representation: Consultant taking responsibility vs operator executing a task\n- Customer focus: Interaction tailored to this customer vs interchangeable with any complaint call\n\nHard scoring caps (apply strictly):\n- No evidence of active listening (verbal ack, paraphrase, or audio engagement) → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call signals\n\nScore higher when active listening is clearly evidenced in both words and delivery, with personal investment throughout.\n\nScore lower when the interaction is transactional — details collected, next steps given, but no signal the customer was individually heard.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nAssess this KPI primarily from audio. Words matter less than delivery. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done.\n\nEvaluate:\n- Consistently warm, composed, professional tone from start to finish\n- Genuinely willing to help vs disengagement or impatience in delivery\n- Calm and respectful when customer is frustrated, emotional, or difficult\n- Any tone shift after information collection, during hold, or during closing\n- Attitude conveys this customer's concern mattered\n\nHard scoring caps (apply strictly):\n- Noticeable impatience, indifference, or mechanical delivery at any point → score cannot exceed 5\n- Tone clearly drops at closing or during feedback transfer → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nScore higher when tone is consistently warm, patient, and professional throughout with no drop in engagement.\n\nScore lower when tone shifts, drops, or reveals impatience or mechanical delivery at any point.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "b5a65d62-d976-4646-90ee-72c7b3d6b1ff",
      "name": "Bluedart Updated QP",
      "matched": 5,
      "avgScore": 78.2,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script.\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script, provides only a casual or incomplete greeting, completely fails to perform the required standard opening, or remains silent/unresponsive.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission, states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning. OR when the call does not contain any hold situation.\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement.\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script including asking for further assistance, seeking feedback survey participation, and delivering the formal closure while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for acknowledgment before disconnecting. OR when the call ends abruptly due to disconnection, transfer, or customer drop-off.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component.\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses two mandatory components, OR fails to wait for the customer's response before hanging up.\nRate 0 - The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, or abruptly disconnecting.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate active empathy by understanding and acknowledging the customer's emotional state, avoiding repetition of information already provided, offering an appropriate interim apology when the customer shared a prior bad experience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted, repetitive, casual, or indifferent behavior (including excessive use of \"OK\")?\n\nRate 10 - Perfect Compliance: Consistently strong empathy throughout. Immediately acknowledges concern, provides sincere apology, avoids repetition, personalized responses, warm tone. OR purely transactional interaction with no emotional content.\nRate 8 - Strong Compliance with Minor Empathy Gap: Good empathy but misses a minor opportunity. Response slightly generic, mildly scripted apology, or missed a small empathy cue.\nRate 6 - Partial Compliance / Noticeable Empathy Gap: Correct resolution but limited emotional connection. Polite but doesn't actively acknowledge feelings. Transactional rather than customer-focused.\nRate 3 - Poor Empathy / Significant Gap: Noticeable lack of empathy. Rigid explanations, doesn't acknowledge emotional state, no interim apology, indifferent or mechanical tone.\nRate 0 - Critical Failure / No Empathy: Ignores frustration, dismissive, one-word responses, frequent \"OK\", rude or hostile tone, creates negative experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate a warm, respectful, and professional communication style by building customer rapport, acknowledging customer inputs, adapting communication style to the customer's language and pace, maintaining an engaging tone, and ensuring clear, natural, and professional communication without sounding robotic, using excessive acknowledgements (\"OK\"), internal jargon (HUB, EDD, TAT, TDD, CE, EDL, RSP, ODA, FOD, DOD, COD, TT), fillers (Um, uh, ah, er, hmm, yup, ya, haan, aur), slangs (ASAP), or unprofessional expressions?\n\nRate 10 - Excellent Professionalism & Rapport: Warm, professional, personalized, acknowledges customer naturally, matches communication style, no robotic responses or jargon. OR interaction too short to assess.\nRate 8 - Strong Professionalism with Minor Improvement: Professional and pleasant but misses occasional opportunities to personalize. Minor filler usage once or twice.\nRate 6 - Acceptable Communication with Noticeable Warmth Gap: Correct but transactional. Doesn't consistently acknowledge inputs, uses \"OK\" frequently, uses internal terms without explanation.\nRate 4 - Poor Rapport / Weak Professional Presence: Monotonous, uninterested, frequent fillers, scripted or mechanical, uses jargon without explanation.\nRate 0 - Critical Failure / Unprofessional: Rude, dismissive, inappropriate language, frequent fillers/robotic acknowledgements, no effort at customer-focused communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate ownership and effective call guidance by actively understanding the customer's requirement, asking relevant probing questions, demonstrating confident product/process knowledge, proactively providing required information such as delivery timelines or resolution TATs, maintaining control of the conversation, and driving the interaction toward an accurate First Time Resolution (FTR)?\n\nRate 10 - Excellent Ownership & Resolution Guidance: Strong ownership, probes appropriately, provides accurate confident information, proactively shares timelines/next steps, demonstrates strong product knowledge. OR interaction doesn't require assistance.\nRate 8 - Strong Support with Minor Proactive Gap: Correct resolution, good ownership, but may not proactively mention one relevant detail unless prompted.\nRate 6 - Acceptable Resolution with Noticeable Assistance Gap: Workable solution but limited probing, customer drives conversation, misses proactive information, feels reactive.\nRate 3 - Poor Guidance / Limited Ownership: Significant gaps, generic explanations, customer must repeatedly clarify, hesitation or fumbling.\nRate 0 - Critical Failure / No Ownership: Doesn't understand requirement, no relevant questions, incorrect information, poor product knowledge, passive.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate an ownership-driven and customer-focused mindset by actively listening to the customer, acknowledging their inputs, maintaining a smooth conversation flow, avoiding unnecessary interruptions or repetition, clearly confirming understanding, and demonstrating genuine willingness to support the customer as a trusted brand representative?\n\nRate 10 - Excellent Ownership & Active Listening: Actively listens, acknowledges inputs, paraphrases to confirm understanding, no interruptions, smooth flow, demonstrates patience and ownership. OR interaction too short to evaluate.\nRate 8 - Strong Ownership with Minor Listening Gap: Good engagement but fewer verbal acknowledgements, doesn't consistently paraphrase, minor repetition.\nRate 6 - Acceptable Support with Noticeable Listening Gap: Polite but process-driven, limited acknowledgement, misses opportunities to confirm understanding, customer may need to repeat.\nRate 3 - Weak Ownership / Reduced Customer Focus: Interrupts customer, doesn't demonstrate understanding, repeats information unnecessarily, feels like completing a task.\nRate 0 - Critical Failure / No Ownership or Active Listening: Repeatedly interrupts, ignores inputs, asks for already-provided information, prolonged unexplained silence, dismissive.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate a warm, positive, and professional attitude throughout the interaction by communicating respectfully, showing genuine willingness to assist, maintaining a calm and approachable demeanor, adapting appropriately to the customer's situation, and avoiding negative, dismissive, indifferent, or unprofessional behavior?\n\nRate 10 - Excellent Professionalism & Positive Engagement: Consistently warm, respectful, patient, empathetic, builds confidence. OR interaction too short to assess.\nRate 8 - Strong Professionalism with Minor Attitude Gap: Professional and positive but tone may occasionally lack warmth or enthusiasm.\nRate 6 - Acceptable Professionalism with Noticeable Gaps: Generally polite but limited warmth, transactional, occasional impatience.\nRate 3 - Poor Professionalism / Inconsistent Customer Approach: Uninterested, impatient, cold, dismissive, or argumentative tone.\nRate 0 - Critical Failure / Negative Customer Experience: Rude, disrespectful, aggressive, argues with customer, inappropriate language.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "ece568b4-598b-4456-8a36-a644faf9d65c",
      "name": "BluedartupdatedV6",
      "matched": 5,
      "avgScore": 65.2,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent’s opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall call closing effectiveness on a scale of 0 to 10.\nFocus on whether the agent provided a complete, professional, and customer-friendly closing experience — ensuring the customer felt acknowledged and properly guided until the end of the interaction, rather than only checking whether exact scripted words were used.\n\nEvaluate the agent’s closing effectiveness by considering:\n\nClosure completeness: Did the agent offer further assistance, communicate the feedback survey option where applicable, and provide a proper thank-you/closing statement?\nCustomer acknowledgement: Did the agent allow the customer an opportunity to respond before disconnecting or transferring?\nCommunication quality: Was the closing delivered clearly, confidently, and professionally rather than sounding rushed or mechanical?\nCustomer experience: Did the agent create a positive final impression and ensure the customer did not feel abruptly disconnected?\nConsistency: Did the agent maintain the same professional and courteous approach until the end of the interaction?\n\nHigher scores for:\n\nComplete and confident closure.\nProfessional and warm final communication.\nAllowing customer acknowledgement before ending the call.\nEnsuring the customer feels supported until the interaction concludes.\n\nLower scores for:\n\nMissing key closing elements.\nRushed or incomplete closure.\nDisconnecting without customer acknowledgement.\nEnding the interaction without a proper farewell or support offer.\nTransferring to survey without appropriate closing communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. \nDid the agent respond with genuine warmth and empathy when the customer expressed frustration or distress? Focus on TONE, not scripts. \nEvaluate: - Did the agent's voice convey care and concern, or was it flat and transactional? - When the customer shared a problem, did the agent acknowledge their feelings IMMEDIATELY (in the very next response) before moving to process? - Was the empathy specific to the customer's situation, or generic/rehearsed? \nDeduct for: responding to distress with 'Okay, let me check...' or jumping to procedure without first acknowledging emotion; flat/monotone delivery; generic apologies like 'sorry for the inconvenience' without personalizing.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "9c7f47ae-14ee-4bb2-bd32-6fa60e615528",
      "name": "Empathy - Tone & Intent",
      "matched": 5,
      "avgScore": 60,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent demonstrate genuine empathy through their tone, emotional responsiveness, and personalization — not just words, but whether the customer felt heard and cared for?\n\nEvaluate the agent's overall empathetic presence by considering:\n- Tone quality: Was the voice warm, engaged, and naturally caring — or flat, rushed, and mechanical?\n- Emotional responsiveness: When the customer expressed distress, did the agent pause to acknowledge it before problem-solving?\n- Personalization: Did the agent reference the customer's specific situation in their own words, or rely on generic phrases?\n- Consistency: Did the empathetic tone hold steady throughout, even when the customer escalated or repeated concerns?\n\nRate 10: Consistently warm, naturally caring tone. Every moment of customer distress is met with a specific, personalized acknowledgment before proceeding. The customer clearly feels heard. OR a purely informational call with no emotional content.\nRate 6: Generally warm but one moment where tone dips — a slightly generic acknowledgment, a brief flat/procedural shift, or a small delay in responding to distress.\nRate 3: Mostly procedural tone. May say empathetic words but delivers them without warmth, skips emotional acknowledgment to jump into process, or relies on generic phrases without personalizing.\nRate 0: Indifferent, dismissive, or robotic. Customer distress is met with flat or transactional responses. No genuine attempt to connect emotionally.",
          "type": "critical",
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "1d3c7851-a046-4345-bdae-b5c59b02584d",
      "name": "last blurdart - copy",
      "matched": 4,
      "avgScore": 79.6,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\"Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the agent took permission from the customer and kept the customer informed, respected, and comfortable during the hold process. They need to sometimes put on hold, but whether it was managed well is what needs to be evaluated\n\n\nEvaluate higher scores for:\n\nClear permission seeking before holding.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 if there was no wait time, dead air, or no reason to put the customer on hold, and the agent continued the conversation without a break or any prolonged silence\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "ea9a3b80-f4d9-4dd9-9bd9-27571c55c183",
      "name": "last blurdart",
      "matched": 4,
      "avgScore": 73.5,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the agent took permission from the customer and kept informed, respected, and comfortable during the hold process. They need to sometimes put on hold, but was it managed well is what needs to be evaluated\n\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "b976024b-8edc-4103-9a0c-11f2dc330471",
      "name": "v7 Profile Blue Dart test",
      "matched": 4,
      "avgScore": 79.2,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script. They need to sometimes put on hold, but was it managed well is what needs to be evaluated\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) ever 60 seconds when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "9cb792fd-9789-4c4d-a01c-87445dfb33d4",
      "name": "v10Bluedart",
      "matched": 4,
      "avgScore": 75,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "49733f1c-bbd6-4c65-915a-7bd2cee03fed",
      "name": "BluedartV8_QP",
      "matched": 4,
      "avgScore": 82.7,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nThis call is a complaint. The customer is frustrated and the agent cannot provide a resolution — delivery outcomes depend on field operations. The agent's only tool is emotional support. Empathy is not a courtesy step — it is the core of this interaction.\n\nAssess whether the agent acknowledged the customer's emotional state before taking any process step. Emotional acknowledgment means recognizing how the customer is feeling — not jumping to information collection or resolution.\n\nEvaluate the following:\n- Whether the agent's first response addressed the customer's emotional state before any procedural action\n- Whether the acknowledgment was specific to the customer's situation or generic and rehearsed\n- Whether the agent sustained empathetic engagement through the call or only offered it as an opener\n- Whether the tone conveyed genuine concern — assess from audio, not just words\n\nPay close attention to the ORDER of the agent's response. If the agent begins with a process statement (\"let me check\", \"I need your details\", \"I will help you\") before acknowledging the emotion, this is NOT empathy — regardless of whether an apology appears later in the same sentence or shortly after.\n\nA generic phrase like \"sorry for the inconvenience\" placed between two process steps does not constitute empathetic acknowledgment. The emotional response must be the FIRST thing the customer hears — not embedded within or after a procedural statement.\n\nEvaluate EVERY moment the customer expresses frustration or distress during the call — not just the first instance. If the customer raises a concern a second time or escalates their frustration, check whether the agent acknowledged that moment with genuine empathy. Failure to acknowledge a repeated or escalated expression of distress must result in a significant score deduction — it signals the agent is not truly listening.\n\nScore higher when the agent leads with emotion, sustains empathy across every moment of customer distress, and makes the customer feel genuinely heard throughout the call.\n\nScore lower when the agent sandwiches apologies between process steps, uses generic phrases without personalization, or fails to acknowledge the customer's emotional state at any point of distress — especially when the customer raises a concern more than once.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nWarmth is not just the absence of rudeness — it is the presence of energy, personality, and genuine human connection. Assess this KPI from both audio and transcript. An agent can use correct words and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nEvaluate across the following dimensions:\n\nLiveliness & Tone: Did the agent sound engaged, warm, and present — or flat, monotonous, and disinterested? A lively tone signals to the customer that the agent genuinely cares. A flat or uninterested tone — even if polite — communicates indifference. Assess from audio. Monotonous or robotic delivery must be scored lower regardless of the words used.\n\nRapport Building: Did the agent make a deliberate effort to connect with the customer as a person — not just handle their query? Rapport building includes using the customer's name naturally, acknowledging the customer's specific situation in a way that feels personal, and creating a moment of human connection within the interaction. Absence of any rapport-building effort should be scored lower.\n\nVocal Quality: Assess from audio —\n- Was the pace medium — neither rushed nor dragging?\n- Was the volume audible and comfortable — neither too loud nor too soft?\n- Was the tone pleasing and warm — not irritated, strained, or cold?\n\nLanguage Quality: Assess from transcript —\n- Was the language easy to understand — free from unnecessary complexity or confusion?\n- Were sentences constructed correctly and naturally — no grammatical inaccuracies or awkward phrasing?\n- Was the language relevant and tailored to the customer's situation — not templated or formulaic?\n\nProfessional Communication: Deduct for any of the following —\n- Internal jargon or acronyms used without explanation (HUB, EDD, TAT, TDD, CE, EDL, RSP, ODA, FOD, DOD, COD, TT)\n- Casual abbreviations (ASAP or similar)\n- Filler or hesitation words (um, uh, ah, er, hmm, yup, ya, haan, aur)\n- Slangs or unprofessional expressions\n\nScore higher when the agent sounds lively and engaged, builds genuine rapport, communicates clearly and naturally, maintains a warm and pleasing vocal quality, and avoids any unprofessional language.\n\nScore lower when the agent sounds flat, disinterested, or monotonous; fails to build rapport; speaks too fast or too slow; uses fillers, jargon, or slangs; or delivers language that is grammatically awkward or hard to follow.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nOn complaint calls, the customer's primary need is to feel heard and supported by someone who genuinely cares. This KPI measures whether the agent was fully present, service-oriented, and customer-focused — or merely completing a process.\n\nEvaluate across four dimensions:\n\nWillingness to Serve: Did the agent sound genuinely concerned and motivated to help — not just going through the motions? Was there a sense of personal ownership over the customer's experience, beyond what the process requires?\n\nBrand Representation: Did the agent conduct themselves as a professional consultant — guiding the customer, taking responsibility, and acting as a trusted representative of Blue Dart — rather than treating the interaction as a routine ticket to close?\n\nActive Listening: Did the agent demonstrate that they were truly absorbing what the customer shared — through verbal acknowledgment, paraphrasing of the customer's concern, or reflecting back key details? Absence of verbal nods, paraphrasing, or any sign of engaged listening should be scored lower.\n\nCustomer Focus: Did the agent make the experience feel personalized to this customer's specific situation — or did the interaction feel generic and interchangeable? Did the agent use the customer's name, reference specific details from the conversation, and shape their responses around what this individual customer shared?\n\nScore higher when the agent sounds genuinely invested in the customer's experience, listens actively with verbal engagement, represents the brand with professionalism and care, and makes the customer feel they are being treated as an individual.\n\nScore lower when the agent is transactional, passive in listening, fails to paraphrase or acknowledge customer inputs, treats the call as a process to complete, or delivers a generic experience that could apply to any customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "051efbac-5591-40c3-9493-0e7023ddabb2",
      "name": "BluedartV7_QP",
      "matched": 4,
      "avgScore": 65,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nThis call is a complaint. The customer is frustrated and the agent cannot provide a resolution — delivery outcomes depend on field operations. The agent's only tool is emotional support. Empathy is not a courtesy step — it is the core of this interaction.\n\nAssess whether the agent acknowledged the customer's emotional state before taking any process step. Emotional acknowledgment means recognizing how the customer is feeling — not jumping to information collection or resolution.\n\nEvaluate the following:\n- Whether the agent's first response addressed the customer's emotional state before any procedural action\n- Whether the acknowledgment was specific to the customer's situation or generic and rehearsed\n- Whether the agent sustained empathetic engagement through the call or only offered it as an opener\n- Whether the tone conveyed genuine concern — assess from audio, not just words\n\nScore higher when the agent makes the customer feel their frustration is understood and valid before anything else happens.\n\nScore lower when the agent moves directly to process, offers generic apologies without personalizing, or delivers empathetic words in a flat or mechanical tone.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nThese customers have experienced a service failure. They are calling because something went wrong. The only outcome they can take from this call is emotional — whether they felt that Blue Dart cared about them as a person, not just as a case to close.\n\nWarmth is distinct from politeness. An agent can be polite without being warm. Assess whether the interaction felt human and caring, or transactional and procedural.\n\nEvaluate the following:\n- Whether the agent's voice and tone conveyed genuine engagement — assess from audio, not just transcript\n- Whether the agent's pace and delivery showed patience and care, particularly when the customer was distressed\n- Whether the language used was natural and conversational, or scripted and formulaic\n- Whether internal terminology was used without explanation in plain language\n- Whether the agent's responses were tailored to the individual customer's situation, or felt generic\n\nScore higher when the customer would leave feeling that they spoke to a person who genuinely cared about their experience.\n\nScore lower when the interaction felt routine, indifferent, or when warmth was absent from the agent's voice or language regardless of what was said.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nOn complaint calls, the customer's primary need is to feel heard. This KPI measures whether the agent was genuinely present in the conversation — or whether they were processing a ticket.\n\nListening mindset means the agent created space for the customer, absorbed what was shared, and engaged with it — rather than directing the conversation to a quick close.\n\nEvaluate the following:\n- Whether the agent allowed the customer to fully express their concern before responding or redirecting\n- Whether the agent demonstrated that they absorbed what the customer shared, through their responses and the way they handled the information\n- Whether the agent avoided making the customer repeat themselves\n- Whether the agent treated the interaction as something that personally matters to them, rather than a routine process to complete\n- Whether the conversation flowed naturally with the customer's pace, or was driven by the agent's agenda to collect and close\n\nScore higher when the customer's experience of the call is of being genuinely listened to and taken seriously.\n\nScore lower when the agent interrupted, missed cues, made the customer repeat information, or prioritized process efficiency over human engagement.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "8d888882-f8ff-456f-99b1-a8270e3eca35",
      "name": "ai ingestion profile",
      "matched": 3,
      "avgScore": null,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "What's the user ID",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "c713f3f4-a541-401d-b56c-5b30d570e86d",
      "name": "SaleskpiV2updated",
      "matched": 3,
      "avgScore": 95.9,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent start the conversation with a professional greeting and clearly state the purpose of the call?\n\nYES:\nAgent gives the intro and tells the company name within the first 15 seconds and communicates the purpose of the call\nGreets the User by Name\nNO:\nJumps straight into pitch without context\nConfusing or delayed introduction\nNA:\nCallback/continuation where intro already done",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent effectively uncover the prospect’s needs using open-ended questions and active listening?\nYES:\nAgent Asks probing follow-ups (“Can you elaborate?”, “What challenges are you facing?”)\nBuilds on customer responses\nNO:\nScripted questions without listening\nInterrupts or ignores responses\nNA:\nCustomer refuses to engage / ends early",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent identify a clear pain point and establish a relevant use case?\nYES:\nPain point quantified and clearly described\nUse case tied to business outcome\nNO:\nAssumptions made without validation\nGeneric statements like “improve efficiency” without context\nNA:\nDiscovery not reached due to early drop",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent effectively qualify the prospect across key parameters (Budget, Authority, Need, Timeline)?\nYES: At least 3 of 4 BANT (Budget, Authority, Need, Timeline) elements identified or attempted by the agent\nNO: Minimal or no qualification done by the agent\nNA: Early-stage call where qualification not expected",
          "type": null,
          "avgScore": null,
          "maxScore": 9,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent identify key stakeholders and decision-making structure?\nYES:\nIdentifies decision-maker or approval process\nAsks about other involved teams\nNO:\nAssumes single decision-maker without confirmation\nNA:\nSolo buyer confirmed upfront",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent align the product offering to the prospect’s needs effectively?\nYES:\nTailored pitch using customer’s exact problem\nConnects features → benefits → outcomes\nNO:\nOne-size-fits-all pitch\nTalks about irrelevant features\nNA:\nNo pitch stage reached",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent acknowledge and effectively address objections?\nYES:\nUses phrases like “That’s a valid concern…”\nProvides data, examples, or alternatives\nNO:\nDefensive or dismissive response\nAvoids answering objection\nNA:\nNo objections raised",
          "type": null,
          "avgScore": null,
          "maxScore": 7,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent maintain positive engagement and handle prospect sentiment effectively?\nYES:\nRecognizes emotional cues (“I understand this is frustrating”)\nKeeps prospect engaged with questions\nNO:\nIgnores frustration or disengagement\nMonotonous or transactional conversation\nNA:\nthe conversation is too short to analyse or silent conversation interaction",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "3c72d6bd-7053-4a07-bd85-400ccbb46bfe",
      "name": "SaleskpiV2",
      "matched": 3,
      "avgScore": 78,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent start the conversation with a professional greeting and clearly state the purpose of the call?\n\nYES:\nAgent gives the intro and tells the company name within the first 15 seconds and communicates the purpose of the call\nGreets the User by Name\nNO:\nJumps straight into pitch without context\nConfusing or delayed introduction\nNA:\nCallback/continuation where intro already done",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent effectively uncover the prospect’s needs using open-ended questions and active listening?\nYES:\nAgent Asks probing follow-ups (“Can you elaborate?”, “What challenges are you facing?”)\nBuilds on customer responses\nNO:\nScripted questions without listening\nInterrupts or ignores responses\nNA:\nCustomer refuses to engage / ends early",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent identify a clear pain point and establish a relevant use case?\nYES:\nPain point quantified and clearly described\nUse case tied to business outcome\nNO:\nAssumptions made without validation\nGeneric statements like “improve efficiency” without context\nNA:\nDiscovery not reached due to early drop",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent effectively qualify the prospect across key parameters (Budget, Authority, Need, Timeline)?\nYES: At least 3 of 4 BANT (Budget, Authority, Need, Timeline) elements identified or attempted by the agent\nNO: Minimal or no qualification done by the agent\nNA: Early-stage call where qualification not expected",
          "type": null,
          "avgScore": null,
          "maxScore": 9,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent identify key stakeholders and decision-making structure?\nYES:\nIdentifies decision-maker or approval process\nAsks about other involved teams\nNO:\nAssumes single decision-maker without confirmation\nNA:\nSolo buyer confirmed upfront",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent align the product offering to the prospect’s needs effectively?\nYES:\nTailored pitch using customer’s exact problem\nConnects features → benefits → outcomes\nNO:\nOne-size-fits-all pitch\nTalks about irrelevant features\nNA:\nNo pitch stage reached",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent acknowledge and effectively address objections?\nYES:\nUses phrases like “That’s a valid concern…”\nProvides data, examples, or alternatives\nNO:\nDefensive or dismissive response\nAvoids answering objection\nNA:\nNo objections raised",
          "type": null,
          "avgScore": null,
          "maxScore": 7,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent maintain positive engagement and handle prospect sentiment effectively?\nYES:\nRecognizes emotional cues (“I understand this is frustrating”)\nKeeps prospect engaged with questions\nNO:\nIgnores frustration or disengagement\nMonotonous or transactional conversation\nNA:\nthe conversation is too short to analyse or silent conversation interaction",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "8bebe309-1b93-4191-ac5d-06f3ff5f6d5d",
      "name": "nasa-test-demo-1001 - copy",
      "matched": 1,
      "avgScore": 52,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": []
    },
    {
      "id": "214cbad9-aabe-4d12-9229-2f3ce4c4a7f4",
      "name": "nasa-test-demo",
      "matched": 1,
      "avgScore": 76,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent greet the customer?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did agent mention processing fee details -- amount as well as tax?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Mention the competitors mentioned by customers on the call - such as Pepsi, Coca Cola, Thumbs Up",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "04f4714b-355a-4cd3-95e7-2ef9093e51cc",
      "name": "v10Bluedart_v2",
      "matched": 1,
      "avgScore": 72.3,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 1 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?\n\nScoring instruction: Return ONLY an integer from 1 to 5. The maximum score for this KPI is 5. Do not use 0. Do not return a score above 5. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 1 to 2\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nScoring instruction: Return ONLY an integer from 1 to 2. The maximum score for this KPI is 2. Do not use 0. Do not return a score above 2. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's call closing quality on a scale of 1 to 8\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.\n\nScoring instruction: Return ONLY an integer from 1 to 8. The maximum score for this KPI is 8. Do not use 0. Do not return a score above 8. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's empathetic response on a scale of 1 to 10\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's warmth and human connection on a scale of 1 to 10\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "339f46f1-b5fa-4d9e-aa48-fe21b65c9a44",
      "name": "Bluedartv6updatedV1",
      "matched": 1,
      "avgScore": 86.2,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent’s opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall call closing effectiveness on a scale of 0 to 10.\nFocus on whether the agent provided a complete, professional, and customer-friendly closing experience — ensuring the customer felt acknowledged and properly guided until the end of the interaction, rather than only checking whether exact scripted words were used.\n\nEvaluate the agent’s closing effectiveness by considering:\n\nClosure completeness: Did the agent offer further assistance, communicate the feedback survey option where applicable, and provide a proper thank-you/closing statement?\nCustomer acknowledgement: Did the agent allow the customer an opportunity to respond before disconnecting or transferring?\nCommunication quality: Was the closing delivered clearly, confidently, and professionally rather than sounding rushed or mechanical?\nCustomer experience: Did the agent create a positive final impression and ensure the customer did not feel abruptly disconnected?\nConsistency: Did the agent maintain the same professional and courteous approach until the end of the interaction?\n\nHigher scores for:\n\nComplete and confident closure.\nProfessional and warm final communication.\nAllowing customer acknowledgement before ending the call.\nEnsuring the customer feels supported until the interaction concludes.\n\nLower scores for:\n\nMissing key closing elements.\nRushed or incomplete closure.\nDisconnecting without customer acknowledgement.\nEnding the interaction without a proper farewell or support offer.\nTransferring to survey without appropriate closing communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. \nDid the agent demonstrate genuine empathy through their tone, emotional responsiveness, and personalization — not just words, but whether the customer felt heard and cared for? Evaluate the agent's overall empathetic presence by considering: \n- Tone quality: Was the voice warm, engaged, and naturally caring — or flat, rushed, and mechanical? \n- Emotional responsiveness: When the customer expressed distress, did the agent pause to acknowledge it before problem-solving? \n- Personalization: Did the agent reference the customer's specific situation in their own words, or rely on generic phrases? \n- Consistency: Did the empathetic tone hold steady throughout, even when the customer escalated or repeated concerns? ",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "c1517e9e-d2bc-4c46-879b-4a8ab6cd28b2",
      "name": "BludartV6updated",
      "matched": 1,
      "avgScore": 92.3,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script (e.g., forgets to state their name, incorrect pronunciation,forgets \"how may I assist you\", or fails to voice out \"Welcome to Blue Dart\").\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script (unclear and wrong pronunciation), provides only a casual or incomplete greeting (e.g., just “Hello” or “Blue Dart, how can I help?”), completely fails to perform the required standard opening, or remains silent/unresponsive without acknowledging the call..",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission using the standard phrase (\"May I place your call on hold?\"), states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning (\"Thank you for being with us/staying online\"). (Note: If the voice breaks due to line disturbance, the agent is given the benefit of the doubt and retains this score).OR when the call does not contain any hold situation, consultation, dead air requiring a hold, or when the interaction ends without the agent placing the customer on hold\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, including providing a reason, bridging during prolonged holds, and/or thanking the customer upon return, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication, or the mandatory hold conditions are completely ignored.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script—including asking for further assistance, seeking feedback survey participation, and delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for the customer's acknowledgment before disconnecting OR when the call ends abruptly due to disconnection, transfer, customer drop-off, system interruption, or when the agent does not get an opportunity to perform the standard call closing process.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component (e.g., omits the further assistance question, misses the survey verbiage, or skips the formal thank you).\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses/mangles two mandatory components, OR they voice out the scripts but fail to wait for the customer’s response before hanging up/transferring to the survey.\nRate 0 – The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, abruptly disconnecting the call, remaining silent, or transferring the customer to the survey line without any proper closing communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. Focus on whether the customer felt heard, understood, and cared for — not on whether the agent followed a script. Consider: Was the agent's voice warm and naturally caring? When the customer expressed frustration, did the agent acknowledge it before moving to resolution? Was the empathy specific to this customer's situation or generic? Did the tone stay consistent throughout? Use the full 0-10 range. Higher scores for genuine warmth, timely emotional responses, and personalized acknowledgments. Lower scores for flat tone, generic phrases, skipping emotional moments, or jumping straight to procedure when the customer is distressed.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "bbdf2025-3366-430b-9aea-d66be826c0e1",
      "name": "Bluedart Complete QP v2",
      "matched": 1,
      "avgScore": 78.5,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script (e.g., forgets to state their name, incorrect pronunciation,forgets \"how may I assist you\", or fails to voice out \"Welcome to Blue Dart\").\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script (unclear and wrong pronunciation), provides only a casual or incomplete greeting (e.g., just “Hello” or “Blue Dart, how can I help?”), completely fails to perform the required standard opening, or remains silent/unresponsive without acknowledging the call..",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission using the standard phrase (\"May I place your call on hold?\"), states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning (\"Thank you for being with us/staying online\"). (Note: If the voice breaks due to line disturbance, the agent is given the benefit of the doubt and retains this score).OR when the call does not contain any hold situation, consultation, dead air requiring a hold, or when the interaction ends without the agent placing the customer on hold\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, including providing a reason, bridging during prolonged holds, and/or thanking the customer upon return, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication, or the mandatory hold conditions are completely ignored.",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script—including asking for further assistance, seeking feedback survey participation, and delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for the customer's acknowledgment before disconnecting OR when the call ends abruptly due to disconnection, transfer, customer drop-off, system interruption, or when the agent does not get an opportunity to perform the standard call closing process.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component (e.g., omits the further assistance question, misses the survey verbiage, or skips the formal thank you).\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses/mangles two mandatory components, OR they voice out the scripts but fail to wait for the customer’s response before hanging up/transferring to the survey.\nRate 0 – The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, abruptly disconnecting the call, remaining silent, or transferring the customer to the survey line without any proper closing communication.",
          "type": null,
          "avgScore": null,
          "maxScore": 8,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate active empathy by understanding and acknowledging the customer's emotional state, avoiding repetition of information already provided by the customer, offering an appropriate interim apology when the customer shared a prior bad experience or inconvenience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted, repetitive, casual, or indifferent behavior (including excessive use of \"OK\")?\n\nRate 10 - Perfect Compliance\nThe agent consistently demonstrates strong empathy and emotional understanding throughout the interaction. The agent:\nImmediately acknowledges the customer's concern or frustration.\nProvides a sincere and situation-appropriate apology, including an interim apology when the customer shares a prior bad experience, delay, inconvenience, or dissatisfaction.\nAvoids asking for information or repeating details already provided by the customer.\nProvides a personalized response instead of a generic/scripted statement.\nMaintains a warm, engaged, and reassuring tone while showing ownership and willingness to help.\nAvoids robotic language, excessive use of \"OK\", repetitive explanations, casual responses, or indifferent behavior.\n                                                 OR\nThe interaction is purely transactional/informational, with no customer frustration, inconvenience, negative experience, escalation, or emotional situation requiring empathy or reassurance.\n\nRate 8 - Strong Compliance with Minor Empathy Gap:\nThe agent demonstrates good empathy and maintains a professional, helpful approach but misses a minor opportunity to strengthen emotional connection. Examples:\nAcknowledges the concern but the response is slightly generic or less personalized.\nProvides an apology/reassurance but it sounds mildly scripted.\nShows understanding but does not fully reinforce ownership or emotional reassurance.\nMaintains a positive tone but misses a small empathy cue from the customer.\nThe overall customer experience remains positive, with only a minor gap in emotional engagement.\n\nRate 6 - Partial Compliance / Noticeable Empathy Gap\nThe agent provides a correct resolution or helpful response but demonstrates limited emotional connection. Examples:\nUses polite language but does not actively acknowledge the customer's feelings.\nProvides a standard response without adapting to the customer's situation.\nMisses an opportunity to apologize when the customer expresses inconvenience or a previous bad experience.\nShows limited reassurance or ownership.\nThe interaction feels more transactional than customer-focused.\n\nRate 3 – Poor Empathy / Significant Gap:\nThe agent resolves the query but shows a noticeable lack of empathy and personalization. Examples:\nProvides a rigid or repetitive explanation despite the customer's frustration.\nDoes not acknowledge the customer's emotional state.\nFails to provide an interim apology when the customer explains a negative experience.\nAppears focused only on completing the process rather than supporting the customer.\nTone may appear indifferent, mechanical, or disengaged.\n\nRate 0 – Critical Failure / No Empathy / Negative Engagement:\nThe agent demonstrates a poor customer-handling approach by:\nIgnoring or dismissing customer frustration.\nShowing no concern, reassurance, or willingness to help.\nProviding incomplete, one-word, or careless responses.\nFrequently using \"OK\" or similar dismissive acknowledgements instead of engaging.\nRepeating information unnecessarily or making the customer repeat details.\nUsing a rude, hostile, overly casual, or indifferent tone.\nThe interaction creates a negative customer experience due to lack of empathy and support.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate a warm, respectful, and professional communication style by building customer rapport, acknowledging customer inputs, adapting communication style to the customer's language and pace, maintaining an engaging tone, and ensuring clear, natural, and professional communication without sounding robotic, using excessive acknowledgements (such as \"OK\"), internal jargon, fillers, slangs, or unprofessional expressions?\n\nEvaluation should consider:\nPersonalized engagement (using customer name appropriately where available)\nAcknowledging customer details, responses, and concerns\nActive conversational engagement instead of one-sided responses\nMatching customer's language, understanding level, and pace\nWarmth, confidence, and professionalism in tone\nAvoiding robotic/repetitive responses\nAvoiding unnecessary fillers, slangs, and internal terminology\n\nUnprofessional communication indicators to avoid:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur\n\nRate 10 – Excellent Professionalism & Rapport (Perfect Compliance)\nThe agent consistently creates a warm and professional customer experience by:\nAddressing the customer appropriately and personalizing the conversation where possible.\nAcknowledging customer-provided information naturally and making the customer feel heard.\nMaintaining a pleasant, confident, and engaging tone throughout the interaction.\nMatching the customer's communication style, language preference, and pace.\nCommunicating clearly with well-structured sentences.\nAvoiding robotic responses, excessive \"OK\" acknowledgements, fillers, slangs, and unexplained internal terminology.\n\nOR\nThe interaction is too short, incomplete, system-disconnected, or limited to mandatory exchanges, leaving insufficient opportunity to assess rapport-building, tone, language alignment, or overall communication style.\n\nRate 8 – Strong Professionalism with Minor Improvement Area\nThe agent maintains a professional and pleasant interaction with only a minor gap that does not negatively impact the customer experience.\nExamples:\nMaintains a polite and helpful tone but misses occasional opportunities to personalize the conversation.\nUses a slightly repetitive acknowledgement (for example, \"OK\") but does not appear dismissive.\nMinor filler usage occurs once or twice without affecting professionalism.\nUses a standard response style that is slightly less conversational but still customer-friendly.\n\nRate 6 – Acceptable Communication with Noticeable Warmth Gap\nThe agent communicates correctly but shows limited effort in building rapport or adapting to the customer.\nExamples:\nProvides information clearly but interaction feels transactional rather than engaging.\nDoes not consistently acknowledge customer inputs.\nDoes not adapt language or pace to the customer's communication style.\nUses \"OK\" frequently, creating a slightly robotic experience.\nUses internal terms/acronyms without explanation, making communication less customer-friendly.\nTone remains professional but lacks warmth or personalization.\n\nRate 4 – Poor Rapport / Weak Professional Presence\nThe agent demonstrates noticeable communication gaps that reduce customer comfort.\nExamples:\nSounds monotonous, uninterested, or like they are responding only to complete the process.\nRarely acknowledges customer statements or attempts to build connection.\nUses frequent fillers, casual expressions, or repetitive acknowledgements.\nCommunication feels scripted, mechanical, or poorly structured.\nUses customer-unfriendly terminology without explanation.\n\nRate 0 – Critical Failure / Unprofessional Customer Interaction\nThe agent demonstrates unacceptable communication behavior by:\nSounding rude, irritated, dismissive, careless, or disrespectful.\nFailing to acknowledge customer concerns or information provided.\nUsing inappropriate language, slang, or an unprofessional tone.\nFrequently using fillers, casual phrases, or robotic acknowledgements that negatively affect the interaction.\nRepeatedly using internal jargon without explanation, making communication confusing.\nShowing no effort to maintain a helpful, respectful, or customer-focused conversation.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate ownership and effective call guidance by actively understanding the customer's requirement, asking relevant probing questions, demonstrating confident product/process knowledge, proactively providing required information such as delivery timelines or resolution TATs, maintaining control of the conversation, and driving the interaction toward an accurate First Time Resolution (FTR)?\n\nEvaluation should consider:\nAbility to identify the customer's actual need through relevant probing\nAsking complete and meaningful questions instead of relying on customer-led explanations\nDemonstrating confidence and clarity while explaining solutions/processes\nProviding proactive updates such as delivery timelines, next steps, or expected resolution timelines\nMaintaining ownership and guiding the conversation toward resolution\nAvoiding uncertainty, fumbling, incorrect information, or unnecessary delays\n\nRate 10 – Excellent Ownership & Resolution Guidance (Perfect Compliance)\n\nThe agent demonstrates strong ownership and effectively drives the interaction toward First Time Resolution (FTR). The agent:\nProbes appropriately to understand the complete customer requirement or issue.\nTakes control of the conversation while allowing the customer to explain their concern.\nProvides accurate and confident information without hesitation or confusion.\nProactively shares relevant details such as delivery timelines, next steps, or resolution TAT without waiting for the customer to ask.\nProvides a clear, accurate, and solution-oriented resolution.\nDemonstrates strong product/process knowledge and builds customer confidence.\n\nOR\nThe interaction does not require probing, troubleshooting, resolution handling, delivery timelines, or FTR support (for example: wrong number, silent call, disconnected interaction, or immediate transfer without any opportunity for assistance).\n\nRate 8 – Strong Support with Minor Proactive Gap\n\nThe agent provides effective assistance and demonstrates good ownership, but misses a minor opportunity to improve the customer's experience.\nExamples:\nUnderstands the concern and provides the correct resolution.\nDemonstrates sufficient product/process knowledge.\nMaintains control of the interaction.\nShares required information but may not proactively mention one relevant detail (such as TAT, next steps, or expected timeline) unless prompted.\nMinor hesitation or lack of confidence is observed but does not impact resolution.\n\nRate 6 – Acceptable Resolution with Noticeable Assistance Gap\n\nThe agent provides a workable solution but the interaction requires more customer effort than necessary.\nExamples:\nProvides correct information but performs limited probing.\nAllows the customer to drive most of the conversation instead of actively guiding it.\nMisses opportunities to proactively explain timelines, next steps, or process details.\nShows moderate uncertainty or hesitation while explaining the resolution.\nResolution is achieved, but the overall experience feels reactive rather than ownership-driven.\n\nRate 3 – Poor Guidance / Limited Ownership\nThe agent eventually reaches a solution but demonstrates significant gaps in handling.\nExamples:\nDoes not ask enough questions to understand the complete issue.\nProvides a generic or incomplete explanation.\nCustomer has to repeatedly clarify or guide the conversation.\nShows hesitation, fumbling, or lack of confidence while explaining the process or resolution TAT.\nFails to proactively support the customer with relevant information.\nResolution happens with additional customer effort.\n\nRate 0 – Critical Failure / No Ownership or Resolution Support\n\nThe agent fails to effectively manage or resolve the interaction by:\n\nNot understanding the customer's actual requirement.\nAsking no relevant questions or showing no effort to diagnose the issue.\nProviding incorrect, incomplete, or irrelevant information.\nDemonstrating poor product/process knowledge.\nRemaining passive and waiting for the customer to drive the conversation.\nShowing significant confusion, fumbling, or lack of confidence.\nFailing to provide a clear resolution, next steps, or ownership.\n\nThe interaction does not provide meaningful support toward resolution.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate an ownership-driven and customer-focused mindset by actively listening to the customer, acknowledging their inputs, maintaining a smooth conversation flow, avoiding unnecessary interruptions or repetition, clearly confirming understanding, and demonstrating genuine willingness to support the customer as a trusted brand representative?\n\nEvaluation should consider:\nActive listening through relevant verbal acknowledgements and responses\nConfirming understanding through paraphrasing or summarizing key details/action plans\nAvoiding interruptions and allowing the customer to fully explain concerns\nAvoiding unnecessary repetition of information already provided\nMaintaining engagement during the interaction without unexplained silence/dead air\nDemonstrating ownership, patience, and willingness to help\nActing as a customer-focused consultant rather than just completing a transaction\n\nRate 10 – Excellent Ownership & Active Listening (Perfect Compliance)\nThe agent consistently demonstrates strong ownership and emotional intelligence throughout the interaction. The agent:\nActively listens and acknowledges customer inputs through timely verbal acknowledgements.\nUses effective paraphrasing or confirmation to ensure understanding of the customer's concern and next steps.\nAllows the customer to explain without interruptions.\nAvoids repeating information already shared by the customer.\nMaintains a smooth conversation flow with no unexplained dead air.\nDemonstrates patience, confidence, and a genuine desire to support the customer.\nRepresents the brand as a helpful consultant by taking ownership of the interaction.\n\nOR\nThe interaction is too short, disconnected, silent, immediately transferred, or limited to basic routing/informational assistance where active listening, ownership, or customer guidance cannot be evaluated.\n\nRate 8 – Strong Ownership with Minor Listening Gap\nThe agent demonstrates good ownership and maintains a positive customer experience but misses a minor opportunity to strengthen active listening.\nExamples:\nMaintains good engagement and provides appropriate support but uses fewer verbal acknowledgements than expected.\nDoes not consistently paraphrase or confirm understanding but still addresses the customer's requirement correctly.\nMinor repetition occurs without significantly impacting the interaction.\nBrief silence occurs but does not affect the overall call flow.\nContinues to show a helpful and customer-focused approach.\n\nRate 6 – Acceptable Support with Noticeable Listening Gap\nThe agent is polite and provides assistance but demonstrates limited active listening or ownership behaviors.\nExamples:\nResponds appropriately but interaction feels more process-driven than customer-focused.\nLimited acknowledgement of customer inputs while the customer is explaining the concern.\nMisses opportunities to confirm understanding or summarize next steps.\nCustomer may need to repeat information or clarify details.\nMinor interruptions, repetitive explanations, or short periods of silence are observed.\nShows willingness to help but does not consistently demonstrate ownership.\n\nRate 3 – Weak Ownership / Reduced Customer Focus\nThe agent provides basic assistance but demonstrates noticeable gaps in engagement and listening.\nExamples:\nInterrupts the customer or does not allow the customer to fully explain the concern.\nProvides responses without demonstrating clear understanding of the customer's situation.\nRepeats information unnecessarily or asks for details already shared.\nAllows avoidable silence without keeping the customer informed.\nInteraction feels like completing a task rather than genuinely supporting the customer.\n\nRate 0 – Critical Failure / No Ownership or Active Listening\nThe agent demonstrates poor customer handling by:\nRepeatedly interrupting or ignoring the customer's explanation.\nFailing to acknowledge customer inputs or concerns.\nAsking for information already provided multiple times.\nProviding unclear responses without confirming understanding or next steps.\nAllowing prolonged unexplained silence.\nShowing a dismissive, indifferent, or disengaged attitude.\nFailing to demonstrate ownership or willingness to support the customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent demonstrate a warm, positive, and professional attitude throughout the interaction by communicating respectfully, showing genuine willingness to assist, maintaining a calm and approachable demeanor, adapting appropriately to the customer’s situation, and avoiding negative, dismissive, indifferent, or unprofessional behavior?\n\nEvaluation should consider:\nRespectful and courteous communication\nPositive and supportive attitude\nWillingness to assist and take ownership\nPatience and composure during challenging interactions\nAbility to make the customer feel heard and supported\nAvoiding irritation, monotone delivery, dismissiveness, or argumentative behavior\n\nRate 10 – Excellent Professionalism & Positive Engagement (Perfect Compliance)\nThe agent consistently demonstrates a warm, respectful, and customer-focused attitude throughout the interaction. The agent:\nCommunicates politely and professionally at all times.\nShows genuine willingness to help and creates a positive customer experience.\nMaintains a calm and composed approach, even when handling difficult situations.\nDemonstrates patience, empathy, and understanding where required.\nUses an approachable and supportive tone that builds customer confidence.\nAvoids any signs of irritation, indifference, negativity, or dismissive behavior.\n\nOR\nThe interaction is too short, silent, disconnected, or immediately transferred, leaving insufficient opportunity to assess the agent’s tone, attitude, or conversational behavior.\n\nRate 8 – Strong Professionalism with Minor Attitude Gap\nThe agent maintains a professional and positive interaction with only minor opportunities for improvement.\n\nExamples:\nCommunicates politely and provides assistance but the tone may occasionally lack warmth or enthusiasm.\nShows willingness to help but misses small opportunities to reassure or engage the customer.\nMaintains professionalism but may sound slightly formal, neutral, or less emotionally connected.\nMinor inconsistency in tone is observed but does not negatively impact the customer experience.\n\nRate 6 – Acceptable Professionalism with Noticeable Gaps\nThe agent remains generally polite but demonstrates limited warmth or customer engagement.\n\nExamples:\nProvides the required support but interaction feels more transactional than customer-focused.\nTone is neutral with limited enthusiasm or reassurance.\nShows occasional impatience, reduced empathy, or lack of emotional connection.\nDoes not actively create a positive customer experience but also does not display major negative behavior.\n\nRate 3 – Poor Professionalism / Inconsistent Customer Approach\nThe agent demonstrates noticeable behavioral gaps that negatively affect the interaction.\n\nExamples:\nSounds uninterested, impatient, or disengaged.\nShows limited willingness to assist or appears to be responding only to complete the process.\nDisplays inconsistent professionalism during the conversation.\nUses a cold, dismissive, or argumentative tone.\nFails to provide a supportive customer experience.\n\nRate 0 – Critical Failure / Negative Customer Experience\nThe agent demonstrates unacceptable behavior by:\nBeing rude, disrespectful, dismissive, aggressive, or confrontational.\nShowing irritation or unwillingness to help.\nArguing unnecessarily with the customer.\nUsing inappropriate language or an unprofessional tone.\nIgnoring customer concerns or creating a negative interaction through poor attitude.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "37d876c0-a30a-446a-9f2d-996393e9fe08",
      "name": "Empathetic Tone Evaluation",
      "matched": 1,
      "avgScore": 30,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent respond with genuine warmth and empathy when the customer expressed frustration or distress?\n\nFocus on TONE, not scripts. Evaluate:\n- Did the agent's voice convey care and concern, or was it flat and transactional?\n- When the customer shared a problem, did the agent acknowledge their feelings IMMEDIATELY (in the very next response) before moving to process?\n- Was the empathy specific to the customer's situation, or generic/rehearsed?\n\nDeduct for: responding to distress with 'Okay, let me check...' or jumping to procedure without first acknowledging emotion; flat/monotone delivery; generic apologies like 'sorry for the inconvenience' without personalizing.\n\nRate 10: Warm, genuine tone throughout. Every moment of customer distress met with immediate, personalized empathy. OR purely transactional call with no emotional content.\nRate 6: Mostly empathetic but missed one moment where tone fell flat or empathy came late.\nRate 3: Multiple moments where agent skipped empathy or responded transactionally to distress. Tone lacked warmth.\nRate 0: Consistently flat, dismissive, or indifferent tone. No genuine empathy shown.",
          "type": "critical",
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "860aa012-7174-4d64-acbd-bdbe9aa70823",
      "name": "Active Empathy Evaluation v3",
      "matched": 1,
      "avgScore": 30,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Evaluate the agent's active empathy by scoring EACH customer grievance moment independently. A grievance moment is any point where the customer expresses frustration, dissatisfaction, inconvenience, or recounts a negative experience.\n\nCRITICAL SCORING RULES:\n\n1. TIMING IS MANDATORY: The agent MUST acknowledge the customer's emotional state IMMEDIATELY (in their very next response) after the customer voices a grievance. An apology or empathy statement that comes 2+ turns later does NOT count for that grievance moment. Each grievance moment must be evaluated separately.\n\n2. ANTI-PATTERNS THAT REQUIRE DEDUCTION (each occurrence warrants downgrade):\n   - Agent responds to an emotional grievance by jumping straight to process/procedure (e.g., 'Okay, please provide your address' or 'Let me check that for you') WITHOUT FIRST acknowledging the customer's feelings. This is a CLEAR MISS even if the agent apologizes later in the call.\n   - Agent uses filler transitions like 'Okay', 'Alright', 'Hmm', 'Uh-huh' as the primary acknowledgment of a customer's distress instead of a genuine empathy statement.\n   - Agent repeats information the customer has already shared instead of building on it.\n   - Agent uses a flat, monotone, or robotic delivery tone even when saying empathetic words. Words alone are not enough -- the TONE must convey genuine warmth and concern.\n   - Agent provides a scripted or rehearsed-sounding care statement that feels generic rather than tailored to the customer's specific situation.\n\n3. WHAT COUNTS AS GENUINE EMPATHY:\n   - A specific, personalized acknowledgment of what the customer just described (not a generic 'sorry for the inconvenience')\n   - Warmth and concern audible in the agent's tone of voice\n   - Validating the customer's feelings before moving to resolution (e.g., 'I completely understand how frustrating that must be, especially when you were home waiting')\n\nSCORING:\n\nRate 10 - Perfect Compliance: For EVERY grievance moment in the call, the agent IMMEDIATELY responds with a timely, personalized, warm empathy statement BEFORE moving to process. Tone is consistently warm and engaged throughout. No anti-patterns present. OR the interaction is purely transactional with no emotional content requiring empathy.\n\nRate 6 - Minor Empathy Gap: The agent demonstrates empathy for MOST grievance moments but misses exactly ONE -- either the timing was slightly delayed, the acknowledgment was slightly generic, or the tone dipped briefly. All other moments were handled well.\n\nRate 3 - Moderate Empathy Gap: The agent misses empathy timing on MULTIPLE grievance moments, OR demonstrates 2-3 anti-patterns (e.g., jumps to procedure without acknowledging distress, uses flat tone, gives generic responses). May have apologized at some point but not at the critical moments when the customer needed it most.\n\nRate 0 - Poor / Critical Failure: The agent consistently fails to acknowledge customer emotions, responds to distress with purely transactional statements, uses frequent filler words as acknowledgments, maintains a flat or indifferent tone, or demonstrates hostile/dismissive behavior.",
          "type": "critical",
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "22b2ea99-89cc-4d39-9a93-27cb3bb5fc86",
      "name": "Active Empathy Evaluation v2",
      "matched": 1,
      "avgScore": 100,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent demonstrate active empathy by understanding the customer's emotional state, avoided repetition of already shared information, offered Interim apology when the customer explained any prior bad experience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted (avoided usage of OK frequently), casual, or indifferent behavior?\n\nRate 10 - Perfect Compliance: The agent instantly mirrors the customer's situation with a timely, caring response or sincere apology, offered Interim apology when the customer explained any prior bad experience. The tone is highly engaging, personalized, and proactive, providing a complete resolution without ever sounding robotic, without repetitions or casual like avoided usage of OK frequently. No deductions applied. OR when the interaction is purely transactional or informational in nature, with no emotional concern requiring empathy.\n\nRate 6 - Minor Empathy Gap: The agent provides a helpful and complete response, but misses exactly one element of emotional connection such as delivering a care statement that sounds slightly rehearsed or omitting a warm apology where it would have perfectly fit.\n\nRate 3 - Moderate Empathy Gap: The agent resolves the issue but demonstrates a noticeable lack of emotional warmth. They violate three empathy guidelines (e.g., the tone is purely transactional, they provide a rigid repetitive explanation instead of tailoring it to the customer's distress and no Interim apology offered).\n\nRate 0 - Poor / Critical Failure / Hostile Engagement: The agent demonstrates a highly casual, detached, apathetic, dismissive, repetitive or hostile attitude by providing incomplete or one-word responses, showing little to no concern, using OK frequently, failing to offer empathy or care statements, or actively shutting down the customer with indifference.",
          "type": "critical",
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        }
      ]
    }
  ],
  "week": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "matched": 300,
      "avgScore": 67.7,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "During the conversation has the RM shared any unpublished price sensitive information (UPSI) with clients, either directly or indirectly, in violation of organizational policies or regulatory guidelines. This includes sharing or discussing details about upcoming quarterly results, mergers, acquisitions, board decisions, dividend announcements, strategic tie-ups, or any material events before they are publicly disclosed, or suggesting investment actions based on such insider information? Consider direct statements or phrases that imply this, such as \"This is insider info\", \"Don’t tell anyone\", \"Company is going to announce\", \"Before market knows\", \"Confidential update\", \"Not yet public\", \"This will be in news soon\", \"Advance information\", \"Internal info\". Answer with a \"Yes\" or \"No\".                                                                                                                                                                Important clarification:\n\nDiscussions within authorized internal teams (e.g., research, compliance, strategy, treasury, internal review, management discussions) should NOT be marked as “Yes” if the conversation is clearly internal and within official organizational processes.\nDiscussions based on publicly available research, analyst opinions, market rumors already in the public domain, published reports, or officially released information should NOT be marked as “Yes”.\nGeneral research recommendations, analyst coverage discussions, or investment views without indication of non-public/confidential information should NOT be marked as “Yes”.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the agent's conversation suggest they have used or will use the client’s personal, confidential credentials (e.g., login, OTP, authentication details) OR shared the same with the customer without their consent?\nMark YES if:\nThe agent asked for client’s credentials like login details, OTP, or any other authentication details to perform actions like placing an order, resetting a password, or pledging shares for MTF.\nThe agent shared details like Login ID or PAN details to the client without their consent or confirmation.\nThe agent uses or implies actions through phrases such as: “Give me your login”, “Share OTP”, “I’ll log in for you”, “Resetting password for you”, “Pledging your shares”, “Send your ID and password”, “I’ll do it for you”, “Just forward the OTP”, “Allow me access to your account”, “Just send the OTP”.\nMark NO if:\nThe agent did not ask for or share any client login credentials, OTPs, or authentication details AND the agent did not share details like Login ID or PAN details to them without their consent or confirmation.        Important clarification:\n\nSharing or discussing non-sensitive identifiers such as Trading ID, Client Code, Customer ID,PAN CARD NO,MOBILE NUMBER,AADHAR NO, or reference/account identifiers alone should NOT be marked as “Yes”, provided no confidential authentication credentials or unauthorized sensitive information are requested/shared.\nRoutine verification steps that do not involve collecting confidential credentials (e.g., confirming name, registered number, client code, or trading ID) should NOT be marked as “Yes”.\nIf the customer voluntarily states their own credentials without agent prompting or misuse, it should only be marked “Yes” if the agent encourages, accepts, uses, stores, or proceeds with such credentials improperly.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the call suggest that the RM/agent is placing, discussing, facilitating, or agreeing to place trades/instructions through an unregistered proxy, third party, family member, or non-registered phone number/account holder without proper authorization, verification, or explicit confirmation from the registered customer?\n\nThis includes situations where:\n\nThe RM/agent identifies or becomes aware that the caller is not the registered customer/account holder.\nThe caller states or implies they are a proxy/family member/assistant/relative/friend handling the account.\nThe RM/agent asks questions such as “Who are you?”, “Are you the account holder?”, or otherwise identifies a mismatch in identity or registered contact details.\nDespite identifying the caller as an unregistered or unauthorized person, the RM/agent continues discussing trades, positions, account actions, investment instructions, or operational requests instead of refusing or redirecting appropriately.\nThe RM/agent proceeds without asking the registered customer to call directly or without following official authorization/verification procedures.\n\nExamples of indicative proxy references include:\n\n“I am calling on behalf of my father/husband/wife/sister/brother/son/daughter”\n“This is his/her phone”\n“I handle the account for him/her”\n“Please place the trade, they are not available”\n“I manage the account”\n“I’ll confirm later with them”\n\nExpected compliant behavior:\n\nThe RM/agent should deny proceeding with trading/account actions for unregistered proxies unless proper authorization exists.\nThe RM/agent should ask the registered client to call directly or follow official authorization procedures.\n\nImportant clarification:\n\nMere mention of family relationships or shared discussion does NOT automatically qualify as “Yes”.\nMark “Yes” only if the RM/agent continues with trade/account-related discussion, execution, or facilitation after identifying or reasonably suspecting that the caller is not the authorized registered customer and does not appropriately deny or redirect the request.\nIf the RM/agent explicitly refuses, redirects to official process, requests registered-user confirmation, or declines to proceed, mark “No”.\n\nAnswer with:\n\n“Yes” – if the RM/agent proceeds or facilitates activity despite recognizing an unregistered/unauthorized proxy or third party.\n“No” – if no such situation occurs or if the RM/agent appropriately refuses or redirects the interaction.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent promote or position an insurance product in a misleading manner by presenting it primarily as an investment, return-generating, or liquidity product without clearly explaining insurance-related risks, charges, lock-in, surrender conditions, or policy terms?\n\nThis includes situations where the RM/Agent:\n\nPositions insurance like a mutual fund, FD, market investment, or wealth creation product without proper disclosure.\nEmphasizes returns, NAV growth, tax-free benefits, portfolio creation, or market-linked gains without discussing risks or policy conditions.\nUses urgency or sales pressure tactics such as:\n“Offer expires today”\n“Special offer”\n“Limited-time benefit”\nHighlights short payment terms such as:\n“One-time premium”\n“Pay for 2 years only”\nwithout clearly explaining long-term obligations or surrender implications.\nSuggests easy liquidity or exit using phrases such as:\n“Any time exit”\n“Like MF redemption”\nwithout clarifying lock-in period, surrender charges, or exit conditions.\n\nExamples of indicative phrases include:\n\n“Like a mutual fund”\n“Tax-free investment”\n“Guaranteed wealth creation”\n“Market-linked returns”\n“Portfolio building”\n“NAV growth”\n“Additional benefit”\n“Investment plan”\n“High return insurance”\n\nImportant clarification:\n\nMark “Yes” only if the product is positioned misleadingly without adequate explanation of insurance features, risks, lock-in, charges, surrender conditions, or policy limitations.\nMark “No” if the RM/Agent clearly explains policy structure, insurance coverage, risks, lock-in, surrender conditions, charges, and product suitability.\nMark “NA” if insurance products are not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent encourage, assist, process, or facilitate activation/enabling of F&O (Futures & Options) trading without clearly explaining the associated risks, including the possibility of significant financial loss?\n\nThis includes situations where the RM/Agent:\n\nEncourages the customer to activate F&O trading.\nAssists with F&O activation, onboarding, permission enablement, or documentation.\nPromotes F&O trading as a profit opportunity without proper risk disclosure.\nExplains only benefits, margin, leverage, or profit potential without discussing risks.\nEncourages call/put/options trading without explaining possible losses.\n\nExamples of indicative phrases include:\n\n“Activate F&O”\n“You can trade in options/calls/puts”\n“This can generate quick profit”\n“Enable derivatives segment”\n“I will help activate F&O”\n“You can recover losses through options”\n“Use leverage for better returns”\n\nImportant clarification:\n\nMark “Yes” only if F&O activation/facilitation/promotion happens without adequate risk disclosure.\nProper disclosure should include mention of risks such as volatility, leverage risk, possibility of partial/full capital loss, or suitability concerns.\nMark “No” if the RM/Agent clearly explains trading risks before or during the activation discussion.\nGeneral educational discussions about derivatives without activation/facilitation should not automatically be marked “Yes”.\n\nAnswer with:\n\n“Yes” – if F&O activation/facilitation occurs without proper risk explanation.\n“No” – if adequate risk disclosure is provided.\n“NA” – if F&O activation or trading access is not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM reference or recommend any research calls related to F&O (Futures & Options) or Equity that fall outside of the organization's approved research channels (e.g., HSL research) or not provided by the organization's approved research team?\n\nNote: Promoting or recommending investment advice from external firms, unauthorized analysts, or financial bloggers is strictly not allowed.\n\nAnswer: Yes / No\n\nTrackable Keywords:\n\nresearch\n\nrecommended\n\nHSL recommended\n\nHSL research team\n\nHDFC Securities research\n\nHDFC Security recommended",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the RM/agent, either directly or indirectly, indicate that the investment/product/service would be routed through a personal, unofficial, or third-party distribution arrangement outside HDFC’s approved and monitored channels, especially where the RM/agent’s own involvement, compensation, or relationship to that distributor/entity is unclear or personal in nature?\n\nThis includes but is not limited to:\n\nMentioning their own or an immediate family member’s (spouse, child, parent, sibling, friends) business, firm, or distribution setup.\nReferring to personal mutual fund distribution activities (e.g., “my own distribution”, “I can do it through my setup/business”).\nSuggesting investment under a family member’s distributor code or account.\nIndicating that the investment will be handled outside normal HDFC visibility, supervision, reporting, or portfolio tracking.\nPromoting or routing investments through unofficial third-party arrangements not clearly identified as HDFC-approved channels.\nMentioning that the investment can be done with “no commission”, “zero charges” or similar fee-related benefits specifically as part of routing the investment outside official HDFC channels.\nImportant clarification:\n\nMere mention of external products, AMCs, platforms, brokers, or distributors (e.g., Zerodha, Groww, MF Central, CAMS, BSE Star MF, NSE NMF, AMC names, etc.) should NOT be marked as “Yes” unless the RM/agent is personally promoting, routing, or facilitating investment through a non-HDFC/personal arrangement.\n\nAnswer with:\n\n“Yes” – if the RM/agent promotes, routes, or suggests an unofficial/personal/off-book third-party investment arrangement outside HDFC channels.\n“No” – if products/platforms are discussed only for informational, comparison, market, or legitimate official-channel purposes.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM's conversation contain any promise or offer to share profits, commissions, or revenue from the client's trades or investments? Does it suggest any financial arrangement where the RM would personally benefit from the client's funds in a manner outside of their official compensation or has mentions of phrases like \"Share profits\", \"I'll manage your money\", \"I’ll invest for you\", \"Guarantee returns\", \"Send me the money\", \"Transfer funds to me\", \"Split profits\", \"Personal account\", \"I’ll trade on your behalf\", \"commision\". Answer with a \"Yes\" or \"No\".   ",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "def97e3c-6733-43ca-a768-2d0b02f7abc2",
      "name": "test suggestion with sop",
      "matched": 141,
      "avgScore": 54,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent greet the customer using the standard greeting script?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves by name?",
          "type": null,
          "avgScore": null,
          "maxScore": 3,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "What was the overall tone of the agent during the greeting?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent verify the customer's identity before sharing account details?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "How many verification factors did the agent use?",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent ask for the registered mobile number or account number?",
          "type": null,
          "avgScore": null,
          "maxScore": 3,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "What was the customer's primary concern?",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent listen to the customer's issue without interrupting?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "389a0c4b-7351-4962-be72-958731688342",
      "name": "Non-SOP QP",
      "matched": 120,
      "avgScore": 58.8,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Check the company SOP for agent opening steps. Did the agent follow these opening procedures?",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did agent mention processing fee details -- amount as well as tax?",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "matched": 81,
      "avgScore": 67.5,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "matched": 80,
      "avgScore": 67.3,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "matched": 78,
      "avgScore": 72,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "matched": 67,
      "avgScore": 68.5,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": " \n         \nDid the agent  not say anything on a set of 2 min or longer calls. Do not mark \"Yes\" if forwareded to voicemail. Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the call blank without the agent not saying anything. Do not mark \"Yes\" if forwarded to voicemail.  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
      "name": "HSL - Others",
      "matched": 47,
      "avgScore": 61.3,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "matched": 37,
      "avgScore": 65.2,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "matched": 31,
      "avgScore": 66.2,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on self-research. Do not mark \"Yes\" if agent state previous or current market trends and tell expected return. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "matched": 28,
      "avgScore": 66.7,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "matched": 11,
      "avgScore": 64.8,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "matched": 9,
      "avgScore": 58,
      "scoreDelta": null,
      "severity": "critical",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "9cbbf7e0-4a46-4844-99aa-938b74e81b28",
      "name": "EFV3",
      "matched": 4,
      "avgScore": 100,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
          "type": null,
          "avgScore": null,
          "maxScore": 10,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nGeneral Assessment Rule:\nSelect a behaviour only when there is clear evidence that the ST/CRO initiated, encouraged, promoted, pressured, or participated in the behaviour in a manner inconsistent with company policy.\nDo not select a behaviour solely because the customer initiated the discussion, voluntarily provided information, or requested the action.\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nMultiple \nNA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process.\nST/CRO asks the customer to contact them on WhatsApp or any messaging platform, regardless of whether a phone number is explicitly stated.\nST/CRO solicits the customer's mobile number under any pretext, including for follow-up, confirmation, or convenience\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. \nMark \"Multiple\" if:\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nMark \"NA\" if:\nNone of the five predefined behaviour categories — Influencing SR Cancellation, Requesting Personal Phone Number, Offering Offline/Cheap Service, Asking to Change Slot, or Expressing Reluctance — are present in the conversation.\nCustomer independently requests cancellation.\nIssue has already been resolved and cancellation is discussed solely as a closure process.\nST/CRO explains the cancellation process after the customer requests it.\nCustomer voluntarily shares a number.\nNumber is requested for approved service coordination.\nNumber is requested for account verification, OTP validation, invoice sharing, AMC processing, complaint management, or service delivery.\nCustomer provides an alternate contact because they will not be available.\nCustomer requests the rescheduling.\nST/CRO merely facilitates or confirms a customer-requested change.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.\nCritical Rule: NA must NEVER be selected if any one of the five predefined categories is clearly evidenced in the conversation. \n",
          "type": null,
          "avgScore": null,
          "maxScore": 0,
          "avgPct": null,
          "prevPct": null
        }
      ]
    }
  ],
  "yesterday": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "matched": 100,
      "avgScore": 82.6,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "During the conversation has the RM shared any unpublished price sensitive information (UPSI) with clients, either directly or indirectly, in violation of organizational policies or regulatory guidelines. This includes sharing or discussing details about upcoming quarterly results, mergers, acquisitions, board decisions, dividend announcements, strategic tie-ups, or any material events before they are publicly disclosed, or suggesting investment actions based on such insider information? Consider direct statements or phrases that imply this, such as \"This is insider info\", \"Don’t tell anyone\", \"Company is going to announce\", \"Before market knows\", \"Confidential update\", \"Not yet public\", \"This will be in news soon\", \"Advance information\", \"Internal info\". Answer with a \"Yes\" or \"No\".                                                                                                                                                                Important clarification:\n\nDiscussions within authorized internal teams (e.g., research, compliance, strategy, treasury, internal review, management discussions) should NOT be marked as “Yes” if the conversation is clearly internal and within official organizational processes.\nDiscussions based on publicly available research, analyst opinions, market rumors already in the public domain, published reports, or officially released information should NOT be marked as “Yes”.\nGeneral research recommendations, analyst coverage discussions, or investment views without indication of non-public/confidential information should NOT be marked as “Yes”.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the agent's conversation suggest they have used or will use the client’s personal, confidential credentials (e.g., login, OTP, authentication details) OR shared the same with the customer without their consent?\nMark YES if:\nThe agent asked for client’s credentials like login details, OTP, or any other authentication details to perform actions like placing an order, resetting a password, or pledging shares for MTF.\nThe agent shared details like Login ID or PAN details to the client without their consent or confirmation.\nThe agent uses or implies actions through phrases such as: “Give me your login”, “Share OTP”, “I’ll log in for you”, “Resetting password for you”, “Pledging your shares”, “Send your ID and password”, “I’ll do it for you”, “Just forward the OTP”, “Allow me access to your account”, “Just send the OTP”.\nMark NO if:\nThe agent did not ask for or share any client login credentials, OTPs, or authentication details AND the agent did not share details like Login ID or PAN details to them without their consent or confirmation.        Important clarification:\n\nSharing or discussing non-sensitive identifiers such as Trading ID, Client Code, Customer ID,PAN CARD NO,MOBILE NUMBER,AADHAR NO, or reference/account identifiers alone should NOT be marked as “Yes”, provided no confidential authentication credentials or unauthorized sensitive information are requested/shared.\nRoutine verification steps that do not involve collecting confidential credentials (e.g., confirming name, registered number, client code, or trading ID) should NOT be marked as “Yes”.\nIf the customer voluntarily states their own credentials without agent prompting or misuse, it should only be marked “Yes” if the agent encourages, accepts, uses, stores, or proceeds with such credentials improperly.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the call suggest that the RM/agent is placing, discussing, facilitating, or agreeing to place trades/instructions through an unregistered proxy, third party, family member, or non-registered phone number/account holder without proper authorization, verification, or explicit confirmation from the registered customer?\n\nThis includes situations where:\n\nThe RM/agent identifies or becomes aware that the caller is not the registered customer/account holder.\nThe caller states or implies they are a proxy/family member/assistant/relative/friend handling the account.\nThe RM/agent asks questions such as “Who are you?”, “Are you the account holder?”, or otherwise identifies a mismatch in identity or registered contact details.\nDespite identifying the caller as an unregistered or unauthorized person, the RM/agent continues discussing trades, positions, account actions, investment instructions, or operational requests instead of refusing or redirecting appropriately.\nThe RM/agent proceeds without asking the registered customer to call directly or without following official authorization/verification procedures.\n\nExamples of indicative proxy references include:\n\n“I am calling on behalf of my father/husband/wife/sister/brother/son/daughter”\n“This is his/her phone”\n“I handle the account for him/her”\n“Please place the trade, they are not available”\n“I manage the account”\n“I’ll confirm later with them”\n\nExpected compliant behavior:\n\nThe RM/agent should deny proceeding with trading/account actions for unregistered proxies unless proper authorization exists.\nThe RM/agent should ask the registered client to call directly or follow official authorization procedures.\n\nImportant clarification:\n\nMere mention of family relationships or shared discussion does NOT automatically qualify as “Yes”.\nMark “Yes” only if the RM/agent continues with trade/account-related discussion, execution, or facilitation after identifying or reasonably suspecting that the caller is not the authorized registered customer and does not appropriately deny or redirect the request.\nIf the RM/agent explicitly refuses, redirects to official process, requests registered-user confirmation, or declines to proceed, mark “No”.\n\nAnswer with:\n\n“Yes” – if the RM/agent proceeds or facilitates activity despite recognizing an unregistered/unauthorized proxy or third party.\n“No” – if no such situation occurs or if the RM/agent appropriately refuses or redirects the interaction.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent promote or position an insurance product in a misleading manner by presenting it primarily as an investment, return-generating, or liquidity product without clearly explaining insurance-related risks, charges, lock-in, surrender conditions, or policy terms?\n\nThis includes situations where the RM/Agent:\n\nPositions insurance like a mutual fund, FD, market investment, or wealth creation product without proper disclosure.\nEmphasizes returns, NAV growth, tax-free benefits, portfolio creation, or market-linked gains without discussing risks or policy conditions.\nUses urgency or sales pressure tactics such as:\n“Offer expires today”\n“Special offer”\n“Limited-time benefit”\nHighlights short payment terms such as:\n“One-time premium”\n“Pay for 2 years only”\nwithout clearly explaining long-term obligations or surrender implications.\nSuggests easy liquidity or exit using phrases such as:\n“Any time exit”\n“Like MF redemption”\nwithout clarifying lock-in period, surrender charges, or exit conditions.\n\nExamples of indicative phrases include:\n\n“Like a mutual fund”\n“Tax-free investment”\n“Guaranteed wealth creation”\n“Market-linked returns”\n“Portfolio building”\n“NAV growth”\n“Additional benefit”\n“Investment plan”\n“High return insurance”\n\nImportant clarification:\n\nMark “Yes” only if the product is positioned misleadingly without adequate explanation of insurance features, risks, lock-in, charges, surrender conditions, or policy limitations.\nMark “No” if the RM/Agent clearly explains policy structure, insurance coverage, risks, lock-in, surrender conditions, charges, and product suitability.\nMark “NA” if insurance products are not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM/Agent encourage, assist, process, or facilitate activation/enabling of F&O (Futures & Options) trading without clearly explaining the associated risks, including the possibility of significant financial loss?\n\nThis includes situations where the RM/Agent:\n\nEncourages the customer to activate F&O trading.\nAssists with F&O activation, onboarding, permission enablement, or documentation.\nPromotes F&O trading as a profit opportunity without proper risk disclosure.\nExplains only benefits, margin, leverage, or profit potential without discussing risks.\nEncourages call/put/options trading without explaining possible losses.\n\nExamples of indicative phrases include:\n\n“Activate F&O”\n“You can trade in options/calls/puts”\n“This can generate quick profit”\n“Enable derivatives segment”\n“I will help activate F&O”\n“You can recover losses through options”\n“Use leverage for better returns”\n\nImportant clarification:\n\nMark “Yes” only if F&O activation/facilitation/promotion happens without adequate risk disclosure.\nProper disclosure should include mention of risks such as volatility, leverage risk, possibility of partial/full capital loss, or suitability concerns.\nMark “No” if the RM/Agent clearly explains trading risks before or during the activation discussion.\nGeneral educational discussions about derivatives without activation/facilitation should not automatically be marked “Yes”.\n\nAnswer with:\n\n“Yes” – if F&O activation/facilitation occurs without proper risk explanation.\n“No” – if adequate risk disclosure is provided.\n“NA” – if F&O activation or trading access is not discussed.",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM reference or recommend any research calls related to F&O (Futures & Options) or Equity that fall outside of the organization's approved research channels (e.g., HSL research) or not provided by the organization's approved research team?\n\nNote: Promoting or recommending investment advice from external firms, unauthorized analysts, or financial bloggers is strictly not allowed.\n\nAnswer: Yes / No\n\nTrackable Keywords:\n\nresearch\n\nrecommended\n\nHSL recommended\n\nHSL research team\n\nHDFC Securities research\n\nHDFC Security recommended",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the RM/agent, either directly or indirectly, indicate that the investment/product/service would be routed through a personal, unofficial, or third-party distribution arrangement outside HDFC’s approved and monitored channels, especially where the RM/agent’s own involvement, compensation, or relationship to that distributor/entity is unclear or personal in nature?\n\nThis includes but is not limited to:\n\nMentioning their own or an immediate family member’s (spouse, child, parent, sibling, friends) business, firm, or distribution setup.\nReferring to personal mutual fund distribution activities (e.g., “my own distribution”, “I can do it through my setup/business”).\nSuggesting investment under a family member’s distributor code or account.\nIndicating that the investment will be handled outside normal HDFC visibility, supervision, reporting, or portfolio tracking.\nPromoting or routing investments through unofficial third-party arrangements not clearly identified as HDFC-approved channels.\nMentioning that the investment can be done with “no commission”, “zero charges” or similar fee-related benefits specifically as part of routing the investment outside official HDFC channels.\nImportant clarification:\n\nMere mention of external products, AMCs, platforms, brokers, or distributors (e.g., Zerodha, Groww, MF Central, CAMS, BSE Star MF, NSE NMF, AMC names, etc.) should NOT be marked as “Yes” unless the RM/agent is personally promoting, routing, or facilitating investment through a non-HDFC/personal arrangement.\n\nAnswer with:\n\n“Yes” – if the RM/agent promotes, routes, or suggests an unofficial/personal/off-book third-party investment arrangement outside HDFC channels.\n“No” – if products/platforms are discussed only for informational, comparison, market, or legitimate official-channel purposes.\"",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Does the RM's conversation contain any promise or offer to share profits, commissions, or revenue from the client's trades or investments? Does it suggest any financial arrangement where the RM would personally benefit from the client's funds in a manner outside of their official compensation or has mentions of phrases like \"Share profits\", \"I'll manage your money\", \"I’ll invest for you\", \"Guarantee returns\", \"Send me the money\", \"Transfer funds to me\", \"Split profits\", \"Personal account\", \"I’ll trade on your behalf\", \"commision\". Answer with a \"Yes\" or \"No\".   ",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "matched": 31,
      "avgScore": 82,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "matched": 29,
      "avgScore": 74.4,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "matched": 24,
      "avgScore": 74.8,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "matched": 22,
      "avgScore": 98.5,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": " \n         \nDid the agent  not say anything on a set of 2 min or longer calls. Do not mark \"Yes\" if forwareded to voicemail. Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Was the call blank without the agent not saying anything. Do not mark \"Yes\" if forwarded to voicemail.  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "matched": 18,
      "avgScore": 77.6,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on self-research. Do not mark \"Yes\" if agent state previous or current market trends and tell expected return. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "matched": 10,
      "avgScore": 74.9,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "matched": 9,
      "avgScore": 74.4,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "matched": 4,
      "avgScore": 82.4,
      "scoreDelta": null,
      "severity": "healthy",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
          "type": null,
          "avgScore": null,
          "maxScore": 5,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "matched": 2,
      "avgScore": 73.8,
      "scoreDelta": null,
      "severity": "attention",
      "smarterAssignment": true,
      "kpis": [
        {
          "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 1,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        },
        {
          "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
          "type": null,
          "avgScore": null,
          "maxScore": 2,
          "avgPct": null,
          "prevPct": null
        }
      ]
    }
  ]
};

const baseAiInsightRowsByPeriod = {
  "month": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "severity": "critical",
      "avgScore": 67.7,
      "matchedPct": 21.9,
      "summary": "HSL - QA Compliance (All Calls) averages 67.7% — lowest among active profiles with 300 evaluations.",
      "alert": "Low avg score (67.7%)"
    },
    {
      "id": "def97e3c-6733-43ca-a768-2d0b02f7abc2",
      "name": "test suggestion with sop",
      "severity": "critical",
      "avgScore": 55.7,
      "matchedPct": 15,
      "summary": "test suggestion with sop averages 55.7% — lowest among active profiles with 205 evaluations.",
      "alert": "Low avg score (55.7%)"
    },
    {
      "id": "389a0c4b-7351-4962-be72-958731688342",
      "name": "Non-SOP QP",
      "severity": "critical",
      "avgScore": 58,
      "matchedPct": 12.5,
      "summary": "Non-SOP QP averages 58% — lowest among active profiles with 171 evaluations.",
      "alert": "Low avg score (58%)"
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "severity": "critical",
      "avgScore": 67.5,
      "matchedPct": 5.9,
      "summary": "HSL - Enquiry & Account Query averages 67.5% — lowest among active profiles with 81 evaluations.",
      "alert": "Low avg score (67.5%)"
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "severity": "critical",
      "avgScore": 67.3,
      "matchedPct": 5.8,
      "summary": "HSL - Advisory, Portfolio & Sales averages 67.3% — lowest among active profiles with 80 evaluations.",
      "alert": "Low avg score (67.3%)"
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "severity": "attention",
      "avgScore": 72,
      "matchedPct": 5.7,
      "summary": "HSL - Confirmation & Follow Up at 72% avg with 5.7% of total analysis volume.",
      "alert": null
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "severity": "critical",
      "avgScore": 68.5,
      "matchedPct": 4.9,
      "summary": "HSL - Non-Conversation averages 68.5% — lowest among active profiles with 67 evaluations.",
      "alert": "Low avg score (68.5%)"
    },
    {
      "id": "dbc24f70-d0cb-4ac7-ba49-3bfbb7099146",
      "name": "EFV1",
      "severity": "attention",
      "avgScore": 71.6,
      "matchedPct": 4.6,
      "summary": "EFV1 at 71.6% avg with 4.6% of total analysis volume.",
      "alert": null
    },
    {
      "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
      "name": "HSL - Others",
      "severity": "critical",
      "avgScore": 61.3,
      "matchedPct": 3.4,
      "summary": "HSL - Others averages 61.3% — lowest among active profiles with 47 evaluations.",
      "alert": "Low avg score (61.3%)"
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "severity": "critical",
      "avgScore": 65.2,
      "matchedPct": 2.7,
      "summary": "HSL - Market Update averages 65.2% — lowest among active profiles with 37 evaluations.",
      "alert": "Low avg score (65.2%)"
    },
    {
      "id": "9cbbf7e0-4a46-4844-99aa-938b74e81b28",
      "name": "EFV3",
      "severity": "attention",
      "avgScore": 76.8,
      "matchedPct": 2.7,
      "summary": "EFV3 at 76.8% avg with 2.7% of total analysis volume.",
      "alert": null
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "severity": "critical",
      "avgScore": 66.2,
      "matchedPct": 2.3,
      "summary": "HSL - Order Placement averages 66.2% — lowest among active profiles with 31 evaluations.",
      "alert": "Low avg score (66.2%)"
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "severity": "critical",
      "avgScore": 66.7,
      "matchedPct": 2,
      "summary": "HSL - Activation averages 66.7% — lowest among active profiles with 28 evaluations.",
      "alert": "Low avg score (66.7%)"
    },
    {
      "id": "ace05b63-6b50-4b9c-95b6-8d9dd3ad5c53",
      "name": "EFV2",
      "severity": "attention",
      "avgScore": 73.1,
      "matchedPct": 1.9,
      "summary": "EFV2 at 73.1% avg with 1.9% of total analysis volume.",
      "alert": null
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "severity": "critical",
      "avgScore": 64.8,
      "matchedPct": 0.8,
      "summary": "HSL - Onboarding & KYC averages 64.8% — lowest among active profiles with 11 evaluations.",
      "alert": "Low avg score (64.8%)"
    },
    {
      "id": "ec43d0e5-31f6-4f51-8cd7-aae9da8105b9",
      "name": "madhu-test-default",
      "severity": "attention",
      "avgScore": null,
      "matchedPct": 0.8,
      "summary": "madhu-test-default at null% avg with 0.8% of total analysis volume.",
      "alert": null
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "severity": "critical",
      "avgScore": 58,
      "matchedPct": 0.7,
      "summary": "HSL - Complaint & Escalation averages 58% — lowest among active profiles with 9 evaluations.",
      "alert": "Low avg score (58%)"
    },
    {
      "id": "fa6ad09a-0a5e-40a9-ad3d-5f2a30dcc956",
      "name": "Empathy - Natural Scale",
      "severity": "attention",
      "avgScore": 75,
      "matchedPct": 0.6,
      "summary": "Empathy - Natural Scale at 75% avg with 0.6% of total analysis volume.",
      "alert": null
    },
    {
      "id": "355f5d39-d72a-40c2-9096-ce401ab76a61",
      "name": "qp-1",
      "severity": "critical",
      "avgScore": 38.9,
      "matchedPct": 0.4,
      "summary": "qp-1 averages 38.9% — lowest among active profiles with 6 evaluations.",
      "alert": "Low avg score (38.9%)"
    },
    {
      "id": "127caefe-47c6-43e0-88c8-b684a1150540",
      "name": "V7final bluedart",
      "severity": "attention",
      "avgScore": 75.4,
      "matchedPct": 0.4,
      "summary": "V7final bluedart at 75.4% avg with 0.4% of total analysis volume.",
      "alert": null
    },
    {
      "id": "036ed93d-4b46-47bc-8675-19a4d7023240",
      "name": "v10Bluedart_v3",
      "severity": "attention",
      "avgScore": 77.9,
      "matchedPct": 0.4,
      "summary": "v10Bluedart_v3 at 77.9% avg with 0.4% of total analysis volume.",
      "alert": null
    },
    {
      "id": "b80f9a0f-3ef7-46a7-ac09-ce4e666b0f5e",
      "name": "BluedartV9.1_QP",
      "severity": "critical",
      "avgScore": 63.4,
      "matchedPct": 0.4,
      "summary": "BluedartV9.1_QP averages 63.4% — lowest among active profiles with 5 evaluations.",
      "alert": "Low avg score (63.4%)"
    },
    {
      "id": "b5a65d62-d976-4646-90ee-72c7b3d6b1ff",
      "name": "Bluedart Updated QP",
      "severity": "attention",
      "avgScore": 78.2,
      "matchedPct": 0.4,
      "summary": "Bluedart Updated QP at 78.2% avg with 0.4% of total analysis volume.",
      "alert": null
    },
    {
      "id": "ece568b4-598b-4456-8a36-a644faf9d65c",
      "name": "BluedartupdatedV6",
      "severity": "critical",
      "avgScore": 65.2,
      "matchedPct": 0.4,
      "summary": "BluedartupdatedV6 averages 65.2% — lowest among active profiles with 5 evaluations.",
      "alert": "Low avg score (65.2%)"
    },
    {
      "id": "9c7f47ae-14ee-4bb2-bd32-6fa60e615528",
      "name": "Empathy - Tone & Intent",
      "severity": "critical",
      "avgScore": 60,
      "matchedPct": 0.4,
      "summary": "Empathy - Tone & Intent averages 60% — lowest among active profiles with 5 evaluations.",
      "alert": "Low avg score (60%)"
    },
    {
      "id": "1d3c7851-a046-4345-bdae-b5c59b02584d",
      "name": "last blurdart - copy",
      "severity": "attention",
      "avgScore": 79.6,
      "matchedPct": 0.3,
      "summary": "last blurdart - copy at 79.6% avg with 0.3% of total analysis volume.",
      "alert": null
    },
    {
      "id": "ea9a3b80-f4d9-4dd9-9bd9-27571c55c183",
      "name": "last blurdart",
      "severity": "attention",
      "avgScore": 73.5,
      "matchedPct": 0.3,
      "summary": "last blurdart at 73.5% avg with 0.3% of total analysis volume.",
      "alert": null
    },
    {
      "id": "b976024b-8edc-4103-9a0c-11f2dc330471",
      "name": "v7 Profile Blue Dart test",
      "severity": "attention",
      "avgScore": 79.2,
      "matchedPct": 0.3,
      "summary": "v7 Profile Blue Dart test at 79.2% avg with 0.3% of total analysis volume.",
      "alert": null
    },
    {
      "id": "9cb792fd-9789-4c4d-a01c-87445dfb33d4",
      "name": "v10Bluedart",
      "severity": "attention",
      "avgScore": 75,
      "matchedPct": 0.3,
      "summary": "v10Bluedart at 75% avg with 0.3% of total analysis volume.",
      "alert": null
    },
    {
      "id": "49733f1c-bbd6-4c65-915a-7bd2cee03fed",
      "name": "BluedartV8_QP",
      "severity": "healthy",
      "avgScore": 82.7,
      "matchedPct": 0.3,
      "summary": "BluedartV8_QP performing strongly at 82.7% across 4 evaluations.",
      "alert": null
    },
    {
      "id": "051efbac-5591-40c3-9493-0e7023ddabb2",
      "name": "BluedartV7_QP",
      "severity": "critical",
      "avgScore": 65,
      "matchedPct": 0.3,
      "summary": "BluedartV7_QP averages 65% — lowest among active profiles with 4 evaluations.",
      "alert": "Low avg score (65%)"
    },
    {
      "id": "8d888882-f8ff-456f-99b1-a8270e3eca35",
      "name": "ai ingestion profile",
      "severity": "attention",
      "avgScore": null,
      "matchedPct": 0.2,
      "summary": "ai ingestion profile at null% avg with 0.2% of total analysis volume.",
      "alert": null
    },
    {
      "id": "c713f3f4-a541-401d-b56c-5b30d570e86d",
      "name": "SaleskpiV2updated",
      "severity": "healthy",
      "avgScore": 95.9,
      "matchedPct": 0.2,
      "summary": "SaleskpiV2updated performing strongly at 95.9% across 3 evaluations.",
      "alert": null
    },
    {
      "id": "3c72d6bd-7053-4a07-bd85-400ccbb46bfe",
      "name": "SaleskpiV2",
      "severity": "attention",
      "avgScore": 78,
      "matchedPct": 0.2,
      "summary": "SaleskpiV2 at 78% avg with 0.2% of total analysis volume.",
      "alert": null
    },
    {
      "id": "8bebe309-1b93-4191-ac5d-06f3ff5f6d5d",
      "name": "nasa-test-demo-1001 - copy",
      "severity": "critical",
      "avgScore": 52,
      "matchedPct": 0.1,
      "summary": "nasa-test-demo-1001 - copy averages 52% — lowest among active profiles with 1 evaluations.",
      "alert": "Low avg score (52%)"
    },
    {
      "id": "214cbad9-aabe-4d12-9229-2f3ce4c4a7f4",
      "name": "nasa-test-demo",
      "severity": "attention",
      "avgScore": 76,
      "matchedPct": 0.1,
      "summary": "nasa-test-demo at 76% avg with 0.1% of total analysis volume.",
      "alert": null
    },
    {
      "id": "04f4714b-355a-4cd3-95e7-2ef9093e51cc",
      "name": "v10Bluedart_v2",
      "severity": "attention",
      "avgScore": 72.3,
      "matchedPct": 0.1,
      "summary": "v10Bluedart_v2 at 72.3% avg with 0.1% of total analysis volume.",
      "alert": null
    },
    {
      "id": "339f46f1-b5fa-4d9e-aa48-fe21b65c9a44",
      "name": "Bluedartv6updatedV1",
      "severity": "healthy",
      "avgScore": 86.2,
      "matchedPct": 0.1,
      "summary": "Bluedartv6updatedV1 performing strongly at 86.2% across 1 evaluations.",
      "alert": null
    },
    {
      "id": "c1517e9e-d2bc-4c46-879b-4a8ab6cd28b2",
      "name": "BludartV6updated",
      "severity": "healthy",
      "avgScore": 92.3,
      "matchedPct": 0.1,
      "summary": "BludartV6updated performing strongly at 92.3% across 1 evaluations.",
      "alert": null
    },
    {
      "id": "bbdf2025-3366-430b-9aea-d66be826c0e1",
      "name": "Bluedart Complete QP v2",
      "severity": "attention",
      "avgScore": 78.5,
      "matchedPct": 0.1,
      "summary": "Bluedart Complete QP v2 at 78.5% avg with 0.1% of total analysis volume.",
      "alert": null
    },
    {
      "id": "37d876c0-a30a-446a-9f2d-996393e9fe08",
      "name": "Empathetic Tone Evaluation",
      "severity": "critical",
      "avgScore": 30,
      "matchedPct": 0.1,
      "summary": "Empathetic Tone Evaluation averages 30% — lowest among active profiles with 1 evaluations.",
      "alert": "Low avg score (30%)"
    },
    {
      "id": "860aa012-7174-4d64-acbd-bdbe9aa70823",
      "name": "Active Empathy Evaluation v3",
      "severity": "critical",
      "avgScore": 30,
      "matchedPct": 0.1,
      "summary": "Active Empathy Evaluation v3 averages 30% — lowest among active profiles with 1 evaluations.",
      "alert": "Low avg score (30%)"
    },
    {
      "id": "22b2ea99-89cc-4d39-9a93-27cb3bb5fc86",
      "name": "Active Empathy Evaluation v2",
      "severity": "healthy",
      "avgScore": 100,
      "matchedPct": 0.1,
      "summary": "Active Empathy Evaluation v2 performing strongly at 100% across 1 evaluations.",
      "alert": null
    },
    {
      "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
      "name": "test profile with sop watu",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "db75f996-a066-41fe-9642-d4639c090bc8",
      "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "4347a256-5a0f-4f85-8d84-f8f4de3d02b2",
      "name": "HSL Test",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    }
  ],
  "week": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "severity": "critical",
      "avgScore": 67.7,
      "matchedPct": 29,
      "summary": "HSL - QA Compliance (All Calls) averages 67.7% — lowest among active profiles with 300 evaluations.",
      "alert": "Low avg score (67.7%)"
    },
    {
      "id": "def97e3c-6733-43ca-a768-2d0b02f7abc2",
      "name": "test suggestion with sop",
      "severity": "critical",
      "avgScore": 54,
      "matchedPct": 13.6,
      "summary": "test suggestion with sop averages 54% — lowest among active profiles with 141 evaluations.",
      "alert": "Low avg score (54%)"
    },
    {
      "id": "389a0c4b-7351-4962-be72-958731688342",
      "name": "Non-SOP QP",
      "severity": "critical",
      "avgScore": 58.8,
      "matchedPct": 11.6,
      "summary": "Non-SOP QP averages 58.8% — lowest among active profiles with 120 evaluations.",
      "alert": "Low avg score (58.8%)"
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "severity": "critical",
      "avgScore": 67.5,
      "matchedPct": 7.8,
      "summary": "HSL - Enquiry & Account Query averages 67.5% — lowest among active profiles with 81 evaluations.",
      "alert": "Low avg score (67.5%)"
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "severity": "critical",
      "avgScore": 67.3,
      "matchedPct": 7.7,
      "summary": "HSL - Advisory, Portfolio & Sales averages 67.3% — lowest among active profiles with 80 evaluations.",
      "alert": "Low avg score (67.3%)"
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "severity": "attention",
      "avgScore": 72,
      "matchedPct": 7.5,
      "summary": "HSL - Confirmation & Follow Up at 72% avg with 7.5% of total analysis volume.",
      "alert": null
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "severity": "critical",
      "avgScore": 68.5,
      "matchedPct": 6.5,
      "summary": "HSL - Non-Conversation averages 68.5% — lowest among active profiles with 67 evaluations.",
      "alert": "Low avg score (68.5%)"
    },
    {
      "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
      "name": "HSL - Others",
      "severity": "critical",
      "avgScore": 61.3,
      "matchedPct": 4.5,
      "summary": "HSL - Others averages 61.3% — lowest among active profiles with 47 evaluations.",
      "alert": "Low avg score (61.3%)"
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "severity": "critical",
      "avgScore": 65.2,
      "matchedPct": 3.6,
      "summary": "HSL - Market Update averages 65.2% — lowest among active profiles with 37 evaluations.",
      "alert": "Low avg score (65.2%)"
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "severity": "critical",
      "avgScore": 66.2,
      "matchedPct": 3,
      "summary": "HSL - Order Placement averages 66.2% — lowest among active profiles with 31 evaluations.",
      "alert": "Low avg score (66.2%)"
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "severity": "critical",
      "avgScore": 66.7,
      "matchedPct": 2.7,
      "summary": "HSL - Activation averages 66.7% — lowest among active profiles with 28 evaluations.",
      "alert": "Low avg score (66.7%)"
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "severity": "critical",
      "avgScore": 64.8,
      "matchedPct": 1.1,
      "summary": "HSL - Onboarding & KYC averages 64.8% — lowest among active profiles with 11 evaluations.",
      "alert": "Low avg score (64.8%)"
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "severity": "critical",
      "avgScore": 58,
      "matchedPct": 0.9,
      "summary": "HSL - Complaint & Escalation averages 58% — lowest among active profiles with 9 evaluations.",
      "alert": "Low avg score (58%)"
    },
    {
      "id": "9cbbf7e0-4a46-4844-99aa-938b74e81b28",
      "name": "EFV3",
      "severity": "healthy",
      "avgScore": 100,
      "matchedPct": 0.4,
      "summary": "EFV3 performing strongly at 100% across 4 evaluations.",
      "alert": null
    },
    {
      "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
      "name": "test profile with sop watu",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "db75f996-a066-41fe-9642-d4639c090bc8",
      "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "8d888882-f8ff-456f-99b1-a8270e3eca35",
      "name": "ai ingestion profile",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    }
  ],
  "yesterday": [
    {
      "id": "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a",
      "name": "HSL - QA Compliance (All Calls)",
      "severity": "healthy",
      "avgScore": 82.6,
      "matchedPct": 40.2,
      "summary": "HSL - QA Compliance (All Calls) performing strongly at 82.6% across 100 evaluations.",
      "alert": null
    },
    {
      "id": "f1aa098c-b57a-41df-a5ff-da436aeb42b2",
      "name": "HSL - Confirmation & Follow Up",
      "severity": "healthy",
      "avgScore": 82,
      "matchedPct": 12.4,
      "summary": "HSL - Confirmation & Follow Up performing strongly at 82% across 31 evaluations.",
      "alert": null
    },
    {
      "id": "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb",
      "name": "HSL - Advisory, Portfolio & Sales",
      "severity": "attention",
      "avgScore": 74.4,
      "matchedPct": 11.6,
      "summary": "HSL - Advisory, Portfolio & Sales at 74.4% avg with 11.6% of total analysis volume.",
      "alert": null
    },
    {
      "id": "bcd51c66-5214-4c0b-8961-e0f5a52a9354",
      "name": "HSL - Enquiry & Account Query",
      "severity": "attention",
      "avgScore": 74.8,
      "matchedPct": 9.6,
      "summary": "HSL - Enquiry & Account Query at 74.8% avg with 9.6% of total analysis volume.",
      "alert": null
    },
    {
      "id": "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8",
      "name": "HSL - Non-Conversation",
      "severity": "healthy",
      "avgScore": 98.5,
      "matchedPct": 8.8,
      "summary": "HSL - Non-Conversation performing strongly at 98.5% across 22 evaluations.",
      "alert": null
    },
    {
      "id": "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b",
      "name": "HSL - Order Placement",
      "severity": "attention",
      "avgScore": 77.6,
      "matchedPct": 7.2,
      "summary": "HSL - Order Placement at 77.6% avg with 7.2% of total analysis volume.",
      "alert": null
    },
    {
      "id": "d482214d-737a-45d9-9a46-939398338496",
      "name": "HSL - Market Update",
      "severity": "attention",
      "avgScore": 74.9,
      "matchedPct": 4,
      "summary": "HSL - Market Update at 74.9% avg with 4% of total analysis volume.",
      "alert": null
    },
    {
      "id": "e889eae1-1693-4db3-8f4a-fc9d7d038aa4",
      "name": "HSL - Activation",
      "severity": "attention",
      "avgScore": 74.4,
      "matchedPct": 3.6,
      "summary": "HSL - Activation at 74.4% avg with 3.6% of total analysis volume.",
      "alert": null
    },
    {
      "id": "196cdb90-3015-4b58-999a-9e5c134e1721",
      "name": "HSL - Onboarding & KYC",
      "severity": "healthy",
      "avgScore": 82.4,
      "matchedPct": 1.6,
      "summary": "HSL - Onboarding & KYC performing strongly at 82.4% across 4 evaluations.",
      "alert": null
    },
    {
      "id": "d397adca-3c64-4acc-a0fe-db8b51cbad05",
      "name": "HSL - Complaint & Escalation",
      "severity": "attention",
      "avgScore": 73.8,
      "matchedPct": 0.8,
      "summary": "HSL - Complaint & Escalation at 73.8% avg with 0.8% of total analysis volume.",
      "alert": null
    },
    {
      "id": "730132d9-e6e9-4dc4-899d-51574a3c83e5",
      "name": "test profile with sop watu",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc",
      "name": "HSL - Others",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    },
    {
      "id": "db75f996-a066-41fe-9642-d4639c090bc8",
      "name": "01_HSL_Advisory_Portfolio_Sales.xlsx",
      "severity": "unused",
      "avgScore": null,
      "matchedPct": 0,
      "summary": "No interactions matched this period — profile may be unused or assignment rules need review.",
      "alert": "Zero matched interactions"
    }
  ]
};

const qpDataBase = {
  "41a5bdb8-17d1-4e65-9d90-0e0d96d58d4a": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 300,
      "qpScore": 67.7,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 67.7
      }
    ],
    "aiInsights": {
      "headline": "HSL - QA Compliance (All Calls) is the highest-risk profile (67.7% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "67.7%",
          "detail": "HSL - QA Compliance (All Calls) is trending below target (67.7% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - QA Compliance (All Calls) with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "During the conversation has the RM shared any unpublished price sensitive information (UPSI) with clients, either directly or indirectly, in violation of organizational policies or regulatory guidelines. This includes sharing or discussing details about upcoming quarterly results, mergers, acquisitions, board decisions, dividend announcements, strategic tie-ups, or any material events before they are publicly disclosed, or suggesting investment actions based on such insider information? Consider direct statements or phrases that imply this, such as \"This is insider info\", \"Don’t tell anyone\", \"Company is going to announce\", \"Before market knows\", \"Confidential update\", \"Not yet public\", \"This will be in news soon\", \"Advance information\", \"Internal info\". Answer with a \"Yes\" or \"No\".                                                                                                                                                                Important clarification:\n\nDiscussions within authorized internal teams (e.g., research, compliance, strategy, treasury, internal review, management discussions) should NOT be marked as “Yes” if the conversation is clearly internal and within official organizational processes.\nDiscussions based on publicly available research, analyst opinions, market rumors already in the public domain, published reports, or officially released information should NOT be marked as “Yes”.\nGeneral research recommendations, analyst coverage discussions, or investment views without indication of non-public/confidential information should NOT be marked as “Yes”.",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the agent's conversation suggest they have used or will use the client’s personal, confidential credentials (e.g., login, OTP, authentication details) OR shared the same with the customer without their consent?\nMark YES if:\nThe agent asked for client’s credentials like login details, OTP, or any other authentication details to perform actions like placing an order, resetting a password, or pledging shares for MTF.\nThe agent shared details like Login ID or PAN details to the client without their consent or confirmation.\nThe agent uses or implies actions through phrases such as: “Give me your login”, “Share OTP”, “I’ll log in for you”, “Resetting password for you”, “Pledging your shares”, “Send your ID and password”, “I’ll do it for you”, “Just forward the OTP”, “Allow me access to your account”, “Just send the OTP”.\nMark NO if:\nThe agent did not ask for or share any client login credentials, OTPs, or authentication details AND the agent did not share details like Login ID or PAN details to them without their consent or confirmation.        Important clarification:\n\nSharing or discussing non-sensitive identifiers such as Trading ID, Client Code, Customer ID,PAN CARD NO,MOBILE NUMBER,AADHAR NO, or reference/account identifiers alone should NOT be marked as “Yes”, provided no confidential authentication credentials or unauthorized sensitive information are requested/shared.\nRoutine verification steps that do not involve collecting confidential credentials (e.g., confirming name, registered number, client code, or trading ID) should NOT be marked as “Yes”.\nIf the customer voluntarily states their own credentials without agent prompting or misuse, it should only be marked “Yes” if the agent encourages, accepts, uses, stores, or proceeds with such credentials improperly.",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the call suggest that the RM/agent is placing, discussing, facilitating, or agreeing to place trades/instructions through an unregistered proxy, third party, family member, or non-registered phone number/account holder without proper authorization, verification, or explicit confirmation from the registered customer?\n\nThis includes situations where:\n\nThe RM/agent identifies or becomes aware that the caller is not the registered customer/account holder.\nThe caller states or implies they are a proxy/family member/assistant/relative/friend handling the account.\nThe RM/agent asks questions such as “Who are you?”, “Are you the account holder?”, or otherwise identifies a mismatch in identity or registered contact details.\nDespite identifying the caller as an unregistered or unauthorized person, the RM/agent continues discussing trades, positions, account actions, investment instructions, or operational requests instead of refusing or redirecting appropriately.\nThe RM/agent proceeds without asking the registered customer to call directly or without following official authorization/verification procedures.\n\nExamples of indicative proxy references include:\n\n“I am calling on behalf of my father/husband/wife/sister/brother/son/daughter”\n“This is his/her phone”\n“I handle the account for him/her”\n“Please place the trade, they are not available”\n“I manage the account”\n“I’ll confirm later with them”\n\nExpected compliant behavior:\n\nThe RM/agent should deny proceeding with trading/account actions for unregistered proxies unless proper authorization exists.\nThe RM/agent should ask the registered client to call directly or follow official authorization procedures.\n\nImportant clarification:\n\nMere mention of family relationships or shared discussion does NOT automatically qualify as “Yes”.\nMark “Yes” only if the RM/agent continues with trade/account-related discussion, execution, or facilitation after identifying or reasonably suspecting that the caller is not the authorized registered customer and does not appropriately deny or redirect the request.\nIf the RM/agent explicitly refuses, redirects to official process, requests registered-user confirmation, or declines to proceed, mark “No”.\n\nAnswer with:\n\n“Yes” – if the RM/agent proceeds or facilitates activity despite recognizing an unregistered/unauthorized proxy or third party.\n“No” – if no such situation occurs or if the RM/agent appropriately refuses or redirects the interaction.\"",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the RM/Agent promote or position an insurance product in a misleading manner by presenting it primarily as an investment, return-generating, or liquidity product without clearly explaining insurance-related risks, charges, lock-in, surrender conditions, or policy terms?\n\nThis includes situations where the RM/Agent:\n\nPositions insurance like a mutual fund, FD, market investment, or wealth creation product without proper disclosure.\nEmphasizes returns, NAV growth, tax-free benefits, portfolio creation, or market-linked gains without discussing risks or policy conditions.\nUses urgency or sales pressure tactics such as:\n“Offer expires today”\n“Special offer”\n“Limited-time benefit”\nHighlights short payment terms such as:\n“One-time premium”\n“Pay for 2 years only”\nwithout clearly explaining long-term obligations or surrender implications.\nSuggests easy liquidity or exit using phrases such as:\n“Any time exit”\n“Like MF redemption”\nwithout clarifying lock-in period, surrender charges, or exit conditions.\n\nExamples of indicative phrases include:\n\n“Like a mutual fund”\n“Tax-free investment”\n“Guaranteed wealth creation”\n“Market-linked returns”\n“Portfolio building”\n“NAV growth”\n“Additional benefit”\n“Investment plan”\n“High return insurance”\n\nImportant clarification:\n\nMark “Yes” only if the product is positioned misleadingly without adequate explanation of insurance features, risks, lock-in, charges, surrender conditions, or policy limitations.\nMark “No” if the RM/Agent clearly explains policy structure, insurance coverage, risks, lock-in, surrender conditions, charges, and product suitability.\nMark “NA” if insurance products are not discussed.",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the RM/Agent encourage, assist, process, or facilitate activation/enabling of F&O (Futures & Options) trading without clearly explaining the associated risks, including the possibility of significant financial loss?\n\nThis includes situations where the RM/Agent:\n\nEncourages the customer to activate F&O trading.\nAssists with F&O activation, onboarding, permission enablement, or documentation.\nPromotes F&O trading as a profit opportunity without proper risk disclosure.\nExplains only benefits, margin, leverage, or profit potential without discussing risks.\nEncourages call/put/options trading without explaining possible losses.\n\nExamples of indicative phrases include:\n\n“Activate F&O”\n“You can trade in options/calls/puts”\n“This can generate quick profit”\n“Enable derivatives segment”\n“I will help activate F&O”\n“You can recover losses through options”\n“Use leverage for better returns”\n\nImportant clarification:\n\nMark “Yes” only if F&O activation/facilitation/promotion happens without adequate risk disclosure.\nProper disclosure should include mention of risks such as volatility, leverage risk, possibility of partial/full capital loss, or suitability concerns.\nMark “No” if the RM/Agent clearly explains trading risks before or during the activation discussion.\nGeneral educational discussions about derivatives without activation/facilitation should not automatically be marked “Yes”.\n\nAnswer with:\n\n“Yes” – if F&O activation/facilitation occurs without proper risk explanation.\n“No” – if adequate risk disclosure is provided.\n“NA” – if F&O activation or trading access is not discussed.",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the RM reference or recommend any research calls related to F&O (Futures & Options) or Equity that fall outside of the organization's approved research channels (e.g., HSL research) or not provided by the organization's approved research team?\n\nNote: Promoting or recommending investment advice from external firms, unauthorized analysts, or financial bloggers is strictly not allowed.\n\nAnswer: Yes / No\n\nTrackable Keywords:\n\nresearch\n\nrecommended\n\nHSL recommended\n\nHSL research team\n\nHDFC Securities research\n\nHDFC Security recommended",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the RM/agent, either directly or indirectly, indicate that the investment/product/service would be routed through a personal, unofficial, or third-party distribution arrangement outside HDFC’s approved and monitored channels, especially where the RM/agent’s own involvement, compensation, or relationship to that distributor/entity is unclear or personal in nature?\n\nThis includes but is not limited to:\n\nMentioning their own or an immediate family member’s (spouse, child, parent, sibling, friends) business, firm, or distribution setup.\nReferring to personal mutual fund distribution activities (e.g., “my own distribution”, “I can do it through my setup/business”).\nSuggesting investment under a family member’s distributor code or account.\nIndicating that the investment will be handled outside normal HDFC visibility, supervision, reporting, or portfolio tracking.\nPromoting or routing investments through unofficial third-party arrangements not clearly identified as HDFC-approved channels.\nMentioning that the investment can be done with “no commission”, “zero charges” or similar fee-related benefits specifically as part of routing the investment outside official HDFC channels.\nImportant clarification:\n\nMere mention of external products, AMCs, platforms, brokers, or distributors (e.g., Zerodha, Groww, MF Central, CAMS, BSE Star MF, NSE NMF, AMC names, etc.) should NOT be marked as “Yes” unless the RM/agent is personally promoting, routing, or facilitating investment through a non-HDFC/personal arrangement.\n\nAnswer with:\n\n“Yes” – if the RM/agent promotes, routes, or suggests an unofficial/personal/off-book third-party investment arrangement outside HDFC channels.\n“No” – if products/platforms are discussed only for informational, comparison, market, or legitimate official-channel purposes.\"",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Does the RM's conversation contain any promise or offer to share profits, commissions, or revenue from the client's trades or investments? Does it suggest any financial arrangement where the RM would personally benefit from the client's funds in a manner outside of their official compensation or has mentions of phrases like \"Share profits\", \"I'll manage your money\", \"I’ll invest for you\", \"Guarantee returns\", \"Send me the money\", \"Transfer funds to me\", \"Split profits\", \"Personal account\", \"I’ll trade on your behalf\", \"commision\". Answer with a \"Yes\" or \"No\".   ",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "def97e3c-6733-43ca-a768-2d0b02f7abc2": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 205,
      "qpScore": 55.7,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 68.9
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 28.6
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 51
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 54
      }
    ],
    "aiInsights": {
      "headline": "test suggestion with sop is the highest-risk profile (55.7% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "55.7%",
          "detail": "test suggestion with sop is trending below target (55.7% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for test suggestion with sop with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent greet the customer using the standard greeting script?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves by name?",
        "type": null,
        "avgScore": null,
        "maxScore": 3,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "What was the overall tone of the agent during the greeting?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent verify the customer's identity before sharing account details?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "How many verification factors did the agent use?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent ask for the registered mobile number or account number?",
        "type": null,
        "avgScore": null,
        "maxScore": 3,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "What was the customer's primary concern?",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent listen to the customer's issue without interrupting?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "389a0c4b-7351-4962-be72-958731688342": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 171,
      "qpScore": 58,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 65.8
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 40
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 45.6
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 58.8
      }
    ],
    "aiInsights": {
      "headline": "Non-SOP QP is the highest-risk profile (58% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "58%",
          "detail": "Non-SOP QP is trending below target (58% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for Non-SOP QP with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Check the company SOP for agent opening steps. Did the agent follow these opening procedures?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did agent mention processing fee details -- amount as well as tax?",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "bcd51c66-5214-4c0b-8961-e0f5a52a9354": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 81,
      "qpScore": 67.5,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 67.5
      }
    ],
    "aiInsights": {
      "headline": "HSL - Enquiry & Account Query is the highest-risk profile (67.5% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "67.5%",
          "detail": "HSL - Enquiry & Account Query is trending below target (67.5% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Enquiry & Account Query with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "50df1d4a-8c7e-4dcc-95d0-fad9365a1deb": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 80,
      "qpScore": 67.3,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 67.3
      }
    ],
    "aiInsights": {
      "headline": "HSL - Advisory, Portfolio & Sales is the highest-risk profile (67.3% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "67.3%",
          "detail": "HSL - Advisory, Portfolio & Sales is trending below target (67.3% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Advisory, Portfolio & Sales with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\nExplaining the clear benefit of a product means communicating how the product directly addresses a customer's needs, solves a problem, or improves their situation. It emphasizes the tangible value or advantage the customer will gain from using the product, helping them understand why it is worth purchasing or using. Explanation should be straightforward, relevant and highlight key outcomes, such as time savings, cost savings, convenience, or enhanced performance.Did the relationship manager/ agent explain clear benefit of product to customer. Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Was the agent/ relationship manager able to handle Objections from client with a appropriate rebuttal. Answer with \"Yes\" or \"No\" Answer with \"Yes\" or \"No\" Mark as \"NA\" in case of abrupt call ending or no objections were made.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "f1aa098c-b57a-41df-a5ff-da436aeb42b2": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 78,
      "qpScore": 72,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 72
      }
    ],
    "aiInsights": {
      "headline": "HSL - Confirmation & Follow Up is stable but below target at 72% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "72%",
          "detail": "HSL - Confirmation & Follow Up is trending below target (72% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring HSL - Confirmation & Follow Up; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "600c26cb-1dc9-4c8b-9f74-1c9e77ec30d8": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 67,
      "qpScore": 68.5,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 68.5
      }
    ],
    "aiInsights": {
      "headline": "HSL - Non-Conversation is the highest-risk profile (68.5% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "68.5%",
          "detail": "HSL - Non-Conversation is trending below target (68.5% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Non-Conversation with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": " \n         \nDid the agent  not say anything on a set of 2 min or longer calls. Do not mark \"Yes\" if forwareded to voicemail. Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Was the call blank without the agent not saying anything. Do not mark \"Yes\" if forwarded to voicemail.  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "dbc24f70-d0cb-4ac7-ba49-3bfbb7099146": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 63,
      "qpScore": 71.6,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 71.6
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "EFV1 is stable but below target at 71.6% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "71.6%",
          "detail": "EFV1 is trending below target (71.6% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring EFV1; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "Not Provided",
        "count": 4
      },
      {
        "label": "To leave a voicemail message.",
        "count": 4
      },
      {
        "label": "Rescheduling a service appointment.",
        "count": 2
      },
      {
        "label": "To inquire about the status of a 350 rupees recharge related to a complaint.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nNone / Other / NA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. Mark \"Multiple\" if:\n\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nSelect \"Multiple\" instead of choosing a single category when multiple behaviours are present and materially evidenced in the interaction.\nMark \"None / Other / NA\" if:\nNo high-risk or non-compliant behaviour is observed during the conversation.\nThe conversation does not contain any of the listed behaviours.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "e1a7e9e0-5f51-46bc-9cc2-8fa4b2d748dc": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 47,
      "qpScore": 61.3,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 61.3
      }
    ],
    "aiInsights": {
      "headline": "HSL - Others is the highest-risk profile (61.3% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "61.3%",
          "detail": "HSL - Others is trending below target (61.3% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Others with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "d482214d-737a-45d9-9a46-939398338496": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 37,
      "qpScore": 65.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 65.2
      }
    ],
    "aiInsights": {
      "headline": "HSL - Market Update is the highest-risk profile (65.2% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "65.2%",
          "detail": "HSL - Market Update is trending below target (65.2% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Market Update with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "9cbbf7e0-4a46-4844-99aa-938b74e81b28": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 37,
      "qpScore": 76.8,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 67.6
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 100
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 100
      }
    ],
    "aiInsights": {
      "headline": "EFV3 is stable but below target at 76.8% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "76.8%",
          "detail": "EFV3 is trending below target (76.8% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring EFV3; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "To discuss motor payment and arrange a callback.",
        "count": 1
      },
      {
        "label": "To arrange a callback for motor payment discussion.",
        "count": 1
      },
      {
        "label": "To discuss a motor payment.",
        "count": 1
      },
      {
        "label": "To discuss payment method for an account.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nGeneral Assessment Rule:\nSelect a behaviour only when there is clear evidence that the ST/CRO initiated, encouraged, promoted, pressured, or participated in the behaviour in a manner inconsistent with company policy.\nDo not select a behaviour solely because the customer initiated the discussion, voluntarily provided information, or requested the action.\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nMultiple \nNA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process.\nST/CRO asks the customer to contact them on WhatsApp or any messaging platform, regardless of whether a phone number is explicitly stated.\nST/CRO solicits the customer's mobile number under any pretext, including for follow-up, confirmation, or convenience\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. \nMark \"Multiple\" if:\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nMark \"NA\" if:\nNone of the five predefined behaviour categories — Influencing SR Cancellation, Requesting Personal Phone Number, Offering Offline/Cheap Service, Asking to Change Slot, or Expressing Reluctance — are present in the conversation.\nCustomer independently requests cancellation.\nIssue has already been resolved and cancellation is discussed solely as a closure process.\nST/CRO explains the cancellation process after the customer requests it.\nCustomer voluntarily shares a number.\nNumber is requested for approved service coordination.\nNumber is requested for account verification, OTP validation, invoice sharing, AMC processing, complaint management, or service delivery.\nCustomer provides an alternate contact because they will not be available.\nCustomer requests the rescheduling.\nST/CRO merely facilitates or confirms a customer-requested change.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.\nCritical Rule: NA must NEVER be selected if any one of the five predefined categories is clearly evidenced in the conversation. \n",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "5f65f3d0-4e7c-4a8c-8ad5-df8142be561b": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 31,
      "qpScore": 66.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 66.2
      }
    ],
    "aiInsights": {
      "headline": "HSL - Order Placement is the highest-risk profile (66.2% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "66.2%",
          "detail": "HSL - Order Placement is trending below target (66.2% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Order Placement with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on self-research. Do not mark \"Yes\" if agent state previous or current market trends and tell expected return. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest. Answer with a \"Yes\" or \"No\". Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "e889eae1-1693-4db3-8f4a-fc9d7d038aa4": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 28,
      "qpScore": 66.7,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 66.7
      }
    ],
    "aiInsights": {
      "headline": "HSL - Activation is the highest-risk profile (66.7% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "66.7%",
          "detail": "HSL - Activation is trending below target (66.7% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Activation with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "ace05b63-6b50-4b9c-95b6-8d9dd3ad5c53": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 26,
      "qpScore": 73.1,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 73.1
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "EFV2 is stable but below target at 73.1% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "73.1%",
          "detail": "EFV2 is trending below target (73.1% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring EFV2; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "To schedule a repair for a broken vacuum cleaner.",
        "count": 1
      },
      {
        "label": "To reschedule a service appointment for an RO repair to an earlier time.",
        "count": 1
      },
      {
        "label": "To ensure water purifier service is correctly processed under warranty.",
        "count": 1
      },
      {
        "label": "Resolving a machine issue and exchanging documentation.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the ST/CRO communicate with the customer using polite, respectful, and professional language throughout the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses courteous and respectful language throughout the call.\nST/CRO addresses the customer professionally and appropriately.\nST/CRO avoids rude, dismissive, sarcastic, or confrontational remarks.\nST/CRO maintains patience and professionalism even when the customer is upset or difficult.\nThe conversation reflects a customer-centric and respectful communication style.\nMark \"No\" if:\nST/CRO uses rude, disrespectful, aggressive, sarcastic, or unprofessional language.\nST/CRO interrupts the customer excessively or speaks in a dismissive manner.\nST/CRO argues with, blames, threatens, or talks down to the customer.\nST/CRO displays impatience, irritation, frustration, or lack of courtesy during the interaction.\nThe overall communication does not meet expected standards of professional customer service.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess communication behavior.\nInsufficient speech is available to determine whether politeness and respectful language were demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO appropriately demonstrate empathy and reassurance when the customer's situation warranted it?\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, or dissatisfaction requiring empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO demonstrate empathy and provide appropriate reassurance when addressing the customer's concerns, issues, or inconvenience?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges the customer's concern, inconvenience, frustration, or situation.\nST/CRO uses empathetic statements that show understanding of the customer's perspective.\nST/CRO reassures the customer by explaining how the issue will be addressed or resolved.\nST/CRO provides confidence that appropriate action will be taken.\nThe conversation reflects genuine concern for the customer's experience and satisfaction.\nMark \"No\" if:\nST/CRO ignores, dismisses, or minimizes the customer's concerns.\nST/CRO focuses only on procedural information without acknowledging the customer's situation.\nST/CRO fails to provide reassurance when the customer expresses frustration, confusion, anxiety, or dissatisfaction.\nST/CRO responds in a cold, indifferent, or transactional manner despite clear customer concerns.\nOpportunities to demonstrate empathy or reassurance are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nCustomer does not express any concern, issue, inconvenience, confusion, dissatisfaction, or emotion that would reasonably require empathy or reassurance.\nThe interaction is purely informational or transactional with no emotional context.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, heavily distorted, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe customer only requests information, completes a routine transaction, or asks procedural questions without indicating any concern or difficulty.\nThe call is limited to authentication, verification, transfer, hold notifications, or routing activities, with no discussion of a customer issue or concern.\nThe customer disconnects before presenting a concern, issue, or reason for the call.\nThe interaction consists only of greetings, introductions, closing statements, or call wrap-up remarks.\nThe customer is silent, unresponsive, or provides insufficient information to determine whether empathy or reassurance was needed.\nThe customer contacts the ST/CRO for a status update or information only and does not express frustration, urgency, dissatisfaction, or concern requiring an empathetic response.\nThe interaction is too brief to create a reasonable opportunity for the ST/CRO to demonstrate empathy or reassurance.\nThe customer communicates a neutral statement or request without indicating any negative impact, inconvenience, confusion, or emotional concern.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO clearly explain the next steps, service process, or expected actions to the customer?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO clearly explains what will happen next regarding the service request, appointment, resolution, or follow-up.\nST/CRO provides specific information about timelines, visit schedules, approvals, actions required, or expected outcomes.\nST/CRO ensures the customer understands the process and any responsibilities they may have.\nInstructions, requirements, or next actions are communicated in a simple and understandable manner.\nThe customer is left with a clear understanding of the subsequent steps in the service journey.\nMark \"No\" if:\nST/CRO fails to explain the next steps when the situation requires it.\nInformation regarding the service process, resolution path, or follow-up actions is incomplete, vague, or confusing.\nST/CRO assumes customer understanding without providing adequate guidance.\nCustomer remains uncertain about what will happen next or what action is expected from them.\nOpportunities to clarify the process or next steps are present but not utilized.\nSTRICTLY Mark \"NA\" if:\nNo next steps, process explanation, or follow-up actions are required based on the nature of the interaction.\nThe customer's query is fully resolved through a simple informational response that does not require additional actions.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO communicate in a customer-friendly manner that was easy to understand, helpful, and focused on the customer's needs?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO uses clear, simple, and easy-to-understand language throughout the conversation.\nST/CRO avoids excessive technical jargon or explains technical terms when necessary.\nST/CRO actively helps the customer understand the issue, service process, or resolution.\nST/CRO adapts communication to the customer's level of understanding and responds appropriately to questions.\nThe overall interaction is supportive, helpful, and focused on delivering a positive customer experience.\nMark \"No\" if:\nST/CRO uses confusing, overly technical, or unclear language that the customer may not understand.\nST/CRO provides incomplete, vague, or unhelpful responses to customer questions.\nST/CRO communicates in a manner that makes it difficult for the customer to understand the issue, process, or resolution.\nST/CRO appears dismissive, unhelpful, or indifferent to the customer's needs.\nThe communication style negatively impacts the customer's ability to follow the conversation or make informed decisions.\nSTRICTLY Mark \"NA\" if:\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.\nThe interaction is too brief to assess the quality of communication.\nInsufficient speech is available to determine whether customer-friendly communication was demonstrated.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively identify, pitch, and attempt to convert a relevant sales opportunity (e.g., AMC, value-added service, product upgrade, or related offering) during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO identifies a valid sales opportunity based on the customer's situation, product condition, service history, or needs.\nST/CRO proactively introduces and explains the relevant offering, such as AMC, extended service, upgrade, or additional service.\nST/CRO clearly communicates the benefits, value proposition, and relevance of the offering to the customer.\nST/CRO addresses customer questions, concerns, or objections related to the offering.\nST/CRO makes a genuine effort to generate customer interest, secure agreement, or progress the sales conversation.\nMark \"No\" if:\nA valid sales opportunity exists, but ST/CRO fails to identify or discuss it.\nST/CRO mentions the offering without adequately explaining its benefits or value.\nST/CRO fails to engage the customer or address objections when interest is shown.\nST/CRO misses an opportunity to promote relevant products, services, or AMC plans.\nThe sales pitch is ineffective, incomplete, or lacks an attempt to influence customer consideration.\nSTRICTLY Mark \"NA\" if:\nNo relevant sales, AMC, upgrade, or cross-sell opportunity exists based on the context of the interaction.\nThe conversation is solely focused on service execution, complaint handling, scheduling, or information sharing with no reasonable sales opportunity.\nCustomer explicitly declines discussion of any additional products or services before a sales conversation can reasonably occur.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred between the ST/CRO and customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the ST/CRO effectively address and handle the customer's objections, concerns, hesitations, or resistance during the conversation?\n\nAnswer Options:\n\nYes / No / NA\n\nMark \"Yes\" if:\nST/CRO acknowledges and understands the customer's objection or concern.\nST/CRO provides relevant explanations, clarifications, or solutions to address the objection.\nST/CRO responds confidently and professionally without becoming defensive or argumentative.\nST/CRO attempts to overcome hesitation related to service, appointment, pricing, AMC, process, or other concerns.\nThe customer receives a reasonable response aimed at resolving or reducing the objection.\nMark \"No\" if:\nST/CRO ignores, dismisses, or fails to address the customer's objection.\nST/CRO provides incomplete, inaccurate, or irrelevant responses to customer concerns.\nST/CRO fails to explore solutions or alternatives when objections are raised.\nST/CRO responds defensively, argumentatively, or in a manner that escalates the concern.\nThe customer's objection remains unaddressed despite an opportunity to handle it.\nSTRICTLY Mark \"NA\" if:\nThe customer does not raise any objection, concern, hesitation, or resistance during the conversation.\nThe interaction is purely informational or transactional and does not require objection handling.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Which high-risk or non-compliant behaviour, if any, was exhibited by the ST/CRO during the conversation?\n\nGeneral Assessment Rule:\nSelect a behaviour only when there is clear evidence that the ST/CRO initiated, encouraged, promoted, pressured, or participated in the behaviour in a manner inconsistent with company policy.\nDo not select a behaviour solely because the customer initiated the discussion, voluntarily provided information, or requested the action.\n\nAnswer Options:\nInfluencing or Suggesting SR Cancellation\nRequesting Customer's Personal Phone Number\nOffering Offline or Cheap Service\nAsking Customer to Change Service Slot\nExpressing Difficulty, Inability, or Reluctance to Attend the Job\nMultiple \nNA\nMark \"Influencing or Suggesting SR Cancellation\" if:\nST/CRO directly or indirectly encourages the customer to cancel the service request.\nST/CRO suggests cancellation as the preferred option instead of pursuing service completion.\nST/CRO discourages the customer from proceeding with the scheduled service.\nST/CRO attempts to influence the customer's decision toward cancellation.\nST/CRO requests or pressures the customer to cancel due to technician availability, workload, travel distance, scheduling constraints, or personal reasons.\nST/CRO uses language that creates doubt about continuing with the service request, resulting in a cancellation recommendation.\nMark \"Requesting Customer's Personal Phone Number\" if:\nST/CRO requests the customer's personal phone number for communication outside approved company channels.\nST/CRO asks the customer to connect through personal calls, SMS, WhatsApp, or similar platforms.\nST/CRO shares personal contact details and encourages direct communication.\nST/CRO requests the customer's alternate number specifically to continue discussions outside the official system.\nST/CRO asks the customer to save their personal number for future repairs, service requests, or follow-ups.\nST/CRO shares a personal number for handling future complaints, bookings, cancellations, or rescheduling outside the official process.\nST/CRO asks the customer to contact them on WhatsApp or any messaging platform, regardless of whether a phone number is explicitly stated.\nST/CRO solicits the customer's mobile number under any pretext, including for follow-up, confirmation, or convenience\nMark \"Offering Offline or Cheap Service\" if:\nST/CRO offers unofficial, private, discounted, or cash-based service outside approved company processes.\nST/CRO suggests direct payment arrangements or personal service engagement.\nST/CRO attempts to bypass official booking, billing, warranty, or service procedures.\nMark \"Asking Customer to Change Service Slot\" if:\nST/CRO requests or encourages the customer to reschedule the appointment primarily for technician convenience.\nST/CRO attempts to persuade the customer to accept an alternative service slot.\nST/CRO creates pressure to modify the scheduled appointment.\nMark \"Expressing Difficulty, Inability, or Reluctance to Attend the Job\" if:\nST/CRO communicates unwillingness, reluctance, or inability to attend the assigned service visit.\nST/CRO expresses personal inconvenience, workload concerns, travel constraints, or other reasons indicating resistance to servicing the customer.\nST/CRO shows lack of commitment toward completing the assigned job. \nMark \"Multiple\" if:\nThe ST/CRO exhibits two or more of the listed high-risk or non-compliant behaviours during the same conversation.\nMore than one predefined category clearly applies based on the conversation content.\nExamples include:\nRequesting the customer's personal phone number and offering offline or discounted service.\nSuggesting SR cancellation and expressing reluctance to attend the job.\nAsking the customer to change the service slot and requesting communication through personal channels.\nMark \"NA\" if:\nNone of the five predefined behaviour categories — Influencing SR Cancellation, Requesting Personal Phone Number, Offering Offline/Cheap Service, Asking to Change Slot, or Expressing Reluctance — are present in the conversation.\nThe conversation has been fully reviewed and no ST/CRO-initiated non-compliant behaviour was detected.\nA different behavioural issue is observed that does not clearly fit any of the predefined categories.\nVoicemail, IVR, automated recording, or unanswered call.\nAudio is unclear, incomplete, or inaudible.\nNo meaningful conversation occurred.\nThere is insufficient conversation content to assess ST/CRO behaviour.\nCritical Rule: NA must NEVER be selected if any one of the five predefined categories is clearly evidenced in the conversation. \n",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "196cdb90-3015-4b58-999a-9e5c134e1721": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 11,
      "qpScore": 64.8,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 64.8
      }
    ],
    "aiInsights": {
      "headline": "HSL - Onboarding & KYC is the highest-risk profile (64.8% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "64.8%",
          "detail": "HSL - Onboarding & KYC is trending below target (64.8% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Onboarding & KYC with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n\nClient profiling refers to the process of gathering and analysing detailed information about clients or customers in order to better understand their needs, preferences, behaviours, and demographics.\n\nDemographics: Age, gender, income, education level, occupation, etc.\nPsychographics: Interests, values, lifestyle, and attitudes.\nBehavioural data: Past purchasing patterns, service usage, and response to marketing campaigns.\nGeographics: Location, region, and environmental factors that could influence behaviour.\nNeeds and pain points: Identifying the challenges clients are looking to solve.                                                                                    Did the agent try to understand the requirement of the client? how well the agent gathered relevant information about the client’s needs, preferences, and expectations during the call. Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent gather insights about the client’s needs. Answer with \"Yes\" or \"No\". Mark as \"NA\" in case of abrupt call ending or relationship manager already have enough infromation of customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "ec43d0e5-31f6-4f51-8cd7-aae9da8105b9": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 11,
      "qpScore": null,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "madhu-test-default is stable but below target at null% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring madhu-test-default; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "To explain a Fin Nifty bear put strategy to the customer.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to discuss their motor payment with Aeon.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about and discuss their motor payment with EON Credit.",
        "count": 1
      },
      {
        "label": "To inquire about and discuss motor payment for their account.",
        "count": 1
      }
    ],
    "kpis": []
  },
  "d397adca-3c64-4acc-a0fe-db8b51cbad05": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 9,
      "qpScore": 58,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 58
      }
    ],
    "aiInsights": {
      "headline": "HSL - Complaint & Escalation is the highest-risk profile (58% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "58%",
          "detail": "HSL - Complaint & Escalation is trending below target (58% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for HSL - Complaint & Escalation with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent / Relationship Manager start the call with a professional and polite greeting (e.g., “Good morning”, “Good afternoon”, “Good evening”, or a natural alternative like “Hello/Hi”)?\n\nAnswer Options:\nYes\nNo\nNA\nMark “Yes” if:\nThe RM uses a clear and polite greeting at the beginning of the call\n(e.g., “Good morning”, “Hi”, “Hello”)\nGreeting is audible and occurs before moving into conversation/purpose\nApplies to both inbound and outbound calls (live interaction only)\nMark “No” if:\nThe RM starts abruptly without any greeting\nDirectly jumps into:\nPitch\nVerification\nPurpose of call\nGreeting is unclear, rushed, or not audible\nUses an unprofessional or inappropriate opening\nMark “NA” if:\nVoicemail scenario (no live interaction)\nCall disconnected / ended before RM could greet\nCustomer disconnects immediately upon call connect\nBeginning of the call is missing / not recorded / inaudible\nVery short / incomplete call where greeting opportunity did not exist\nSystem/connectivity issues (dead air, delayed connection)",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent introduce themselves properly. Answer with a \"Yes\" or \"No\" . Mark as \"NA\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 1,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager Inform the customer at the start of the call that this is a \"service call\".This is valid only if it is a outgoing call. If the call is incoming call, mark as \"NA\", else Answer with a \"Yes\" or \"No\".  Answer with a \"Yes\" or \"No\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the client provide login Id and credentials on the call or did the agent ask him to do so.  Answer with a \"Yes\" or \"No\" Answer with a \"Yes\" or \"No\".Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\n Did the agent disclose the portfolio holdings on call without verifying the client through personal information. Answer with a \"Yes\" or \"No   Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent/ relationship manager give recommendations to the client or customer based on  self-research . Do not mark \"Yes\" if agent state previous or current market trends and tell expected return   Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent provide personal or financial information directly to a third party or some other person. Mark as \"No\" if it is disclosed to a proxy holder or Joint account holder. Answer with a \"Yes\" or \"No\"\n\nMark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the relationship manager/ agent mention about internal employee contests or sale drives to the customer and mention about his personal interest .  Answer with a \"Yes\" or \"No\" Mark as \"No\" in case of abrupt call ending or voicemail",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "fa6ad09a-0a5e-40a9-ad3d-5f2a30dcc956": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 8,
      "qpScore": 75,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 75
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Empathy - Natural Scale is stable but below target at 75% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "75%",
          "detail": "Empathy - Natural Scale is trending below target (75% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring Empathy - Natural Scale; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. Focus on whether the customer felt heard, understood, and cared for — not on whether the agent followed a script.\n\nConsider: Was the agent's voice warm and naturally caring? When the customer expressed frustration, did the agent acknowledge it before moving to resolution? Was the empathy specific to this customer's situation or generic? Did the tone stay consistent throughout?\n\nUse the full 0-10 range. Higher scores for genuine warmth, timely emotional responses, and personalized acknowledgments. Lower scores for flat tone, generic phrases, skipping emotional moments, or jumping straight to procedure when the customer is distressed.",
        "type": "critical",
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "355f5d39-d72a-40c2-9096-ce401ab76a61": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 6,
      "qpScore": 38.9,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 36.7
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 33.3
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 33.3
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "qp-1 is the highest-risk profile (38.9% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "38.9%",
          "detail": "qp-1 is trending below target (38.9% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for qp-1 with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did agent follow the steps for opening?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did agent mention processing fee details -- amount as well as tax?",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "127caefe-47c6-43e0-88c8-b684a1150540": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 75.4,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 75.4
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "V7final bluedart is stable but below target at 75.4% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "75.4%",
          "detail": "V7final bluedart is trending below target (75.4% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring V7final bluedart; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about the status of an undelivered SBI bank courier, understand why it was marked as 'recipient not available' without a call, and seek a resolution for its delivery.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about the status of an undelivered banking shipment and to arrange for its successful delivery, as well as to register a complaint regarding a failed delivery attempt marked as 'customer not available'.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about the status of a delayed and failed delivery, specifically to understand why a previously attempted reschedule was not reflecting and to expedite the delivery of their parcel.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a cancelled delivery, dispute the 'not available' status, and seek a resolution to have their package delivered.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) ever 60 seconds when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\nScore 0/2 if ANY of the following:\n- Extended dead air or silence after asking the customer to wait (assess from audio, not transcript)\n- No bridging update during a long wait\n- Agent returns without thanking the customer or acknowledging the wait\n- Customer was left feeling ignored\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "036ed93d-4b46-47bc-8675-19a4d7023240": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 77.9,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 77.9
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "v10Bluedart_v3 is stable but below target at 77.9% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "77.9%",
          "detail": "v10Bluedart_v3 is trending below target (77.9% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring v10Bluedart_v3; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The primary intent of the call was for the customer to reschedule a missed parcel delivery, inquire about its status, and request urgent delivery for the same day, as their previous online rescheduling attempt was unsuccessful.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about a delayed banking shipment and to resolve an incorrect delivery status update ('recipient not available'). The customer also sought to expedite delivery or collect the parcel themselves.",
        "count": 1
      },
      {
        "label": "The primary intent of the call is for the customer to reschedule a missed parcel delivery and to inquire about the status of a previous online rescheduling attempt that was not reflecting.",
        "count": 1
      },
      {
        "label": "The primary intent of the call is for the customer to complain about a missed and cancelled delivery, dispute the 'not available' status, and seek a redelivery or resolution for their order.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening on a scale of 1 to 5.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening using the required Blue Dart structure: greeting, self-introduction, and an offer to assist?\n\nRequired structure (wording may vary slightly; assess intent and structure, not verbatim match):\n\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"\n\nSTT / transcription tolerance: Speech-to-text may mishear the brand name (e.g. \"Go Air\", \"Blue Dot\"). Do NOT heavily penalize solely because the brand name was transcribed incorrectly if the rest of the opening structure is clearly present in audio — welcome + name + offer to help.\n\nEvaluate:\n- Greeting structure: Did the agent follow the required opening pattern (welcome + name + offer to help)?\n- Introduction & assistance offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\n- Clarity & confidence: Was the opening audible, professionally delivered, and free from unclear speech or excessive hesitation?\n- Timeliness: Did the agent greet promptly after the call connected?\n- Professional presence: Did the opening create a welcoming first impression rather than sounding casual, incomplete, or robotic?\n\nHard scoring caps (apply strictly):\n- If \"Welcome to Blue Dart\" (or clear audio equivalent) is completely absent and opening is incoherent (e.g. \"I'm going to work on it\") → score cannot exceed 1\n- If agent name is not stated (e.g. \"My name is.\" with no name) → score cannot exceed 2\n- If required welcome + introduction + assistance offer are not all present → score cannot exceed 2\n- Full score (5) only when all three elements are clearly delivered\n\nScore higher when the required opening structure is delivered clearly and promptly.\n\nScore lower when the agent skips introduction, skips the assistance offer, opens with process questions, or delivers an incomplete or unprofessional opening.\n\nScoring instruction: Return ONLY an integer from 1 to 5. The maximum score for this KPI is 5. Do not use 0. Do not return a score above 5. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's hold management and customer communication on a scale of 1 to 2.\n\nContext: Every call on this profile is a complaint call. Customers are already frustrated. Poor wait handling — dead air, silence, or being left hanging — is a serious failure on complaint calls.\n\nIf NO hold or wait occurred during the call:\n- Award the maximum score (2/2).\n- Do NOT deduct because hold management was \"not demonstrated.\"\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold/wait event even if no formal hold music plays. Assess dead air and silence from AUDIO — transcript alone will not show gaps.\n\nScore 0/2 if ANY of the following (apply strictly):\n- Extended dead air or silence after asking the customer to wait (assess from audio)\n- No bridging update during a long wait\n- Agent returns without thanking the customer or acknowledging the wait\n- Customer was left feeling ignored or neglected during the wait\n- Agent says \"give me a minute\" then goes silent with no follow-up\n\nScore 2/2 if:\n- No wait occurred at all and the call proceeded without unnecessary dead air, OR\n- A wait occurred AND the agent sought permission, explained why, bridged during long waits, and thanked the customer on return\n\nDo NOT score 1 as a default when unsure — if a wait occurred and was poorly managed, score 0.\n\nEvaluate higher for: clear permission, transparent reason, regular updates on long holds, appreciation on return.\n\nEvaluate lower for: hold/wait without informing customer, no reason given, long silence without updates, returning without acknowledging the wait.\n\nScoring instruction: Return ONLY an integer from 1 to 2. The maximum score for this KPI is 2. Do not use 0. Do not return a score above 2. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 1 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nRequired closing sequence — all three parts must be present and delivered with genuine warmth (minor wording variation is acceptable; assess intent and completeness):\n\n(i) Further assistance:\n\"I hope I have addressed all your queries for today\" (or equivalent confirming no remaining concerns)\n\n(ii) Feedback invitation:\n\"May I connect this call for a short survey of 20 seconds to share your feedback based on our conversation\" (or equivalent — must convey a short survey tied to this conversation, not a generic transfer)\n\n(iii) Formal closure:\n\"Thank you for calling Blue Dart. Have a great day\" / \"Have a nice day\"\n\nDo not penalize if the customer declines the survey — score only on how the agent extended the invitation.\n\nEvaluate:\n- Whether all three closing elements were present\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation sounded genuine and personal, not a scripted tick-mark step\n- Whether tone and energy at closing matched the warmth of the rest of the call\n- Whether the customer was given space to respond before the call concluded\n\nHard scoring caps (apply strictly):\n- Any required closing element missing → score cannot exceed 4\n- Feedback invitation delivered mechanically or repeated without acknowledging customer confusion → score cannot exceed 5\n- If customer still sounds upset at closing → score cannot exceed 5\n\nScore higher when the closing feels like a natural, warm conclusion — all three parts delivered with personal intent.\n\nScore lower when any required element is missing, the closing is rushed or abrupt, or the agent's energy drops in the final moments.\n\nScoring instruction: Return ONLY an integer from 1 to 8. The maximum score for this KPI is 8. Do not use 0. Do not return a score above 8. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 1 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — generic filler; does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — process action; not evidence of empathy\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — missed delivery, false \"not at home\" status, missed call from delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nHard scoring caps (apply strictly):\n- If the agent's first response is process-first with no specific emotional acknowledgment → score cannot exceed 3\n- If the only apology is generic (\"sorry for the inconvenience\") with no situation-specific acknowledgment → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call empathy\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge repeated frustration.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 1 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low if delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — minimum professional standard, not warmth\n- Providing correct information — competence, not warmth\n- Using the customer's name once after collecting it — insufficient alone for rapport\n- Professional tone without liveliness — professional and warm are not the same\n- Absence of rudeness — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n- Liveliness: Agent sounds alive and present, not flat or mechanical — assess from audio\n- Rapport: Deliberate human connection — natural use of name, referencing their specific situation personally\n- Vocal quality (audio): medium pace, comfortable volume, pleasing warm tone\n- Language (transcript): natural and conversational, not formulaic or templated\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 4\n- No rapport-building effort at any point → score cannot exceed 5\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call warmth\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport, and leaves the customer feeling they spoke to someone who cared.\n\nScore lower when delivery is mechanical, rapport is absent, or warmth drops at hold, process steps, or closing.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10.\n\nAgents on these calls cannot resolve the delivery delay — field operations determine outcome. Assistance means registering the complaint, communicating that the company is working on it, and giving the customer clarity on what was escalated and what to expect next.\n\nThe customer must leave with clarity — even if the outcome remains uncertain.\n\nEvaluate:\n- Whether the agent clearly communicated what specific action was escalated or flagged\n- Whether the agent provided a realistic, specific expectation of next steps\n- Whether language was clear and direct, not vague or non-committal\n- Whether necessary details were collected and used meaningfully for the complaint\n- Whether the customer understood the company is actively working on resolution\n\nScore higher when the agent demonstrates ownership of actions taken and gives a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps unclear, or complaint registration was incomplete.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — information collection, not listening\n- Reading back address or complaint number — process verification, not active listening\n- Offering to help or registering a complaint — assistance, not mindset\n- Completing the call without being rude — minimum standard only\n- Talking over the customer or responding before they finish their sentence — this is NOT listening\n\nDo not infer active listening from process steps — complaint registration, address collection, and follow-through are not evidence of listening.\n\nWHAT MINDSET IS — only the following should raise the score:\n- Willingness to serve: Agent sounds personally invested beyond the script (assess from audio: tone, pace, pauses when customer speaks)\n- Active listening — evidence in transcript AND audio:\n  - Verbal acknowledgment while customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n  - Paraphrasing the customer's specific concern in human terms — not reading back data\n  - Referencing a detail the customer mentioned earlier without asking them to repeat it\n  - Patient pauses, engaged tone while listening, NOT talking over the customer\n  If none of these signals are present, active listening is absent — do not infer from question-asking alone.\n- Brand representation: Consultant taking responsibility vs operator executing a task\n- Customer focus: Interaction tailored to this customer vs interchangeable with any complaint call\n\nHard scoring caps (apply strictly):\n- Agent talks over customer or responds before customer completes their thought (including mid-sentence interruptions like \"because...\" or \"I can't...\") → score cannot exceed 4\n- No evidence of active listening (verbal ack, paraphrase, or audio engagement) → score cannot exceed 4\n- Interrupting during AWB/number collection by speaking over the customer → score cannot exceed 3\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nScore higher when active listening is clearly evidenced in both words and delivery, with personal investment throughout.\n\nScore lower when the interaction is transactional — details collected, next steps given, but no signal the customer was individually heard.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10.\n\nAssess this KPI primarily from audio. Words matter less than delivery. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done.\n\nEvaluate:\n- Consistently warm, composed, professional tone from start to finish\n- Genuinely willing to help vs disengagement, impatience, or flat/robotic delivery in audio\n- Calm and respectful when customer is frustrated, emotional, or difficult\n- Any tone shift after information collection, during hold/wait, or during closing\n- Attitude conveys this customer's concern mattered\n- Agent does not talk over the customer — interrupting or overspeaking lowers this score\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 5\n- Noticeable impatience, indifference, or mechanical delivery at any point → score cannot exceed 5\n- Agent talks over customer or interrupts mid-sentence → score cannot exceed 4\n- Tone clearly drops at closing or during feedback transfer → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nPoliteness in words does NOT offset flat or robotic audio delivery.\n\nScore higher when tone is consistently warm, patient, and professional throughout with no drop in engagement.\n\nScore lower when tone shifts, drops, reveals impatience, sounds mechanical, or the agent interrupts the customer.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "b80f9a0f-3ef7-46a7-ac09-ce4e666b0f5e": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 63.4,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 63.4
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "BluedartV9.1_QP is the highest-risk profile (63.4% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "63.4%",
          "detail": "BluedartV9.1_QP is trending below target (63.4% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for BluedartV9.1_QP with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The primary intent of the call is to inquire about the status of a missed delivery, reschedule it for the same day, and register a complaint regarding the failed delivery and online rescheduling attempt.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about an undelivered courier from SBI Bank and to arrange for its delivery or collection.",
        "count": 1
      },
      {
        "label": "ERROR",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a missed and cancelled delivery, dispute the 'not available' status, and seek resolution for their shipment.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening on a scale of 1 to 5 (maximum score for this KPI is 5).\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening using the required Blue Dart structure: greeting, self-introduction, and an offer to assist?\n\nRequired structure (wording may vary slightly; assess intent and structure, not verbatim match):\n\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"\n\nSTT / transcription tolerance: Speech-to-text may mishear the brand name (e.g. \"Go Air\", \"Blue Dot\"). Do NOT heavily penalize or zero the score solely because the brand name was transcribed incorrectly if the rest of the opening structure is clearly present — introduction, assistance offer, professional delivery.\n\nEvaluate:\n- Greeting structure: Did the agent follow the required opening pattern (welcome + name + offer to help)?\n- Introduction & assistance offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\n- Clarity & confidence: Was the opening audible, professionally delivered, and free from unclear speech or excessive hesitation?\n- Timeliness: Did the agent greet promptly after the call connected?\n- Professional presence: Did the opening create a welcoming first impression rather than sounding casual, incomplete, or robotic?\n\nScore higher when the required opening structure is delivered clearly and promptly, even if STT garbled the brand name.\n\nScore lower when the agent skips introduction, skips the assistance offer, opens with process questions, or delivers an incomplete or unprofessional opening.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's hold management and customer communication on a scale of 1 to 2 (maximum score for this KPI is 2).\n\nFocus on whether the customer was kept informed, respected, and comfortable during hold — not just script compliance.\n\nIf no hold occurred, score based on whether the call proceeded without unnecessary dead air or customer neglect.\n\nEvaluate: permission before hold, reason explained, bridging updates on long holds, thanks on return, customer not feeling ignored.\n\nScore higher for clear permission, transparent communication, regular updates, appreciation on return.\n\nScore lower for hold without permission, no reason, long wait without updates, or returning without acknowledging the wait.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 1 to 8 (maximum score for this KPI is 8).\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nRequired closing sequence — all three parts must be present and delivered with genuine warmth (minor wording variation is acceptable; assess intent and completeness):\n\n(i) Further assistance:\n\"I hope I have addressed all your queries for today\" (or equivalent confirming no remaining concerns)\n\n(ii) Feedback invitation:\n\"May I connect this call for a short survey of 20 seconds to share your feedback based on our conversation\" (or equivalent — must convey a short survey tied to this conversation, not a generic transfer)\n\n(iii) Formal closure:\n\"Thank you for calling Blue Dart. Have a great day\" / \"Have a nice day\"\n\nDo not penalize if the customer declines the survey — score only on how the agent extended the invitation.\n\nEvaluate:\n- Whether all three closing elements were present\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation sounded genuine and personal, not a scripted tick-mark step\n- Whether tone and energy at closing matched the warmth of the rest of the call\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion — all three parts delivered with personal intent and the customer feels acknowledged until the end.\n\nScore lower when any required closing element is missing, the closing is rushed or abrupt, feedback is pushed mechanically, or the agent's energy drops in the final moments.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — generic filler; does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — process action; not evidence of empathy\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — missed delivery, false \"not at home\" status, missed call from delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nHard scoring caps (apply strictly):\n- If the agent's first response is process-first with no specific emotional acknowledgment → score cannot exceed 3\n- If the only apology is generic (\"sorry for the inconvenience\") with no situation-specific acknowledgment → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call empathy\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge repeated frustration.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low if delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — minimum professional standard, not warmth\n- Providing correct information — competence, not warmth\n- Using the customer's name once after collecting it — insufficient alone for rapport\n- Professional tone without liveliness — professional and warm are not the same\n- Absence of rudeness — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n- Liveliness: Agent sounds alive and present, not flat or mechanical — assess from audio\n- Rapport: Deliberate human connection — natural use of name, referencing their specific situation personally\n- Vocal quality (audio): medium pace, comfortable volume, pleasing warm tone\n- Language (transcript): natural and conversational, not formulaic or templated\n\nHard scoring caps (apply strictly):\n- Flat, monotonous, or robotic delivery for most of the call → score cannot exceed 4\n- No rapport-building effort at any point → score cannot exceed 5\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call warmth\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport, and leaves the customer feeling they spoke to someone who cared.\n\nScore lower when delivery is mechanical, rapport is absent, or warmth drops at hold, process steps, or closing.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nAgents on these calls cannot resolve the delivery delay — field operations determine outcome. Assistance means registering the complaint, communicating that the company is working on it, and giving the customer clarity on what was escalated and what to expect next.\n\nThe customer must leave with clarity — even if the outcome remains uncertain.\n\nEvaluate:\n- Whether the agent clearly communicated what specific action was escalated or flagged\n- Whether the agent provided a realistic, specific expectation of next steps\n- Whether language was clear and direct, not vague or non-committal\n- Whether necessary details were collected and used meaningfully for the complaint\n- Whether the customer understood the company is actively working on resolution\n\nScore higher when the agent demonstrates ownership of actions taken and gives a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps unclear, or complaint registration was incomplete.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — information collection, not listening\n- Reading back address or complaint number — process verification, not active listening\n- Offering to help or registering a complaint — assistance, not mindset\n- Completing the call without being rude — minimum standard only\n\nWHAT MINDSET IS — only the following should raise the score:\n- Willingness to serve: Agent sounds personally invested beyond the script — genuine concern beyond completing the process (assess from audio: tone, pace, pauses when customer speaks)\n- Active listening — evidence in transcript AND audio:\n  - Verbal acknowledgment while customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n  - Paraphrasing the customer's specific concern in human terms — not reading back data\n  - Referencing a detail the customer mentioned earlier without asking them to repeat it\n  - Audio cues: patient pauses, engaged tone while listening, not talking over the customer\n  If none of these signals are present, active listening is absent — do not infer from question-asking alone.\n- Brand representation: Consultant taking responsibility vs operator executing a task\n- Customer focus: Interaction tailored to this customer vs interchangeable with any complaint call\n\nHard scoring caps (apply strictly):\n- No evidence of active listening (verbal ack, paraphrase, or audio engagement) → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5 regardless of mid-call signals\n\nScore higher when active listening is clearly evidenced in both words and delivery, with personal investment throughout.\n\nScore lower when the interaction is transactional — details collected, next steps given, but no signal the customer was individually heard.\n\nEnd-of-call check: If the customer still sounds upset, frustrated, or unheard at closing — or the agent rushes the feedback transfer while distress remains — score this KPI lower. A warm opening or mid-call empathy does not offset a customer who ends the call still distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10 (maximum score for this KPI is 10).\n\nAssess this KPI primarily from audio. Words matter less than delivery. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done.\n\nEvaluate:\n- Consistently warm, composed, professional tone from start to finish\n- Genuinely willing to help vs disengagement or impatience in delivery\n- Calm and respectful when customer is frustrated, emotional, or difficult\n- Any tone shift after information collection, during hold, or during closing\n- Attitude conveys this customer's concern mattered\n\nHard scoring caps (apply strictly):\n- Noticeable impatience, indifference, or mechanical delivery at any point → score cannot exceed 5\n- Tone clearly drops at closing or during feedback transfer → score cannot exceed 4\n- If the customer ends the call still sounding upset or unheard → score cannot exceed 5\n\nScore higher when tone is consistently warm, patient, and professional throughout with no drop in engagement.\n\nScore lower when tone shifts, drops, or reveals impatience or mechanical delivery at any point.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "b5a65d62-d976-4646-90ee-72c7b3d6b1ff": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 78.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 78.2
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Bluedart Updated QP is stable but below target at 78.2% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "78.2%",
          "detail": "Bluedart Updated QP is trending below target (78.2% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring Bluedart Updated QP; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "To place an order for flowers.",
        "count": 1
      },
      {
        "label": "The primary intent of the call from the customer's side was to inquire about a delayed courier delivery and seek a resolution for its receipt. The agent's intent was to address the customer's delivery issue, explain the situation, register a complaint for the service failure, and provide a complaint reference number.",
        "count": 1
      },
      {
        "label": "The customer's intent was to reschedule a missed parcel delivery and ensure it is delivered on the same day of the call, as a previous online rescheduling attempt was unsuccessful.",
        "count": 1
      },
      {
        "label": "The customer's intent was to resolve an issue with a cancelled order that was incorrectly marked as undeliverable due to unavailability, and to arrange for its re-delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script.\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script, provides only a casual or incomplete greeting, completely fails to perform the required standard opening, or remains silent/unresponsive.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission, states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning. OR when the call does not contain any hold situation.\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement.\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script including asking for further assistance, seeking feedback survey participation, and delivering the formal closure while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for acknowledgment before disconnecting. OR when the call ends abruptly due to disconnection, transfer, or customer drop-off.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component.\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses two mandatory components, OR fails to wait for the customer's response before hanging up.\nRate 0 - The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, or abruptly disconnecting.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate active empathy by understanding and acknowledging the customer's emotional state, avoiding repetition of information already provided, offering an appropriate interim apology when the customer shared a prior bad experience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted, repetitive, casual, or indifferent behavior (including excessive use of \"OK\")?\n\nRate 10 - Perfect Compliance: Consistently strong empathy throughout. Immediately acknowledges concern, provides sincere apology, avoids repetition, personalized responses, warm tone. OR purely transactional interaction with no emotional content.\nRate 8 - Strong Compliance with Minor Empathy Gap: Good empathy but misses a minor opportunity. Response slightly generic, mildly scripted apology, or missed a small empathy cue.\nRate 6 - Partial Compliance / Noticeable Empathy Gap: Correct resolution but limited emotional connection. Polite but doesn't actively acknowledge feelings. Transactional rather than customer-focused.\nRate 3 - Poor Empathy / Significant Gap: Noticeable lack of empathy. Rigid explanations, doesn't acknowledge emotional state, no interim apology, indifferent or mechanical tone.\nRate 0 - Critical Failure / No Empathy: Ignores frustration, dismissive, one-word responses, frequent \"OK\", rude or hostile tone, creates negative experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate a warm, respectful, and professional communication style by building customer rapport, acknowledging customer inputs, adapting communication style to the customer's language and pace, maintaining an engaging tone, and ensuring clear, natural, and professional communication without sounding robotic, using excessive acknowledgements (\"OK\"), internal jargon (HUB, EDD, TAT, TDD, CE, EDL, RSP, ODA, FOD, DOD, COD, TT), fillers (Um, uh, ah, er, hmm, yup, ya, haan, aur), slangs (ASAP), or unprofessional expressions?\n\nRate 10 - Excellent Professionalism & Rapport: Warm, professional, personalized, acknowledges customer naturally, matches communication style, no robotic responses or jargon. OR interaction too short to assess.\nRate 8 - Strong Professionalism with Minor Improvement: Professional and pleasant but misses occasional opportunities to personalize. Minor filler usage once or twice.\nRate 6 - Acceptable Communication with Noticeable Warmth Gap: Correct but transactional. Doesn't consistently acknowledge inputs, uses \"OK\" frequently, uses internal terms without explanation.\nRate 4 - Poor Rapport / Weak Professional Presence: Monotonous, uninterested, frequent fillers, scripted or mechanical, uses jargon without explanation.\nRate 0 - Critical Failure / Unprofessional: Rude, dismissive, inappropriate language, frequent fillers/robotic acknowledgements, no effort at customer-focused communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate ownership and effective call guidance by actively understanding the customer's requirement, asking relevant probing questions, demonstrating confident product/process knowledge, proactively providing required information such as delivery timelines or resolution TATs, maintaining control of the conversation, and driving the interaction toward an accurate First Time Resolution (FTR)?\n\nRate 10 - Excellent Ownership & Resolution Guidance: Strong ownership, probes appropriately, provides accurate confident information, proactively shares timelines/next steps, demonstrates strong product knowledge. OR interaction doesn't require assistance.\nRate 8 - Strong Support with Minor Proactive Gap: Correct resolution, good ownership, but may not proactively mention one relevant detail unless prompted.\nRate 6 - Acceptable Resolution with Noticeable Assistance Gap: Workable solution but limited probing, customer drives conversation, misses proactive information, feels reactive.\nRate 3 - Poor Guidance / Limited Ownership: Significant gaps, generic explanations, customer must repeatedly clarify, hesitation or fumbling.\nRate 0 - Critical Failure / No Ownership: Doesn't understand requirement, no relevant questions, incorrect information, poor product knowledge, passive.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate an ownership-driven and customer-focused mindset by actively listening to the customer, acknowledging their inputs, maintaining a smooth conversation flow, avoiding unnecessary interruptions or repetition, clearly confirming understanding, and demonstrating genuine willingness to support the customer as a trusted brand representative?\n\nRate 10 - Excellent Ownership & Active Listening: Actively listens, acknowledges inputs, paraphrases to confirm understanding, no interruptions, smooth flow, demonstrates patience and ownership. OR interaction too short to evaluate.\nRate 8 - Strong Ownership with Minor Listening Gap: Good engagement but fewer verbal acknowledgements, doesn't consistently paraphrase, minor repetition.\nRate 6 - Acceptable Support with Noticeable Listening Gap: Polite but process-driven, limited acknowledgement, misses opportunities to confirm understanding, customer may need to repeat.\nRate 3 - Weak Ownership / Reduced Customer Focus: Interrupts customer, doesn't demonstrate understanding, repeats information unnecessarily, feels like completing a task.\nRate 0 - Critical Failure / No Ownership or Active Listening: Repeatedly interrupts, ignores inputs, asks for already-provided information, prolonged unexplained silence, dismissive.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate a warm, positive, and professional attitude throughout the interaction by communicating respectfully, showing genuine willingness to assist, maintaining a calm and approachable demeanor, adapting appropriately to the customer's situation, and avoiding negative, dismissive, indifferent, or unprofessional behavior?\n\nRate 10 - Excellent Professionalism & Positive Engagement: Consistently warm, respectful, patient, empathetic, builds confidence. OR interaction too short to assess.\nRate 8 - Strong Professionalism with Minor Attitude Gap: Professional and positive but tone may occasionally lack warmth or enthusiasm.\nRate 6 - Acceptable Professionalism with Noticeable Gaps: Generally polite but limited warmth, transactional, occasional impatience.\nRate 3 - Poor Professionalism / Inconsistent Customer Approach: Uninterested, impatient, cold, dismissive, or argumentative tone.\nRate 0 - Critical Failure / Negative Customer Experience: Rude, disrespectful, aggressive, argues with customer, inappropriate language.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "ece568b4-598b-4456-8a36-a644faf9d65c": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 65.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 65.2
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "BluedartupdatedV6 is the highest-risk profile (65.2% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "65.2%",
          "detail": "BluedartupdatedV6 is trending below target (65.2% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for BluedartupdatedV6 with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about the status of a delayed parcel delivery and ensure its successful delivery.",
        "count": 1
      },
      {
        "label": "The customer's intent is to reschedule a missed parcel delivery, check the status of a previous rescheduling attempt, and ensure the parcel (a laptop) is delivered on the same day due to urgency.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a delayed banking shipment, understand the reason for non-delivery, and facilitate its delivery or collection.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a missed delivery, dispute the incorrect delivery status, and arrange for the redelivery of their shipment.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent’s opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall call closing effectiveness on a scale of 0 to 10.\nFocus on whether the agent provided a complete, professional, and customer-friendly closing experience — ensuring the customer felt acknowledged and properly guided until the end of the interaction, rather than only checking whether exact scripted words were used.\n\nEvaluate the agent’s closing effectiveness by considering:\n\nClosure completeness: Did the agent offer further assistance, communicate the feedback survey option where applicable, and provide a proper thank-you/closing statement?\nCustomer acknowledgement: Did the agent allow the customer an opportunity to respond before disconnecting or transferring?\nCommunication quality: Was the closing delivered clearly, confidently, and professionally rather than sounding rushed or mechanical?\nCustomer experience: Did the agent create a positive final impression and ensure the customer did not feel abruptly disconnected?\nConsistency: Did the agent maintain the same professional and courteous approach until the end of the interaction?\n\nHigher scores for:\n\nComplete and confident closure.\nProfessional and warm final communication.\nAllowing customer acknowledgement before ending the call.\nEnsuring the customer feels supported until the interaction concludes.\n\nLower scores for:\n\nMissing key closing elements.\nRushed or incomplete closure.\nDisconnecting without customer acknowledgement.\nEnding the interaction without a proper farewell or support offer.\nTransferring to survey without appropriate closing communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. \nDid the agent respond with genuine warmth and empathy when the customer expressed frustration or distress? Focus on TONE, not scripts. \nEvaluate: - Did the agent's voice convey care and concern, or was it flat and transactional? - When the customer shared a problem, did the agent acknowledge their feelings IMMEDIATELY (in the very next response) before moving to process? - Was the empathy specific to the customer's situation, or generic/rehearsed? \nDeduct for: responding to distress with 'Okay, let me check...' or jumping to procedure without first acknowledging emotion; flat/monotone delivery; generic apologies like 'sorry for the inconvenience' without personalizing.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "9c7f47ae-14ee-4bb2-bd32-6fa60e615528": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 5,
      "qpScore": 60,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 60
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Empathy - Tone & Intent is the highest-risk profile (60% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "60%",
          "detail": "Empathy - Tone & Intent is trending below target (60% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for Empathy - Tone & Intent with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent demonstrate genuine empathy through their tone, emotional responsiveness, and personalization — not just words, but whether the customer felt heard and cared for?\n\nEvaluate the agent's overall empathetic presence by considering:\n- Tone quality: Was the voice warm, engaged, and naturally caring — or flat, rushed, and mechanical?\n- Emotional responsiveness: When the customer expressed distress, did the agent pause to acknowledge it before problem-solving?\n- Personalization: Did the agent reference the customer's specific situation in their own words, or rely on generic phrases?\n- Consistency: Did the empathetic tone hold steady throughout, even when the customer escalated or repeated concerns?\n\nRate 10: Consistently warm, naturally caring tone. Every moment of customer distress is met with a specific, personalized acknowledgment before proceeding. The customer clearly feels heard. OR a purely informational call with no emotional content.\nRate 6: Generally warm but one moment where tone dips — a slightly generic acknowledgment, a brief flat/procedural shift, or a small delay in responding to distress.\nRate 3: Mostly procedural tone. May say empathetic words but delivers them without warmth, skips emotional acknowledgment to jump into process, or relies on generic phrases without personalizing.\nRate 0: Indifferent, dismissive, or robotic. Customer distress is met with flat or transactional responses. No genuine attempt to connect emotionally.",
        "type": "critical",
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "1d3c7851-a046-4345-bdae-b5c59b02584d": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 79.6,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 79.6
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "last blurdart - copy is stable but below target at 79.6% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "79.6%",
          "detail": "last blurdart - copy is trending below target (79.6% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring last blurdart - copy; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about the status of a delayed SBI Bank courier, understand why it was not delivered, and seek a resolution for its delivery. The agent's intent was to provide information on the shipment status, address the customer's complaint regarding the incorrect delivery status, register a formal complaint, and manage expectations regarding redelivery and collection options.",
        "count": 1
      },
      {
        "label": "The primary intent of the call is to reschedule a missed parcel delivery and to check the status of a previous, unsuccessful online rescheduling attempt. The customer also explicitly requests the delivery to be made on the same day due to urgency.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a cancelled order, dispute the incorrect delivery status (claiming unavailability), and seek a resolution for redelivery.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about the status of an undelivered parcel and ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "\"Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the agent took permission from the customer and kept the customer informed, respected, and comfortable during the hold process. They need to sometimes put on hold, but whether it was managed well is what needs to be evaluated\n\n\nEvaluate higher scores for:\n\nClear permission seeking before holding.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 if there was no wait time, dead air, or no reason to put the customer on hold, and the agent continued the conversation without a break or any prolonged silence\"",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "ea9a3b80-f4d9-4dd9-9bd9-27571c55c183": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 73.5,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 73.5
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "last blurdart is stable but below target at 73.5% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "73.5%",
          "detail": "last blurdart is trending below target (73.5% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring last blurdart; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The primary intent of the call is to inquire about a delayed courier, understand the reason for non-delivery (specifically the 'recipient not available' status), and facilitate its delivery or collection.",
        "count": 1
      },
      {
        "label": "The customer's intent was to reschedule a missed delivery for a parcel, understand why their online rescheduling attempt was not reflecting, and request an urgent redelivery for the same day.",
        "count": 1
      },
      {
        "label": "The intent of the call was for the customer to inquire about a cancelled delivery, dispute the 'no one available' status, and arrange for a redelivery of their order.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about the status of an undelivered parcel and to ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the agent took permission from the customer and kept informed, respected, and comfortable during the hold process. They need to sometimes put on hold, but was it managed well is what needs to be evaluated\n\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "b976024b-8edc-4103-9a0c-11f2dc330471": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 79.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 79.2
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "v7 Profile Blue Dart test is stable but below target at 79.2% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "79.2%",
          "detail": "v7 Profile Blue Dart test is trending below target (79.2% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring v7 Profile Blue Dart test; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The primary intent of the call was for the customer to inquire about a delayed and incorrectly status-updated banking shipment and to seek its delivery or collection.",
        "count": 1
      },
      {
        "label": "The intent of the call is for the customer to reschedule the delivery of their parcel and ensure it is delivered on the same day due to its urgent nature, as previous attempts to reschedule were unsuccessful.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a missed/cancelled delivery, dispute the incorrect 'no one available' status, and arrange for the redelivery of their shipment.",
        "count": 1
      },
      {
        "label": "The intent of the call was for the customer to inquire about a delayed/undelivered parcel and to ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected  within 3 seconds of starting the call?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected within 3 seconds of starting of the call?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 2.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script. They need to sometimes put on hold, but was it managed well is what needs to be evaluated\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) ever 60 seconds when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer in clear works \nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nIMPORTANT — \"Give me a minute\" / informal waits:\nIf the agent says \"give me a minute\", \"one moment\", \"please wait\", or similar, treat this as a hold event even if no formal hold is communicated. Assess from AUDIO.\n\n\nScore 2/2 ONLY if no wait occurred at all, OR the agent managed the wait with permission, reason, bridging, and acknowledgment on return.\n",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 8.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nScoare basis if the agent conclude the call using the exact mandated Blue Dart closing script—including 1. asking for further assistance, 2. seeking feedback survey participation, and 3. delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing was With warmth and feeling sorry for the complaint\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "9cb792fd-9789-4c4d-a01c-87445dfb33d4": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 75,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 75
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "v10Bluedart is stable but below target at 75% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "75%",
          "detail": "v10Bluedart is trending below target (75% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring v10Bluedart; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about a delayed banking shipment, understand the reason for non-delivery despite an incorrect status, and seek a resolution, including exploring options for quicker receipt like self-collection.",
        "count": 1
      },
      {
        "label": "The customer's intent is to reschedule the delivery of their parcel (a laptop and charger) for the same day, as a previous delivery attempt failed due to their unavailability and an online rescheduling attempt was unsuccessful. They also seek clarification on the status of their previous rescheduling request.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a delayed and cancelled delivery, understand the reason for the cancellation despite their availability, and seek a resolution to have the order delivered.",
        "count": 1
      },
      {
        "label": "The primary intent of the call was for the customer to inquire about the status of an undelivered parcel and to ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "49733f1c-bbd6-4c65-915a-7bd2cee03fed": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 82.7,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 82.7
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "BluedartV8_QP is performing well at 82.7% avg across 4 evaluated interactions.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring BluedartV8_QP; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about the status of a delayed banking shipment, understand the reason for non-delivery, and facilitate its delivery or collection.",
        "count": 1
      },
      {
        "label": "The customer's primary intent was to reschedule a missed parcel delivery, understand its current status, and ensure it is delivered urgently (ideally today) after previous rescheduling attempts failed.",
        "count": 1
      },
      {
        "label": "The customer's intent was to understand why their order was cancelled despite their availability, dispute the 'customer not available' status, and arrange for the redelivery of their shipment.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about the status of their undelivered parcel and ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nThis call is a complaint. The customer is frustrated and the agent cannot provide a resolution — delivery outcomes depend on field operations. The agent's only tool is emotional support. Empathy is not a courtesy step — it is the core of this interaction.\n\nAssess whether the agent acknowledged the customer's emotional state before taking any process step. Emotional acknowledgment means recognizing how the customer is feeling — not jumping to information collection or resolution.\n\nEvaluate the following:\n- Whether the agent's first response addressed the customer's emotional state before any procedural action\n- Whether the acknowledgment was specific to the customer's situation or generic and rehearsed\n- Whether the agent sustained empathetic engagement through the call or only offered it as an opener\n- Whether the tone conveyed genuine concern — assess from audio, not just words\n\nPay close attention to the ORDER of the agent's response. If the agent begins with a process statement (\"let me check\", \"I need your details\", \"I will help you\") before acknowledging the emotion, this is NOT empathy — regardless of whether an apology appears later in the same sentence or shortly after.\n\nA generic phrase like \"sorry for the inconvenience\" placed between two process steps does not constitute empathetic acknowledgment. The emotional response must be the FIRST thing the customer hears — not embedded within or after a procedural statement.\n\nEvaluate EVERY moment the customer expresses frustration or distress during the call — not just the first instance. If the customer raises a concern a second time or escalates their frustration, check whether the agent acknowledged that moment with genuine empathy. Failure to acknowledge a repeated or escalated expression of distress must result in a significant score deduction — it signals the agent is not truly listening.\n\nScore higher when the agent leads with emotion, sustains empathy across every moment of customer distress, and makes the customer feel genuinely heard throughout the call.\n\nScore lower when the agent sandwiches apologies between process steps, uses generic phrases without personalization, or fails to acknowledge the customer's emotional state at any point of distress — especially when the customer raises a concern more than once.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nWarmth is not just the absence of rudeness — it is the presence of energy, personality, and genuine human connection. Assess this KPI from both audio and transcript. An agent can use correct words and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nEvaluate across the following dimensions:\n\nLiveliness & Tone: Did the agent sound engaged, warm, and present — or flat, monotonous, and disinterested? A lively tone signals to the customer that the agent genuinely cares. A flat or uninterested tone — even if polite — communicates indifference. Assess from audio. Monotonous or robotic delivery must be scored lower regardless of the words used.\n\nRapport Building: Did the agent make a deliberate effort to connect with the customer as a person — not just handle their query? Rapport building includes using the customer's name naturally, acknowledging the customer's specific situation in a way that feels personal, and creating a moment of human connection within the interaction. Absence of any rapport-building effort should be scored lower.\n\nVocal Quality: Assess from audio —\n- Was the pace medium — neither rushed nor dragging?\n- Was the volume audible and comfortable — neither too loud nor too soft?\n- Was the tone pleasing and warm — not irritated, strained, or cold?\n\nLanguage Quality: Assess from transcript —\n- Was the language easy to understand — free from unnecessary complexity or confusion?\n- Were sentences constructed correctly and naturally — no grammatical inaccuracies or awkward phrasing?\n- Was the language relevant and tailored to the customer's situation — not templated or formulaic?\n\nProfessional Communication: Deduct for any of the following —\n- Internal jargon or acronyms used without explanation (HUB, EDD, TAT, TDD, CE, EDL, RSP, ODA, FOD, DOD, COD, TT)\n- Casual abbreviations (ASAP or similar)\n- Filler or hesitation words (um, uh, ah, er, hmm, yup, ya, haan, aur)\n- Slangs or unprofessional expressions\n\nScore higher when the agent sounds lively and engaged, builds genuine rapport, communicates clearly and naturally, maintains a warm and pleasing vocal quality, and avoids any unprofessional language.\n\nScore lower when the agent sounds flat, disinterested, or monotonous; fails to build rapport; speaks too fast or too slow; uses fillers, jargon, or slangs; or delivers language that is grammatically awkward or hard to follow.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nOn complaint calls, the customer's primary need is to feel heard and supported by someone who genuinely cares. This KPI measures whether the agent was fully present, service-oriented, and customer-focused — or merely completing a process.\n\nEvaluate across four dimensions:\n\nWillingness to Serve: Did the agent sound genuinely concerned and motivated to help — not just going through the motions? Was there a sense of personal ownership over the customer's experience, beyond what the process requires?\n\nBrand Representation: Did the agent conduct themselves as a professional consultant — guiding the customer, taking responsibility, and acting as a trusted representative of Blue Dart — rather than treating the interaction as a routine ticket to close?\n\nActive Listening: Did the agent demonstrate that they were truly absorbing what the customer shared — through verbal acknowledgment, paraphrasing of the customer's concern, or reflecting back key details? Absence of verbal nods, paraphrasing, or any sign of engaged listening should be scored lower.\n\nCustomer Focus: Did the agent make the experience feel personalized to this customer's specific situation — or did the interaction feel generic and interchangeable? Did the agent use the customer's name, reference specific details from the conversation, and shape their responses around what this individual customer shared?\n\nScore higher when the agent sounds genuinely invested in the customer's experience, listens actively with verbal engagement, represents the brand with professionalism and care, and makes the customer feel they are being treated as an individual.\n\nScore lower when the agent is transactional, passive in listening, fails to paraphrase or acknowledge customer inputs, treats the call as a process to complete, or delivers a generic experience that could apply to any customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "051efbac-5591-40c3-9493-0e7023ddabb2": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 4,
      "qpScore": 65,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 65
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "BluedartV7_QP is the highest-risk profile (65% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "65%",
          "detail": "BluedartV7_QP is trending below target (65% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for BluedartV7_QP with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about the status of an undelivered banking shipment and to arrange for its successful delivery.",
        "count": 1
      },
      {
        "label": "The primary intent of the call is to reschedule a missed parcel delivery and escalate the issue to ensure prompt delivery, ideally on the same day.",
        "count": 1
      },
      {
        "label": "The customer's intent was to inquire about a missed/cancelled delivery, dispute the 'no one available' status, and get the delivery rescheduled or resolved.",
        "count": 1
      },
      {
        "label": "The intent of the call was for the customer to inquire about the status of their undelivered parcel and to ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 0 to 10.\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 0 to 10.\n\nThis call is a complaint. The customer is frustrated and the agent cannot provide a resolution — delivery outcomes depend on field operations. The agent's only tool is emotional support. Empathy is not a courtesy step — it is the core of this interaction.\n\nAssess whether the agent acknowledged the customer's emotional state before taking any process step. Emotional acknowledgment means recognizing how the customer is feeling — not jumping to information collection or resolution.\n\nEvaluate the following:\n- Whether the agent's first response addressed the customer's emotional state before any procedural action\n- Whether the acknowledgment was specific to the customer's situation or generic and rehearsed\n- Whether the agent sustained empathetic engagement through the call or only offered it as an opener\n- Whether the tone conveyed genuine concern — assess from audio, not just words\n\nScore higher when the agent makes the customer feel their frustration is understood and valid before anything else happens.\n\nScore lower when the agent moves directly to process, offers generic apologies without personalizing, or delivers empathetic words in a flat or mechanical tone.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 0 to 10.\n\nThese customers have experienced a service failure. They are calling because something went wrong. The only outcome they can take from this call is emotional — whether they felt that Blue Dart cared about them as a person, not just as a case to close.\n\nWarmth is distinct from politeness. An agent can be polite without being warm. Assess whether the interaction felt human and caring, or transactional and procedural.\n\nEvaluate the following:\n- Whether the agent's voice and tone conveyed genuine engagement — assess from audio, not just transcript\n- Whether the agent's pace and delivery showed patience and care, particularly when the customer was distressed\n- Whether the language used was natural and conversational, or scripted and formulaic\n- Whether internal terminology was used without explanation in plain language\n- Whether the agent's responses were tailored to the individual customer's situation, or felt generic\n\nScore higher when the customer would leave feeling that they spoke to a person who genuinely cared about their experience.\n\nScore lower when the interaction felt routine, indifferent, or when warmth was absent from the agent's voice or language regardless of what was said.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 0 to 10.\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 0 to 10.\n\nOn complaint calls, the customer's primary need is to feel heard. This KPI measures whether the agent was genuinely present in the conversation — or whether they were processing a ticket.\n\nListening mindset means the agent created space for the customer, absorbed what was shared, and engaged with it — rather than directing the conversation to a quick close.\n\nEvaluate the following:\n- Whether the agent allowed the customer to fully express their concern before responding or redirecting\n- Whether the agent demonstrated that they absorbed what the customer shared, through their responses and the way they handled the information\n- Whether the agent avoided making the customer repeat themselves\n- Whether the agent treated the interaction as something that personally matters to them, rather than a routine process to complete\n- Whether the conversation flowed naturally with the customer's pace, or was driven by the agent's agenda to collect and close\n\nScore higher when the customer's experience of the call is of being genuinely listened to and taken seriously.\n\nScore lower when the agent interrupted, missed cues, made the customer repeat information, or prioritized process efficiency over human engagement.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 0 to 10.\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "8d888882-f8ff-456f-99b1-a8270e3eca35": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 3,
      "qpScore": null,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "ai ingestion profile is stable but below target at null% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring ai ingestion profile; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "What's the user ID",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "c713f3f4-a541-401d-b56c-5b30d570e86d": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 3,
      "qpScore": 95.9,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 95.9
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "SaleskpiV2updated is performing well at 95.9% avg across 3 evaluated interactions.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring SaleskpiV2updated; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "Identification",
        "count": 1
      },
      {
        "label": "Transfer",
        "count": 1
      },
      {
        "label": "Reschedule",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the agent start the conversation with a professional greeting and clearly state the purpose of the call?\n\nYES:\nAgent gives the intro and tells the company name within the first 15 seconds and communicates the purpose of the call\nGreets the User by Name\nNO:\nJumps straight into pitch without context\nConfusing or delayed introduction\nNA:\nCallback/continuation where intro already done",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent effectively uncover the prospect’s needs using open-ended questions and active listening?\nYES:\nAgent Asks probing follow-ups (“Can you elaborate?”, “What challenges are you facing?”)\nBuilds on customer responses\nNO:\nScripted questions without listening\nInterrupts or ignores responses\nNA:\nCustomer refuses to engage / ends early",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent identify a clear pain point and establish a relevant use case?\nYES:\nPain point quantified and clearly described\nUse case tied to business outcome\nNO:\nAssumptions made without validation\nGeneric statements like “improve efficiency” without context\nNA:\nDiscovery not reached due to early drop",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent effectively qualify the prospect across key parameters (Budget, Authority, Need, Timeline)?\nYES: At least 3 of 4 BANT (Budget, Authority, Need, Timeline) elements identified or attempted by the agent\nNO: Minimal or no qualification done by the agent\nNA: Early-stage call where qualification not expected",
        "type": null,
        "avgScore": null,
        "maxScore": 9,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent identify key stakeholders and decision-making structure?\nYES:\nIdentifies decision-maker or approval process\nAsks about other involved teams\nNO:\nAssumes single decision-maker without confirmation\nNA:\nSolo buyer confirmed upfront",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent align the product offering to the prospect’s needs effectively?\nYES:\nTailored pitch using customer’s exact problem\nConnects features → benefits → outcomes\nNO:\nOne-size-fits-all pitch\nTalks about irrelevant features\nNA:\nNo pitch stage reached",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent acknowledge and effectively address objections?\nYES:\nUses phrases like “That’s a valid concern…”\nProvides data, examples, or alternatives\nNO:\nDefensive or dismissive response\nAvoids answering objection\nNA:\nNo objections raised",
        "type": null,
        "avgScore": null,
        "maxScore": 7,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent maintain positive engagement and handle prospect sentiment effectively?\nYES:\nRecognizes emotional cues (“I understand this is frustrating”)\nKeeps prospect engaged with questions\nNO:\nIgnores frustration or disengagement\nMonotonous or transactional conversation\nNA:\nthe conversation is too short to analyse or silent conversation interaction",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "3c72d6bd-7053-4a07-bd85-400ccbb46bfe": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 3,
      "qpScore": 78,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 78
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "SaleskpiV2 is stable but below target at 78% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "78%",
          "detail": "SaleskpiV2 is trending below target (78% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring SaleskpiV2; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "Introduction",
        "count": 1
      },
      {
        "label": "Informational",
        "count": 1
      },
      {
        "label": "Rescheduling",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the agent start the conversation with a professional greeting and clearly state the purpose of the call?\n\nYES:\nAgent gives the intro and tells the company name within the first 15 seconds and communicates the purpose of the call\nGreets the User by Name\nNO:\nJumps straight into pitch without context\nConfusing or delayed introduction\nNA:\nCallback/continuation where intro already done",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent effectively uncover the prospect’s needs using open-ended questions and active listening?\nYES:\nAgent Asks probing follow-ups (“Can you elaborate?”, “What challenges are you facing?”)\nBuilds on customer responses\nNO:\nScripted questions without listening\nInterrupts or ignores responses\nNA:\nCustomer refuses to engage / ends early",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent identify a clear pain point and establish a relevant use case?\nYES:\nPain point quantified and clearly described\nUse case tied to business outcome\nNO:\nAssumptions made without validation\nGeneric statements like “improve efficiency” without context\nNA:\nDiscovery not reached due to early drop",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent effectively qualify the prospect across key parameters (Budget, Authority, Need, Timeline)?\nYES: At least 3 of 4 BANT (Budget, Authority, Need, Timeline) elements identified or attempted by the agent\nNO: Minimal or no qualification done by the agent\nNA: Early-stage call where qualification not expected",
        "type": null,
        "avgScore": null,
        "maxScore": 9,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent identify key stakeholders and decision-making structure?\nYES:\nIdentifies decision-maker or approval process\nAsks about other involved teams\nNO:\nAssumes single decision-maker without confirmation\nNA:\nSolo buyer confirmed upfront",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent align the product offering to the prospect’s needs effectively?\nYES:\nTailored pitch using customer’s exact problem\nConnects features → benefits → outcomes\nNO:\nOne-size-fits-all pitch\nTalks about irrelevant features\nNA:\nNo pitch stage reached",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent acknowledge and effectively address objections?\nYES:\nUses phrases like “That’s a valid concern…”\nProvides data, examples, or alternatives\nNO:\nDefensive or dismissive response\nAvoids answering objection\nNA:\nNo objections raised",
        "type": null,
        "avgScore": null,
        "maxScore": 7,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent maintain positive engagement and handle prospect sentiment effectively?\nYES:\nRecognizes emotional cues (“I understand this is frustrating”)\nKeeps prospect engaged with questions\nNO:\nIgnores frustration or disengagement\nMonotonous or transactional conversation\nNA:\nthe conversation is too short to analyse or silent conversation interaction",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "8bebe309-1b93-4191-ac5d-06f3ff5f6d5d": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 52,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 52
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "nasa-test-demo-1001 - copy is the highest-risk profile (52% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "52%",
          "detail": "nasa-test-demo-1001 - copy is trending below target (52% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for nasa-test-demo-1001 - copy with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": []
  },
  "214cbad9-aabe-4d12-9229-2f3ce4c4a7f4": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 76,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 0
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 76
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "nasa-test-demo is stable but below target at 76% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "76%",
          "detail": "nasa-test-demo is trending below target (76% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring nasa-test-demo; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent greet the customer?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent thank the customer before the end of the call? If the call ended abruptly, mark \"NA\"",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did agent mention processing fee details -- amount as well as tax?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "On a scale of 1-5, rate how satisfied was the customer with the call",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Mention the competitors mentioned by customers on the call - such as Pepsi, Coca Cola, Thumbs Up",
        "type": null,
        "avgScore": null,
        "maxScore": 0,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "04f4714b-355a-4cd3-95e7-2ef9093e51cc": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 72.3,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 72.3
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "v10Bluedart_v2 is stable but below target at 72.3% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "72.3%",
          "detail": "v10Bluedart_v2 is trending below target (72.3% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring v10Bluedart_v2; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about a delayed/undelivered parcel and ensure its successful delivery.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 1 to 5\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent's opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?\n\nScoring instruction: Return ONLY an integer from 1 to 5. The maximum score for this KPI is 5. Do not use 0. Do not return a score above 5. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 1 to 2\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.\n\nScoring instruction: Return ONLY an integer from 1 to 2. The maximum score for this KPI is 2. Do not use 0. Do not return a score above 2. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's call closing quality on a scale of 1 to 8\n\nThe closing is the customer's final impression of Blue Dart. On a complaint call where no resolution was possible, the closing carries particular weight — it determines whether the customer leaves feeling respected and acknowledged, or dismissed.\n\nThe feedback survey transfer is part of the closing. The agent is expected to invite the customer for feedback genuinely. Do not penalize if the customer declines — score only on how the agent extended the invitation.\n\nEvaluate the following:\n- Whether the agent ensured the customer felt the interaction was complete before closing — not ended abruptly\n- Whether the agent confirmed the customer had no remaining concerns before wrapping up\n- Whether the feedback invitation was delivered with genuine warmth and personal intent, or as a scripted procedural step\n- Whether the agent's tone and energy at closing matched the warmth of the rest of the call, or dropped at the end\n- Whether the customer was given space to respond before the call concluded\n\nScore higher when the closing feels like a natural, warm conclusion to a human conversation — where the customer feels acknowledged until the very end.\n\nScore lower when the closing is rushed, scripted, abrupt, or when the agent's energy clearly dropped in the final moments of the call.\n\nScoring instruction: Return ONLY an integer from 1 to 8. The maximum score for this KPI is 8. Do not use 0. Do not return a score above 8. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's empathetic response on a scale of 1 to 10\n\nContext: Every call on this profile is a complaint about a delayed or missed delivery. The customer is frustrated before the call begins. The agent cannot resolve the delivery — emotional support is their only tool.\n\nWHAT EMPATHY IS NOT — the following must not raise the score:\n- \"I will help you out\" or \"I would definitely help you out\" — this is a process commitment, not emotional acknowledgment\n- \"Sorry for the inconvenience\" — this is a generic filler; it does not count as empathetic acknowledgment on a complaint call\n- Registering a complaint or escalating the issue — this is a process action; do not treat it as evidence of empathy or sustained emotional engagement\n- Any response that begins with what the agent will DO (\"I need to check\", \"I will look into\", \"Let me verify\") even if an apology appears later in the same response\n\nWHAT EMPATHY IS — only the following should raise the score:\n- The agent's FIRST statement names or reflects the specific frustration the customer expressed — the missed delivery, the false \"not at home\" status, the missed call from the delivery agent — before any process step begins\n- The acknowledgment is delivered in a tone that sounds genuinely concerned, not flat or rehearsed — assess from audio\n- When the customer expresses distress a second time, the agent responds with a fresh emotional acknowledgment before redirecting to process\n\nScore higher when the agent leads with genuine, specific emotional acknowledgment and sustains it across every moment of customer distress.\n\nScore lower when the agent leads with process, uses generic apologies, treats complaint registration as empathy, or fails to acknowledge a repeated expression of frustration.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's warmth and human connection on a scale of 1 to 10\n\nContext: Warmth is not the absence of rudeness. It is the presence of energy, personality, and genuine human connection. An agent can be polite and professional and still score low on warmth if their delivery is flat, detached, or mechanical.\n\nWHAT WARMTH IS NOT — the following must not raise the score:\n- Not using jargon or slangs — this is the minimum professional standard, not warmth\n- Providing correct and relevant information — this is competence, not warmth\n- Using the customer's name once after collecting it — this alone does not constitute rapport\n- A professional tone — professional and warm are not the same; a flat, monotonous delivery can be professional without being warm\n- Absence of rudeness or impatience — this is the floor, not the measure\n\nWHAT WARMTH IS — only the following should raise the score:\n\nLiveliness: Does the agent sound alive and present — or flat and mechanical? Assess from audio. A lively tone conveys that the agent is genuinely engaged with this customer. Monotonous or robotic delivery must be scored lower regardless of what words are used.\n\nRapport Building: Does the agent make a deliberate effort to connect as a human — using the customer's name naturally through the conversation, referencing their specific situation in a way that feels personal, or creating a moment of warmth beyond the transactional exchange? Absence of any rapport effort must lower the score.\n\nVocal Quality — assess from audio:\n- Medium pace — not rushed, not dragging\n- Comfortable volume — audible without being loud\n- Pleasing, warm tone — not cold, strained, or flat\n\nLanguage Quality — assess from transcript:\n- Natural and conversational — not formulaic or templated\n- Grammatically correct and easy to follow\n- Sentences constructed for the customer, not copied from a script\n\nProfessional Communication — deduct for:\n- Internal jargon or acronyms without explanation\n- Filler or hesitation words (um, uh, haan, aur, yup)\n- Casual abbreviations or slangs\n\nScore higher when the agent sounds genuinely warm and lively, builds rapport through the conversation, communicates naturally, and leaves the customer feeling they spoke to a person who cared.\n\nScore lower when the agent sounds flat or mechanical, makes no rapport-building effort, relies on professional correctness as a substitute for warmth, or delivers a tone that would feel interchangeable with any other call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's ability to assist the customer on a scale of 1 to 10\n\nAgents on these calls cannot resolve the delivery delay — that is determined by field operations. Assistance here means giving the customer a clear understanding of what action has been taken on their behalf and what they can expect next.\n\nThe customer must leave the call with clarity — even if the outcome remains uncertain.\n\nEvaluate the following:\n- Whether the agent clearly communicated what specific action was escalated or flagged as a result of the call\n- Whether the agent provided the customer with a realistic and specific expectation of next steps\n- Whether the language used was clear and direct, or vague and non-committal\n- Whether the agent collected the details necessary to act on the customer's concern, and whether those details were used meaningfully\n- Whether the customer was left in a state of clarity about what happens next, even if the agent has no control over the final outcome\n\nScore higher when the agent demonstrates ownership of the action taken and gives the customer a clear, honest picture of what follows.\n\nScore lower when commitments are vague, next steps are unclear, or the customer would have no sense of what was accomplished by the end of the call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's listening mindset and ownership on a scale of 1 to 10\n\nContext: On complaint calls, the customer's primary need is to feel genuinely heard — not efficiently processed.\n\nWHAT MINDSET IS NOT — the following must not raise the score:\n- Asking for name, tracking ID, address, or contact number — this is information collection, not listening\n- Reading back the address or complaint number — this is process verification, not active listening\n- Offering to help or registering a complaint — this is assistance, not mindset\n- Completing the call without being rude — this is the minimum expected standard\n\nDo not infer active listening from the agent's actions or process steps — complaint registration, address collection, and follow-through on next steps are not evidence of listening. Evidence must come exclusively from what the agent said — verbal acknowledgments, paraphrasing, or reflecting the customer's situation back in words.\n\nWHAT MINDSET IS — only the following should raise the score:\n\nWillingness to Serve: The agent sounds personally invested beyond what the script requires — there is a moment of genuine concern that goes beyond completing the process.\n\nActive Listening — evidence must be present in the transcript:\n- Verbal acknowledgment while the customer speaks (\"I understand\", \"I see\", \"I can see why that would be frustrating\")\n- Paraphrasing the customer's specific concern back in human terms — not reading back data, but reflecting the situation the customer described\n- Referencing a specific detail the customer mentioned earlier without asking them to repeat it\nIf none of these signals are present in the transcript, active listening must be scored as absent — do not infer it from question-asking or process completion.\n\nBrand Representation: Does the agent conduct themselves as a consultant who takes responsibility — or as an operator executing a task?\n\nCustomer Focus: Does the interaction feel tailored to this individual customer's situation — or interchangeable with any complaint call?\n\nScore higher when the agent demonstrates clear evidence of active listening through paraphrasing or verbal acknowledgment, shows personal investment, and makes the customer feel individually heard.\n\nScore lower when the interaction is transactional — details collected, next steps provided, but no signal of genuine listening or personal investment in the customer's experience.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's tone and professional attitude on a scale of 1 to 10\n\nAssess this KPI primarily from audio. The words used matter less than how they are delivered. A positive attitude under pressure — when the customer is frustrated, repetitive, or escalating — is what this KPI measures.\n\nMaintaining consistent tone throughout the call is as important as the opening. Many agents start well and drop tone once the core interaction is done. This KPI should reflect the full call.\n\nEvaluate the following:\n- Whether the agent's tone remained consistently warm, composed, and professional from start to finish — not just at the opening\n- Whether the agent sounded genuinely willing to help, or whether their delivery suggested disengagement or impatience\n- Whether the agent remained calm and respectful when the customer was frustrated, emotional, or difficult\n- Whether any shift in tone occurred at any point in the call — including after information was collected, during hold, or during closing\n- Whether the agent's attitude conveyed that this customer's concern mattered\n\nScore higher when the tone is consistently warm, patient, and professional throughout, with no drop in engagement quality.\n\nScore lower when the tone shifts, drops, or reveals impatience, indifference, or mechanical delivery at any point in the call.\n\nScoring instruction: Return ONLY an integer from 1 to 10. The maximum score for this KPI is 10. Do not use 0. Do not return a score above 10. The integer you return maps directly to the points awarded for this KPI.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "339f46f1-b5fa-4d9e-aa48-fe21b65c9a44": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 86.2,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 86.2
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Bluedartv6updatedV1 is performing well at 86.2% avg across 1 evaluated interactions.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring Bluedartv6updatedV1; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to resolve an issue with a cancelled delivery, specifically to understand why it was cancelled despite their availability and lack of contact, and to arrange for the delivery to be completed.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Rate the agent's call opening compliance on a scale of 0 to 10.\n\nDid the agent initiate the interaction with a clear, professional, and customer-friendly opening by delivering the standard Blue Dart greeting(\"Welcome to Blue Dart, my name is [Name], how may I assist you?\"), introducing themselves, offering assistance, and ensuring the opening is audible, correctly pronounced, and delivered within the expected timeframe?\n\nEvaluate the agent’s opening behavior by considering:\n\nGreeting Compliance: Did the agent use the approved Blue Dart opening greeting and maintain the required structure?\nIntroduction & Assistance Offer: Did the agent clearly introduce themselves and invite the customer to share their requirement?\nClarity & Confidence: Was the opening audible, professionally delivered, and free from unclear speech, incorrect pronunciation, or hesitation?\nTimeliness: Did the agent initiate the greeting promptly after the call connected?\nProfessional Presence: Did the opening create a welcoming and helpful first impression rather than sounding casual, incomplete, or robotic?",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall hold management and customer communication on a scale of 0 to 10.\nFocus on whether the customer was kept informed, respected, and comfortable during the hold process — not just whether the agent followed a fixed script.\n\nConsider:\n\nDid the agent request customer permission before placing the call on hold?\nDid the agent clearly explain the reason for placing the customer on hold?\nDid the agent provide periodic updates (bridging) when the hold duration was extended?\nDid the agent thank the customer after returning from hold?\nDid the agent ensure the customer did not feel ignored or disconnected during the hold period?\nDid the agent communicate professionally and maintain customer confidence throughout the hold process?\n\nEvaluate higher scores for:\n\nClear permission seeking before hold.\nTransparent communication about why the hold is required.\nRegular updates during longer holds.\nAppreciation shown when returning to the customer.\nMaintaining customer trust and engagement.\n\nEvaluate lower scores for:\n\nPlacing the customer on hold without informing or seeking permission.\nNot explaining the reason for the hold.\nKeeping the customer waiting without updates.\nReturning from hold without acknowledging the customer's wait.\nCreating a feeling of neglect or poor ownership.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall call closing effectiveness on a scale of 0 to 10.\nFocus on whether the agent provided a complete, professional, and customer-friendly closing experience — ensuring the customer felt acknowledged and properly guided until the end of the interaction, rather than only checking whether exact scripted words were used.\n\nEvaluate the agent’s closing effectiveness by considering:\n\nClosure completeness: Did the agent offer further assistance, communicate the feedback survey option where applicable, and provide a proper thank-you/closing statement?\nCustomer acknowledgement: Did the agent allow the customer an opportunity to respond before disconnecting or transferring?\nCommunication quality: Was the closing delivered clearly, confidently, and professionally rather than sounding rushed or mechanical?\nCustomer experience: Did the agent create a positive final impression and ensure the customer did not feel abruptly disconnected?\nConsistency: Did the agent maintain the same professional and courteous approach until the end of the interaction?\n\nHigher scores for:\n\nComplete and confident closure.\nProfessional and warm final communication.\nAllowing customer acknowledgement before ending the call.\nEnsuring the customer feels supported until the interaction concludes.\n\nLower scores for:\n\nMissing key closing elements.\nRushed or incomplete closure.\nDisconnecting without customer acknowledgement.\nEnding the interaction without a proper farewell or support offer.\nTransferring to survey without appropriate closing communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. \nDid the agent demonstrate genuine empathy through their tone, emotional responsiveness, and personalization — not just words, but whether the customer felt heard and cared for? Evaluate the agent's overall empathetic presence by considering: \n- Tone quality: Was the voice warm, engaged, and naturally caring — or flat, rushed, and mechanical? \n- Emotional responsiveness: When the customer expressed distress, did the agent pause to acknowledge it before problem-solving? \n- Personalization: Did the agent reference the customer's specific situation in their own words, or rely on generic phrases? \n- Consistency: Did the empathetic tone hold steady throughout, even when the customer escalated or repeated concerns? ",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "c1517e9e-d2bc-4c46-879b-4a8ab6cd28b2": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 92.3,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 92.3
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "BludartV6updated is performing well at 92.3% avg across 1 evaluated interactions.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring BludartV6updated; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent was to inquire about a missed and cancelled delivery, dispute the 'no one available' status, and seek a resolution for the delivery to be completed.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script (e.g., forgets to state their name, incorrect pronunciation,forgets \"how may I assist you\", or fails to voice out \"Welcome to Blue Dart\").\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script (unclear and wrong pronunciation), provides only a casual or incomplete greeting (e.g., just “Hello” or “Blue Dart, how can I help?”), completely fails to perform the required standard opening, or remains silent/unresponsive without acknowledging the call..",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission using the standard phrase (\"May I place your call on hold?\"), states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning (\"Thank you for being with us/staying online\"). (Note: If the voice breaks due to line disturbance, the agent is given the benefit of the doubt and retains this score).OR when the call does not contain any hold situation, consultation, dead air requiring a hold, or when the interaction ends without the agent placing the customer on hold\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, including providing a reason, bridging during prolonged holds, and/or thanking the customer upon return, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication, or the mandatory hold conditions are completely ignored.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script—including asking for further assistance, seeking feedback survey participation, and delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for the customer's acknowledgment before disconnecting OR when the call ends abruptly due to disconnection, transfer, customer drop-off, system interruption, or when the agent does not get an opportunity to perform the standard call closing process.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component (e.g., omits the further assistance question, misses the survey verbiage, or skips the formal thank you).\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses/mangles two mandatory components, OR they voice out the scripts but fail to wait for the customer’s response before hanging up/transferring to the survey.\nRate 0 – The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, abruptly disconnecting the call, remaining silent, or transferring the customer to the survey line without any proper closing communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall empathetic tone on a scale of 0 to 10. Focus on whether the customer felt heard, understood, and cared for — not on whether the agent followed a script. Consider: Was the agent's voice warm and naturally caring? When the customer expressed frustration, did the agent acknowledge it before moving to resolution? Was the empathy specific to this customer's situation or generic? Did the tone stay consistent throughout? Use the full 0-10 range. Higher scores for genuine warmth, timely emotional responses, and personalized acknowledgments. Lower scores for flat tone, generic phrases, skipping emotional moments, or jumping straight to procedure when the customer is distressed.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall warmth, professionalism, and customer connection on a scale of 0 to 10.\nFocus on whether the customer felt heard, respected, understood, and supported — not just whether the agent used polite words or followed a standard script.\nEvaluate higher scores for:\n\nGenuine warmth and professionalism.\nTimely acknowledgement of customer concerns or frustration.\nPersonalized responses that show active listening.\nReassuring and customer-focused communication.\nClear, natural, and conversational interaction.\n\nEvaluate lower scores for:\n\nFlat, monotonous, or indifferent tone.\nGeneric responses without connection to the customer's situation.\nSkipping customer concerns and moving directly to process steps.\nLack of acknowledgement of customer inputs.\nRobotic or scripted communication.\nFrequent fillers, unnecessary acknowledgements, slang, or unexplained internal jargon.\n\nUnprofessional communication indicators to consider:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall assistance and resolution support on a scale of 0 to 10.\nFocus on whether the agent effectively guided the customer toward resolution, demonstrated ownership, provided accurate support, and made the interaction easy for the customer — not just whether the agent completed the required steps.\nConsider:\n\nDid the agent actively understand the customer's requirement by asking relevant probing questions?\nDid the agent collect sufficient information before providing a resolution?\nDid the agent demonstrate confidence and knowledge while handling the customer's concern?\nDid the agent proactively share important information such as delivery timelines, next steps, or resolution TATs where applicable?\nDid the agent maintain control and direction of the conversation?\nDid the agent provide a clear, accurate, and solution-oriented resolution?\nDid the agent demonstrate ownership instead of making the customer repeatedly explain or follow up?\nDid the agent avoid hesitation, fumbling, uncertainty, or incorrect information while assisting the customer?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall ownership mindset and customer focus on a scale of 0 to 10.\nFocus on whether the customer felt listened to, understood, supported, and guided by the agent — not just whether the agent completed the required process steps.\n\nConsider:\n\nDid the agent actively listen and allow the customer to fully explain the concern?\nDid the agent acknowledge customer inputs through relevant responses and show understanding?\nDid the agent confirm understanding by summarizing key details, repeating important information correctly, or clarifying next steps?\nDid the agent demonstrate ownership instead of treating the interaction as a routine transaction?\nDid the agent avoid unnecessary repetition of information already shared by the customer?\nDid the agent maintain a smooth conversation flow without unnecessary interruptions or unexplained silence?\nDid the agent show patience, willingness to help, and confidence while supporting the customer?\nDid the agent act as a trusted brand representative by guiding the customer rather than only completing a task?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Rate the agent's overall tone, positivity, and professional attitude on a scale of 0 to 10.\nFocus on whether the customer experienced a respectful, supportive, and positive interaction — not just whether the agent used standard polite phrases.\n\nConsider:\n\nDid the agent maintain a warm, respectful, and professional tone throughout the interaction?\nDid the agent sound willing, confident, and genuinely interested in helping the customer?\nDid the agent remain calm, patient, and composed even when handling customer frustration or difficult situations?\nDid the agent acknowledge customer emotions appropriately before moving toward resolution?\nDid the agent maintain consistent positivity and professionalism throughout the conversation?\nDid the agent avoid sounding rude, irritated, dismissive, bored, robotic, or indifferent?",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "bbdf2025-3366-430b-9aea-d66be826c0e1": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 78.5,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 78.5
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Bluedart Complete QP v2 is stable but below target at 78.5% avg — focused remediation on weak KPIs recommended.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "78.5%",
          "detail": "Bluedart Complete QP v2 is trending below target (78.5% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Continue monitoring Bluedart Complete QP v2; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [
      {
        "label": "The customer's intent is to resolve a cancelled delivery issue and arrange for a redelivery of their shipment.",
        "count": 1
      }
    ],
    "kpis": [
      {
        "question": "Did the agent open the call using the standard Blue Dart greeting script, stating their name, asking how to assist, and initiating the opening very clearly with correct pronunciation within 3 seconds without any unauthorized changes?\n\nRate 5 - Perfect Compliance: The agent perfectly delivers the full, standard script (\"Welcome to Blue Dart, my name is [Name], how may I assist you?\") very clearly and pronounced correctly, professionally, audibly, and within 3 seconds of the call landing OR when the interaction does not contain an agent-led call opening, such as transferred calls, disconnected calls, callbacks already in progress, system-triggered recordings, or recordings where the opening portion is unavailable or inaudible\nRate 3 - Late Opening or Multiple Deviations: The agent opens the call late (after 3 seconds have passed), OR they open on time but miss or mumble two major parts of the mandatory opening script by either not saying clearly or with wrong pronunciation. Else the agent opens the call within 3 seconds, but misses exactly one component of the mandatory script (e.g., forgets to state their name, incorrect pronunciation,forgets \"how may I assist you\", or fails to voice out \"Welcome to Blue Dart\").\nRate 0 - Poor / Critical Failure / No Response: The agent either delays the opening beyond 3 seconds and heavily deviates from the standard script (unclear and wrong pronunciation), provides only a casual or incomplete greeting (e.g., just “Hello” or “Blue Dart, how can I help?”), completely fails to perform the required standard opening, or remains silent/unresponsive without acknowledging the call..",
        "type": null,
        "avgScore": null,
        "maxScore": 5,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent manage the hold process professionally by asking for permission using the standard phrase, stating a clear reason, checking back every 60 seconds (bridging), and thanking the customer upon returning?\n\nRate 2 - Perfect Compliance: The agent perfectly follows all hold protocols: asks for permission using the standard phrase (\"May I place your call on hold?\"), states a clear reason, bridges the call every 60 seconds if prolonged, and warmly thanks the customer upon returning (\"Thank you for being with us/staying online\"). (Note: If the voice breaks due to line disturbance, the agent is given the benefit of the doubt and retains this score).OR when the call does not contain any hold situation, consultation, dead air requiring a hold, or when the interaction ends without the agent placing the customer on hold\nRate 1 - Compliant / Minor to Moderate Deviation: The agent asks for hold permission and generally follows hold protocols, including providing a reason, bridging during prolonged holds, and/or thanking the customer upon return, but may miss one or more procedural components such as the reason for hold, periodic updates, or thank-you statement\nRate 0 - Total Protocol Violation / Abandonment: The agent completely fails to follow any hold protocols, or puts the customer on hold without any communication, or the mandatory hold conditions are completely ignored.",
        "type": null,
        "avgScore": null,
        "maxScore": 2,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent conclude the call using the exact mandated Blue Dart closing script—including asking for further assistance, seeking feedback survey participation, and delivering the formal closure—while waiting for the customer's response before disconnecting?\n\nRate 8 - Perfect Compliance: The agent perfectly delivers all three mandatory closing scripts clearly, brightly, and audibly, and patiently waits for the customer's acknowledgment before disconnecting OR when the call ends abruptly due to disconnection, transfer, customer drop-off, system interruption, or when the agent does not get an opportunity to perform the standard call closing process.\nRate 6 - Minor Script Deviation: The agent delivers a bright, audible closing and waits for the customer's response, but misses or incorrectly alters exactly one mandatory component (e.g., omits the further assistance question, misses the survey verbiage, or skips the formal thank you).\nRate 4 - Moderate Script Deviation / Rushed Delivery: The agent includes the closing elements but misses/mangles two mandatory components, OR they voice out the scripts but fail to wait for the customer’s response before hanging up/transferring to the survey.\nRate 0 – The agent fails to follow the standard closing protocol by missing all required closing phrases, providing only a casual or incomplete sign-off, skipping the closing script entirely, abruptly disconnecting the call, remaining silent, or transferring the customer to the survey line without any proper closing communication.",
        "type": null,
        "avgScore": null,
        "maxScore": 8,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate active empathy by understanding and acknowledging the customer's emotional state, avoiding repetition of information already provided by the customer, offering an appropriate interim apology when the customer shared a prior bad experience or inconvenience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted, repetitive, casual, or indifferent behavior (including excessive use of \"OK\")?\n\nRate 10 - Perfect Compliance\nThe agent consistently demonstrates strong empathy and emotional understanding throughout the interaction. The agent:\nImmediately acknowledges the customer's concern or frustration.\nProvides a sincere and situation-appropriate apology, including an interim apology when the customer shares a prior bad experience, delay, inconvenience, or dissatisfaction.\nAvoids asking for information or repeating details already provided by the customer.\nProvides a personalized response instead of a generic/scripted statement.\nMaintains a warm, engaged, and reassuring tone while showing ownership and willingness to help.\nAvoids robotic language, excessive use of \"OK\", repetitive explanations, casual responses, or indifferent behavior.\n                                                 OR\nThe interaction is purely transactional/informational, with no customer frustration, inconvenience, negative experience, escalation, or emotional situation requiring empathy or reassurance.\n\nRate 8 - Strong Compliance with Minor Empathy Gap:\nThe agent demonstrates good empathy and maintains a professional, helpful approach but misses a minor opportunity to strengthen emotional connection. Examples:\nAcknowledges the concern but the response is slightly generic or less personalized.\nProvides an apology/reassurance but it sounds mildly scripted.\nShows understanding but does not fully reinforce ownership or emotional reassurance.\nMaintains a positive tone but misses a small empathy cue from the customer.\nThe overall customer experience remains positive, with only a minor gap in emotional engagement.\n\nRate 6 - Partial Compliance / Noticeable Empathy Gap\nThe agent provides a correct resolution or helpful response but demonstrates limited emotional connection. Examples:\nUses polite language but does not actively acknowledge the customer's feelings.\nProvides a standard response without adapting to the customer's situation.\nMisses an opportunity to apologize when the customer expresses inconvenience or a previous bad experience.\nShows limited reassurance or ownership.\nThe interaction feels more transactional than customer-focused.\n\nRate 3 – Poor Empathy / Significant Gap:\nThe agent resolves the query but shows a noticeable lack of empathy and personalization. Examples:\nProvides a rigid or repetitive explanation despite the customer's frustration.\nDoes not acknowledge the customer's emotional state.\nFails to provide an interim apology when the customer explains a negative experience.\nAppears focused only on completing the process rather than supporting the customer.\nTone may appear indifferent, mechanical, or disengaged.\n\nRate 0 – Critical Failure / No Empathy / Negative Engagement:\nThe agent demonstrates a poor customer-handling approach by:\nIgnoring or dismissing customer frustration.\nShowing no concern, reassurance, or willingness to help.\nProviding incomplete, one-word, or careless responses.\nFrequently using \"OK\" or similar dismissive acknowledgements instead of engaging.\nRepeating information unnecessarily or making the customer repeat details.\nUsing a rude, hostile, overly casual, or indifferent tone.\nThe interaction creates a negative customer experience due to lack of empathy and support.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate a warm, respectful, and professional communication style by building customer rapport, acknowledging customer inputs, adapting communication style to the customer's language and pace, maintaining an engaging tone, and ensuring clear, natural, and professional communication without sounding robotic, using excessive acknowledgements (such as \"OK\"), internal jargon, fillers, slangs, or unprofessional expressions?\n\nEvaluation should consider:\nPersonalized engagement (using customer name appropriately where available)\nAcknowledging customer details, responses, and concerns\nActive conversational engagement instead of one-sided responses\nMatching customer's language, understanding level, and pace\nWarmth, confidence, and professionalism in tone\nAvoiding robotic/repetitive responses\nAvoiding unnecessary fillers, slangs, and internal terminology\n\nUnprofessional communication indicators to avoid:\n\nInternal Acronyms/Jargons (unless explained in customer-friendly language):\nHUB, EDD, TAT, TDD, CE, Critical Express, EDL, RSP, ODA, FOD, DOD, COD, TT\n\nSlangs / Casual Abbreviations:\nASAP or similar informal abbreviations\n\nFillers / Hesitation Words:\nUm, uh, ah, er, hmm, yup, ya, haan, aur\n\nRate 10 – Excellent Professionalism & Rapport (Perfect Compliance)\nThe agent consistently creates a warm and professional customer experience by:\nAddressing the customer appropriately and personalizing the conversation where possible.\nAcknowledging customer-provided information naturally and making the customer feel heard.\nMaintaining a pleasant, confident, and engaging tone throughout the interaction.\nMatching the customer's communication style, language preference, and pace.\nCommunicating clearly with well-structured sentences.\nAvoiding robotic responses, excessive \"OK\" acknowledgements, fillers, slangs, and unexplained internal terminology.\n\nOR\nThe interaction is too short, incomplete, system-disconnected, or limited to mandatory exchanges, leaving insufficient opportunity to assess rapport-building, tone, language alignment, or overall communication style.\n\nRate 8 – Strong Professionalism with Minor Improvement Area\nThe agent maintains a professional and pleasant interaction with only a minor gap that does not negatively impact the customer experience.\nExamples:\nMaintains a polite and helpful tone but misses occasional opportunities to personalize the conversation.\nUses a slightly repetitive acknowledgement (for example, \"OK\") but does not appear dismissive.\nMinor filler usage occurs once or twice without affecting professionalism.\nUses a standard response style that is slightly less conversational but still customer-friendly.\n\nRate 6 – Acceptable Communication with Noticeable Warmth Gap\nThe agent communicates correctly but shows limited effort in building rapport or adapting to the customer.\nExamples:\nProvides information clearly but interaction feels transactional rather than engaging.\nDoes not consistently acknowledge customer inputs.\nDoes not adapt language or pace to the customer's communication style.\nUses \"OK\" frequently, creating a slightly robotic experience.\nUses internal terms/acronyms without explanation, making communication less customer-friendly.\nTone remains professional but lacks warmth or personalization.\n\nRate 4 – Poor Rapport / Weak Professional Presence\nThe agent demonstrates noticeable communication gaps that reduce customer comfort.\nExamples:\nSounds monotonous, uninterested, or like they are responding only to complete the process.\nRarely acknowledges customer statements or attempts to build connection.\nUses frequent fillers, casual expressions, or repetitive acknowledgements.\nCommunication feels scripted, mechanical, or poorly structured.\nUses customer-unfriendly terminology without explanation.\n\nRate 0 – Critical Failure / Unprofessional Customer Interaction\nThe agent demonstrates unacceptable communication behavior by:\nSounding rude, irritated, dismissive, careless, or disrespectful.\nFailing to acknowledge customer concerns or information provided.\nUsing inappropriate language, slang, or an unprofessional tone.\nFrequently using fillers, casual phrases, or robotic acknowledgements that negatively affect the interaction.\nRepeatedly using internal jargon without explanation, making communication confusing.\nShowing no effort to maintain a helpful, respectful, or customer-focused conversation.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate ownership and effective call guidance by actively understanding the customer's requirement, asking relevant probing questions, demonstrating confident product/process knowledge, proactively providing required information such as delivery timelines or resolution TATs, maintaining control of the conversation, and driving the interaction toward an accurate First Time Resolution (FTR)?\n\nEvaluation should consider:\nAbility to identify the customer's actual need through relevant probing\nAsking complete and meaningful questions instead of relying on customer-led explanations\nDemonstrating confidence and clarity while explaining solutions/processes\nProviding proactive updates such as delivery timelines, next steps, or expected resolution timelines\nMaintaining ownership and guiding the conversation toward resolution\nAvoiding uncertainty, fumbling, incorrect information, or unnecessary delays\n\nRate 10 – Excellent Ownership & Resolution Guidance (Perfect Compliance)\n\nThe agent demonstrates strong ownership and effectively drives the interaction toward First Time Resolution (FTR). The agent:\nProbes appropriately to understand the complete customer requirement or issue.\nTakes control of the conversation while allowing the customer to explain their concern.\nProvides accurate and confident information without hesitation or confusion.\nProactively shares relevant details such as delivery timelines, next steps, or resolution TAT without waiting for the customer to ask.\nProvides a clear, accurate, and solution-oriented resolution.\nDemonstrates strong product/process knowledge and builds customer confidence.\n\nOR\nThe interaction does not require probing, troubleshooting, resolution handling, delivery timelines, or FTR support (for example: wrong number, silent call, disconnected interaction, or immediate transfer without any opportunity for assistance).\n\nRate 8 – Strong Support with Minor Proactive Gap\n\nThe agent provides effective assistance and demonstrates good ownership, but misses a minor opportunity to improve the customer's experience.\nExamples:\nUnderstands the concern and provides the correct resolution.\nDemonstrates sufficient product/process knowledge.\nMaintains control of the interaction.\nShares required information but may not proactively mention one relevant detail (such as TAT, next steps, or expected timeline) unless prompted.\nMinor hesitation or lack of confidence is observed but does not impact resolution.\n\nRate 6 – Acceptable Resolution with Noticeable Assistance Gap\n\nThe agent provides a workable solution but the interaction requires more customer effort than necessary.\nExamples:\nProvides correct information but performs limited probing.\nAllows the customer to drive most of the conversation instead of actively guiding it.\nMisses opportunities to proactively explain timelines, next steps, or process details.\nShows moderate uncertainty or hesitation while explaining the resolution.\nResolution is achieved, but the overall experience feels reactive rather than ownership-driven.\n\nRate 3 – Poor Guidance / Limited Ownership\nThe agent eventually reaches a solution but demonstrates significant gaps in handling.\nExamples:\nDoes not ask enough questions to understand the complete issue.\nProvides a generic or incomplete explanation.\nCustomer has to repeatedly clarify or guide the conversation.\nShows hesitation, fumbling, or lack of confidence while explaining the process or resolution TAT.\nFails to proactively support the customer with relevant information.\nResolution happens with additional customer effort.\n\nRate 0 – Critical Failure / No Ownership or Resolution Support\n\nThe agent fails to effectively manage or resolve the interaction by:\n\nNot understanding the customer's actual requirement.\nAsking no relevant questions or showing no effort to diagnose the issue.\nProviding incorrect, incomplete, or irrelevant information.\nDemonstrating poor product/process knowledge.\nRemaining passive and waiting for the customer to drive the conversation.\nShowing significant confusion, fumbling, or lack of confidence.\nFailing to provide a clear resolution, next steps, or ownership.\n\nThe interaction does not provide meaningful support toward resolution.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate an ownership-driven and customer-focused mindset by actively listening to the customer, acknowledging their inputs, maintaining a smooth conversation flow, avoiding unnecessary interruptions or repetition, clearly confirming understanding, and demonstrating genuine willingness to support the customer as a trusted brand representative?\n\nEvaluation should consider:\nActive listening through relevant verbal acknowledgements and responses\nConfirming understanding through paraphrasing or summarizing key details/action plans\nAvoiding interruptions and allowing the customer to fully explain concerns\nAvoiding unnecessary repetition of information already provided\nMaintaining engagement during the interaction without unexplained silence/dead air\nDemonstrating ownership, patience, and willingness to help\nActing as a customer-focused consultant rather than just completing a transaction\n\nRate 10 – Excellent Ownership & Active Listening (Perfect Compliance)\nThe agent consistently demonstrates strong ownership and emotional intelligence throughout the interaction. The agent:\nActively listens and acknowledges customer inputs through timely verbal acknowledgements.\nUses effective paraphrasing or confirmation to ensure understanding of the customer's concern and next steps.\nAllows the customer to explain without interruptions.\nAvoids repeating information already shared by the customer.\nMaintains a smooth conversation flow with no unexplained dead air.\nDemonstrates patience, confidence, and a genuine desire to support the customer.\nRepresents the brand as a helpful consultant by taking ownership of the interaction.\n\nOR\nThe interaction is too short, disconnected, silent, immediately transferred, or limited to basic routing/informational assistance where active listening, ownership, or customer guidance cannot be evaluated.\n\nRate 8 – Strong Ownership with Minor Listening Gap\nThe agent demonstrates good ownership and maintains a positive customer experience but misses a minor opportunity to strengthen active listening.\nExamples:\nMaintains good engagement and provides appropriate support but uses fewer verbal acknowledgements than expected.\nDoes not consistently paraphrase or confirm understanding but still addresses the customer's requirement correctly.\nMinor repetition occurs without significantly impacting the interaction.\nBrief silence occurs but does not affect the overall call flow.\nContinues to show a helpful and customer-focused approach.\n\nRate 6 – Acceptable Support with Noticeable Listening Gap\nThe agent is polite and provides assistance but demonstrates limited active listening or ownership behaviors.\nExamples:\nResponds appropriately but interaction feels more process-driven than customer-focused.\nLimited acknowledgement of customer inputs while the customer is explaining the concern.\nMisses opportunities to confirm understanding or summarize next steps.\nCustomer may need to repeat information or clarify details.\nMinor interruptions, repetitive explanations, or short periods of silence are observed.\nShows willingness to help but does not consistently demonstrate ownership.\n\nRate 3 – Weak Ownership / Reduced Customer Focus\nThe agent provides basic assistance but demonstrates noticeable gaps in engagement and listening.\nExamples:\nInterrupts the customer or does not allow the customer to fully explain the concern.\nProvides responses without demonstrating clear understanding of the customer's situation.\nRepeats information unnecessarily or asks for details already shared.\nAllows avoidable silence without keeping the customer informed.\nInteraction feels like completing a task rather than genuinely supporting the customer.\n\nRate 0 – Critical Failure / No Ownership or Active Listening\nThe agent demonstrates poor customer handling by:\nRepeatedly interrupting or ignoring the customer's explanation.\nFailing to acknowledge customer inputs or concerns.\nAsking for information already provided multiple times.\nProviding unclear responses without confirming understanding or next steps.\nAllowing prolonged unexplained silence.\nShowing a dismissive, indifferent, or disengaged attitude.\nFailing to demonstrate ownership or willingness to support the customer.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      },
      {
        "question": "Did the agent demonstrate a warm, positive, and professional attitude throughout the interaction by communicating respectfully, showing genuine willingness to assist, maintaining a calm and approachable demeanor, adapting appropriately to the customer’s situation, and avoiding negative, dismissive, indifferent, or unprofessional behavior?\n\nEvaluation should consider:\nRespectful and courteous communication\nPositive and supportive attitude\nWillingness to assist and take ownership\nPatience and composure during challenging interactions\nAbility to make the customer feel heard and supported\nAvoiding irritation, monotone delivery, dismissiveness, or argumentative behavior\n\nRate 10 – Excellent Professionalism & Positive Engagement (Perfect Compliance)\nThe agent consistently demonstrates a warm, respectful, and customer-focused attitude throughout the interaction. The agent:\nCommunicates politely and professionally at all times.\nShows genuine willingness to help and creates a positive customer experience.\nMaintains a calm and composed approach, even when handling difficult situations.\nDemonstrates patience, empathy, and understanding where required.\nUses an approachable and supportive tone that builds customer confidence.\nAvoids any signs of irritation, indifference, negativity, or dismissive behavior.\n\nOR\nThe interaction is too short, silent, disconnected, or immediately transferred, leaving insufficient opportunity to assess the agent’s tone, attitude, or conversational behavior.\n\nRate 8 – Strong Professionalism with Minor Attitude Gap\nThe agent maintains a professional and positive interaction with only minor opportunities for improvement.\n\nExamples:\nCommunicates politely and provides assistance but the tone may occasionally lack warmth or enthusiasm.\nShows willingness to help but misses small opportunities to reassure or engage the customer.\nMaintains professionalism but may sound slightly formal, neutral, or less emotionally connected.\nMinor inconsistency in tone is observed but does not negatively impact the customer experience.\n\nRate 6 – Acceptable Professionalism with Noticeable Gaps\nThe agent remains generally polite but demonstrates limited warmth or customer engagement.\n\nExamples:\nProvides the required support but interaction feels more transactional than customer-focused.\nTone is neutral with limited enthusiasm or reassurance.\nShows occasional impatience, reduced empathy, or lack of emotional connection.\nDoes not actively create a positive customer experience but also does not display major negative behavior.\n\nRate 3 – Poor Professionalism / Inconsistent Customer Approach\nThe agent demonstrates noticeable behavioral gaps that negatively affect the interaction.\n\nExamples:\nSounds uninterested, impatient, or disengaged.\nShows limited willingness to assist or appears to be responding only to complete the process.\nDisplays inconsistent professionalism during the conversation.\nUses a cold, dismissive, or argumentative tone.\nFails to provide a supportive customer experience.\n\nRate 0 – Critical Failure / Negative Customer Experience\nThe agent demonstrates unacceptable behavior by:\nBeing rude, disrespectful, dismissive, aggressive, or confrontational.\nShowing irritation or unwillingness to help.\nArguing unnecessarily with the customer.\nUsing inappropriate language or an unprofessional tone.\nIgnoring customer concerns or creating a negative interaction through poor attitude.",
        "type": null,
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "37d876c0-a30a-446a-9f2d-996393e9fe08": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 30,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 30
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Empathetic Tone Evaluation is the highest-risk profile (30% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "30%",
          "detail": "Empathetic Tone Evaluation is trending below target (30% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for Empathetic Tone Evaluation with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent respond with genuine warmth and empathy when the customer expressed frustration or distress?\n\nFocus on TONE, not scripts. Evaluate:\n- Did the agent's voice convey care and concern, or was it flat and transactional?\n- When the customer shared a problem, did the agent acknowledge their feelings IMMEDIATELY (in the very next response) before moving to process?\n- Was the empathy specific to the customer's situation, or generic/rehearsed?\n\nDeduct for: responding to distress with 'Okay, let me check...' or jumping to procedure without first acknowledging emotion; flat/monotone delivery; generic apologies like 'sorry for the inconvenience' without personalizing.\n\nRate 10: Warm, genuine tone throughout. Every moment of customer distress met with immediate, personalized empathy. OR purely transactional call with no emotional content.\nRate 6: Mostly empathetic but missed one moment where tone fell flat or empathy came late.\nRate 3: Multiple moments where agent skipped empathy or responded transactionally to distress. Tone lacked warmth.\nRate 0: Consistently flat, dismissive, or indifferent tone. No genuine empathy shown.",
        "type": "critical",
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "860aa012-7174-4d64-acbd-bdbe9aa70823": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 30,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 30
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Active Empathy Evaluation v3 is the highest-risk profile (30% avg) — multiple KPI(s) are below target.",
      "needsAttention": [
        {
          "name": "Overall score",
          "score": "30%",
          "detail": "Active Empathy Evaluation v3 is trending below target (30% avg). Focus coaching on lowest-scoring calls."
        }
      ],
      "performingWell": [],
      "recommendation": "Run a coaching sprint on critical KPIs for Active Empathy Evaluation v3 with the bottom-quartile agents.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Evaluate the agent's active empathy by scoring EACH customer grievance moment independently. A grievance moment is any point where the customer expresses frustration, dissatisfaction, inconvenience, or recounts a negative experience.\n\nCRITICAL SCORING RULES:\n\n1. TIMING IS MANDATORY: The agent MUST acknowledge the customer's emotional state IMMEDIATELY (in their very next response) after the customer voices a grievance. An apology or empathy statement that comes 2+ turns later does NOT count for that grievance moment. Each grievance moment must be evaluated separately.\n\n2. ANTI-PATTERNS THAT REQUIRE DEDUCTION (each occurrence warrants downgrade):\n   - Agent responds to an emotional grievance by jumping straight to process/procedure (e.g., 'Okay, please provide your address' or 'Let me check that for you') WITHOUT FIRST acknowledging the customer's feelings. This is a CLEAR MISS even if the agent apologizes later in the call.\n   - Agent uses filler transitions like 'Okay', 'Alright', 'Hmm', 'Uh-huh' as the primary acknowledgment of a customer's distress instead of a genuine empathy statement.\n   - Agent repeats information the customer has already shared instead of building on it.\n   - Agent uses a flat, monotone, or robotic delivery tone even when saying empathetic words. Words alone are not enough -- the TONE must convey genuine warmth and concern.\n   - Agent provides a scripted or rehearsed-sounding care statement that feels generic rather than tailored to the customer's specific situation.\n\n3. WHAT COUNTS AS GENUINE EMPATHY:\n   - A specific, personalized acknowledgment of what the customer just described (not a generic 'sorry for the inconvenience')\n   - Warmth and concern audible in the agent's tone of voice\n   - Validating the customer's feelings before moving to resolution (e.g., 'I completely understand how frustrating that must be, especially when you were home waiting')\n\nSCORING:\n\nRate 10 - Perfect Compliance: For EVERY grievance moment in the call, the agent IMMEDIATELY responds with a timely, personalized, warm empathy statement BEFORE moving to process. Tone is consistently warm and engaged throughout. No anti-patterns present. OR the interaction is purely transactional with no emotional content requiring empathy.\n\nRate 6 - Minor Empathy Gap: The agent demonstrates empathy for MOST grievance moments but misses exactly ONE -- either the timing was slightly delayed, the acknowledgment was slightly generic, or the tone dipped briefly. All other moments were handled well.\n\nRate 3 - Moderate Empathy Gap: The agent misses empathy timing on MULTIPLE grievance moments, OR demonstrates 2-3 anti-patterns (e.g., jumps to procedure without acknowledging distress, uses flat tone, gives generic responses). May have apologized at some point but not at the critical moments when the customer needed it most.\n\nRate 0 - Poor / Critical Failure: The agent consistently fails to acknowledge customer emotions, responds to distress with purely transactional statements, uses frequent filler words as acknowledgments, maintains a flat or indifferent tone, or demonstrates hostile/dismissive behavior.",
        "type": "critical",
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  },
  "22b2ea99-89cc-4d39-9a93-27cb3bb5fc86": {
    "smarterAssignment": true,
    "metrics": {
      "analysisCount": 1,
      "qpScore": 100,
      "qpScoreDelta": null
    },
    "scoreTrend": [
      {
        "label": "Jun 17–Jun 23",
        "value": 100
      },
      {
        "label": "Jun 24–Jun 30",
        "value": 0
      },
      {
        "label": "Jul 1–Jul 7",
        "value": 0
      },
      {
        "label": "Jul 8–Jul 14",
        "value": 0
      }
    ],
    "aiInsights": {
      "headline": "Active Empathy Evaluation v2 is performing well at 100% avg across 1 evaluated interactions.",
      "needsAttention": [],
      "performingWell": [],
      "recommendation": "Continue monitoring Active Empathy Evaluation v2; share top-performer snippets during the next team review.",
      "source": "aggregated"
    },
    "escalations": [],
    "topIntents": [],
    "kpis": [
      {
        "question": "Did the agent demonstrate active empathy by understanding the customer's emotional state, avoided repetition of already shared information, offered Interim apology when the customer explained any prior bad experience, delivering a personalized and caring response, maintaining an engaged and helpful tone, and avoiding scripted (avoided usage of OK frequently), casual, or indifferent behavior?\n\nRate 10 - Perfect Compliance: The agent instantly mirrors the customer's situation with a timely, caring response or sincere apology, offered Interim apology when the customer explained any prior bad experience. The tone is highly engaging, personalized, and proactive, providing a complete resolution without ever sounding robotic, without repetitions or casual like avoided usage of OK frequently. No deductions applied. OR when the interaction is purely transactional or informational in nature, with no emotional concern requiring empathy.\n\nRate 6 - Minor Empathy Gap: The agent provides a helpful and complete response, but misses exactly one element of emotional connection such as delivering a care statement that sounds slightly rehearsed or omitting a warm apology where it would have perfectly fit.\n\nRate 3 - Moderate Empathy Gap: The agent resolves the issue but demonstrates a noticeable lack of emotional warmth. They violate three empathy guidelines (e.g., the tone is purely transactional, they provide a rigid repetitive explanation instead of tailoring it to the customer's distress and no Interim apology offered).\n\nRate 0 - Poor / Critical Failure / Hostile Engagement: The agent demonstrates a highly casual, detached, apathetic, dismissive, repetitive or hostile attitude by providing incomplete or one-word responses, showing little to no concern, using OK frequently, failing to offer empathy or care statements, or actively shutting down the customer with indifference.",
        "type": "critical",
        "avgScore": null,
        "maxScore": 10,
        "avgPct": null,
        "prevPct": null
      }
    ]
  }
};

export function getAllProfilesData(period = 'month') {
  const p = baseAllProfiles[period] ?? baseAllProfiles.month;
  const summaryTable = baseSummaryRowsByPeriod[period] ?? baseSummaryRowsByPeriod.month ?? [];
  const aiInsightRows = baseAiInsightRowsByPeriod[period] ?? baseAiInsightRowsByPeriod.month ?? [];

  const uniqueInteractions = p.uniqueInteractions;
  const interactionMix = summaryTable
    .filter((r) => r.matched > 0)
    .map((r) => ({
      id: r.id,
      name: r.name,
      matched: r.matched,
      sharePct: matchedSharePct(r.matched, uniqueInteractions),
      avgScore: r.avgScore,
      severity: r.severity,
    }));

  return {
    period,
    metrics: {
      uniqueInteractions: p.uniqueInteractions,
      totalAnalysis: p.totalAnalysis,
      totalScore: p.totalScore,
      totalScoreDelta: p.totalScoreDelta,
      uniqueDelta: p.uniqueDelta,
      analysisDelta: p.analysisDelta,
    },
    crossQpHeadline: p.crossQpHeadline,
    topPriorityAlert: p.topPriorityAlert,
    unusedProfiles: p.unusedProfiles,
    scoreDistribution: p.scoreDistribution,
    distributionInsight: p.distributionInsight,
    aiInsightRows,
    summaryTable,
    interactionMix,
  };
}

export function getQpProfile(id) {
  return QP_PROFILES.find((p) => p.id === id) ?? QP_PROFILES[0];
}

export function getQpData(id, period = 'month') {
  const base = qpDataBase[id];
  if (!base) {
    const profile = getQpProfile(id);
    return {
      smarterAssignment: false,
      period,
      metrics: { analysisCount: 0, totalAnalysis: 0, qpScore: null, qpScoreDelta: null },
      scoreTrend: [],
      aiInsights: {
        headline: `${profile.label} has no evaluation data in the selected period.`,
        needsAttention: [],
        performingWell: [],
        recommendation: 'Select a longer period or verify assignment rules for this profile.',
      },
      escalations: [],
      topIntents: [],
      kpis: [],
    };
  }

  const all = getAllProfilesData(period);
  return {
    ...base,
    period,
    metrics: {
      analysisCount: base.metrics.analysisCount,
      totalAnalysis: all.metrics.totalAnalysis,
      qpScore: base.metrics.qpScore,
      qpScoreDelta: base.metrics.qpScoreDelta,
    },
  };
}

export function analysisSharePct(analysisCount, totalAnalysis) {
  if (!totalAnalysis) return 0;
  return Math.round((analysisCount / totalAnalysis) * 1000) / 10;
}

export function matchedSharePct(matched, totalUnique) {
  if (!totalUnique) return 0;
  return Math.round((matched / totalUnique) * 1000) / 10;
}

export function formatDelta(value, suffix = '') {
  if (value == null) return null;
  const up = value >= 0;
  return { up, text: `${up ? '+' : ''}${value}${suffix}` };
}
