import { SchemaTypeDefinition } from "sanity";

import blockContent from "./blockContent";
import post from "./post";
import instaPost from "./instaPost";
import categories from "./category";
import twitterPost from "./twitterPost";
import author from "./author";

export const schemaTypes = [
  post,
  blockContent,
  instaPost,
  categories,
  twitterPost,
  author,
];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, instaPost, categories, twitterPost, author],
};
