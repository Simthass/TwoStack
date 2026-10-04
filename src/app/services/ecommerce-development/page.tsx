import type { Metadata } from "next";
import ServiceLandingPage from "@/components/seo/ServiceLandingPage";
import { SERVICES } from "@/lib/service-data";
import { createMetadata, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

const service = SERVICES["ecommerce-development"];
const path = `/services/${service.slug}`;

export const metadata: Metadata = createMetadata({
  title: service.metadataTitle,
  description: service.description,
  path,
});

export default function Page() {
  const schema = [
    serviceSchema({
      name: service.metadataTitle,
      description: service.description,
      path,
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
