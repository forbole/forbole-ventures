import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
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
