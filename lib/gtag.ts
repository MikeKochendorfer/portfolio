export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// temporary workaround for type on gtag
declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}; 

interface Event {
  action: string;
  category: string;
  label: string;
  value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value}: Event) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
