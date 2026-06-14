---
title: "【Watchtower Wednesday】Agent 百花齊放,你的 Agent 治理框架準備好了嗎?"
date: 2026-06-17
categories: [governance, ai-governance, agentic-ai, cloud-security]
excerpt: "當架構完全相反的 Microsoft 與 AWS,做出來的治理控制項卻幾乎一樣,這份清單就不再是行銷話術,而是業界對「agent 治理最少要管什麼」的共識。整理成六個面向。"
ref: agent-governance-essentials
lang: zh-tw
---

### Agent 百花齊放,你的 Agent 治理框架準備好了嗎?

雖然說 2025 是所謂的 Agent 元年,但從各大雲端廠商的動作可以看到,佈局其實從 2024 就開始。從三條產品線來看:

### 💻 面向開發者的 coding agent

- **2025/02** Claude Code(Anthropic)
- **2025/04** OpenAI Codex CLI
- **2025/05** GitHub Copilot coding agent、Google Jules
- **2025/06** Google Gemini CLI
- **2025/07** AWS Kiro,agentic IDE
- **2025/11** Google Antigravity

從終端機的 CLI、雲端非同步代工,到 agent 優先的 IDE,一年之內全部到位。

### ☁️ 面向企業的 cloud agent

- **2024/09** Microsoft 365 Copilot agents,把 agent 帶進辦公場景
- **2024/10** Salesforce Agentforce GA,CRM 場景的自主 agent
- **2025/10** Google Gemini Enterprise(前身 Agentspace),企業 agent 工作平台
- **2026/06** AWS Security Agent、DevOps Agent GA,滲透測試與雲端維運的現成 agent

### 🛠️ 不只提供 agent,進一步提供 agent 開發工具和平台

- **2024/04** Google Vertex AI Agent Builder(現更名為 Gemini Enterprise Agent Platform)
- **2025/05** Microsoft 的 Azure AI Foundry Agent Service(現更名為 Microsoft Foundry Agent Service)
- **2025/10** AWS Bedrock AgentCore

寫程式的、開箱即用的、自建託管的,三條線在兩年內百花齊放。到了今年上半年,Microsoft 與 AWS 不約而同把 agent「治理」做成了產品:AWS 的 AgentCore 陸續補齊 Policy、Evaluations、Registry 一整組治理組件,Microsoft 的 Agent 365 也在 5 月正式 GA。是時候開始關注 agent 治理議題了。

**💡 有趣的是**,把兩家的治理產品攤開對照會發現:一個走統一控制平面(Agent 365),一個走模組化組件(AgentCore),路線完全相反,做出來的治理控制項卻幾乎一樣。當競爭者都收斂到同一份清單,這份清單就不再是行銷話術,而是業界對「agent 治理最少要管什麼」的共識。

### 🔑 Agent 治理的六個面向

1. **身份與金鑰:** 每個 agent 要有自己可稽核的身份,而且拿不到原始 secrets,金鑰一律由保管庫代管。
2. **隔離執行:** agent 跑在自己的 sandbox / microVM 裡,而且隔離覆蓋要逐工具盤點,防了一個工具不等於防了全部。
3. **行為強制:** 工具呼叫要經過確定性的政策閘(規則引擎,不靠模型自律),高風險動作保留人工批准。
4. **清冊與審核:** agent 和工具要登錄上架、走 review 流程;不在冊的 agent 就是 shadow IT 2.0。
5. **全程可觀測:** 每一步推理和動作都有 trace、進得了你的監控系統,異常有人收警報。
6. **應變與除役:** 每個 agent 都要有 kill switch;rollback 和除役清除是兩家目前最弱的一塊,制度要自己補。

最後提醒:部署了平台,不等於有治理。AWS 的治理服務全部要自己啟用、自己接線;Microsoft 部分,工程師用 SDK 自建的 agent 也能繞過 admin 管控。所以有了工具之後,架構審查不是要問「有沒有治理控制項」,真正該問的是 **「有沒有串起來」**。

Agent 平台會繼續演化,但「該管什麼」,可以從現在開始準備。🚀

你的組織已經有 agent 在跑了嗎?這六個面向,哪一個目前最沒把握?
