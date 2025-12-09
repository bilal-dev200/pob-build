import Head from "next/head";

const CustomSeo = ({ title, des, focuskey, canonicalUrl, schema }) => {
  const mainUrl = typeof window !== "undefined" ? window.location.origin : "";

  // Build full canonical URL
  const fullCanonicalUrl = canonicalUrl
    ? canonicalUrl.startsWith("http")
      ? canonicalUrl
      : `${mainUrl}${canonicalUrl}`
    : null;

  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Description */}
      {des && <meta name="description" content={des} />}

      {/* Focus Keyword */}
      {focuskey && <meta name="keywords" content={focuskey} />}

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Schema markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </Head>
  );
};

export default CustomSeo;
