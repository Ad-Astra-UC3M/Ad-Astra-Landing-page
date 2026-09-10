import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useMotionValueEvent, useScroll } from "motion/react";

const TALLY_FORM_ID = "Y56oO0";
const ATTRIBUTION_KEY = "bootcamp-lead-attribution";
const SEEN_KEY = "bootcamp-lead-popup-seen";

let tallyScriptPromise;

function loadTally() {
  if (window.Tally) return Promise.resolve();
  if (tallyScriptPromise) return tallyScriptPromise;

  tallyScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return tallyScriptPromise;
}

function getAttribution(search) {
  const params = new URLSearchParams(search);
  let stored = {};

  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY)) ?? {};
  } catch {
    // Ignore unavailable or malformed session storage.
  }

  const attribution = {
    utm_source: params.get("utm_source") || stored.utm_source || "",
    utm_content: params.get("utm_content") || stored.utm_content || "",
  };

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // The popup still works when storage is unavailable.
  }

  return attribution;
}

export default function BootcampLeadPopup() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { scrollYProgress } = useScroll();
  const [attribution, setAttribution] = useState(() => getAttribution(location.search));
  const shownRef = useRef(sessionStorage.getItem(SEEN_KEY) === "true");

  useEffect(() => {
    setAttribution(getAttribution(location.search));
  }, [location.search]);

  const openPopup = useCallback(() => {
    if (!isHomePage) return;
    if (shownRef.current) return;

    shownRef.current = true;
    sessionStorage.setItem(SEEN_KEY, "true");

    loadTally().then(() => {
      window.Tally.openPopup(TALLY_FORM_ID, {
        layout: "modal",
        width: 560,
        overlay: true,
        autoClose: 60000,
        hiddenFields: attribution,
      });
    });
  }, [attribution, isHomePage]);

  useEffect(() => {
    if (isHomePage && attribution.utm_source === "qr") openPopup();
  }, [attribution.utm_source, isHomePage, openPopup]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (isHomePage && attribution.utm_source !== "qr" && progress >= 0.3) {
      openPopup();
    }
  });

  return null;
}
