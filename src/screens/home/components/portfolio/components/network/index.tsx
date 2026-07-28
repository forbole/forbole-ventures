import Image from "next/image";
import ArrowIcon from "@assets/icon-arrow.svg";

export interface INetworkProps {
  image: string | null;
  name: string;
  link?: string;
  why?: string;
}

const NetworkIdentity = ({ image, name }: Pick<INetworkProps, "image" | "name">) => (
  <>
    <span className="portfolio-avatar flex size-20 items-center justify-center overflow-hidden rounded-full">
      {image ? (
        <span className="relative size-16">
          <Image
            src={image}
            alt=""
            fill
            sizes="64px"
            className="object-contain"
            unoptimized
          />
        </span>
      ) : (
        <span aria-hidden="true">?</span>
      )}
    </span>
    <span className="pt-2 text-center text-sm font-bold text-white min-[1280px]:text-lg">
      {name}
    </span>
  </>
);

const Network = ({ image, name, link, why }: INetworkProps) => (
  <article className="flex flex-col items-center">
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <NetworkIdentity image={image} name={name} />
      </a>
    ) : (
      <div className="flex flex-col items-center">
        <NetworkIdentity image={image} name={name} />
      </div>
    )}
    {why ? (
      <a
        href={why}
        target="_blank"
        rel="noreferrer"
        className="mt-[0.1rem] flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="pr-[0.1rem] text-base font-extralight text-white">
          See Why
        </span>
        <ArrowIcon aria-hidden="true" fill="#FFFFFF" height="1rem" width="1rem" />
      </a>
    ) : null}
  </article>
);

export default Network;
