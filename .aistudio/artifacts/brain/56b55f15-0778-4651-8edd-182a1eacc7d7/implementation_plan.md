# Update Phone Number to 08088275348 & Left-Side Floating Call Button

Comprehensive plan to update all telephone links and display numbers throughout the site to **08088275348** and implement a high-converting, responsive floating call button anchored to the left side of the viewport.

### User Review & Critical Decisions

> [!IMPORTANT]
> The phone number `08088275348` will replace `18005321688` uniformly across all pages (Header, Hero CTA, Service Callouts, Contact Form, Footer, and Floating Action components).

- **Left-Side Floating Button**: An animated circular button (`bg-[#FFA700]` with white phone icon and subtle radar pulse rings) fixed at the bottom-left of desktop/tablet screens, and accessible on mobile above the bottom navigation bar.
- **Mobile Multi-Channel Support**: Keep WhatsApp support active alongside the direct phone dialer for quick customer convenience.

---

## 1. Overview & Core Concept

- **What It Delivers**:
  - Direct click-to-call dialing for `08088275348` across all website touchpoints.
  - An eye-catching, persistent floating call button on the left edge of the screen, ensuring that customers encountering water purifier emergencies (leaks, beeping sound, filter failure) can immediately place a call with a single tap.
- **Target Audience**: Residential and commercial water purifier owners in need of immediate doorstep assistance.
- **Key Value**: Reduced friction to connect with dispatchers, boosting inbound lead calls and conversion.

---

## 2. User Experience & Visual Design

### Left-Side Floating Button
- **Desktop & Tablet**:
  - Position: `fixed left-5 bottom-8 z-50`
  - Visual: Circular badge (56px × 56px) with vibrant `#FFA700` background, subtle drop-shadow, and a smooth pulsing animation ring.
  - Hover: Expandable tooltip or pill label revealing *"Call 08088275348"* with smooth transition.
  - Action: Immediately initiates telephone call to `tel:08088275348`.
- **Mobile**:
  - Placed seamlessly on the left or integrated into the mobile action bar, ensuring no overlap with text content or the booking form.

### Global Number Consistency
- **Header**: `Call Now: 08088275348`
- **Hero Section**:
  - Call CTA: *"Call Now: 08088275348"*
- **Diagnosis Section**:
  - Problem Callout Bar: *"For Booking Call: 08088275348"*
- **Booking Confirmation Card**: Direct fallback dialer to `08088275348`
- **Sub-pages & Footer**: Direct support lines updated to `08088275348`

---

## 3. Key Product Decisions & Trade-Offs

- **Standardized Tel Protocol**:
  - Use `href="tel:08088275348"` (with standard 10-digit Indian mobile/landline dialing) so native phone dialers launch automatically on iOS, Android, and desktop softphones.
- **Left-Side Floating Placement**:
  - Anchoring on the left avoids collision with typical right-side widgets (like standard chat widgets or scrollbars) and provides high visual prominence for Western reading direction (left-to-right).

---

## 4. Technical Architecture & Component Flow

```
┌────────────────────────────────────────────────────────┐
│                      Site Layout                       │
├──────────────────────────┬─────────────────────────────┤
│   Sticky Top Header      │ "Call Now: 08088275348"     │
├──────────────────────────┴─────────────────────────────┤
│                                                        │
│   Main Page Content (Index / Contact / Services)       │
│   - Hero Section Button  -> tel:08088275348            │
│   - Diagnostic CTA Bar   -> tel:08088275348            │
│   - Booking Form Success -> tel:08088275348            │
│                                                        │
├────────────────────────────────────────────────────────┤
│   Left Floating Button (SlidingCTA.tsx)                │
│   - Desktop: fixed left-5, bottom-8                    │
│   - Mobile: fixed left-4, bottom-16                    │
│   - Direct link: href="tel:08088275348"                │
├────────────────────────────────────────────────────────┤
│   Site Footer                                          │
│   - Contact details: 08088275348                       │
└────────────────────────────────────────────────────────┘
```

---

## 5. Planned Changes

1. **`client/components/site/SlidingCTA.tsx`**:
   - Re-anchor the floating call button to the **left side** (`left-5 bottom-8`).
   - Implement pulsing ring animation and direct `tel:08088275348` trigger.
   - Maintain the split bottom action bar on mobile with updated number `08088275348`.

2. **`client/components/site/Header.tsx`**:
   - Replace any remaining `18005321688` instances with `08088275348`.

3. **`client/pages/Index.tsx`**:
   - Update hero call button, problem diagnosis callout, and booking fallback to `08088275348`.

4. **`client/pages/Placeholder.tsx` & `client/pages/Contact.tsx`**:
   - Ensure all call triggers link to `08088275348`.

5. **`client/components/site/Footer.tsx`**:
   - Update helpline numbers in footer.
