import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ NEW
  const location = useLocation();

  // SCROLL BACKGROUND
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
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

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
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

           <Link
            to="/services"
            className={`relative group ${
              location.pathname === "/services"
                ? "text-gold"
                : scrolled
                ? "text-black hover:text-gold"
                : "text-white hover:text-gold"
            }`}
          >
            SERVICES
            <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
          </Link>

           <Link
            to="/about"
            className={`relative group ${
              location.pathname === "/about"
                ? "text-gold"
                : scrolled
                ? "text-black hover:text-gold"
                : "text-white hover:text-gold"
            }`}
          >
            ABOUT
            <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
          </Link>

           <Link
            to="/contact"
            className={`relative group ${
              location.pathname === "/contact"
                ? "text-gold"
                : scrolled
                ? "text-black hover:text-gold"
                : "text-white hover:text-gold"
            }`}
          >
            CONTACT
            <span className="absolute left-0 -bottom-1 h-px bg-gold w-0 group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* CTA */}
        <button
          className={`hidden md:block px-6 py-3 text-sm tracking-wide transition-all duration-300 hover:bg-(--gold)
          ${scrolled ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <Link to="/contact">BOOK A SHOOT</Link>
        </button>

        {/* ✅ HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-black" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-black" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-black" : "bg-white"
            }`}
          />
        </button>
      </nav>

      {/* ✅ MOBILE MENU */}
      <div
        className={`fixed top-20 left-0 w-full bg-white z-40 transition-all duration-300 md:hidden
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-black">

          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            PORTFOLIO
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>

          <button
            
            className="mt-4 px-6 py-3 bg-black text-white"
          >
            <Link to="/contact">BOOK A SHOOT</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;