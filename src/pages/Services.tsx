import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Wedding Photography",
    price: "Starting ₹45,000",
    desc: "Full-day coverage capturing every emotion, ritual, and moment that matters.",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
  },
  {
    title: "Pre-Wedding Shoots",
    price: "Starting ₹18,000",
    desc: "Romantic storytelling sessions in beautiful locations.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
  },
  {
    title: "Portrait Sessions",
    price: "Starting ₹8,000",
    desc: "Personal, artistic portraits that reflect your identity.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600",
  },
  {
    title: "Fashion & Editorial",
    price: "Starting ₹25,000",
    desc: "High-concept shoots designed for brands and campaigns.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
  },
  {
    title: "Events & Occasions",
    price: "Starting ₹12,000",
    desc: "Coverage for celebrations, corporate events, and special gatherings.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
  },
];

const ServicesPage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".service-block");

      sections.forEach((section) => {
        const img = section.querySelector(".service-img");
        const content = section.querySelector(".service-content");

        // 🔥 TEXT REVEAL
        gsap.from(content, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });

        // 🔥 CLEAN PARALLAX (VERY SUBTLE)
        gsap.to(img, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 🔥 HERO STORYTELLING (TITLE SPLIT FEEL)
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-background text-black">

      <Navbar />

      {/* 🔥 HERO */}
       <section className="bg-black text-white flex items-center justify-center px-6 md:px-16 py-32 md:py-40">

      <div className="text-center max-w-4xl">

        {/* LABEL */}
        <p className="text-gold text-[10px] tracking-[0.4em] mb-6">
          SERVICES
        </p>

        {/* HEADING */}
        <h1 className="font-serif text-[42px] md:text-[80px] leading-[1.1] tracking-tight">
          Premium{" "}
          <span className="italic text-gold">
            Photography
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Tailored photography services designed to capture your most precious
          moments with artistry and professionalism
        </p>

      </div>

    </section>

      {/* 🔥 SERVICES */}
      <section className="px-6 md:px-16 pb-40 space-y-48">

        {services.map((service, i) => (
          <div
            key={i}
            className="service-block grid md:grid-cols-2 gap-20 items-center"
          >

            {/* IMAGE */}
            <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="overflow-hidden">

                {/* 🔥 FIXED IMAGE RATIO */}
                <div className="aspect-4/5 md:aspect-3/4 overflow-hidden">
                  <img
                    src={service.img}
                    className="service-img w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* TEXT */}
            <div className={`service-content ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              {/* NUMBER */}
              <p className="text-gold font-serif text-[40px] md:text-[64px] leading-none mb-4 tracking-tight">
                0{i + 1}
              </p>

              <h2 className="heading text-3xl md:text-5xl mb-6">
                {service.title}
              </h2>

              <p className="text-muted mb-6">
                {service.desc}
              </p>

              <p className="text-sm tracking-widest text-gold mb-8">
                {service.price}
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="inline-block border border-black px-8 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition"
              >
                ENQUIRE →
              </a>
            </div>

          </div>
        ))}

      </section>

      {/* 🔥 FINAL CTA */}
      <section className="px-6 md:px-16 py-40 text-center">

        <h2 className="heading text-3xl md:text-6xl mb-6">
          Let’s Create Something <span className="italic text-gold">Timeless</span>
        </h2>

        <p className="text-muted mb-10">
          Your story deserves more than just photos.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          className="inline-block bg-black text-white px-10 py-5 text-sm tracking-wide hover:bg-gold transition"
        >
          BOOK A SESSION
        </a>

      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;