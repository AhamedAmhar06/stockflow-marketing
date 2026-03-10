# Stockflow Marketing Website — Coursework Build Spec (Single Source of Truth)

## Objective
Implement a 6-page marketing website for **Stockflow** (CSE portfolio tracker) with:
- Consistent design system (match existing Home page look/feel)
- Consistent tone (trust-first, Sri Lanka / CSE-focused, no hype)
- SEO-ready (per-page title + meta description + OpenGraph + clean headings)
- Mobile responsive (must work perfectly on small screens)
- Replace normal lead form with a **Google Form embed** (Pricing page)
- Clean internal linking and navigation across all pages

DO NOT invent marketing promises (no real-time prices, no broker integrations in beta).

---

## Pages (Total 6)
1. `/` Home
2. `/features` Features
3. `/how-it-works` How It Works
4. `/pricing` Pricing + Early Access (Google Form embed)
5. `/faq` FAQ
6. `/about` About Us

---

## Non-Negotiable UX / Design Requirements
### Consistency
- Reuse the same typography, spacing, button style, and section rhythm as the existing homepage.
- Create reusable layout components (Navbar, Footer, Section, Container, Button).
- Keep one primary CTA everywhere: **Request Early Access** → `/pricing`.

### Mobile responsiveness (must)
- Layout must be responsive from 320px width upward.
- Use a max-width container and fluid spacing.
- Use stacked layout on mobile: no 2–3 column layouts that break.
- Font sizes: readable on mobile; no tiny text.
- Buttons: full-width or large tap targets on mobile.
- Embedded Google Form: 100% width and scrollable.

### Navigation
Navbar links:
- Home
- Features
- How it works
- Pricing
- FAQ
- About

Footer:
- Repeat nav links
- A short trust line: “Built for Sri Lankan CSE investors • Privacy-first”
- Optional contact email: support@stockflow.lk (or placeholder if not available)

---

## SEO Requirements (applies to every page)
Each page must include:
- `<title>` (<= ~60 characters)
- `<meta name="description">` (<= ~155 characters)
- OpenGraph tags:
  - `og:title`
  - `og:description`
  - `og:type` = website
  - `og:url`
- One H1 per page
- H2s for section headings
- Internal links inside content (at least 2 per page)

### Keyword system (use naturally, no stuffing)
Site-wide keyword cluster:
- CSE portfolio tracker
- Colombo Stock Exchange portfolio tracker
- realised profit after brokerage
- dividend tracker Sri Lanka
- Sri Lankan investors app

Rule:
- Use the primary keyword 1–2 times naturally in body.
- Use variations in headings where it sounds normal.
- Avoid repeating the exact phrase too many times.

---

## Google Form Integration (replace normal form)
### What to implement
- The primary lead capture is a Google Form embedded on `/pricing`.
- Home page CTA should link to `/pricing`.

### Embed code placeholder
Replace `GOOGLE_FORM_EMBED_URL_HERE` with the actual embed URL from Google Forms.

