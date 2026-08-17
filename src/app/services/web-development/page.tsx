import type { Metadata } from "next";
import ServiceLandingPage from "@/components/seo/ServiceLandingPage";
import { SERVICES } from "@/lib/service-data";
import { breadcrumbSchema, createMetadata, faqSchema, jsonLd, serviceSchema } from "@/lib/seo";

const service = SERVICES["web-development"];
const path = `/services/${service.slug}`;

export const metadata: Metadata = createMetadata({
  title: service.metadataTitle,
  description: service.description,
  path,
});

export default function Page() {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.metadataTitle, path },
    ]),
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
