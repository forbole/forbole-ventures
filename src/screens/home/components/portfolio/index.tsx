import { useTranslation } from "@hooks";
import { Network } from "./components";
import { networkItems } from "./utils";
import ArrowIcon from "@assets/icon-arrow.svg";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] font-light text-white">
      <h1
        id="portfolio-title"
        className="text-[40px] font-black text-accent min-[1080px]:text-[80px]"
      >
        PORTFOLIO
      </h1>
      <p className="pb-[0.1rem] text-base min-[1280px]:text-2xl">
        {t("portfolioP")}
      </p>
      <div>
        <a
          href="https://www.forbole.com/stake-now"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-accent"
        >
          <span className="text-base font-extrabold">See Staking Portfolio</span>
          <ArrowIcon
            aria-hidden="true"
            fill="#CCFF00"
            height="1rem"
            width="1rem"
            className="ml-[0.2rem]"
          />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-6 py-6 min-[1280px]:grid-cols-5 min-[1280px]:py-10">
        {networkItems.map((item) => (
          <Network
            key={item.name}
            image={item.image}
            name={item.name}
            link={item.link}
            why={item.why}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
