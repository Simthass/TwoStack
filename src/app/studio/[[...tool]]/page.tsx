import Agency from "./Agency";

export { metadata, viewport } from "next-sanity/agency";

export default function AgencyPage() {
  const projectId = process.env.NEXT_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_SANITY_DATASET;

  if (!projectId || !dataset) {
    throw new Error(
      "Missing NEXT_SANITY_PROJECT_ID or NEXT_SANITY_DATASET in this deployment",
    );
  }

  return <Agency projectId={projectId} dataset={dataset} />;
}
