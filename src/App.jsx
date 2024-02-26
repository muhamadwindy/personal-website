import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/Error";
import SkillsPage from "./pages/Skills";
import CompanyProfilePage from "./pages/portfolio/CompanyProfile";
import LOSPage from "./pages/portfolio/LOS";
import NewsPortalPage from "./pages/portfolio/NewsPortal";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/portfolio/Portfolio";
import AdminAppPage from "./pages/portfolio/AdminApp";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/skills", element: <SkillsPage /> },
      {
        path: "/portfolio",
        children: [
          {
            path: "/portfolio/",
            element: <PortfolioPage />,
          },
          {
            path: "/portfolio/company-profile",
            element: <CompanyProfilePage />,
          },
          { path: "/portfolio/los", element: <LOSPage /> },
          { path: "/portfolio/news-portal", element: <NewsPortalPage /> },
          { path: "/portfolio/admin-app", element: <AdminAppPage /> },
        ],
      },
      { path: "/contact", element: <ContactPage /> },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
