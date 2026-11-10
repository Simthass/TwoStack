"use client";

import { NextAgency } from "next-sanity/agency";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "@/sanity/schemaTypes/post";

type Props = {
  projectId: string;
  dataset: string;
};

export default function Agency({ projectId, dataset }: Props) {
  const config = defineConfig({
    name: "twostack",
    title: "TwoStack Editorial",
    basePath: "/agency",
    projectId,
    dataset,
    plugins: [structureTool()],
    schema: { types: [post] },
  });

  return <NextAgency config={config} />;
}
