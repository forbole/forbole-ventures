import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer, NavBar } from "./components";
import { useGetStyles } from "./styles";
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
  const { classes } = useGetStyles();
  const router = useRouter();
  const baseUrl =
    process.env.NEXT_PUBLIC_URL?.replace(/\/$/, "") ??
    "https://ventures.forbole.com";
  const currentUrl = `${baseUrl}${router.asPath}`;

  const title = "Forbole Ventures";
  const description =
    "The private investment arm of Forbole to invest in promising crypto projects.";
  const imageUrl = `${baseUrl}/og.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={currentUrl} />
      </Head>
      <div className={`${className} ${classes.root}`}>
        <div className="nav__container">
          <NavBar logoURL={logoURL || "/"} />
        </div>
        {children}
        <div className="socials__container">
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
