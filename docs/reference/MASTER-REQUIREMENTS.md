# MDx Vision - Master Requirements Document

**Generated:** December 28, 2024
**Purpose:** Consolidated technical requirements for building the MDx Vision app

---

## Executive Summary

**MDx Vision** is an AR smart glasses + AI assistant (AOP) platform for healthcare, first responders, military, and accessibility users. Founded in 2016 by Rafael Rodriguez.

**Core Value Proposition:** Real-time, in-encounter data processing and feedback - filling the gap left by competitors (DAX, Augmedix, Suki AI) who only offer post-encounter analysis.

---

## What Already Exists

### 1. React Native Demo App (`mdx-demo/`)
A working prototype with Epic EHR integration:

| File | Description |
|------|-------------|
| `screens/Home.tsx` | Splash screen + main navigation |
| `screens/PatientList.tsx` | Fetches patients from Epic EHR via OAuth |
| `screens/PatientDetails.tsx` | Patient info with tabs (Details, Appointments, Notes, Session, Epic) |
| `screens/CallbackScreen.tsx` | OAuth callback handler |
| `apis/dynamicClient.tsx` | Epic OAuth dynamic client registration with RSA |

**Key Features Already Implemented:**
- Epic OAuth authentication flow
- Patient list fetch from Epic FHIR API
- Patient details display (name, DOB, gender, phone, address)
- Tabbed navigation optimized for Vuzix glasses
- Session recording placeholder
- Patient notes placeholder

### 2. Android APK
`app-release.apk` (57MB) - A compiled Android build exists

### 3. Documentation Collection
- 108 ChatGPT conversations extracted to `/mdx-conversations/`
- Multiple pitch decks, one-sheets, investor decks
- Business plans, NDAs, sales agreements
- White papers and technical descriptions

---

## Tech Stack Options

### Option A: Java + Spring Boot (Health_App_Architecture PDF)
**Recommended for:** Enterprise, hospital sales, full HIPAA compliance

| Layer | Technology |
|-------|------------|
| Backend | Java 17+ with Spring Boot 3.x + HAPI FHIR |
| AI Pipeline | Python + AssemblyAI + Azure OpenAI |
| Web Dashboard | React + TypeScript |
| Mobile | React Native + Native SDK bridges |
| Database | Azure SQL with TDE encryption |
| Real-time | Azure SignalR + Redis |
| Message Queue | Azure Service Bus |
| Infrastructure | Azure (AKS, Key Vault, Monitor) |

**HIPAA Data Flow:**
```
AR Glasses/Mobile --> AssemblyAI (audio only, no PHI)
                  --> Java Backend (strips PHI)
                  --> Azure Service Bus
                  --> Python AI (de-identified)
                  --> Azure OpenAI
                  --> Java Backend (re-attaches PHI)
                  --> Azure SQL (encrypted storage)
                  --> SignalR (push to UI)
```

**Pros:**
- Enterprise-grade HIPAA compliance
- HAPI FHIR built-in for EHR interoperability
- Strong typing, better for large teams
- Azure BAA available

**Cons:**
- More complex setup
- Slower development velocity
- Higher infrastructure costs

---

### Option B: Ruby on Rails (Original Handoff Doc)
**Recommended for:** Rapid MVP, pilot testing, startup agility

| Layer | Technology |
|-------|------------|
| Backend | Ruby on Rails + PostgreSQL |
| AI Pipeline | Python + AssemblyAI + OpenAI |
| Web | React web client |
| Mobile | React Native (Vuzix, iOS, Android) |
| Real-time | WebSocket (ActionCable) |
| Infrastructure | Azure (HIPAA compliant) |

**Pros:**
- Faster development (Rails conventions)
- Simpler architecture
- Existing Rails expertise available
- Quick to iterate

**Cons:**
- Less enterprise appeal
- Manual FHIR implementation needed
- Scaling challenges at high volume

---

### Option C: Hybrid Approach (Recommended)
**Build incrementally, migrate to enterprise stack**

**Phase 1 (MVP):**
- React Native mobile (extend existing `mdx-demo`)
- Node.js/Express backend (TypeScript)
- AssemblyAI for transcription
- OpenAI for clinical NLP
- PostgreSQL database
- Basic Epic FHIR integration (already working)

**Phase 2 (Pilot):**
- Add Azure infrastructure
- Implement HIPAA audit logging
- Real-time via Socket.io
- Web dashboard in React

**Phase 3 (Enterprise):**
- Migrate backend to Java + Spring Boot if needed
- Add HAPI FHIR server
- Full Azure compliance stack
- Multi-tenant architecture

---

## Core Features Required

