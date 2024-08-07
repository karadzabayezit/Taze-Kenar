import { useTranslation } from "react-i18next";
import Header from "./header";
import Footer from "./footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header t={t} />
      <Outlet />
      <ScrollRestoration />
      <Footer t={t} />
    </>
  );
};

export default Layout;
