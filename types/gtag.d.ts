export {};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      params?: {
        [key: string]: any;
      }
    ) => void;
  }
}
