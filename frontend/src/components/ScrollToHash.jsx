import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScroll } from "../utils/smoothScroll";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  // Cuando cambia la ruta
  useEffect(() => {
    if (hash) return;

    smoothScroll(0, 900);
  }, [pathname, hash]);

  // Cuando existe un hash (#...)
  useEffect(() => {
    if (!hash) return;

    const element = document.getElementById(hash.substring(1));

    if (!element) return;

    const timeout = setTimeout(() => {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        90;

      smoothScroll(y, 900);
    }, 100);

    return () => clearTimeout(timeout);
  }, [hash]);

  return null;
}

export default ScrollToHash;