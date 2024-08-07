import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import { Languages } from "lucide-react";

const languages = [
  { code: "en", lang: "English" },
  { code: "ru", lang: "Русский" },
];

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const switchLng = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className={`${styles.languages} ${className}`}>
      <Languages />
      {languages.map(({ code, lang }) => (
        <button
          className={i18n.language === code ? styles.selected : ""}
          onClick={() => switchLng(code)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
