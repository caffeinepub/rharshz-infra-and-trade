# Rharshz Infra and Trade

## Current State
New project. No existing code or pages.

## Requested Changes (Diff)

### Add
- Multi-page premium business website for "Rharshz Infra and Trade"
- Home page: Full-width hero section with video background (construction timelapse placeholder), headline, tagline, and CTA button
- About Us page: Company story, engineering excellence focus, team/milestones section, values
- Properties page: Grid-style portfolio of luxury residential real estate listings with image, title, location, price, and brief description per card
- Trade Services page: Listing of large-scale infrastructure and trade services with icons and descriptions
- Contact page: Consultation booking form with fields for name, email, phone, project type (dropdown), preferred date, and message
- Navigation: Sticky top nav with logo, page links, and a "Book Consultation" CTA
- Footer: Company info, quick links, contact details
- Backend: Store contact/consultation form submissions; store property listings; store trade service entries

### Modify
- None (new project)

### Remove
- None (new project)

## Implementation Plan
1. Backend actor:
   - `submitConsultation(name, email, phone, projectType, preferredDate, message)` -> stores consultation request
   - `getConsultations()` -> admin retrieval of all consultations
   - `getProperties()` -> returns list of luxury property listings (seeded sample data)
   - `getTradeServices()` -> returns list of trade service entries (seeded sample data)
   - Property type: { id, title, location, price, description, imageTag }
   - TradeService type: { id, title, description, icon }
   - ConsultationRequest type: { id, name, email, phone, projectType, preferredDate, message, timestamp }

2. Frontend pages:
   - `/` Home: Hero with video/overlay, stats bar, featured projects teaser, call to action
   - `/about` About Us: Engineering excellence narrative, timeline, core values
   - `/properties` Properties: Responsive grid of property cards
   - `/trade-services` Trade Services: Service cards with icons and descriptions
   - `/contact` Contact: Consultation booking form with validation, success state

3. Design tokens: Deep Navy (#0A1628), White (#FFFFFF), Brushed Silver (#B0B7C3 / #D4D8E1), accent gold (#C9A84C) for highlights
4. Typography: Serif or modern sans for headings, clean sans-serif for body
5. Navigation: Fixed top with logo left, links center/right, CTA button
6. Animations: Subtle fade-in on scroll for sections, hover states on cards
