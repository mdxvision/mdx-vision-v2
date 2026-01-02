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
- Augmented Reality Information Matrix
- Core differentiator
- Real-time data overlay

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
