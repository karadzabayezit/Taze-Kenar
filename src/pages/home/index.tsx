import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
//Components
import LoadingOverlay from "../../components/loader";
import Hero from "../../components/hero";
import LearnMore from "../../components/buttons/learnMore";
import PreFooter from "./sections/preFooter";
import CanvasCursor from "../../components/canvasCursor";
import LogoCarousel from "./sections/clients";
import Features from "./sections/features";
import About from "./sections/about";
//Sections
// const About = lazy(async () => await import("./sections/about"));
// const Features = lazy(async () => await import("./sections/features"));
// const PreFooter = lazy(async () => await import("./sections/preFooter"));

// const LogoCarousel = lazy(async () => await import("./sections/clients"));
// const CanvasCursor = lazy(
//   async () => await import("../../components/canvasCursor")
// );

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero src="static/img/hero.jpg" cut={true}>
        <h1 className={`heading_primary u_margin_top_big`}>
          <span className={`heading_primary--main`}>taze kenar</span>
          <span className="heading_primary--sub u_margin_top_small">
            {t("subHero")}
            <p className="u_margin_top_smallest">established 2014</p>
          </span>
        </h1>
        <LearnMore />
      </Hero>
      <About />
      <Features />
      <LogoCarousel />
      <CanvasCursor />
      <PreFooter />
    </>
  );
};

export default HomePage;
