import { Outlet } from "react-router";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SeoManager from "../seo/SeoManager.jsx";


export default function RootLayout() {
  return (
    <>
      <SeoManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
