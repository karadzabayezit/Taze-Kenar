import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const languages = [
  { code: "en", lang: "English" },
  { code: "ru", lang: "Русский" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currLan = languages.find(({ code }) => code === i18n.language);
  const [lang, setLang] = useState(currLan?.lang || "English");
  const [open, setOpen] = useState(false);

  const switchLng = (code: string, lang: string) => {
    i18n.changeLanguage(code);
    setLang(lang);
    setOpen(false);
  };

  return (
    <div className={styles.languages}>
      <button className={styles.language} onClick={() => setOpen(!open)}>
        {lang}
        <span
          className={styles.arrow + " " + (open ? styles.rotate : "")}
        ></span>
      </button>
      <div className={styles.languages__menu + " " + (open ? styles.open : "")}>
        {languages.map(({ code, lang }) => (
          <button
            key={code}
            onClick={() => switchLng(code, lang)}
            className={styles.languages__menu__item}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
