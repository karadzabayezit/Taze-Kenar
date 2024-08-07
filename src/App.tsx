import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout";
import LoadingOverlay from "./components/loader";

import HomePage from "./pages/home";

const ServicesPage = lazy(() => import("./pages/services"));
// import ServicesPage from "./pages/services";
// const HomePage = lazy(() => import("./pages/home"));

const AboutPage = lazy(() => import("./pages/about"));
// import AboutPage from "./pages/about";
// const ContactPage = lazy(() => import('./pages/contact'));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "home",
        Component: HomePage,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingOverlay />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<LoadingOverlay />}>
            <ServicesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
