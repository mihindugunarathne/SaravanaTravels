/** Shared contact details — use on Contact page and homepage Contact section */
export const CONTACT_OFFICE_ADDRESS = "123 Travel Street, Chennai, Tamil Nadu — 600001";
export const CONTACT_PHONE_DISPLAY = "+91 98765 43210";
/** E.164 without spaces for tel: and wa.me */
export const CONTACT_PHONE_E164 = "919876543210";
export const CONTACT_EMAIL = "info@saravanaatravels.com";
export const CONTACT_WORKING_HOURS = "Monday – Saturday: 9:00 AM – 7:00 PM";

export const contactTelHref = `tel:+${CONTACT_PHONE_E164}`;
export const contactMailtoHref = `mailto:${CONTACT_EMAIL}?subject=Trip%20inquiry%20%E2%80%94%20Saravana%20Travels`;
export const contactWhatsAppHref = `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent("Hi, I'd like to plan a trip with Saravana Travels.")}`;
