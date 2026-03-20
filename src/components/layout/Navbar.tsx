import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // SCROLL BACKGROUND
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL FUNCTION
  const handleScrollTo = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link
        to="/"
        className={`text-lg tracking-wide transition-colors duration-300 ${
          scrolled ? "text-black" : "text-gold"
        }`}
      >
        Swayam <span className="italic">More</span>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10 text-sm tracking-wide">

        {/* PORTFOLIO (REAL PAGE) */}
        <Link
          to="/portfolio"
          className={`relative group ${
            location.pathname === "/portfolio"
              ? "text-gold"
              : scrolled
              ? "text-black hover:text-gold"
              : "text-white hover:text-gold"
          }`}
        >
          PORTFOLIO
          <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
        </Link>

        {/* SERVICES */}
        <button
          onClick={() => handleScrollTo("services")}
          className={`relative group ${
            scrolled ? "text-black" : "text-white"
          } hover:text-gold`}
        >
          SERVICES
          <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
        </button>

        {/* ABOUT */}
        <button
          onClick={() => handleScrollTo("about")}
          className={`relative group ${
            scrolled ? "text-black" : "text-white"
          } hover:text-gold`}
        >
          ABOUT
          <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
        </button>

        {/* CONTACT */}
        <button
          onClick={() => handleScrollTo("contact")}
          className={`relative group ${
            scrolled ? "text-black" : "text-white"
          } hover:text-gold`}
        >
          CONTACT
          <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
        </button>

      </div>

      {/* CTA */}
      <button
        onClick={() => handleScrollTo("contact")}
        className={`px-6 py-3 text-sm tracking-wide transition-all duration-300
        ${scrolled ? "bg-black text-white" : "bg-white text-black"}`}
      >
        BOOK A SHOOT
      </button>
    </nav>
  );
};

export default Navbar;