---
title: "Five Layers of Single Source of Truth for a Retail Brand"
subtitle: "No system replacement — an AI and automation layer on top of the existing ERP, so operations no longer hinge on a few individuals"
date: 2026-11-02
year: 2026
featured: true
ref: retail-ai-transformation
excerpt: "A nine-month AI transformation that built five layers of single source of truth along the product value chain for a 20+ store retail brand — cutting weekly sales reporting time by ~80% and store daily-target prep by ~87%, with 13 handover documents keeping the capability in-house."
metrics:
  - value: "5 layers"
    label: "Single source of truth (accounts, product, inbound, sales, knowledge)"
  - value: "~80%"
    label: "Less time on weekly sales ranking (2.5–3 hrs → 15 min)"
  - value: "~87%"
    label: "Less time on store daily targets (60 min → 8 min)"
---

## Overview

| | |
|---|---|
| **Client** | Taiwanese private-label retailer (20+ physical stores plus e-commerce, ~25 HQ staff) |
| **Domain** | Bags and accessories retail, overseas sourcing, warehousing and logistics |
| **Engagement** | 9 months (Feb – Oct 2026) |
| **Role** | Principal consultant / transformation architect |

## The problem: a structural risk every growing retailer faces

The company's edge comes from its people's long experience with products, stores, and suppliers. But when that experience lives only on personal laptops, hand-built spreadsheets, and a handful of senior staff, the organization's efficiency and resilience are tied to specific individuals.

Based on a survey of 8 cross-functional staff, department interviews, and walk-throughs of real documents, the gaps came down to four points:

- **The same data re-keyed in many places**: one supplier order had to be entered by hand into the ERP, the POS system, sales platforms, and several spreadsheets — 4 manual duplications.
- **Recurring work concentrated in a few people**: one specialist owned 14 weekly, monthly, and quarterly reports; the weekly sales ranking alone meant downloading from two generations of systems, two pivots, and manual reconciliation — 2.5–3 hours every week.
- **Knowledge held by individuals**: when key people were away, no one could fully cover; store managers were trained by word of mouth.
- **No company-level governance of accounts and files**: staff mostly worked from personal accounts, so data and permissions could not be handed over when people changed roles.

## The core proposition: the gap is not a missing tool, it is a missing authoritative record

The entire engagement collapsed into one principle:

> **Every piece of critical information must have one — and only one — authoritative version. Every report and import file is generated from it.**

Three design principles sit underneath:

- **No system replacement**: the existing ERP stays the authoritative source; automation is layered on top and produces files it can import directly.
- **The system adapts to people, not the other way round**: purchase orders are a communication document between the company and its factories. Their format stayed the same — AI reads the human visual layout and extracts the fields.
- **Users keep the judgment calls**: automation only takes over copying and consolidation; sales interpretation and allocation decisions deliberately stay with users.

## Method: design along the value chain, not the org chart

Before automating anything, the work spread across merchandising, e-commerce, logistics, and stores was stitched into one end-to-end product value chain, including a full map of the 13-step purchasing and 5-step transfer processes. What looked like separate departmental problems resolved into three shared root causes: no single source of data, judgment held in people's heads without explicit rules, and knowledge and capacity as single points of failure.

Two workstreams followed:

- **Workstream 1 — the product value chain**: one record flows from the purchase order through invoices, shipments, every carton, and every store. AI reads purchase orders to build the product master and generate ERP import files; AI reads invoices to reconcile received and outstanding quantities; a sea-freight allocation console turned allocation rules from personal experience into explicit, checkable organizational rules.
- **Workstream 2 — from reports to operating tools**: starting from merchandising's weekly ranking, extended to weekly store transfer suggestions, interactive Looker sales dashboards, monthly store daily targets and area-manager rosters for sales operations, and a NotebookLM store knowledge base. The users of the data grew from one person to the entire sales line.

## Outcome: five layers of single source of truth

| Layer | Before | After |
|-------|--------|-------|
| Accounts & files | Personal accounts, files scattered on laptops | Company accounts, role groups, shared drives — permissions transfer with roles |
| Product master | Manual entry in 4 places, SKUs coded by hand | AI builds the master from purchase orders; one-click ERP import file |
| Inbound & allocation | Invoices back-filled line by line; allocation checked item by item | Automatic invoice reconciliation, accumulated shipment records, system-generated allocation suggestions |
| Sales records | Weekly manual download, pivot, reconcile | Accumulated weekly; rankings, transfer suggestions, and dashboards all generated from it |
| Store knowledge | Passed on verbally by senior staff | Conversational knowledge base maintained by the department itself |

## Measured results

| Process | Before | After | Basis |
|---------|--------|-------|-------|
| Weekly sales ranking | 2.5–3 hrs / week | ~15 min, **~80% less** (~104–130 hrs / year) | User-reported |
| Store daily targets | ~60 min / month | ~8 min, **~87% less** | Timed live run |
| Product setup & ERP import | ~15 min | 5–10 min, plus two manual sheets eliminated | User-reported |
| Store sea-freight allocation sheet (staff-built template) | 2–3 hrs / day | ~5 min | User-reported |

Scale of delivery: **9** tools, **5** layers of single source of truth, **13** handover documents.

For product setup, allocation, and the knowledge base, the core value is structural rather than time saved — an authoritative source, explicit rules, fewer single points of failure — so hours are not estimated item by item.

## Capability that stays with the company

- **Fewer single points of failure**: recurring work moved from "only one person knows how" to "there is a tool, a manual, and someone else can run it."
- **Internal change agents emerged**: the merchandising lead championed the internal chat rollout, ran internal training, and built their own allocation template — cutting a 2–3 hour daily manual task to about 5 minutes.
- **Users started building for themselves**: area managers learned to build their own dashboards, sales operations maintains its own knowledge base, and e-commerce built one of its own the same way.
- **Low-cost, evolvable architecture**: built on Google Workspace, Apps Script, and the company's own cloud environment — no large system purchase, and maintainable by in-house IT from the handover documents.

## A note to executives

The tools are the measurable result. **The five layers of single source of truth are the asset the company keeps.** Every new tool, report, or process can be built on that foundation, without reopening the question of "where is the data, and which version is right" each time.
