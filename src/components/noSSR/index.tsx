import dynamic from "next/dynamic";
import React from "react";
import { NoSSRProps } from "./types";

const NoSSR = (props: NoSSRProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
