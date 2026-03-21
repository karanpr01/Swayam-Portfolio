import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // 🔥 Formspree Hook
  const [state, handleSubmit] = useForm("mlgpzevr"); // <-- replace this

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector?.(".contact-item");

      if (!items) return;

      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
  if (state.succeeded) {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1500);
  }
}, [state.succeeded]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black text-white px-6 md:px-16 py-24"
    >
      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <p className="label text-white/60 contact-item">
            LET'S CREATE TOGETHER
          </p>

          <h2 className="heading text-4xl md:text-6xl contact-item">
            Book Your <span className="italic text-gold">Project</span>
          </h2>

          <p className="text-white/60 max-w-md contact-item">
            Tell me about your project, your vision, and your goals.
            Let’s create something that not only looks good—but converts.
          </p>

          <div className="space-y-4 contact-item">
            <p>📧 hello@growthpixelco.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Mumbai, India · Available Worldwide</p>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919987826481?text=Hi%20I%20came%20from%20your%20website%20and%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-black px-8 py-4 text-sm tracking-wide hover:opacity-90 transition contact-item"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-item">

          {/* SUCCESS MESSAGE */}
          {state.succeeded && (
            <p className="text-green-500 mb-6">
              ✅ Your message has been sent successfully.
            </p>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold"
              />

              <select
                name="Event Type"
                className="bg-white/5 border border-white/10 px-4 py-3 outline-none"
              >
                <option value="">Event Type</option>
              <option className="text-black">Wedding</option>
              <option className="text-black">Pre-Wedding</option>
              <option className="text-black">Portrait</option>
              <option className="text-black">Fashion</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold"
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gold text-black py-4 text-sm tracking-wide hover:opacity-90 transition disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "SEND INQUIRY →"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;