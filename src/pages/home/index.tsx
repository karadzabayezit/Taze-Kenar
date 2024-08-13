import { useTranslation } from "react-i18next";
//Components
import Hero from "../../components/hero";
import LearnMore from "../../components/buttons/learnMore";
import CanvasCursor from "../../components/canvasCursor";
//Sections
import PreFooter from "./sections/preFooter";
import Partners from "./sections/partners";
import Features from "./sections/features";
import About from "./sections/about";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero src="static/img/hero.jpg" cut={true}>
        <h1 className={`heading_primary u_margin_top_big`}>
          <span className={`heading_primary--main`}>
            <img src="logo.png" alt="" className=" hero_img" />
          </span>
          <span className="heading_primary--sub u_margin_top_small">
            {t("subHero")}
            <p className="u_margin_top_smallest">{t("established")} 2015</p>
          </span>
        </h1>
        <LearnMore />
      </Hero>
      <About t={t} />
      <Features t={t} />
      <Partners t={t} />
      <PreFooter t={t} />
      <CanvasCursor />
    </>
  );
};

export default HomePage;
