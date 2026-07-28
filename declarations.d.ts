declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  import type { FunctionComponent, SVGProps } from "react";

  const SvgComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}
