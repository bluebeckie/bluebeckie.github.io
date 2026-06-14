---
title: "【Watchtower Wednesday】The Age of AI Agents Is Here. Is Your Governance Framework Ready?"
date: 2026-06-17
categories: [governance, ai-governance, agentic-ai, cloud-security]
excerpt: "When Microsoft and AWS — with opposite architectures — converge on the same governance controls, that list stops being marketing and becomes the baseline. Here are the six dimensions every agent governance framework needs."
ref: agent-governance-essentials
---

### The Age of AI Agents Is Here — Is Your Governance Framework Ready?

2025 may be the Year of the Agent, but the major cloud vendors started laying the groundwork as early as 2024. One way to see this trend is through three product categories.

### 💻 Coding agents

- **Feb 2025:** Claude Code by Anthropic
- **Apr 2025:** OpenAI Codex CLI
- **May 2025:** GitHub Copilot coding agent and Google Jules
- **Jun 2025:** Google Gemini CLI
- **Jul 2025:** AWS Kiro, an agentic IDE
- **Nov 2025:** Google Antigravity

From CLIs in the terminal, to async coding in the cloud, to agent-first IDEs: all of it arrived within a single year.

### ☁️ Cloud agents for the enterprise

- **Sep 2024:** Microsoft 365 Copilot agents brought agents into everyday office work
- **Oct 2024:** Salesforce Agentforce, autonomous agents for CRM
- **Oct 2025:** Google Gemini Enterprise (formerly Agentspace), an enterprise agent workspace
- **Jun 2026:** AWS Security Agent and DevOps Agent GA, ready-made agents for pen testing and cloud operations

### 🛠️ Tools and platforms for building agents

- **Apr 2024:** Google Vertex AI Agent Builder (since renamed Gemini Enterprise Agent Platform)
- **May 2025:** Microsoft Azure AI Foundry Agent Service (since renamed Microsoft Foundry Agent Service)
- **Oct 2025:** AWS Bedrock AgentCore

Agents that code, agents off the shelf, platforms to build your own agents. Together, they show how deeply cloud vendors are investing in the agent ecosystem. Then in the first half of this year, Microsoft and AWS each turned agent governance itself into a product: AWS rounded out AgentCore with a full set of governance services (Policy, Evaluations, Registry), and Microsoft consolidated its tools into a single product, Agent 365. The time has come for enterprises to put agent governance frameworks in place.

**💡 Here is the interesting part.** Put the two governance offerings side by side: one is a unified control plane (Agent 365), the other a set of composable services (AgentCore). Their architectures are fundamentally different, yet the governance controls are strikingly similar. When competitors converge on the same list, it stops being marketing and becomes the baseline requirement for agent governance.

### 🔑 Six Dimensions of Agent Governance

1. **Identity and credentials:** Every agent carries its own auditable identity, and it never holds raw secrets; credentials are brokered through a vault on its behalf.
2. **Isolated execution:** Each agent runs in its own sandbox or microVM, and isolation coverage must be audited tool by tool, because securing one tool does not secure the rest.
3. **Deterministic enforcement:** Every tool call passes through a policy gate — a rule engine rather than model self-restraint — with human approval reserved for high-risk actions.
4. **Registry and review:** Agents and tools enter service through a publish, review, approve workflow; an unregistered agent is shadow IT 2.0.
5. **End-to-end observability:** Every reasoning step and every action leaves a trace that feeds your own monitoring stack, and a human receives the anomaly alerts.
6. **Response and decommissioning:** Every agent needs a kill switch; rollback and decommissioning are where both vendors are weakest today, so your own policies must fill the gap.

One final reminder: deploying a platform is not the same as establishing governance. On AWS, governance services are largely opt-in and must be explicitly enabled and integrated. On Microsoft's side, agents built through developer SDKs may bypass administrative controls altogether.

Once the tooling is in place, the real question for your architecture review is no longer "Do we have governance controls?" but rather **"Are they actually wired together?"**

Agent platforms will continue to evolve, but the fundamentals of agent governance are already becoming clear. The time to prepare is now. 🚀

Is your organization already running agents? Which of these six dimensions are you least confident about?
