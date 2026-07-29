import IBCIcon from "@assets/ibc.svg";
import EcoIcon from "@assets/eco.svg";

const cardClass =
  "info-card glass-panel flex flex-col rounded-2xl p-8 text-white min-[1280px]:flex-row min-[1280px]:items-center";

const InfoCard = () => (
  <div className="grid grid-cols-1 gap-10 px-2 py-3 min-[1280px]:grid-cols-2">
    <article className={cardClass}>
      <IBCIcon aria-hidden="true" />
      <div className="pt-6 min-[1280px]:w-[70%] min-[1280px]:pt-0 min-[1280px]:pl-4">
        <h3 className="text-base font-light min-[1280px]:pb-4 min-[1280px]:text-xl">
          IBC-enabled projects which use{" "}
          <a
            href="https://www.desmos.network/"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline min-[1280px]:text-accent"
          >
            Desmos Profiles
          </a>{" "}
          as their user profiles
        </h3>
      </div>
    </article>
    <article className={cardClass}>
      <EcoIcon aria-hidden="true" />
      <div className="pt-6 min-[1280px]:w-[70%] min-[1280px]:pt-0 min-[1280px]:pl-4">
        <h3 className="py-3 text-2xl font-bold text-white min-[1280px]:py-2 min-[1280px]:text-accent">
          Cosmos / Flow / Oasis / Polkadot / Solana
        </h3>
        <p className="text-base font-medium">ecosystem projects</p>
      </div>
    </article>
  </div>
);

export default InfoCard;
