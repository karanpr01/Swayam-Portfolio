import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricing =[
  {
    title: "Wedding Photography",
    price: "Starting ₹45,000",
    desc: "Full-day coverage capturing every emotion, ritual, and moment that matters.",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  },
  {
    title: "Pre-Wedding Shoots",
    price: "Starting ₹18,000",
    desc: "Romantic storytelling sessions in beautiful locations, crafted with intention.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
  },
  {
    title: "Portrait Sessions",
    price: "Starting ₹8,000",
    desc: "Personal, artistic portraits that reflect your identity and presence.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
  },
  {
    title: "Fashion & Editorial",
    price: "Starting ₹25,000",
    desc: "High-concept shoots designed for brands, campaigns, and creative direction.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
  },
  {
    title: "Events & Occasions",
    price: "Starting ₹12,000",
    desc: "Coverage for celebrations, corporate events, and special gatherings.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
  },
];

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector?.(".cta-item");

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

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2EE] text-black px-6 md:px-16 py-24"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <p className="label mb-4">START YOUR PROJECT</p>

        <h2 className="heading text-4xl md:text-6xl leading-tight">
          Let’s Build Something{" "}
          <span className="italic text-gold">That Converts</span>
        </h2>
      </div>

      {/* PRICING */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pricing.map((item, i) => (
          <div
            key={i}
            className="cta-item border border-black/10 p-8 transition-all duration-300 hover:border-gold hover:-translate-y-2"
          >
            <h3 className="text-xl mb-4">{item.title}</h3>

            <p className="text-2xl mb-4 text-gold">{item.price}</p>

            <p className="text-muted leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="cta-item flex flex-col md:flex-row gap-4">
        <a
          href="#contact"
          className="bg-black text-white px-10 py-4 text-sm tracking-wide hover:opacity-90 transition"
        >
          BOOK A PROJECT
        </a>

        <a
          href="#contact"
          className="border border-black/20 px-10 py-4 text-sm tracking-wide hover:border-gold hover:text-gold transition"
        >
          DISCUSS YOUR IDEA
        </a>
      </div>
    </section>
  );
};

export default CTA;