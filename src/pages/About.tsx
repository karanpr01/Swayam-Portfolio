import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".about-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-img", {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#E8E0D4] text-black">

      <Navbar/>

      {/* 🔥 HERO */}
      <section className="py-32 px-6 md:px-16 max-w-5xl">
        <p className="label text-gold mb-4 about-text">
          ABOUT THE PHOTOGRAPHER
        </p>

        <h1 className="heading text-4xl md:text-6xl leading-tight about-text">
          The Eye <span className="italic">Behind the Lens</span>
        </h1>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="grid md:grid-cols-2 gap-16 px-6 md:px-16 pb-32 items-center">

        {/* IMAGE */}
        <div className="relative about-img">
          <img
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200"
            className="w-full h-125 object-cover"
          />

          {/* GOLD FRAME EFFECT */}
          <div className="absolute top-6 right-6 w-full h-full border border-gold pointer-events-none" />
        </div>

        {/* TEXT */}
        <div>

          <p className="text-black/70 leading-relaxed mb-6 about-text">
            I believe photography is not about taking pictures —
            it’s about preserving emotions that would otherwise fade with time.
          </p>

          <p className="text-black/70 leading-relaxed mb-6 about-text">
            Over the years, I’ve had the privilege of capturing
            weddings, portraits, and stories that matter deeply to people.
            Each frame is approached with intention, detail, and respect for the moment.
          </p>

          <p className="text-black/70 leading-relaxed about-text">
            My work focuses on authenticity — creating images that feel natural,
            timeless, and emotionally honest.
          </p>

        </div>

      </section>

      {/* 🔥 STATS */}
      <section className="px-6 md:px-16 pb-32 grid grid-cols-2 md:grid-cols-4 gap-10">

        {[
          { number: "7+", label: "Years Experience" },
          { number: "400+", label: "Shoots Completed" },
          { number: "180+", label: "Weddings" },
          { number: "12+", label: "Awards" },
        ].map((item, i) => (
          <div key={i} className="about-text">
            <h3 className="text-4xl md:text-5xl font-light">
              {item.number}
            </h3>
            <p className="text-sm text-black/50 mt-2 tracking-widest">
              {item.label}
            </p>
          </div>
        ))}

      </section>

      {/* 🔥 QUOTE */}
      <section className="px-6 md:px-16 pb-32 max-w-4xl">
        <blockquote className="border-l-2 border-gold pl-6 text-2xl md:text-3xl italic leading-relaxed">
          Photography is the art of frozen time —
          the ability to store emotion and feeling within a single frame.
        </blockquote>
      </section>

      <Footer/>
    </div>
  );
};

export default About;