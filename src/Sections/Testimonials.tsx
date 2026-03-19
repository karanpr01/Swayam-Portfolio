import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Swayam has an extraordinary ability to capture emotion without interfering with it. Our wedding photos feel like cinema.",
    name: "Ananya & Rohan Mehta",
    detail: "Wedding · Pune 2024",
  },
  {
    text: "We were nervous at first, but he made us feel completely natural. The photos look like magazine covers.",
    name: "Priya & Arjun Sharma",
    detail: "Pre-Wedding · Goa 2024",
  },
  {
    text: "Editorial-quality images that completely transformed how we present our brand online.",
    name: "Neha Kapoor",
    detail: "Fashion · Mumbai 2023",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = self.selector?.(".testimonial-card");

      if (!cards) return;

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-[#F5F2EE] px-6 md:px-16 py-24"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="label mb-4">WHAT CLIENTS SAY</p>

        <h2 className="heading text-4xl md:text-6xl text-black">
          Trusted By <span className="italic text-muted">Clients</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card bg-white p-8 border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-gold cursor-pointer"
          >
            {/* STARS */}
            <p className="text-gold mb-4 text-3xl">★★★★</p>

            {/* TEXT */}
            <p className="italic text-lg mb-6 text-black">
              "{item.text}"
            </p>

            {/* NAME */}
            <p className="text-sm font-medium text-black">
              {item.name}
            </p>

            <p className="text-xs text-muted">
              {item.detail}
            </p>

            {/* HOVER LINE */}
            <div className="mt-6 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;