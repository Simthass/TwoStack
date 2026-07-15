import Nav from "@/components/Nav";
import Hero from "@/components/services/Hero";
import SystemLayers from "@/components/services/SystemLayers";
import LiveDemo from "@/components/services/LiveDemo";
import Process from "@/components/services/Process";
import CtaFooter from "@/components/services/CtaFooter";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two Stack builds the website, the automation and the intelligence layer behind it — as one connected system.",
  alternates: {
    canonical: "https://twostack.lk/services",
  },
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
