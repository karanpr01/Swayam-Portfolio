import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com/yourusername" },
    { icon: FaFacebookF, url: "https://facebook.com/yourusername" },
    { icon: FaYoutube, url: "https://youtube.com/yourchannel" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/yourprofile" },
  ];


  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16 border-t border-white/10">

      <div className="grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl mb-4">
            Swayam <span className="italic text-gold">More</span>
          </h3>

          <p className="text-white/40 text-sm">
            Capturing moments that last forever.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-(--gold) transition group"
                >
                  <Icon className="text-white hover:text-(--gold) transition text-sm" />
                </a>
              );
            })}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <p className="mb-4 text-sm text-white/40">SERVICES</p>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-(--gold)">Wedding Photography</li>
            <li className="hover:text-(--gold)">Pre-Wedding Shoots</li>
            <li className="hover:text-(--gold)">Portrait Sessions</li>
            <li className="hover:text-(--gold)">Fashion Editorial</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <p className="mb-4 text-sm text-white/40">EXPLORE</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="hover:text-(--gold)">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-(--gold)">About</Link></li>
            <li><Link to="/services" className="hover:text-(--gold)">Services</Link></li>
            <li><Link to="/contact" className="hover:text-(--gold)">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="mb-4 text-sm text-white/40">CONTACT</p>
          <p className="text-sm hover:text-(--gold)">hello@swayam.com</p>
          <p className="text-sm hover:text-(--gold)">+91 98765 43210</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 flex justify-between text-xs text-white/30">
        <p className="text-(--gold)">© 2025 Swayam More</p>
        <p className="text-(--gold)">Crafted with care in Mumbai ♥</p>
      </div>

    </footer>
  );
};

export default Footer;