export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = (): void => {
  window.fbq('track', 'PageView');
};

export const event = (name: string, options: Record<string, any> = {}): void => {
  window.fbq('track', name, options);
};

export const trackLead = (): void => {
  window.fbq('track', 'Lead');
};

export const trackPurchase = (value: number, currency: string = 'USD'): void => {
  window.fbq('track', 'Purchase', { value, currency });
};

export const trackAddToCart = (content: Record<string, any>): void => {
  window.fbq('track', 'AddToCart', content);
};