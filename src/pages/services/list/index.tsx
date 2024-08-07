import { animated, useSpring, useTrail } from "@react-spring/web";
import styles from "./styles.module.scss";
import { Send, SendHorizonal } from "lucide-react";
import GoToButton from "../../../components/buttons/goTo";
const services = [
  {
    title: "Reliable Supplies for Companies",
    description:
      "Dependable supply of construction materials for businesses with a personalized approach and timely delivery.",
    image:
      "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?w=480&h=320&fit=crop",
  },
  {
    title: "Delivery and Logistics",
    description:
      "Fast and reliable delivery of materials directly to your site. We care about deadlines and quality.",
    image: "static/img/services/logistics.jpg",
  },
  {
    title: "Special Offers",
    description:
      "Promotions and discounts on construction materials. Keep an eye on our special deals!",
    image:
      "https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?w=480&h=320&fit=crop",
  },
  {
    title: "Consultation and Support",
    description:
      "Professional consultations on material selection. We help you find the perfect solution for your project.",
    image: "static/img/services/consSupp.png",
  },
  {
    title: "Oil and Gas Supplies",
    description:
      "Quality supplies tailored for the oil and gas industry ensuring seamless operations.",
    image: "static/img/services/oilCrude.png",
  },
  {
    title: "Sustainable Solutions",
    description:
      "We strive towards SDG goals with eco-friendly materials and sustainable construction practices.",
    image: "static/img/services/sustainable.jpg",
  },
  {
    title: "On-Site Material Handling",
    description:
      "Efficient material handling and logistics on site to enhance productivity and reduce downtime.",
    image: "static/img/services/materials.jpg",
  },
  {
    title: "Customized Material Solutions",
    description:
      "Tailored material solutions to meet the specific needs of your projects.",
    image: "static/img/services/kindsOfMaterials.png",
  },
  {
    title: "Bulk Material Supply",
    description:
      "Large scale supply of materials for extensive construction projects with guaranteed availability.",
    image: "static/img/services/bulkMaterials.png",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Round the clock customer support to address any issues or queries regarding material supply.",
    image: "static/img/services/support.png",
  },
];

const ServicesList = () => {
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
        <p>
          Our commitment to excellence is reflected in the comprehensive
          services we offer. From reliable supplies to expert consultation, each
          service is crafted to ensure your projects are completed with the
          highest standards of quality and efficiency.
        </p>
      </animated.div>
      <div className={styles.container}>
        {trail.map((style, index) => (
          <animated.div
            key={services[index].title}
            style={style}
            className={styles.service_card}
          >
            <img
              src={services[index].image}
              alt={services[index].title}
              className={styles.service_image}
            />
            <div className={styles.service_content}>
              <h2 className={styles.service_title}>{services[index].title}</h2>
              <p className={styles.service_description}>
                {services[index].description}
              </p>
            </div>
            <GoToButton className={styles.emailUs}>
              Email us <SendHorizonal />
            </GoToButton>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default ServicesList;
