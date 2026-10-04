import { notFound } from "next/navigation";
import Studio from "./Studio";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) notFound();
  return <Studio />;
}
