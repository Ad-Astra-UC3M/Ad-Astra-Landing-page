import { Outlet, ScrollRestoration } from "react-router";

import BootcampLeadPopup from "../BootcampLeadPopup.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SeoManager from "../seo/SeoManager.jsx";

import { useLocation } from "react-router";


export default function RootLayout() {

  const location = useLocation();

  const isJoinPage = location.pathname === "/join";
  const isEmbeddedPage = location.pathname === "/unirse-whatsapp";

  return (
    <>
      <SeoManager />
      {!isJoinPage && !isEmbeddedPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isJoinPage && !isEmbeddedPage && <Footer />}
      <ScrollRestoration />
      {location.pathname === "/" && <BootcampLeadPopup />}
    </>
  );
}
