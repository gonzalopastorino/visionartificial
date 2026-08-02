import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/LogoGrupoAutomatic.png";
import { smoothScroll } from "../../utils/smoothScroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const handleNavigation = (path) => {
    closeMenu();

    if (location.pathname === path) {
      smoothScroll(0, 900);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        sticky
        top-0
        z-50
        bg-white/60
        backdrop-blur-md
        border-b
        border-white/20
        shadow-md
        transition-all
        duration-300
        ${scrolled ? "py-1" : "py-3"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-300
            ${scrolled ? "h-16 md:h-20" : "h-24 md:h-28"}
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Grupo Automatic"
              className={`
                w-auto
                transition-all
                duration-300
                ${
                  scrolled
                    ? "h-10 md:h-14 lg:h-16"
                    : "h-14 md:h-20 lg:h-24"
                }
              `}
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link
                to="/"
                onClick={() => handleNavigation("/")}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/nosotros"
                onClick={() => handleNavigation("/nosotros")}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Quiénes Somos
              </Link>
            </li>

            <li>
              <Link
                to="/servicios"
                onClick={() => handleNavigation("/servicios")}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Nuestros Servicios
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={() => handleNavigation("/blog")}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contacto"
                onClick={() => handleNavigation("/contacto")}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Botón menú */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              menuOpen
                ? "max-h-screen opacity-100 py-4 border-t border-white/20"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <ul className="space-y-2 px-2">

            <li>
              <Link
                to="/"
                onClick={() => handleNavigation("/")}
                className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/nosotros"
                onClick={() => handleNavigation("/nosotros")}
                className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Quiénes Somos
              </Link>
            </li>

            <li>
              <Link
                to="/servicios"
                onClick={() => handleNavigation("/servicios")}
                className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Nuestros Servicios
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={() => handleNavigation("/blog")}
                className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contacto"
                onClick={() => handleNavigation("/contacto")}
                className="block px-2 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Contáctanos
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;