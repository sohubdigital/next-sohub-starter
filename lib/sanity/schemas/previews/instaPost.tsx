import React from "react";
import type { PreviewProps } from "sanity";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramPreview = (props: PreviewProps) => {
  const { title: url } = props;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return <InstagramEmbed url={url as string} width={480} captioned />;
};

export default InstagramPreview;
