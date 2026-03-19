import { useEffect, useState } from "react";

const links = [
  { name: "Portfolio", id: "portfolio" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // HANDLE SCROLL BACKGROUND
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TRACK ACTIVE SECTION
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300
      ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/10"
          : "bg-transparent"
        }`}
    >
      {/* LOGO */}
      <h1
        className={`text-lg tracking-wide font-medium transition-colors duration-300
        ${scrolled ? "text-black" : "text-gold"}`}
      >
        <a href="#">Swayam More</a>
      </h1>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`group relative text-sm tracking-wide transition-colors duration-300
            ${active === link.id
                ? "text-gold"
                : scrolled
                  ? "text-black hover:text-gold"
                  : "text-white hover:text-gold"
              }`}
          >
            {link.name}

            {/* UNDERLINE */}
            <span
              className={`absolute left-0 -bottom-1 h-px bg-gold transition-all duration-300
              ${active === link.id
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                }`}
            />
          </a>
        ))}
      </div>

      {/* CTA BUTTON */}
      <button
        className={`px-6 py-3 text-sm tracking-wide transition-all duration-300
        ${scrolled
            ? "bg-black text-white"
            : "bg-white text-black"
          }`}
      >
        <a
          href="#contact"
        >
          BOOK A SHOOT
        </a>
      </button>
    </nav>
  );
};

export default Navbar;