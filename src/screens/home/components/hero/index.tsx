import { useTranslation } from "@hooks";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] font-light text-white">
      <h2 className="text-2xl font-light min-[1080px]:pb-3 min-[1080px]:text-7xl">
        Let&apos;s Build The
      </h2>
      <div className="flex flex-col items-start min-[1080px]:flex-row min-[1080px]:items-center min-[1080px]:pb-1">
        <h1
          id="hero-title"
          className="text-[2rem] font-black tracking-[1px] text-accent [text-shadow:1px_0_#ccff00] min-[1080px]:text-7xl min-[1080px]:tracking-[2px] min-[1080px]:[text-shadow:2px_0_#ccff00]"
        >
          DECENTRALIZED
        </h1>
        <h2 className="text-2xl font-light min-[1080px]:pl-2 min-[1080px]:text-7xl">
          Future
        </h2>
      </div>
      <p className="py-3 text-base leading-normal font-light min-[1080px]:text-xl">
        {t("hero")}
      </p>
    </div>
  );
};

export default Hero;
