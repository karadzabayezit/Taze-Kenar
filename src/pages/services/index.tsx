import React from "react";
import ServicesList from "./list";
import Hero from "../../components/hero";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Hero src="static/img/handshake.png">
        <h1 className={"heading_secondary"}>
          {t("services_page.empowering_projects.title")}
        </h1>
        <p className={"heading_secondary--sub"}>
          {t("services_page.empowering_projects.description")}
        </p>
      </Hero>
      <ServicesList t={t} />
    </section>
  );
};

export default ServicesPage;
