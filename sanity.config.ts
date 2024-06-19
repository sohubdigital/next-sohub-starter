/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// see https://www.sanity.io/docs/api-versioning for how versioning works
import { dataset, projectId } from "@/lib/sanity/sanity.api";
import { schema } from "@/lib/sanity/schemas";

export default defineConfig({
  basePath: "/sanity",
  name: "molly-news",
  title: "Molly News",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          // Default form view
          S.view.form(),
        ]);
      },
    }),
  ],
});
