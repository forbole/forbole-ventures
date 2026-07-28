import { SocialMedia } from "@src/components";
import { socialMediaLinks } from "./utils";

const Contact = () => (
  <div className="flex flex-col items-start text-base font-light text-white">
    <p className="font-black text-accent">Contact</p>
    <SocialMedia utils={socialMediaLinks} />
  </div>
);

export default Contact;
