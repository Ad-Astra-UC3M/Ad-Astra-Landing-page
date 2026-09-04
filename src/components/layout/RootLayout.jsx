import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SeoManager from "../seo/SeoManager.jsx";

import { useLocation } from "react-router";


export default function RootLayout() {

  const location = useLocation();

  const isJoinPage = location.pathname === "/join";

  return (
    <>
      <SeoManager />
      {!isJoinPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isJoinPage && <Footer />}
      <ScrollRestoration />
    </>
  );
}