Use:
```html
<iframe
  src="GOOGLE_FORM_EMBED_URL_HERE"
  width="100%"
  height="980"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  style="border:0;"
>
Loading…
</iframe>



##content 

PAGE 1 — Home (/)

SEO

Title: Stockflow | Track Real CSE Profits After Brokerage
Meta: Stockflow is a CSE portfolio tracker built for Sri Lankan investors. Track realised profits after brokerage, dividends, and your true return in one clean view.

H1

Finally know how much you actually made on the CSE.

Hero paragraph

Stockflow is a CSE portfolio tracker that shows your realised profit after brokerage and dividend income—so your “profit” is the number that’s actually true. Built for Sri Lankan investors. Works alongside any broker.

CTAs

Primary button → /pricing: Request Early Access
Secondary text link → /how-it-works: See how it works

Section (H2): Why Stockflow

Heading: Your broker shows holdings. Stockflow shows results.
Body:
Most people can’t answer one simple question: “What did I actually earn after fees?”
Stockflow focuses on:
	•	Net realised profit (after brokerage)
	•	Dividend income totals
	•	Capital invested vs returned
	•	One view across multiple brokers

Section (H2): Who it’s for
	•	Active traders: stop guessing your real profit after fees
	•	Dividend investors: track yearly dividend income in one place
	•	New investors: simple tracking without noise

Section (H2): Explore

Internal links list:
	•	Features → /features
	•	How it works → /how-it-works
	•	Early Access → /pricing
	•	FAQ → /faq
	•	About → /about

⸻

PAGE 2 — Features (/features)

SEO

Title: Features | Stockflow CSE Portfolio Tracker
Meta: Track realised profit after brokerage, dividend income, invested vs returned, and a multi-broker view. Stockflow is built for Sri Lankan CSE investors.

H1

Everything you need to track real CSE performance.

Intro

Stockflow is designed around the numbers investors actually care about—net results, not just price movement.

H2: Realised Profit After Brokerage

See your net profit from completed trades after fees—so wins are real and losses are honest.

H2: Dividend Income Tracking

Log dividends and see totals by year and by stock. Perfect for dividend seasons and long-term investing.

H2: Capital Invested vs Returned

A clear view of how much cash went in vs came out—so you understand your true performance.

H2: Multi-Broker Portfolio View

Broker-neutral by design. Track everything in one place even if you use multiple brokers.

H2: SMS Trade Detection (Coming Soon)

Manual entry works for beta. SMS detection reduces friction and makes tracking fast.

CTA block

Primary → /pricing: Request Early Access
Secondary → /how-it-works: See the steps

Also add internal link in text:
“Questions?” → /faq

⸻

PAGE 3 — How It Works (/how-it-works)

SEO

Title: How It Works | Track CSE Profits in 3 Steps (Stockflow)
Meta: Add your invested capital, log trades, and instantly see realised profit after brokerage plus dividends. Stockflow is built for Sri Lankan CSE investors.

H1

Track real profits in 3 simple steps.

H2 Step 1

Add your invested capital
Body:
Start with what you’ve invested, or start from your first trade—either works.

H2 Step 2

Add trades (manual in beta)
Body:
Log your completed buy/sell trades. Stockflow calculates your net realised outcome after fees.

H2 Step 3

See your true return
Body:
You’ll get a clean summary:
	•	Total invested
	•	Total returned
	•	Brokerage paid
	•	Net realised gain (%)
	•	Dividend income total

H2: Why this matters

The activation moment is clarity.
The first time you see net realised profit after brokerage in one view, tracking stops being a guess.

CTA block

Primary → /pricing: Request Early Access
Secondary → /features: See features

⸻

PAGE 4 — Pricing + Early Access (/pricing)

SEO

Title: Early Access | Stockflow Beta for Sri Lankan CSE Investors
Meta: Join Stockflow early access. Track realised CSE profits after brokerage and dividends. Free during beta with limited spots.

H1

Early access is free while we test.

Intro

We’re keeping Stockflow free during beta so we can learn from real CSE traders and dividend investors. If you want clarity on your true returns, request access below.

H2: What you’ll get
	•	Realised profit after brokerage
	•	Dividend income tracking
	•	Invested vs returned summary
	•	Multi-broker portfolio view
	•	Priority access to SMS trade detection

Beta note (short, honest)

No real-time prices in beta. Stockflow focuses on realised performance—what you actually made.

H2: Request Early Access (Google Form)

Embed the Google Form iframe here (full width).

Below embed add:
No spam. You’ll only get beta access + product updates.

Add fallback link text under the iframe:
“Open the form in a new tab.”

Internal links at bottom
	•	Read FAQs → /faq
	•	Learn about Stockflow → /about

⸻

PAGE 5 — FAQ (/faq)

SEO

Title: FAQ | Stockflow CSE Portfolio Tracker (After Brokerage + Dividends)
Meta: FAQs about Stockflow: realised profit after brokerage, dividend tracking, privacy, manual entry, and how the beta works for Sri Lankan investors.

H1

FAQ — Everything you’ll ask before you trust a tracker.

H2

Is Stockflow connected to my broker?
Answer:
Not currently. Stockflow is broker-neutral, so it works alongside any broker.

H2

Do you have real-time prices?
Answer:
Not in beta. Stockflow focuses on realised profit after brokerage and dividend income—your true results.

H2

How is “real profit” calculated?
Answer:
Stockflow tracks completed trades and includes brokerage so your realised gain/loss reflects what you actually earned.

H2

Is manual entry too much work?
Answer:
Manual entry is for beta validation. SMS trade detection is planned to reduce friction significantly.

H2

Is my data private?
Answer:
Your portfolio data is treated as private. Stockflow is designed to be a personal performance record, not a social feed.

CTA block

Primary → /pricing: Request Early Access
Secondary → /features: Explore features

⸻

PAGE 6 — About (/about)

SEO

Title: About Stockflow | Built for Sri Lankan CSE Investors
Meta: Stockflow helps Sri Lankan investors track realised profit after brokerage and dividends in one clean view. Learn why we built it and who it’s for.

H1

Built to answer one question: “How much did I actually make?”

H2: The story

Stockflow started with a simple frustration—most investors can see their holdings, but they can’t easily see net realised profit after brokerage plus dividend income in one place. So we built a tracker focused on clarity.

H2: What we believe
	•	Tracking should be simple and honest
	•	Your performance should not be locked to one broker
	•	Investors deserve to see real results, not guesswork

H2: Who Stockflow is for

Stockflow is built for Sri Lankan investors—especially active traders who want a clear view of net results, and dividend investors who want yearly income clarity.

H2: What’s next

The roadmap focuses on reducing friction and improving retention:
	•	SMS trade detection
	•	Better summaries and reports
	•	Optional exports and annual performance summaries

H2: Contact

Questions or feedback?
Link to early access: /pricing
Optional email: support@stockflow.lk

Add a link back to FAQ: /faq

⸻

Implementation Notes (Agent must follow)
	•	Match existing homepage styles (reuse components).
	•	Ensure responsive layout for all sections.
	•	Use consistent padding and max-width container.
	•	Use semantic HTML for headings and lists.
	•	Ensure no broken links.
	•	Ensure each page includes the SEO meta specified above.

⸻

Acceptance Tests (must pass)
	1.	All 6 routes work and match navbar links.
	2.	Design is consistent with homepage (same fonts, buttons, spacing).
	3.	Mobile responsive at 320px width: no overflow, readable text, tappable buttons.
	4.	Primary CTA leads to /pricing on every page.
	5.	Google Form embedded on /pricing, full width, visible and usable.
	6.	Each page has unique SEO title + meta description + OpenGraph tags.
	7.	Each page uses one H1 and proper H2 structure.
	8.	Internal links exist in content (not only navbar).
