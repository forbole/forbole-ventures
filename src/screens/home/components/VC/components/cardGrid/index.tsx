import ValidatorIcon from "@assets/validator.svg";
import ExplorerIcon from "@assets/explorer.svg";
import DiamondIcon from "@assets/diamond.svg";

const cardClass =
  "glass-panel flex flex-col items-center justify-center rounded-2xl p-8 text-center text-white [&>svg]:size-[88px] min-[1280px]:[&>svg]:size-40";
const cardHeadingClass =
  "pt-6 text-base font-black min-[1280px]:pb-4 min-[1280px]:text-xl";
const cardBodyClass =
  "pt-6 text-base font-light min-[1280px]:pb-4 min-[1280px]:text-xl";

const CardGrid = () => (
  <div className="grid grid-cols-1 gap-10 px-2 py-3 min-[1280px]:grid-cols-2 min-[1280px]:grid-rows-2">
    <article className={`${cardClass} min-[1280px]:col-start-1 min-[1280px]:row-start-1`}>
      <ValidatorIcon aria-hidden="true" />
      <h3 className={cardHeadingClass}>
        Build <strong className="text-accent">Early Validator Community</strong>
      </h3>
      <p className={cardBodyClass}>
        We are able to do so due to our track record as a validator and staking
        service provider.
      </p>
    </article>
    <article className={`${cardClass} min-[1280px]:col-start-1 min-[1280px]:row-start-2`}>
      <ExplorerIcon aria-hidden="true" />
      <h3 className={cardHeadingClass}>
        Develop <strong className="text-accent">Explorer</strong> &amp;{" "}
        <strong className="text-accent">Wallets</strong>
      </h3>
      <p className={cardBodyClass}>
        We are the core team behind Big Dipper, which is an open-source block
        explorer forked more than 150 times.
      </p>
    </article>
    <article className={`${cardClass} min-[1280px]:col-start-2 min-[1280px]:row-span-2 min-[1280px]:row-start-1`}>
      <DiamondIcon aria-hidden="true" />
      <h3 className={cardHeadingClass}>
        Provide <strong className="text-accent">Useful Insights</strong> Into
        Launching Your Projects
      </h3>
      <p className={cardBodyClass}>
        We are experienced as a genesis validator in various projects which
        include <strong>Akash, Cosmos Hub, Band Protocol, Flow, Kava, Oasis,
        Regen Network, Solana, Terra</strong> and more.
      </p>
    </article>
  </div>
);

export default CardGrid;
