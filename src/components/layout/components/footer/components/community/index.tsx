import ArrowIcon from "@assets/icon-arrow.svg";

const Community = () => (
  <div className="flex flex-col items-start text-base font-light text-white">
    <p className="font-black text-accent">Community</p>
    <p>Want to get updates on Forbole?</p>
    <a
      href="https://forbole.us5.list-manage.com/subscribe?u=a1ec5bb20979a8c8db7fc58b2&id=9e47491b93"
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex items-center rounded bg-accent px-4 py-2 text-sm font-black tracking-[1.25px] text-black transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      Subscribe
      <ArrowIcon
        aria-hidden="true"
        className="ml-2 h-[9.6px] w-[13.6px] fill-black"
      />
    </a>
  </div>
);

export default Community;
