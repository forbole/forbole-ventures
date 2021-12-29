import React from "react";
import { LinkedinIcon, TwitterIcon, GithubIcon, MediumIcon } from "@icons";

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
    component: <GithubIcon />,
    className: "github",
    url: "https://github.com/desmos-labs",
  },
  {
    component: <TwitterIcon />,
    className: "twitter",
    url: "https://twitter.com/DesmosNetwork",
  },
  {
    component: <MediumIcon />,
    className: "medium",
    url: "https://medium.com/desmosnetwork",
  },
];
