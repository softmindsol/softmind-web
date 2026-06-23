/**
 * Navigation constants for the application.
 * Extracted to separate configuration from UI representation.
 */

/**
 * @typedef {Object} NavItem
 * @property {string} label - The display text for the navigation item.
 * @property {string} href - The URL path the item links to.
 * @property {boolean} [isActive] - Whether the item is currently active.
 * @property {boolean} [hasDropdown] - Whether the item has a dropdown menu.
 */

/**
 * List of primary navigation items.
 * @type {NavItem[]}
 */
export const NAV_ITEMS = [
  { label: "Home", href: "/", isActive: true },
  { label: "About Us", href: "/about" },
  { label: "What we Offer", href: "/services", hasDropdown: true },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];
