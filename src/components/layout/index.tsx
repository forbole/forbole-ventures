import React from "react";
import Head from "next/head";
import { Footer, NavBar } from "./components";
import SocialMedia from "../social_media";

export interface LayoutProps {
  children: React.ReactNode;
  className: string;
  color?: string;
  navColor?: string;
  mobileNavColor?: string;
  logoURL?: string;
}

const Layout = (props: LayoutProps) => {
  const { children, className, logoURL } = props;
  const baseUrl =
    process.env.NEXT_PUBLIC_URL?.replace(/\/$/, "") ??
    "https://ventures.forbole.com";
  const canonicalUrl = `${baseUrl}/`;

  const title = "Forbole Ventures | Web3 & Blockchain Investor";
  const description =
    "Forbole Ventures backs early-stage Web3 and blockchain founders with capital, validator infrastructure, staking expertise, and ecosystem support.";
  const imageUrl = `${baseUrl}/og.png`;
  const logoUrl = `${baseUrl}/images/icons/android-chrome-512x512.png`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: "Forbole Ventures",
        url: canonicalUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 512,
          height: 512,
        },
        image: imageUrl,
        description,
        email: "info@forbole.com",
        sameAs: [
          "https://www.linkedin.com/company/forbole-ventures/",
          "https://twitter.com/ForboleV",
        ],
        parentOrganization: {
          "@type": "Organization",
          name: "Forbole",
          url: "https://www.forbole.com/",
        },
        knowsAbout: [
          "Web3",
          "Blockchain infrastructure",
          "Early-stage investment",
          "Proof-of-stake validation",
          "Cryptocurrency staking",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: "Forbole Ventures",
        description,
        publisher: { "@id": `${canonicalUrl}#organization` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${canonicalUrl}#website` },
        about: { "@id": `${canonicalUrl}#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Forbole Ventures" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Forbole Ventures" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Forbole Ventures — Let's build the decentralized future"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ForboleV" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta
          name="twitter:image:alt"
          content="Forbole Ventures — Let's build the decentralized future"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <div
        className={`${className} min-h-screen bg-[url('/images/background-mobile.svg')] bg-cover bg-[position:0_-250px] bg-no-repeat min-[960px]:bg-[position:0_-900px] min-[1280px]:bg-[url('/images/background-desktop.svg')] min-[1280px]:bg-[position:0_-400px]`}
      >
        <div className="absolute z-[500] flex w-full items-center justify-between">
          <NavBar logoURL={logoURL || "/"} />
        </div>
        {children}
        <div className="fixed-social fixed right-2 bottom-2 z-[110] min-[1080px]:right-6 min-[1080px]:bottom-6 [&_.media]:!mx-0 [&_.media]:py-[0.3rem] [&_.social-media]:flex-col [&_.social-media]:items-end">
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
