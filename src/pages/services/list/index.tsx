import { animated, useSpring, useTrail } from "@react-spring/web";
import styles from "./styles.module.scss";
import { Send, SendHorizonal } from "lucide-react";
import GoToButton from "../../../components/buttons/goTo";
const services = [
  {
    translation: "reliable_supplies",
    image:
      "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?w=480&h=320&fit=crop",
  },
  {
    translation: "delivery_logistics",
    image: "static/img/services/logistics.jpg",
  },
  {
    translation: "special_offers",
    image:
      "https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?w=480&h=320&fit=crop",
  },
  {
    translation: "consultation_support",
    image: "static/img/services/consSupp.png",
  },
  {
    translation: "oil_gas_supplies",
    image: "static/img/services/oilCrude.png",
  },
  {
    translation: "sustainable_solutions",
    image: "static/img/services/sustainable.jpg",
  },
  {
    translation: "on_site_handling",
    image: "static/img/services/materials.jpg",
  },
  {
    translation: "custom_material_solutions",
    image: "static/img/services/kindsOfMaterials.png",
  },
  {
    translation: "bulk_material_supply",
    image: "static/img/services/bulkMaterials.png",
  },
  {
    translation: "customer_support",
    image: "static/img/services/support.png",
  },
];

const ServicesList = ({ t }: { t: any }) => {
  const trail = useTrail(services.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 500,
  });
  const introAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <>
      <animated.div style={introAnimation} className={styles.services_intro}>
        <p>{t("services_page.commitment")}</p>
      </animated.div>
      <div className={styles.container}>
        {trail.map((style, index) => (
          <animated.div
            key={services[index].translation}
            style={style}
            className={styles.service_card}
          >
            <img
              src={services[index].image}
              alt={services[index].translation}
              className={styles.service_image}
            />
            <div className={styles.service_content}>
              <h2 className={styles.service_title}>
                {t(`services_page.${services[index].translation}.title`)}
              </h2>
              <p className={styles.service_description}>
                {t(`services_page.${services[index].translation}.description`)}
              </p>
            </div>
            <GoToButton className={styles.emailUs}>
              {t("email_us")} <SendHorizonal />
            </GoToButton>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default ServicesList;
