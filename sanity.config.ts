import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Dink'It",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Landing Page")
              .id("landingPage")
              .child(
                S.document().schemaType("landingPage").documentId("landingPage")
              ),
            S.listItem()
              .title("Features Page")
              .id("featuresPage")
              .child(
                S.document().schemaType("featuresPage").documentId("featuresPage")
              ),
            S.listItem()
              .title("Roadmap Page")
              .id("roadmapPage")
              .child(
                S.document().schemaType("roadmapPage").documentId("roadmapPage")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
