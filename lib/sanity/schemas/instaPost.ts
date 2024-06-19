import { defineField, defineType } from "sanity";
import InstagramPreview from "./previews/instaPost";

export default defineType({
  name: "instaPost",
  title: "Instagram Post",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Visit an Instagram post in a browser and copy the URL.",
    }),
  ],
  preview: {
    select: { title: "url" },
  },
  components: {
    preview: InstagramPreview,
  },
});
