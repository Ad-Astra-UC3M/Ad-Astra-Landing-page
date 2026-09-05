import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_URL = "https://adastrauc3m.es";
const SITE_NAME = "Ad Astra UC3M";
const HOME_TITLE = "Ad Astra UC3M | Asociación Aeroespacial";
const HOME_DESCRIPTION =
  "Ad Astra UC3M es una asociación estudiantil de ingeniería aeroespacial. Dreaming is Looking: conoce nuestros proyectos y colabora con el futuro aeroespacial.";

const ROUTE_TITLES = {
  "/": HOME_TITLE,
  "/projects": `Proyectos | ${SITE_NAME}`,
  "/projects/sigma": `Proyecto SIGMA | ${SITE_NAME}`,
  "/projects/rocket-a4": `Rocket A4 | ${SITE_NAME}`,
  "/projects/jet-engine": `Jet Engine | ${SITE_NAME}`,
  "/team": `Equipo | ${SITE_NAME}`,
  "/join": "Formulario de inscripción al Bootcamp Ad Astra UC3M",
  "/sponsors": `Colabora con Ad Astra | ${SITE_NAME}`,
  "/bootcamp": `Bootcamp | ${SITE_NAME}`,
  "/bootcamp/politica-de-privacidad": `Política de privacidad del Bootcamp Ad Astra | ${SITE_NAME}`,
};

const INDEXABLE_ROUTES = new Set(["/"]);

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }

  element.setAttribute("content", content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) element.setAttribute("hreflang", hreflang);
    document.head.append(element);
  }

  element.setAttribute("href", href);
}

function removeLinks(rel) {
  document.head
    .querySelectorAll(`link[rel="${rel}"]`)
    .forEach((element) => element.remove());
}

function normalizePathname(pathname) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePathname(pathname);
    const title = ROUTE_TITLES[normalizedPath] ?? `Página no encontrada | ${SITE_NAME}`;
    const isIndexable = INDEXABLE_ROUTES.has(normalizedPath);
    const pageUrl = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
    const robots = isIndexable
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, follow";

    document.title = title;
    document.documentElement.lang = "es";

    setMeta("name", "description", HOME_DESCRIPTION);
    setMeta("name", "robots", robots);
    setMeta("name", "googlebot", robots);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", HOME_DESCRIPTION);
    setMeta("property", "og:url", pageUrl);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", HOME_DESCRIPTION);

    if (isIndexable) {
      setLink("canonical", `${SITE_URL}/`);
      setLink("alternate", `${SITE_URL}/`, "es-ES");
      setLink("alternate", `${SITE_URL}/`, "x-default");
    } else {
      removeLinks("canonical");
      removeLinks("alternate");
    }
  }, [pathname]);

  return null;
}
