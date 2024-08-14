import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import LanguageSwitcher from "../../languageSwitcher";
import "./styles.scss";
import { Menu, X } from "lucide-react";

const links = ["home", "services", "about", "contact"];

const Header = ({ t }: { t: any }) => {
  const { pathname } = useLocation();
  const path = pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 120);
  };

  const clickAway = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fromTop = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    marginTop: 0,
    from: {
      opacity: 0,
      marginTop: -100,
      transform: "translate(0, -100%)",
    },
  });

  return (
    <>
      <div
        className={`back ${open ? "backOpen" : ""}`}
        onClick={clickAway}
      ></div>
      <animated.div
        style={fromTop}
        className={`header ${scrolled && "scrolled"}`}
      >
        <div className="logoContainer">
          <Link to={"/"}>TAZE KENAR</Link>
          <button className="menuButton" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <div className={`menu ${open ? "open" : ""}`}>
          <div className={`links`}>
            {links.map((title) => (
              <Link
                key={title}
                to={`/${title}`}
                className={title === path ? "active link" : "link"}
              >
                {t(title)}
              </Link>
            ))}
          </div>
          <LanguageSwitcher className={`langSwitcher2 `} />
        </div>
        <LanguageSwitcher className={`langSwitcher `} />
      </animated.div>
    </>
  );
};

export default Header;
