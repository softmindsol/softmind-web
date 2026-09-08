/**
 * GA4 Event Tracking Utility
 * SoftMind Solutions — GA4 / Next.js Implementation
 *
 * Usage:
 *   import { trackEvent } from '@/lib/ga'
 *   trackEvent('get_quote_click', { location: 'homepage_hero' })
 *
 * NOTE: Never pass personally identifiable information (names, emails,
 * phone numbers, message contents, etc.) as event parameters.
 */

import { sendGAEvent } from "@next/third-parties/google";

/**
 * Fire a GA4 custom event.
 * Silently no-ops if GA4 is not yet loaded (e.g. dev without a GA ID set).
 *
 * @param {string} eventName - The GA4 event name (snake_case).
 * @param {Record<string, unknown>} [params] - Optional event parameters.
 */
export function trackEvent(eventName, params = {}) {
  try {
    sendGAEvent("event", eventName, params);
  } catch {
    // GA4 not available — do nothing.
  }
}
