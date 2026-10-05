"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "@/sanity/schemaTypes/post";

type Props = {
  projectId: string;
  dataset: string;
};

export default function Studio({ projectId, dataset }: Props) {
  const config = defineConfig({
    name: "twostack",
    title: "TwoStack Editorial",
    basePath: "/studio",
    projectId,
    dataset,
    plugins: [structureTool()],
    schema: { types: [post] },
  });

  return <NextStudio config={config} />;
}
