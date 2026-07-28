import React from "react";
import { socialMediaLinks } from "./utils";
import { Props } from "./types";

const SocialMedia = (props: Props) => {
  const { className = "", utils } = props;
  const links = utils ?? socialMediaLinks;
  return (
    <div className={`${className} social-media flex items-center`}>
      {links.map((item) => (
        <a
          key={item.className}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          aria-label={item.className === "linkedin" ? "LinkedIn" : item.className}
          className={`media mx-2 leading-none first:ml-0 last:mr-0 ${item.className}`}
        >
          {item.component}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
