import React from "react";
import type { PreviewProps } from "sanity";
import { XEmbed } from "react-social-media-embed";

const TwitterPreview = (props: PreviewProps) => {
  const { title: url } = props;
  if (!url) {
    return <p>Missing URL for Twitter post</p>;
  }

  return <XEmbed url={url as string} width={480} />;
};

export default TwitterPreview;
