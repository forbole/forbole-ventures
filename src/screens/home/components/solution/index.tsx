import { useTranslation } from "@hooks";
import { InfoCard } from "./components";

const Solution = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] font-light text-white">
      <h1
        id="solution-title"
        className="text-[40px] font-black text-accent min-[1080px]:text-[80px]"
      >
        PREFERENCE
      </h1>
      <p className="pt-2 pb-6 text-xl font-light min-[1280px]:text-2xl">
        {t("preferenceP")}
      </p>
      <InfoCard />
      <div className="mt-2 flex items-start">
        <span aria-hidden="true" className="h-4 w-px shrink-0 bg-accent" />
        <p className="pl-1 text-xs">
          These are all for reference only and decisions will be made on a
          case-by-case basis.
        </p>
      </div>
    </div>
  );
};

export default Solution;
