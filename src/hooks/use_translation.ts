import { useRouter } from "next/router";
import englishMessages from "@public/locales/en/common.json";
import traditionalChineseMessages from "@public/locales/zht/common.json";

const english = englishMessages as Record<string, string>;
const dictionaries: Record<string, Record<string, string>> = {
  en: english,
  zht: traditionalChineseMessages as Record<string, string>,
};

export const useTranslation = () => {
  const router = useRouter();
  const lang = router.locale ?? router.defaultLocale ?? "en";
  const dictionary = dictionaries[lang] ?? english;

  return {
    lang,
    t: (key: string) => dictionary[key] ?? english[key] ?? key,
  };
};
