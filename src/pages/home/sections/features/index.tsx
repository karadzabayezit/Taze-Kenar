import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import {
  BadgeDollarSign,
  Building2,
  ChevronRight,
  MessagesSquare,
  Truck,
} from "lucide-react";
import GoToButton from "../../../../components/buttons/goTo";
import styles from "./styles.module.scss";

const cards = [
  {
    icon: <Building2 className={styles.icon} />,
    translation: "supplies_for_companies",
  },
  {
    icon: <Truck className={styles.icon} />,
    translation: "delivery_and_logistics",
  },
  {
    icon: <BadgeDollarSign className={styles.icon} />,
    translation: "special_offers",
  },
  {
    icon: <MessagesSquare className={styles.icon} />,
    translation: "consulting_and_support",
  },
];

const Features = ({ t }: { t: any }) => {
  const [ref, inView] = useInView({ once: true, rootMargin: "-20% 0%" });
  const trail = useTrail(cards.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0, 0)" : "translate(0, 100px)",
    from: { opacity: 0, transform: "translate(0, 100px)" },
    delay: 200,
  });

  return (
    <section className={styles.features}>
      <div className={styles.back} />
      <div ref={ref} className={styles.row}>
        {trail.map((style, index) => (
          <animated.div
            style={style}
            className={styles.row__item}
            key={cards[index].translation}
          >
            <div className={styles.box}>
              {cards[index].icon}
              <h3 className="heading_tertiary u_margin_bottom_small">
                {t(`home_page.${cards[index].translation}.title`)}
              </h3>
              <p className="feature_box__text">
                {t(`home_page.${cards[index].translation}.description`)}
              </p>
            </div>
            <GoToButton link="/services">
              {t("services")} <ChevronRight />
            </GoToButton>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
