"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./src/sanity/schemaTypes/post";

export default defineConfig({
  name: "twostack",
  title: "TwoStack Editorial",
  basePath: "/studio",
  projectId: process.env.NEXT_SANITY_PROJECT_ID || "demo",
  dataset: process.env.NEXT_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: [post] },
});
