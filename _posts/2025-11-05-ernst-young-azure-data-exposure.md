---
title: "Ernst & Young Azure Data Exposure"
title_en: "Reflection on Ernst & Young's Cloud Data Exposure"
title_zh: "安永雲端裸奔事件反思"
date: 2025-11-05
categories: [governance]
excerpt_en: "A reflection on the Ernst & Young 4TB Azure data exposure incident — lessons for governance and management."
excerpt_zh: "Ernst & Young 4TB 資料公開於 Azure 的事件反思：從治理面和管理面看雲端安全。"
---

<div class="lang-zh" markdown="1">

## 安永雲端裸奔事件反思

此次事件看起來是典型的錯誤配置造成。對應 OWASP Top10 剛好有 1. broken access control (檔案直接放在公開環境) 2. cryptographic failures (檔案未加密) 5. security misconfiguration (上傳後未正確設定存取權限)

隨著雲端解決方案廣泛被各企業採用，不論公司規模大小，資安基本知識已經成為企業 IT 必備技能。

此次安永資料放在公開雲端環境，若無任何 access 並無法從流量中觀察到異常，因此需要另外設計機制來主動偵測。 自我反思就治理面和管理面可以怎麼做：

### 治理面

- 首先當然是老生常談的最小權限原則。
- 嚴格區分公開及內部環境及環境對應的預設權限，從架構上預防失誤。

### 管理面

- 最小權限原則搭配各環境預設 infrastructure as code，統一所有環境資料預設權限。
- 所有權限異動均需有 audit log 和通知，同時匯入 SIEM，即時監控。
- 搭配 CSPM，即時監測及告警。

</div>

<div class="lang-en" markdown="1">

## Reflection on Ernst & Young's Incident

This incident is a typical mis-configuration of data access control, which could be mapped to 1. broken access control, 2. Cryptographic Failures and 5. Security Misconfiguration of OWASP Top10.

With cloud solutions widely adopted by enterprises of all sizes, this incident is a great indication that information security knowledge is essential for all corporate ITs.

The tricky part of this incident: even though the data is public online, if there's no access to the data, it's hard to be detected with monitoring systems.

Here's my takeaway from this incident:

### In terms of governance

- Unsurprisingly, the well-known "Least Privilege Principle" is the fundamental rule of thumb.
- Strict environment segmentation to prevent errors structurally at the architectural level.

### In terms of management

- Implement environment policy with IaC to standardize default permission settings for each environment.
- Set up access change audit log and notifications, make sure all change logs are ported into SIEM for real-time monitoring.
- Deploy CSPM to actively monitor cloud assets and alert.

</div>
