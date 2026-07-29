import { SocialMedia } from "@src/components";
import { socialMediaLinks } from "./utils";

const Contact = () => (
  <div className="flex flex-col items-start text-base font-light text-white">
    <h2 className="font-black text-accent">Contact</h2>
    <SocialMedia utils={socialMediaLinks} />
  </div>
);

export default Contact;
