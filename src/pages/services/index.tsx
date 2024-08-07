import React from "react";
import ServicesList from "./list";
import Hero from "../../components/hero";

const ServicesPage = () => {
  return (
    <section>
      <Hero src="static/img/handshake.png">
        <h1 className={"heading_secondary"}>
          Empowering Your Projects with Excellence
        </h1>
        <p className={"heading_secondary--sub"}>
          At Taze Kenar, we believe in transforming visions into reality. Our
          diverse range of services is designed to meet the unique needs of each
          client, ensuring quality and reliability in every step. Let's build a
          sustainable future together.
        </p>
      </Hero>
      <ServicesList />
    </section>
  );
};

export default ServicesPage;
