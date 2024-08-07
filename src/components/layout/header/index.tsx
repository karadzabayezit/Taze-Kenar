import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "../../languageSwitcher";
import { animated, useSpring } from "@react-spring/web";
import "./styles.scss";

const links = ["home", "services", "about", "contact"];

const Header = ({ t }: { t: any }) => {
  const { pathname } = useLocation();
  const path = pathname.slice(1) === "" ? "home" : location.pathname.slice(1);
  const fromTop = useSpring({
    opacity: 1,
    marginTop: 0,
    from: {
      opacity: 0,
      marginTop: -100,
    },
    delay: 300,
  });
  return (
    <animated.div style={fromTop} className="header">
      <div className="logoContainer">TAZE KENAR</div>
      <div className="links">
        {links.map((title) => (
          <Link
            key={title}
            to={`/${title}`}
            className={title === path ? "active link" : "link"}
          >
            {t(title)}
          </Link>
        ))}
        <LanguageSwitcher />
      </div>
    </animated.div>
  );
};

export default Header;
