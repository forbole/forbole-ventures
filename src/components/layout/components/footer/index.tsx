import { Logo, ItemGrid, Contact, Community } from "./components";
import { companyItems, productItems } from "./utils";
import { useTranslation } from "@hooks";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[101] mt-4 bg-[rgba(19,19,22,0.8)] px-6 pt-12 pb-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 min-[1080px]:flex-row min-[1080px]:items-start min-[1080px]:justify-between min-[1080px]:gap-8">
        <Logo />
        <nav
          aria-label="Footer navigation"
          className="flex items-start justify-between gap-8 pb-1 min-[1080px]:pb-0"
        >
          <div className="flex flex-col items-start min-[1080px]:pr-2">
            {companyItems.map((item) => (
              <ItemGrid
                key={item.header ?? item.key}
                header={item.header}
                name={item.key}
                url={item.url}
              />
            ))}
          </div>
          <div className="flex flex-col items-start">
            {productItems.map((item) => (
              <ItemGrid
                key={item.header ?? item.key}
                header={item.header}
                name={item.key}
                url={item.url}
              />
            ))}
          </div>
        </nav>
        <Contact />
        <Community />
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1200px] text-center min-[1080px]:mt-0 min-[1080px]:text-left">
        <p className="text-[0.8rem] text-[#c4c4c4]">
          {t("copyright")} {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
