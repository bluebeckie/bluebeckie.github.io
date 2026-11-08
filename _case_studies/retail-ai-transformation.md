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
| **Client** | Taiwanese private-label retailer (20+ physical stores plus e-commerce) |
| **Domain** | Bags and accessories retail, overseas sourcing, warehousing and logistics |
| **Engagement** | 9 months |
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

## Principle 2: RPA and AI split the work — AI interprets the unstructured data

The AI does not read fixed columns; it **reads the layout the way a person does**. But AI is not the star of the whole workflow. The design splits the work in two: **anything rule-based goes to RPA; only what needs to be "understood" goes to AI**.

- **RPA runs the workflow and the rules**: picking up files, identifying order numbers and batches from file names, preventing duplicate processing, moving completed and failed files, retrying failures automatically, standardizing values against a code-mapping table, and producing files the ERP can import. These steps should give the same result every time and need no judgment. Staff maintain the code-mapping table themselves, so a new color code or category needs no code change.
- **AI does the interpretation**: finding SKU, color, size, price, and materials in a layout designed for people — exactly the part that rules can't capture and that used to depend on a human eye.

The two also deliberately check each other:

- **Gate before the AI**: one order may contain only one style, and the style must match the SKU. An order that fails is not processed at all — it moves to an error folder with instructions on how to fix it.
- **Read directly where possible**: the suggested retail price is located by its label and read straight from the cell (even in a hidden row). When the cell and the AI disagree, the cell wins and the user is notified.
- **Cross-check after the AI**: once an invoice is read, order numbers and color codes are compared against the invoice's original table. Rows that don't match are flagged for a spot check rather than written silently.

This split keeps AI where it is actually needed: results are more predictable, and when something goes wrong it is easy to tell whether a rule or an interpretation was at fault.

## Principle 3: a person always reviews before import

AI output never goes straight into the ERP. There is always a layer of **human review and adjustment (human-in-the-loop)** in between, built on a few design principles:

- **AI results land in a staging area, not in the system**: staff review them there, fill in the fields that need judgment, and correct anything misread.
- **Clear ownership of every field**: each field is marked as filled by the system or by a person, so staff know what to check and what to complete.
- **Human edits are preserved — and picked up by the next export**: re-reading a document never overwrites what a person entered, and anything a person changes is automatically included in the next export.
- **A person takes the final step**: the system only produces the import file; staff review it and import it themselves.
- **Every exception comes with a next step**: when something fails, staff are told what to do next, and the issue is closed only once it is resolved.

Where the AI misreads, a person catches it before it becomes a system error — and accountability for the data stays with the user.

## One record across the whole value chain

The approach runs along the product value chain: one record carries from the purchase order through invoices and inbound goods to every store. Each stage follows the same division of labor:

- **What AI does**: reads orders and invoices and turns the information on the page into data that can be reconciled from one step to the next.
- **What people check**: they fill in the fields that need judgment, review anything that doesn't match, and make the final allocation call.
- **How errors get fixed**: when data is incomplete or doesn't match, the workflow stops and flags the problem instead of quietly carrying on. Once it's corrected, the document is simply re-read — without creating duplicates or overwriting what people have already fixed.

On the sales side of the value chain, the same "system consolidates, people decide" principle extends to recurring sales rankings, weekly store transfer suggestions, interactive Looker sales dashboards, setting and tracking sales targets, area-manager rosters, and a NotebookLM store knowledge base.

## Measured results

- **Product setup**: from manual entry in 4 places, hand-coded SKUs, and every new SKU logged by hand, to AI building **one product master** from the order; with SKU rules defined, the **SKU register updates automatically** — no manual upkeep
- **Product setup & ERP import**: from ~15 minutes to **5–10 minutes**, with no manual price entry and **two manual sheets eliminated**
- **Recurring sales rankings**: from 2.5–3 hours a week to ~15 minutes — **about 80% of the time saved**, roughly **104–130 hours a year**
- **Setting and tracking sales targets**: from ~60 minutes a month to ~8 minutes — **about 87% of the time saved**
- **Product inbound & allocation automation**: from 2–3 hours a day to **about 5 minutes**

Scale of delivery: **9** tools, **5** layers of single source of truth (accounts, product, inbound, sales, knowledge), **13** handover documents. Users rated product setup "100% complete."

The time saved is the measurable result. The more important value is structural: for the first time the purchase order became a traceable authoritative source — and staff and factories barely had to change how they work.

## A note to executives

Adopting AI doesn't always mean changing how work gets done. It means **finding the points where AI can help while you optimize the process**. In this case, that entry point was letting AI adapt to people's documents, with people holding the last gate before anything enters the system.
