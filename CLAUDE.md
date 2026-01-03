# MDX Vision - Project Context

## Company Overview

**MDx Vision** = AR smart glasses + AOP (AI assistant) for healthcare, first responders, military, and accessibility.

**Founded:** 2016 by Rafael Rodriguez
**Contact:** rafael@mdx.vision

---

## Team (from Investor Deck V4.0)

### Leadership
| Name | Role |
|------|------|
| Rafael Rodriguez | CEO & Founder |
| Carlos Rosa | CTO |
| Edgar Zorrilla | Design Director |

### Board of Directors
| Name | Role |
|------|------|
| Eboné Carrington | Advisory Board |
| Kathryn Bass, MD | Advisory Board |
| Bekim Mustafaj | Advisory Board |
| Mohammad Ghazizadeh | Advisory Board |

### Directors
| Name | Role |
|------|------|
| Srinivas Kolla | Engineering Director |
| Subrahmanyam Choppara | Engineering Director |
| Henry Ghazi | Director |
| Bikramjit Mathaun | Director |
| Jean Zahore | Director |

**Core Value Proposition:** Real-time, in-encounter data processing and feedback - filling the gap left by competitors (DAX, Augmedix, Suki AI) who only offer post-encounter analysis.

---

## URLs

| Version | URL | Description |
|---------|-----|-------------|
| v1 (Original) | https://mdx.vision/ | Custom domain, original site |
| v2 Main | https://mdxvision.github.io/mdx-vision-v2/v2 | New futuristic design |
| Root | https://mdxvision.github.io/mdx-vision-v2/ | v1 layout on GitHub Pages |
| Local Dev | http://localhost:3000 | Development server |

## v2 Verticals

| Vertical | Path | Target Users |
|----------|------|--------------|
| Police | `/v2/verticals/police` | Law enforcement |
| Fire | `/v2/verticals/fire` | Firefighters, rescue |
| EMS | `/v2/verticals/ems` | EMTs, paramedics |
| Military | `/v2/verticals/military` | Combat medics, infantry |

## v2 Legal Pages

- `/v2/hipaa`
- `/v2/privacy`
- `/v2/security`
- `/v2/terms`

---

## Target Markets (Priority Order)

### 1. Healthcare (Primary)
- Physicians, Nurses, EMTs
- Real-time patient encounter documentation
- EHR integration (Epic, Cerner, Allscripts, MEDITECH)
- Voice-to-text transcription
- AI-powered notes and ICD-10 coding
- Drug interaction alerts
- Multi-language support (500+ languages)

### 2. First Responders
- EMT workflow documentation
- Patient handoff summaries
- Vital signs voice capture
- ePCR integration
- NFIRS-ready reporting (Fire)

### 3. Military
- 9-Line Medevac automation
- Helmet-integrated display
- Secure encrypted communications
- GPS and unit tracking
- Offline capability
- Facial recognition

### 4. Accessibility
- Audio navigation for blind users
- Facial recognition for dementia patients
- Medication reminders
- Fall detection
- Emergency alerts

---

## Key Differentiators vs Competitors

| Feature | MDx Vision | DAX Copilot | Augmedix | Suki AI |
|---------|-----------|-------------|----------|---------|
| Real-time processing | YES | No | No | No |
| AR glasses | YES | No | No | No |
| Hands-free | YES | Partial | No | Yes |
| Live EHR insert | YES | No | No | No |
| 500+ languages | YES | No | No | No |
| Real-time translation | YES | No | No | No |

---

## Competitor Research (Jan 2026)

### DAX Copilot (Microsoft/Nuance)
| Metric | Stat | Source |
|--------|------|--------|
| Time saved | 50% reduction, ~7 min/encounter | Nuance |
| Hours saved | 2 hrs per 12-hr shift (nurse) | Nuance |
| Burnout reduction | 70% reduced feelings | Nuance |
| ROI | 112% (Northwestern Medicine) | PR Newswire |
| Pricing | ~$600/clinician/month | DictationOne |
| Adoption | 150+ hospitals on Epic | Healthcare IT News |

**Limitations:** Post-encounter only, no AR, no real-time translation, requires Epic integration

### Augmedix (acquired by Commure)
| Metric | Stat | Source |
|--------|------|--------|
| Time saved | 80% reduction, 2 hrs/day | Augmedix |
| Work-life satisfaction | 40% increase | Augmedix |
| Productivity increase | 20% | Augmedix |
| Patient experience | 8% improvement (Ochsner) | PHTI Report |
| Industry ROI | 387-2,200% for AI scribes | IntuitionLabs |

