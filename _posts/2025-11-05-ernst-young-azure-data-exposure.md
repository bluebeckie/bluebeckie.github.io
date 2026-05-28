---
title: "Reflection on Ernst & Young's Cloud Data Exposure"
date: 2025-11-05
categories: [governance]
excerpt: "A reflection on the Ernst & Young 4TB Azure data exposure incident — lessons for governance and management."
ref: ernst-young-azure
---

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
