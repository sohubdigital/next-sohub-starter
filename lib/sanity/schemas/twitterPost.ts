import { defineField, defineType } from "sanity";
import TwitterPreview from "./previews/twitterPost";

export default defineType({
  name: "twitterPost",
  title: "Twitter Post",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Visit a Twitter post in a browser and copy the URL.",
    }),
  ],
  preview: {
    select: { title: "url" },
  },
  components: {
    preview: TwitterPreview,
  },
});
