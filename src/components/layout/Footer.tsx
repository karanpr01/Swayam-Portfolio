import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

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
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold transition group"
                >
                  <Icon className="text-white hover:text-blue-500 transition text-sm" />
                </a>
              );
            })}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <p className="mb-4 text-sm text-white/40">SERVICES</p>
          <ul className="space-y-2 text-sm">
            <li>Wedding Photography</li>
            <li>Pre-Wedding Shoots</li>
            <li>Portrait Sessions</li>
            <li>Fashion Editorial</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <p className="mb-4 text-sm text-white/40">EXPLORE</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="mb-4 text-sm text-white/40">CONTACT</p>
          <p className="text-sm">hello@swayam.com</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 flex justify-between text-xs text-white/30">
        <p>© 2025 Swayam More</p>
        <p>Crafted with care in Mumbai ♥</p>
      </div>

    </footer>
  );
};

export default Footer;