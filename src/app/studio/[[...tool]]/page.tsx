import Studio from "./Studio";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  const projectId = process.env.NEXT_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_SANITY_DATASET;

  if (!projectId || !dataset) {
    throw new Error(
      "Missing NEXT_SANITY_PROJECT_ID or NEXT_SANITY_DATASET in this deployment",
    );
  }

  return <Studio projectId={projectId} dataset={dataset} />;
}
