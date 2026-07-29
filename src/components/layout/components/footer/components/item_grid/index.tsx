import { useTranslation } from "@hooks";

export interface ItemsGridProps {
  header?: string;
  name?: string;
  url?: string;
}

const ItemGrid = ({ header, name, url }: ItemsGridProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-base font-light text-white">
      {header ? <h2 className="font-black text-accent">{t(header)}</h2> : null}
      {name ? (
        <p className="mb-2">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
          >
            {t(name)}
          </a>
        </p>
      ) : null}
    </div>
  );
};

export default ItemGrid;
