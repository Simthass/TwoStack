"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function ContactClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) track("whatsapp_click", { path: window.location.pathname });
      else if (href.startsWith("mailto:")) track("email_click", { path: window.location.pathname });
      else if (href.startsWith("/contact")) track("contact_page_click", { path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
