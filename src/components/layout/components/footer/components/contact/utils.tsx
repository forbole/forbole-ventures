import React from "react";
import { LinkedinIcon, TwitterIcon, TelegramIcon, FacebookIcon } from "@icons";

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <LinkedinIcon />,
    className: "linkedin",
    url: "https://discord.desmos.network",
  },
  {
    component: <TelegramIcon />,
    className: "telegram",
    url: "https://github.com/desmos-labs",
  },
  {
    component: <TwitterIcon />,
    className: "twitter",
    url: "https://twitter.com/DesmosNetwork",
  },
  {
    component: <FacebookIcon />,
    className: "facebook",
    url: "https://medium.com/desmosnetwork",
  },
];