### Healthcare (Priority 1)
- [ ] Real-time voice-to-text transcription
- [ ] Live transcription display in AR glasses
- [ ] AI-powered clinical note generation (SOAP format)
- [ ] ICD-10 code suggestions
- [ ] Drug interaction alerts
- [ ] EHR integration (Epic, Cerner, Allscripts, MEDITECH)
- [ ] Insert draft notes into EHR in real-time
- [ ] Wake word activation ("Hey MDx")
- [ ] Multi-language support (86+ languages)
- [ ] Real-time translation (400+ languages)

### First Responders (Priority 2)
- [ ] EMT workflow documentation
- [ ] Patient handoff summaries
- [ ] Vital signs voice capture
- [ ] ePCR integration

### Military (Priority 3)
- [ ] 9-Line Medevac automation
- [ ] Helmet-integrated display
- [ ] Secure encrypted communications
- [ ] GPS and unit tracking
- [ ] Offline capability
- [ ] Facial recognition

### Accessibility (Priority 4)
- [ ] Audio navigation for blind users
- [ ] Facial recognition for dementia patients
- [ ] Medication reminders
- [ ] Fall detection
- [ ] Emergency alerts

---

## Hardware Target

### Vuzix Smart Glasses Specs
- Android OS
- Internal batteries
- Touchpad control
- 40GB memory
- Micro USB connection
- Auto-focus HD camera
- Full-color see-through display (Cobra engine)
- Noise cancellation microphone
- Stereo speakers
- Safety certified lenses
- Wi-Fi + optional satellite uplink

---

## Compliance Requirements

| Standard | Required For |
|----------|--------------|
| HIPAA | All healthcare deployments |
| SOC 2 Type II | Enterprise customers |
| DoD IL4/IL5 | Military deployments |
| ADA/508 | Accessibility features |

---

## AI Pipeline Architecture

### Speech-to-Text
**Provider:** AssemblyAI (streaming)
- Real-time transcription
- Speaker diarization (2-person recognition)
- Medical vocabulary support
- Multi-language

### Clinical NLP
**Provider:** Azure OpenAI (GPT-4)
- SOAP note generation
- ICD-10 coding
- Drug interaction checking
- Clinical summarization
- Translation

### 4-Phase AI Roadmap
1. **Phase 1:** Third-party APIs (AssemblyAI + OpenAI)
2. **Phase 2:** Fine-tune custom model with de-identified data
3. **Phase 3:** Hybrid (custom model + API fallback)
4. **Phase 4:** Full proprietary AI ("ElRoy" model)

---

## EHR Integration Points

### Epic (Primary)
- OAuth 2.0 authentication (SMART on FHIR)
- Patient search/read
- Encounter creation
- DocumentReference write (notes)
- Observation write (vitals)
- Already implemented in `mdx-demo`

### Others (Future)
- Cerner (FHIR R4)
- Allscripts
- MEDITECH
- McKesson
- Athenahealth

---

## Development Roadmap (from Montefiore deck)

| Phase | Focus |
|-------|-------|
| 1 | Raise funding |
| 2 | 2 months development - NLP, 2-person recognition, live transcription, live summarization, draft notes, EHR insert, auto-tasks, translation |
| 3 | 1 month + early trial with 1-3 doctors |
| 4 | 6-month official trial at Montefiore |

---

## Key Differentiators vs Competitors

| Feature | MDx Vision | DAX Copilot | Augmedix | Suki AI |
|---------|-----------|-------------|----------|---------|
| Real-time processing | YES | No | No | No |
| AR glasses | YES | No | No | No |
| Hands-free | YES | Partial | No | Yes |
| Live EHR insert | YES | No | No | No |
| 86+ languages | YES | No | No | No |
| 400+ translation | YES | No | No | No |

---

## Files Reference

### Technical Docs (More MDx Content/)
- `Business Requirements Document (BRD) for MDx Powered by ARIM.docx`
- `Project Scope of Work (SOW) for MDX Healthcare App Development.docx`
- `MDx v2.0 Brief Technical Description.docx`
- `Artificial Omniscient Person-AOP Concept.docx`
- `MDx White Paper.docx`

### Architecture
- `Health_App_Architecture_PDF_Revised_V1.pdf` (28 pages)

### Existing Code
- `mdx-demo/` - React Native app with Epic integration
- `app-release.apk` - Android build

### Presentations
- `MDX - Presentation Build.pdf` (Montefiore pitch)
- Various investor decks (v4.0-v5.0.1)
- Healthcare, Military, First Responder one-sheets

---

## Next Steps

1. **Choose tech stack** (Option A, B, or C)
2. **Set up development environment**
3. **Extend existing mdx-demo or start fresh**
4. **Implement core MVP features**
5. **Connect to Epic sandbox**
6. **Add AssemblyAI transcription**
7. **Integrate OpenAI for clinical NLP**
8. **Test on Vuzix glasses**

---

## Contact

**Founder:** Rafael Rodriguez (rafael@mdx.vision)
**Designer:** Edgar Zorrilla
