import React from "react";
import { EmailIcon, LinkedinIcon, TwitterIcon } from "@icons";

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <EmailIcon />,
    className: "email",
    url: "mailto:info@forbole.com",
  },
  {
    component: <LinkedinIcon />,
    className: "linkedin",
    url: "https://www.linkedin.com/company/forbole-ventures/",
  },
  {
    component: <TwitterIcon />,
    className: "twitter",
    url: "https://twitter.com/ForboleV",
  },
];
