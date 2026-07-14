// File: src/app/services/page.tsx

import Nav from "@/components/Nav";
import Hero from "@/components/services/Hero";
import SystemLayers from "@/components/services/SystemLayers";
import LiveDemo from "@/components/services/LiveDemo";
import Process from "@/components/services/Process";
import CtaFooter from "@/components/services/CtaFooter";

export const metadata = {
  title: "Services — Two Stack",
  description:
    "Two Stack builds the website, the automation and the intelligence layer behind it — as one connected system.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SystemLayers />
        <LiveDemo />
        <Process />
        <CtaFooter />
      </main>
    </>
  );
}
