/**
 * Sign Zone DFW - Conversion & Analytics Event Tracking
 * Supports Google Analytics 4 (GA4) and Google Tag Manager.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      targetIdOrAction: string,
      params?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }

  // Development logger for rapid verification
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Sign Zone Analytics] ${action}:`, params)
  }
}

export function trackCall(location: string = 'global') {
  trackEvent('click_to_call', {
    event_category: 'Lead',
    event_label: '214-714-4623',
    link_location: location,
    value: 100, // Assigned commercial lead proxy value
  })
}

export function trackSms(location: string = 'global') {
  trackEvent('click_to_sms', {
    event_category: 'Lead',
    event_label: '214-714-4623',
    link_location: location,
  })
}

export function trackQuoteSubmission(types: string[], businessName?: string) {
  trackEvent('generate_lead', {
    event_category: 'Quote',
    event_label: types.join(', '),
    sign_types: types,
    business_name: businessName || 'Not specified',
    value: 500, // Qualified commercial estimate proxy value
  })
}

export function trackReviewClick(platform: string = 'google') {
  trackEvent('leave_review_click', {
    event_category: 'Reputation',
    event_label: platform,
  })
}
