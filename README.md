# Halvonex — Premium B2B Website

**Live Product:** AI automation agency powered by AI Voice Agents for HVAC businesses across the United States.  
**Domain:** [halvonex.com](https://halvonex.com)

---

## Brand Positioning

Halvonex helps heating, ventilation, and air conditioning (HVAC) companies capture more opportunities by automating incoming calls, lead capture, appointment booking, and customer follow-up.

> *"We help HVAC companies stop losing customers to missed calls."*

We build practical business systems that connect directly into existing US telecommunications infrastructure and field service management software (ServiceTitan, Jobber, Housecall Pro).

---

## Architecture & Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom enterprise palette
- **Typography:** Inter (via `next/font/google`)
- **Icons:** Lucide React
- **Metadata & SEO:** OpenGraph (`src/app/opengraph-image.tsx`), Sitemap (`src/app/sitemap.ts`), Robots.txt (`src/app/robots.ts`), and dynamic SVG Favicon (`src/app/icon.svg`)

---

## Color Palette

- **Deep Navy:** `#101828`
- **Dark Background:** `#0B1220`
- **Electric Blue:** `#356DF3`
- **Pure White:** `#FFFFFF`
- **Light Surface:** `#F7F8FA`
- **Muted Gray:** `#667085`

---

## Website Structure

1. **Home (`/`):**
   - High-impact Hero with live 4-stage call simulation widget
   - Problem breakdown: Missed calls, busy office staff, slow follow-up
   - 9-card capability matrix
   - 3-step caller journey
   - Workload comparison table
   - Interactive Dispatcher Console preview with filterable sample data
   - Accordion FAQ addressing compatibility, pricing, and carrier forwarding
   - High-contrast final conversion CTA

2. **Solutions (`/solutions`):**
   - Deep dive into 24/7 call answering, lead qualification, real-time appointment booking, CRM sync, missed-call recovery, and dispatcher notifications.

3. **How It Works (`/how-it-works`):**
   - 6-stage end-to-end call workflow
   - Transparent 6-step onboarding & configuration methodology

4. **About (`/about`):**
   - Brand philosophy: *"Technology should make running a business easier."*
   - Honest, grounded positioning as a specialized technology partner without fabricated case studies or buzzwords.

5. **Contact (`/contact`):**
   - Direct inquiry email (`hello@halvonex.com`), business hours, and interactive contact form.

6. **Book a Demo (`/book-demo`):**
   - 15-minute consultation booking form with comprehensive validation, field team size selection, challenge diagnosis, and transparent backend status notice.

7. **Governance (`/privacy` & `/terms`):**
   - Clear draft policies for legal review covering telephony handling, customer data protection, and emergency disclaimers.

---

## Local Development & Production Run

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run production build
npm run build

# Start production server
npm start
```
