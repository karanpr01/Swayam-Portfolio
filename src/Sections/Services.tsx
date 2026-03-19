import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Landing Pages",
    price: "₹8,000",
    description:
      "High-converting landing pages designed to turn visitors into paying clients.",
  },
  {
    title: "Portfolio Websites",
    price: "₹12,000",
    description:
      "Modern portfolio websites that build authority and attract opportunities.",
  },
  {
    title: "Business Websites",
    price: "₹20,000",
    description:
      "Professional websites for brands that want to stand out and scale online.",
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
              {service.description}
            </p>
            {/* Price */}
            <p className="text-2xl mb-4 text-gold">Starting from {service.price}</p>

            {/* HOVER LINE */}
            <div className="mt-8 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Services;