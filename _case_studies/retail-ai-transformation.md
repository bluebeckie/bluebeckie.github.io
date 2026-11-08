---
title: "AI That Reads Spreadsheets Made for People"
subtitle: "No data normalization, no change to how files look or flow — AI interprets unstructured documents, and people review before anything enters the system"
date: 2026-11-02
year: 2026
featured: true
ref: retail-ai-transformation
excerpt: "A 20+ store retail brand ran on purchase orders and invoices laid out in Excel for human readers. The nine-month transformation asked no one to change formats: AI learned to read the original documents, with human review and adjustment before every ERP import — collapsing 4 places of manual product entry into one product master."
metrics:
  - value: "4 → 1"
    label: "Places of manual product entry → one product master"
  - value: "~80%"
    label: "Less time producing recurring sales rankings (2.5–3 hrs → 15 min)"
  - value: "~87%"
    label: "Less time setting and tracking sales targets (60 min → 8 min)"
---

## Overview

| | |
|---|---|
| **Client** | Taiwanese private-label retailer (20+ physical stores plus e-commerce, ~25 HQ staff) |
| **Domain** | Bags and accessories retail, overseas sourcing, warehousing and logistics |
| **Engagement** | 9 months (Feb – Oct 2026) |
| **Role** | Principal consultant / transformation architect |

## Reality: Excel is laid out for people

In most mid-size companies, Excel is not a database — it is a **layout tool**. A supplier purchase order is a communication document between the company and its factories: design sketches pasted straight into cells, the suggested retail price written next to a label somewhere on the sheet, the same field landing in a different place on different orders. Its reader is a person, so the assumption that "column A is always the SKU and column B is always the color" never holds.

The result was the same data re-keyed by hand: every incoming order had to be entered into the ERP, the POS system, sales platforms, and several spreadsheets — **4 manual duplications**. When invoices arrived, received and outstanding quantities were back-filled line by line.

The usual answer is to normalize the data first: design a fixed-column template and ask staff and factories to switch to it. In practice that road rarely gets far. It pushes the system's needs onto people, adds work for staff and factories, and breaks a communication pattern that already worked. If the template doesn't stick, automation stalls at step one.

This engagement took a different path:

> **Reality → keep the delivered files as they are, in form and in flow → let AI interpret the unstructured data → keep human review and adjustment before anything is imported into the system.**

## Principle 1: don't change how the files look or behave

The purchase order format and content stayed the same; the company and its factories kept the same communication pattern and core fields. The only changes were small layout tweaks to help AI reading (for example, larger design sketches) — the main fields and presentation were untouched.

Staff workflow barely changed either: drop the order or invoice into a designated folder and click one menu item. The only new convention was a file-naming rule (order number, batch) so the system can tell whether a document has already been processed.

**The system adapts to how people work — not the other way round.**

## Principle 2: AI interprets the unstructured data

The AI does not read fixed columns. It **reads the layout the way a person does**: it extracts SKU, color, size, price, and materials from the order, then standardizes them against a code-mapping table. Staff maintain that table themselves, so a new color code or category needs no code change.

But the AI is not the only reader. The design deliberately has deterministic rules and AI interpretation check each other:

- **Gate before the AI**: one order may contain only one style, and the style must match the SKU. An order that fails is not processed at all — it moves to an error folder with instructions on how to fix it.
- **Read directly where possible**: the suggested retail price is located by its label and read straight from the cell (even in a hidden row). When the cell and the AI disagree, the cell wins and the user is notified.
- **Cross-check after the AI**: once an invoice is read, order numbers and color codes are compared against the invoice's original table. Rows that don't match are flagged for a spot check rather than written silently.

## Principle 3: a person always reviews before import

AI output never goes straight into the ERP. There is always a layer of **human review and adjustment (human-in-the-loop)** in between:

1. **A staging layer**: AI-extracted data lands first in a product-setup staging sheet, where every column is clearly marked as system-filled or human-filled. Staff add judgment fields such as product names and styles, and can correct anything the system got wrong.
2. **Human edits are never overwritten**: re-reading the same order only refreshes system fields; anything a person entered is preserved.
3. **Explicit export status**: only rows marked ready-to-export go into the import file, and any row a person edits automatically returns to ready-to-export.
4. **Check before upload**: the system produces a file the ERP can import directly; staff open it, check row counts, SKUs, and names, and **a person uploads it to the ERP**. The purchase-order file generated from invoices works the same way — 2 of its 22 columns are deliberately left for human judgment.
5. **Every exception comes with a next step**: error messages don't just say "something failed" — they spell out "→ what to do next," are logged, and are marked done only once resolved.

Where the AI misreads, a person catches it before it becomes an error in the ERP product master — and accountability for the data stays with the user.

## One record across the whole value chain

The approach runs along the product value chain, so one record is reconciled from the purchase order through invoices, shipments, every carton, and every store:

| Stage | Incoming data | What AI and the system do | What people do |
|-------|---------------|---------------------------|----------------|
| Purchase order | Orders laid out for people | Build the product master; generate the ERP import file | Fill judgment fields; review, then upload |
| Invoice | Sea-freight or bulk invoices | Reconcile expected vs. outstanding quantities; generate the purchase-order import | Spot-check unmatched rows; set delivery dates |
| Carton allocation | Shipments, cartons, store inventory | Stop if data is incomplete; otherwise generate allocation suggestions | Make the final allocation call |

On the sales side of the value chain, the same "system consolidates, people decide" principle extends to recurring sales rankings, weekly store transfer suggestions, interactive Looker sales dashboards, setting and tracking sales targets, area-manager rosters, and a NotebookLM store knowledge base.

## Measured results

| Process | Before | After | Basis |
|---------|--------|-------|-------|
| Product setup | Manual entry in 4 places, SKUs coded by hand | AI builds one product master from the order; ERP import file generated | — |
| Product setup & ERP import | ~15 min | 5–10 min, no manual price entry, two manual sheets eliminated | User-reported |
| Recurring sales rankings | 2.5–3 hrs / week | ~15 min, **~80% less** (~104–130 hrs / year) | User-reported |
| Setting and tracking sales targets | ~60 min / month | ~8 min, **~87% less** | Timed live run |
| Product inbound & allocation automation | 2–3 hrs / day | ~5 min | User-reported |

Scale of delivery: **9** tools, **5** layers of single source of truth (accounts, product, inbound, sales, knowledge), **13** handover documents. Users rated product setup "100% complete."

The time saved is the measurable result. The more important value is structural: for the first time the purchase order became a traceable authoritative source — and neither staff nor factories had to change how they work.

## A note to executives

Adopting AI does not require cleaning up your company's data first. **Let AI adapt to people's documents, and let people hold the last gate before anything enters the system.** That lands faster — and lasts longer — than asking a whole organization to change its formats.