**Limitations:** Post-encounter, no AR glasses, limited language support, human scribes in background

### Suki AI
| Metric | Stat | Source |
|--------|------|--------|
| Time saved | 72% faster notes, 41% reduction | Suki |
| After-hours saved | 48 min/day (~4 hrs/week) | Suki |
| Burnout reduction | 60% | Suki |
| ROI | 6-9X in year 1 | Suki |
| Note quality | 54% improvement | Suki |
| Adoption rate | 70%+ among clinicians | Suki |
| KLAS score | 93.2/100 | KLAS Research |

**Limitations:** Voice-first but phone/tablet only, no AR, post-encounter processing, limited languages

### MDx Vision Competitive Advantages
1. **Real-time in-encounter** - Not post-encounter like all competitors
2. **AR glasses** - True hands-free, eyes on patient (no one else has this)
3. **500+ languages** - Real-time translation during encounter
4. **Live EHR write-back** - Data inserted during encounter, not after
5. **A.R.I.M. interpolation** - AI synthesizes context, not just transcribes

**Sources:**
- https://www.nuance.com/healthcare/dragon-ai-clinical-solutions/dax-copilot.html
- https://augmedix.com/physicians-and-group-practices/
- https://www.suki.ai/
- https://www.healthcareitnews.com/news/nuance-ai-copilot-now-fully-embedded-epic-ehr

---

## Hardware Target

### Vuzix Smart Glasses
- Android OS
- 40GB memory
- Auto-focus HD camera
- Full-color see-through display (Cobra engine)
- Noise cancellation microphone
- Stereo speakers
- Wi-Fi + optional satellite uplink

### Coming Soon
- Android XR (2026)
- MDX Glasses (proprietary, in development)

---

## Tech Stack (Website)

- Next.js 16.1.0 (Turbopack)
- React 19.2.3
- Framer Motion (animations)
- Tailwind CSS v4
- TypeScript

## Tech Stack (Full Platform - Options)

### Option A: Enterprise (Java)
- Backend: Java 17+ / Spring Boot 3.x / HAPI FHIR
- AI Pipeline: Python + AssemblyAI + Azure OpenAI
- Database: Azure SQL with TDE encryption
- Infrastructure: Azure (AKS, Key Vault, Monitor)

### Option B: Startup (Rails)
- Backend: Ruby on Rails + PostgreSQL
- AI Pipeline: Python + AssemblyAI + OpenAI
- Real-time: WebSocket (ActionCable)

### Option C: Hybrid (Recommended)
- Phase 1: Node.js/Express + React Native
- Phase 2: Azure infrastructure + HIPAA logging
- Phase 3: Migrate to Java + Spring Boot if needed

---

## AI Pipeline

### Speech-to-Text
- Provider: AssemblyAI (streaming)
- Real-time transcription
- Speaker diarization (2-person recognition)
- Medical vocabulary support

### Clinical NLP
- Provider: Azure OpenAI (GPT-4)
- SOAP note generation
- ICD-10 coding
- Drug interaction checking
- Clinical summarization

### A.R.I.M. Technology (Patent Pending)
- **Augmented Reality Interpolation Modality**
- Core differentiator: Not a display, an intelligence layer
- Takes fragmented inputs → interpolates meaning → outputs unified AR experience
- See `docs/ARIM-TECHNOLOGY.md` for full technical explanation

---

## Compliance Requirements

| Standard | Required For |
|----------|--------------|
| HIPAA | All healthcare deployments |
| SOC 2 Type II | Enterprise customers |
| HL7 FHIR | EHR interoperability |
| HITRUST | Healthcare certification |
| DoD IL4/IL5 | Military deployments |
| ADA/508 | Accessibility features |

---

## Project Structure

```
src/
├── app/
│   ├── (v1)/              # Route group for root layout
│   ├── v2/                # Futuristic version
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── futuristic.css
│   │   ├── verticals/     # Industry-specific pages
│   │   │   ├── police/
│   │   │   ├── fire/
│   │   │   ├── ems/
│   │   │   └── military/
│   │   ├── hipaa/
│   │   ├── privacy/
│   │   ├── security/
│   │   └── terms/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   └── futuristic/        # v2 components
│       ├── HeaderDark.tsx       # Includes Solutions dropdown
│       ├── FooterDark.tsx
│       ├── HeroFuturistic.tsx
│       ├── FeaturesFuturistic.tsx
│       ├── VideoShowcase.tsx
│       ├── HardwarePartners.tsx
│       ├── TrustSection.tsx     # EHR integrations + partners
│       ├── AboutSection.tsx     # Stats: Founded 2016, 500+ languages
│       ├── CTASection.tsx
│       ├── GlassCard.tsx
│       └── VoiceWaveform.tsx
└── public/
    └── logos/

docs/
├── AOP-TECHNOLOGY.md      # Artificial Omniscient Person - AI assistant layer
├── ARIM-TECHNOLOGY.md     # Augmented Reality Interpolation Modality - engine
├── PITCH-DECK-GUIDE.md    # Universal deck guide (investor, sales, military)
└── reference/             # MDX documentation
    ├── MASTER-REQUIREMENTS.md
    ├── MDX-HANDOFF.md
    ├── PROJECT-BUILDER-V1.2.md
    ├── QA-AUDIT-V4.2.md
    ├── AUTONOMOUS-DEV-SYSTEM-DOCS.html
    └── CONVERSATIONS-INDEX.md
```

