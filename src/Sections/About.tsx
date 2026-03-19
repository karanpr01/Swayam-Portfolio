import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const items = self.selector?.(".about-item");

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
      id="about"
      ref={sectionRef}
      className="bg-[#E8E0D4] text-black px-6 md:px-16 py-24"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="about-item relative w-full h-100 md:h-125 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200"
            alt="Photographer"
            className="w-full h-full object-cover"
          />

          {/* GOLD BORDER EFFECT */}
          <div className="absolute top-6 right-6 w-full h-full border border-gold pointer-events-none" />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          <p className="label about-item">ABOUT THE PHOTOGRAPHER</p>

          <h2 className="heading text-4xl md:text-6xl about-item">
            The Eye <span className="italic text-muted">Behind the Lens</span>
          </h2>

          <p className="text-muted leading-relaxed about-item">
            I don’t just take photos — I capture moments that feel real, raw, and timeless.
            Every frame is designed to tell a story that people can relive for years.
          </p>

          <p className="text-muted leading-relaxed about-item">
            With years of experience and hundreds of shoots, my focus is always on
            emotion, detail, and storytelling that stands out.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="about-item">
              <p className="text-3xl font-light">7+</p>
              <p className="text-sm text-muted">Years Experience</p>
            </div>

            <div className="about-item">
              <p className="text-3xl font-light">400+</p>
              <p className="text-sm text-muted">Shoots Completed</p>
            </div>

            <div className="about-item">
              <p className="text-3xl font-light">180+</p>
              <p className="text-sm text-muted">Weddings</p>
            </div>

            <div className="about-item">
              <p className="text-3xl font-light">12+</p>
              <p className="text-sm text-muted">Awards</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;