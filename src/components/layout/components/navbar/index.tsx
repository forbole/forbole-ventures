import Link from "next/link";
import VenturesLogo from "@assets/forbole-ventures.svg";

const Nav = ({ logoURL }: { title?: string; logoURL: string }) => (
  <nav aria-label="Main navigation" className="w-full">
    <div className="mx-auto flex w-full max-w-[1200px] items-center px-4 py-2 min-[1080px]:px-0 min-[1080px]:py-0">
      <Link
        href={logoURL}
        aria-label="Forbole Ventures home"
        className="relative z-[200] leading-none"
      >
        <VenturesLogo className="w-[136px] cursor-pointer" />
      </Link>
    </div>
  </nav>
);

export default Nav;
