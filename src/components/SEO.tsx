// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export const SEO: React.FC<Props> = ({
  title = "Darpan Neve — Full-Stack Developer",
  description = "Portfolio of Darpan Neve — React, Node.js & Python developer.",
  image = "https://darpanneve.com/og-image.png",
  url = "https://darpanneve.com/",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
