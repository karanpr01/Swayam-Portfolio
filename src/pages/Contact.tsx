/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    date: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // 🔥 GSAP ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // 🔥 TOAST ANIMATION
  useEffect(() => {
    if (success || error) {
      gsap.from(".toast", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [success, error]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 FORM SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/mlgpzevr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);

        // RESET FORM
        setForm({
          name: "",
          email: "",
          phone: "",
          type: "",
          date: "",
          location: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section>

      <Navbar />

      <div ref={pageRef} className="bg-black text-white px-6 md:px-16 py-24">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="fade-up text-gold text-[10px] tracking-[0.4em] mb-4">
            CONTACT
          </p>

          <h1 className="fade-up font-serif text-4xl md:text-7xl leading-tight">
            Let’s Create <span className="italic text-gold">Together</span>
          </h1>

          <p className="fade-up text-white/60 mt-4">
            Tell me about your vision — I’ll handle the rest.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10 fade-up">

            <div>
              <h2 className="text-2xl mb-4 font-serif">Get in Touch</h2>
              <p className="text-white/60">
                Whether it’s a wedding, portrait, or brand shoot —
                let’s create something unforgettable.
              </p>
            </div>

            {/* CONTACT ITEMS */}
            <div className="space-y-8 text-sm">

              {/* EMAIL */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-gold rounded-xl">
                  <Mail className="text-gold group-hover:text-black transition" size={18} />
                </div>

                <div>
                  <p className="text-white/40 text-xs tracking-widest">EMAIL</p>
                  <p className="text-white text-base">hello@yourname.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-gold rounded-xl">
                  <Phone className="text-gold group-hover:text-black transition" size={18} />
                </div>

                <div>
                  <p className="text-white/40 text-xs tracking-widest">PHONE</p>
                  <p className="text-white text-base">+91 98765 43210</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-gold rounded-xl">
                  <MapPin className="text-gold group-hover:text-black transition" size={18} />
                </div>

                <div>
                  <p className="text-white/40 text-xs tracking-widest">LOCATION</p>
                  <p className="text-white text-base">Mumbai, Maharashtra</p>
                  <p className="text-white/50 text-xs">
                    Available worldwide
                  </p>
                </div>
              </div>

            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919987826481?text=Hi%20I%20came%20from%20your%20website%20and%20want%20to%20discuss%20a%20project"
              target="_blank"
              className="inline-block bg-green-500 text-white px-6 py-3 text-sm mt-4 hover:opacity-90 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 fade-up">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address *"
                required
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              >
                <option value="">Event Type</option>
                <option value="Wedding" className="text-black">Wedding</option>
                <option value="Pre-Wedding" className="text-black">Pre-Wedding</option>
                <option value="Portrait" className="text-black">Portrait</option>
                <option value="Fashion" className="text-black">Fashion</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Event Date"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about your vision..."
              className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-black py-4 text-sm tracking-wide transition hover:opacity-90 flex justify-center"
            >
              {loading ? "SENDING..." : "SEND INQUIRY →"}
            </button>

          </form>

        </div>

        {/* TOASTS */}
        {success && (
          <div className="toast fixed bottom-6 right-6 bg-white text-black px-6 py-4 shadow-lg text-sm">
            Message sent successfully ✅
          </div>
        )}

        {error && (
          <div className="toast fixed bottom-6 right-6 bg-red-500 text-white px-6 py-4 shadow-lg text-sm">
            Something went wrong ❌
          </div>
        )}

      </div>

      <Footer />

    </section>
  );
};

export default ContactPage;