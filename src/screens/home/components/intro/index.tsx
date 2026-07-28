import CountUp from "react-countup";
import { useTranslation } from "@hooks";

const stats = [
  {
    value: <CountUp duration={5} end={14} />,
    label: "Startups Funded",
  },
  {
    value: (
      <>
        $<CountUp duration={20} end={40} />M+
      </>
    ),
    label: "Net Asset",
  },
  {
    value: (
      <>
        $<CountUp duration={20} end={939} />M +
      </>
    ),
    label: (
      <>
        Tokens staked with <strong>Forbole</strong>
      </>
    ),
  },
];

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] font-light text-white">
      <h2 className="text-2xl font-light min-[1080px]:text-[40px]">
        Invest in people who build the
      </h2>
      <h1
        id="intro-title"
        className="text-[2rem] font-black tracking-[1px] text-accent [text-shadow:1px_0_#ccff00] min-[1080px]:text-7xl min-[1080px]:tracking-[2px] min-[1080px]:[text-shadow:2px_0_#ccff00]"
      >
        NEW GENERATION INTERNET
      </h1>
      <p className="text-base font-light min-[1080px]:text-xl">{t("intro")}</p>
      <ul className="glass-panel my-8 flex flex-col overflow-hidden rounded-lg min-[1280px]:flex-row">
        {stats.map((stat, index) => (
          <li
            key={typeof stat.label === "string" ? stat.label : "tokens-staked"}
            className="relative flex flex-1 flex-col items-center p-6 text-center"
          >
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="absolute top-0 left-4 h-px w-[calc(100%-2rem)] bg-[rgba(234,255,148,0.3)] min-[1280px]:top-4 min-[1280px]:left-0 min-[1280px]:h-[calc(100%-2rem)] min-[1280px]:w-px"
              />
            ) : null}
            <strong className="text-[2rem] font-black">{stat.value}</strong>
            <span className="text-base text-white">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;
