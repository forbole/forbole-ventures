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
      {header ? <p className="font-black text-accent">{t(header)}</p> : null}
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
