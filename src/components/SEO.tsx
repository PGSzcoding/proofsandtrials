import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}

const SITE_NAME = "Proofs and Trials P&T";
const SITE_URL = "https://proofsandtrials.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
}: SEOProps) {
  const pageTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}