---

## Reference Files Location

All MDX content accessible at:

| Location | Content |
|----------|---------|
| `docs/reference/` | Core docs (copied to project) |
| `/Users/rafaelrodriguez/Downloads/datafiles/mdx-conversations/` | 108 ChatGPT conversations |
| `/Users/rafaelrodriguez/Downloads/datafiles/More MDx Content/` | Master folders with docs |

### Conversation Categories (108 total)
- **Vision:** 56 conversations (product vision, strategy)
- **Business:** 15 conversations (investors, funding, plans)
- **AOP:** 14 conversations (AI assistant concept)
- **Website:** 12 conversations (pitch decks, videos)
- **Technical:** 7 conversations (architecture, workflows)
- **Military:** 4 conversations (SBIR, DoD strategy)

---

## Design System (v2)

### Colors
- Dark backgrounds: `--dark-950` (#030712) to `--dark-600` (#374151)
- Glow accents: cyan (#00d4ff), purple (#8b5cf6), blue (#3b82f6)
- Glass effects: rgba(255,255,255,0.05) with backdrop-blur

### Key CSS Classes
- `.glass` - Glassmorphism effect
- `.gradient-text` - Purple to cyan gradient text
- `.glow-cyan`, `.glow-purple` - Box shadow glow effects
- `.radial-glow-*` - Background radial gradients
- `.grid-bg` - Subtle grid background pattern

### Vertical Color Schemes
- Healthcare: Cyan (#00d4ff)
- Police: Blue (#3b82f6)
- Fire: Orange (#f97316)
- EMS: Cyan (#00d4ff)
- Military: Green (#22c55e)

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

- GitHub Pages via GitHub Actions
- Repo: https://github.com/mdxvision/mdx-vision-v2
- Build output: `./out` (static export)

---

## Current Focus

Working on v2 verticals (police, fire, ems, military) - improving to Apple/Deloitte enterprise-level presentation.

---

## Future Features (To Research & Add)

### UHF Integration in HMD (Military)
**Status:** Needs research - conversations exist in datafiles
**Feature:** Hands-free walkie talkie with offline communications
- UHF radio integration in helmet-mounted display
- Push-to-talk via voice command
- Offline mesh communication between units
- No reliance on cell/wifi infrastructure

**Where to add:** Military deck slide 5 (Hardware) or slide 7 (Use Cases)
**Source:** Check datafiles/mdx-conversations/military/ and vision/ folders

### Voice-Controlled Drone (Patent Feature)
**Status:** In patent (US Patent 15/237,980)
**Feature:** Voice commands to control UAVs via HMD
- Hands-free drone operation
- AR overlay of drone camera feed
- Integration with A.R.I.M. interpolation engine

**Note:** Russia developing similar (VR helmet for UAV control) but MDx has voice-first approach

---

## Allied Nations Defense Procurement (Research Jan 2026)

### NATO (32 Nations)
**Key 2025 Changes:**
- Rapid Adoption Action Plan - Tech adoption within 24 months
- Iterative procurement replacing waterfall - easier for startups
- DIANA - Testing/validation for dual-use tech
- NIF - Equity investment in early-stage defense companies
- 5% GDP commitment by 2035 - massive budget increases

**Entry Points:**
| Program | Purpose |
|---------|---------|
| DIANA | Dual-use tech testing |
| NIF | Early-stage investment |
| NATO Innovation Ranges | Operational testing (Estonia, Finland, Italy, Latvia, Netherlands, Sweden) |

### Five Eyes (US, UK, Australia, Canada, NZ)
**Advantages:**
- Shortened export controls between members
- AUKUS Track 2 - AI and advanced tech cooperation (US, UK, Australia)
- Integrated defense procurement systems
- Personnel mobility as of 2025

**Current Status:**
- US, UK, Australia leading in tech integration
- Canada, NZ lagging - opportunity for suppliers

### US Foreign Military Sales (FMS)
**2025 Reforms (Executive Order):**
- Faster approval process
- Reduced regulations
- Priority partner lists
- $118B in FY2024 (up 46%)

**Priority Partners (15-day approval):**
- NATO members
- Japan
- Australia
- South Korea
- Israel
- New Zealand

### Recommended Markets for MDx
| Market | Why | Entry Path |
|--------|-----|------------|
| Australia | AUKUS partner, active procurement | FMS or direct |
| UK | Five Eyes, tech-forward | Direct or NATO |
| Israel | Priority partner, combat-proven needs | FMS |
| South Korea | Priority partner, DMZ needs | FMS |
| NATO Eastern Europe | Ukraine border, urgent needs | NATO/DIANA |

**Sources:**
- https://www.nato.int/cps/en/natohq/official_texts_236539.htm
- https://www.dsca.mil/Programs/Defense-Trade-and-Arms-Transfers/Foreign-Military-Sales
- https://www.whitehouse.gov/presidential-actions/2025/04/reforming-foreign-defense-sales-to-improve-speed-and-accountability/

---

## Russian Military Tech Research (Competitive Intelligence - Jan 2026)

### Ratnik Program (Infantry Combat System)
**Status:** Basic gear deployed (300K sets), AR glasses unclear

| Component | Status |
|-----------|--------|
| Body armor, helmet, comms | ✅ Deployed |
| AR glasses ($6K/unit) | ⚠️ Developed, no confirmed field use |
| Sotnik (Ratnik-3) | Planned 2025, unclear delivery |

**AR Glasses Specs (Novosibirsk Instrument Making Plant):**
- Cost: ~$6,000 USD (more than HoloLens 2)
- Features: Display info from command, electronic sight, drone video feed
- Optional: Night vision, thermal imager

**Strelets Communication System:**
- Voice/video communication
- GLONASS navigation
- Squad leader sees soldier positions
- Book-sized computer display

### Russian Battlefield Medical System
**4-Stage System:**
1. Mobile medical units
2. Military district hospitals
3. Central military facilities
4. Rehabilitation centers

**Reality in Ukraine (per CNA/FMSO reports):**
- Equipment: "Ancient Soviet bandage kit" + Esmarch tourniquet
- Supplies run out quickly, soldiers improvise
- Death-to-wounded ratio: 1:1.3 (very high)
- Drones complicate helicopter medevac

### MDx Competitive Advantages vs Russia

| Area | Russia | MDx Vision |
|------|--------|------------|
| AR Glasses | $6K, basic overlay | Full A.R.I.M. interpolation |
| Medical | Soviet-era kits | Real-time 9-Line (1-4 min) |
| Communication | Positions only | Voice + data + 500+ languages |
| Drone Control | VR helmet (manual) | Voice-controlled (patent) |
| Medevac | Manual, slow | Automated, hands-free |

**Key Insight:** Gap between Russian announcements and field reality. Soldiers using improvised medical gear while $6K AR glasses announced but not deployed.

**Sources:**
- https://en.wikipedia.org/wiki/Ratnik_(program)
- https://fmso.tradoc.army.mil/2024/details-emerge-on-the-russian-medical-system-in-ukraine/
- https://www.cna.org/reports/2024/11/We-Need-a-Medic-a_4920.pdf
- https://tass.com/defense/1018615

### Priority Improvements
1. Custom typography (premium fonts)
2. Hero video (autoplay muted)
3. Professional imagery (product renders, lifestyle shots)
4. More whitespace between sections
5. Bespoke icon set

---

## Gap Analysis: Investor Deck vs Website (December 2025)

### Corrected on Website (Previously Inaccurate)

| Issue | Old Value | Corrected Value | Source |
|-------|-----------|-----------------|--------|
| Founding Year | 2019 | 2016 | User confirmation |
| Languages Supported | 400+ (in deck) | 500+ | User confirmation |
| Team Size | 50+ displayed | Removed (actual: 11) | Investor Deck V4.0 |
| Provider Count | 1000+ | Removed (unverified) | User confirmation |
| Dragon/Nuance Partnership | Displayed as partner | Removed | User: No partnership |

### Removed from Website

| Item | Reason |
|------|--------|
| Coming Soon Section | All verticals (Police, Fire, EMS, Military) are live |
| Nuance/Dragon logos | No partnership exists |
| "50+ Team Members" stat | Inaccurate - actual team is 11 people |
| "1000+ Providers" stat | Unverified claim |

### Website vs Deck Alignment Status

| Element | Deck | Website | Status |
|---------|------|---------|--------|
| A.R.I.M. Technology | Patent Pending | Mentioned | ✅ Aligned |
| Languages | 400+ | 500+ | ✅ Website more current |
| Real-time processing | Core feature | Prominently featured | ✅ Aligned |
| EHR Integrations | Epic, Cerner, etc. | All listed | ✅ Aligned |
| Military Features | 9-Line Medevac, GPS | Full page | ✅ Aligned |
| Team Page | 11 members | Not on website | ⚠️ Optional |
| Thermal/Night Vision | Mentioned | Added to Military | ✅ Aligned |
| Facial Recognition | Mentioned | Added to Military | ✅ Aligned |

### Navigation Updates Made

- Added **Solutions dropdown** to header with all verticals:
  - Healthcare → /v2
  - Police → /v2/verticals/police
  - Fire → /v2/verticals/fire
  - EMS → /v2/verticals/ems
  - Military → /v2/verticals/military

### Stats Currently Displayed

**About Section:**
- Founded: 2016 ✅
- Languages: 500+ ✅

**Trust Section:**
- 10M+ Patient encounters (needs verification)
- 99.9% Uptime SLA ✅
- 256-bit AES encryption ✅
- <50ms Response time ✅

### Recommended Future Verifications

1. **10M+ patient encounters** - Validate or remove
2. **Partner logos** (JBI, TWS, PHC) - Confirm active partnerships
3. **EHR integrations** - Confirm all are active (Epic, Cerner, Veradigm, MEDITECH, athenahealth, eClinicalWorks)
4. **Certifications** - Verify current status (HIPAA, SOC 2, HITRUST, HL7 FHIR)

---

## Reference Files

### Investor Decks (in datafiles folder)
- `MDx Invester Deck- V4.0.pdf` - Contains team slide (page 16)
- Various pitch materials in More MDx Content folder

### Key Corrections Log

| Date | Change | File |
|------|--------|------|
| Dec 2025 | Removed Nuance from partners | TrustSection.tsx |
| Dec 2025 | Changed founding year 2019→2016 | AboutSection.tsx |
| Dec 2025 | Removed "50+ Team" and "1000+ Providers" stats | AboutSection.tsx |
| Dec 2025 | Removed Coming Soon section | v2/page.tsx |
| Dec 2025 | Added Solutions dropdown with verticals | HeaderDark.tsx |
| Dec 2025 | Added "How It Works" sections to EMS/Military | verticals/*.tsx |
| Jan 2026 | Updated ROI slide with competitor-benchmarked projections | hospital-sales-deck.html |
| Jan 2026 | Added DNFB metric to ROI slide | hospital-sales-deck.html |
| Jan 2026 | Upgraded capabilities slide to enterprise design | hospital-sales-deck.html |

---

## Work In Progress (Hospital Sales Deck)

**File:** `public/hospital-sales-deck.html`
**Live URL:** https://mdxvision.github.io/mdx-vision-v2/hospital-sales-deck.html

### Completed (Jan 2026)
- [x] ROI slide updated with middle-ground projections (75%, 2.5 hrs, 85%, 8X)
- [x] Added DNFB metric (60% reduction)
- [x] Slide 6 capabilities redesigned to enterprise level (branded containers, tagline, descriptors)

### Remaining Design Tasks
- [ ] Apply enterprise design treatment to other slides (consistency)
- [ ] Review slide 3 vs slide 6 for redundancy (both show capabilities-type content)
- [ ] Consider custom icons/illustrations for full Apple/Deloitte level
- [ ] Mobile responsive testing for new enterprise layout
- [ ] Russian hospital deck translation (matching English improvements)

### Design Decisions Made
| Slide | Decision | Rationale |
|-------|----------|-----------|
| Slide 6 | 4 icons instead of 6 cards | Rule of 3-4, reduce cognitive load |
| Slide 6 | Branded containers with gradients | Enterprise visual depth |
| Slide 6 | Short descriptors (2-3 words) | Balance between minimal and informative |
| Slide 8 | 5 ROI metrics including DNFB | Hospital CFO audience cares about revenue |

### ROI Projections Rationale
Based on competitor benchmarks:
- DAX: 50% time reduction
- Augmedix: 80% reduction, 2 hrs/day
- Suki: 72% faster, 6-9X ROI

MDx "middle ground" projections account for real-time (not post-encounter) advantage:
- 75% documentation time reduction
- 2.5 hrs saved per clinician/day
- 85% same-day note closure
- 60% DNFB reduction
- 8X ROI year 1
