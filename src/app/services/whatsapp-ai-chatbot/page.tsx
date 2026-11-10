import type { Metadata } from "next";
import ServiceLandingPage from "@/components/seo/ServiceLandingPage";
import { SERVICES } from "@/lib/service-data";
import {
  createMetadata,
  faqSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const service = SERVICES["whatsapp-ai-chatbot"];
const path = `/services/${service.slug}`;
const title = service.seoTitle ?? service.metadataTitle;

export const metadata: Metadata = createMetadata({
  title,
  description: service.description,
  path,
  image: `${path}/opengraph-image`,
});

export default function Page() {
  const schema = [
    webPageSchema({
      name: title,
      description: service.description,
      path,
    }),
    serviceSchema({
      name: service.metadataTitle,
      description: service.description,
      path,
      serviceType: "WhatsApp AI chatbot development",
    }),
    faqSchema(service.faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <ServiceLandingPage service={service} />
    </>
  );
}
