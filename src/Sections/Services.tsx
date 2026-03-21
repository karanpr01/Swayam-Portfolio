import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
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

const Services = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector?.(".service-card");
      const heading = self.selector?.(".service-heading");

      if (!cards || !heading) return;

      // 🔥 HEADING ANIMATION
      gsap.fromTo(
        heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // 🔥 STAGGER CARDS
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
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

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-black text-white px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <p className="label mb-4 text-white/60">SERVICES</p>

        <h2 className="service-heading heading text-4xl md:text-6xl leading-tight">
          What I Can <span className="italic text-gold">Do For You</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group border border-white/10 p-8 transition-all duration-300 hover:border-gold hover:-translate-y-2 cursor-pointer"
          >
            {/* NUMBER */}
            <p className="text-4xl text-white/40 mb-6">
              0{index + 1}
            </p>

            {/* TITLE */}
            <h3 className="text-xl mb-4 text-gold transition">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 leading-relaxed">
              {service.desc}
            </p>
            {/* Price */}
            <p className="text-sm mb-4 text-gold">Starting from {service.price}</p>

            {/* HOVER LINE */}
            <div className="mt-8 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Services;