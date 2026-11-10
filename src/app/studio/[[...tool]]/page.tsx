import Studio from "./Studio";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  const projectId = process.env.NEXT_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_SANITY_DATASET ?? "production";

  if (!projectId) {
    return <p>Missing NEXT_SANITY_PROJECT_ID.</p>;
  }

  return <Studio projectId={projectId} dataset={dataset} />;
}
