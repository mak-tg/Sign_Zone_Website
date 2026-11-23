# 📊 Sign Zone DFW - Conversion Tracking & Review Engine Guide (Phase 5)

This turnkey operations guide enables the business owner and installation team to activate analytics, monitor real commercial sign leads, and collect 5-star Google reviews on job sites.

---

## 🚀 1. Activating Google Analytics 4 (GA4) & Search Console

All tracking infrastructure is pre-wired into the codebase. To activate live data collection, simply provide these two environment variables in your `.env.local` or hosting provider settings (e.g. Vercel, Netlify, Cloudflare):

```env
# 1. Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# 2. Google Search Console HTML Verification Token
NEXT_PUBLIC_GSC_VERIFICATION=your_google_verification_token_here

# 3. Direct Google Business Profile Review URL (Optional - defaults to GBP search)
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://g.page/r/YOUR_GBP_REVIEW_SHORTLINK/review
```

### How to get your GA4 Measurement ID:
1. Go to [analytics.google.com](https://analytics.google.com) and create a free account.
2. Create a Property: **Sign Zone DFW**.
3. Under **Data Streams** → Select **Web** → Enter URL: `https://www.signzoneusa.com`.
4. Copy the **Measurement ID** starting with `G-` (e.g., `G-AB12CD34EF`).

### How to get your Search Console Verification Token:
1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Add Property → Select **URL Prefix** → Enter `https://www.signzoneusa.com`.
3. Under **Other Verification Methods**, click **HTML Tag**.
4. Copy only the value inside `content="..."` (e.g., `abc123xyz_verification_code`).

---

## 📈 2. Automated Conversion Events Tracked

Once GA4 is activated, the website automatically logs high-intent commercial lead actions into Google Analytics:

| Event Name | Trigger | Lead Proxy Value | Where Viewed in GA4 |
|---|---|:---:|---|
| **`click_to_call`** | Prospect clicks any phone number (`214-714-4623`) across header, footer, or mobile bar | **$100** | GA4 → Events / Conversions |
| **`click_to_sms`** | Prospect taps the "Text" CTA on mobile | **$50** | GA4 → Events |
| **`generate_lead`** | Prospect finishes the `/quote` multi-step wizard | **$500** | GA4 → Conversions |
| **`leave_review_click`**| Customer clicks "Leave a Review on Google" on `/review` | **$150** (Reputation) | GA4 → Events |

---

## ⭐ 3. On-Site Review Collection SOP for Installation Crews

Google's #1 ranking factor for local **Google Maps 3-Pack** rankings is **review velocity and local keywords in customer reviews**.

### The 60-Second Handover Workflow:
1. **At Sign Completion:** When the install crew powers on the sign for the client, the lead installer opens **`https://www.signzoneusa.com/review`** on their phone.
2. **Show the QR Code:** Have the business owner or store manager point their iPhone/Android camera at the on-screen QR code.
3. **The Review Prompts:** The page gently prompts the client to mention:
   * **Their city** (e.g. *Frisco, Plano, Dallas*)
   * **Their sign type** (e.g. *Front-lit channel letters, monument sign*)
4. **Instant Google Review:** Tapping the big blue button opens their native Google review screen in 1 click!

> 💡 **Pro-Tip:** If the client ever expresses any concern or needs an adjustment, the `/review` page prominently provides Alex's direct phone number (`214-714-4623`) so complaints are resolved privately before reaching Google.
