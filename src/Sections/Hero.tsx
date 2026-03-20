import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      // TEXT ANIMATION (unchanged)
      gsap.from(self.selector(".hero-text"), {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 🔥 PARALLAX + ZOOM (DESKTOP IMAGE)
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.1,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 🔥 PARALLAX FOR MOBILE BACKGROUND
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 30%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={heroRef}
  className="relative min-h-screen text-white overflow-hidden flex flex-col justify-center px-6 md:px-16 py-20 md:py-0 bg-black-custom"
  
  /* ✅ MOBILE ONLY BACKGROUND */
  style={{
    backgroundImage:
      window.innerWidth < 768
        ? "url('https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=1200&auto=format&fit=crop')"
        : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 md:hidden" />

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-62.5 h-62.5 md:w-125 md:h-125 bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,transparent_70%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">
        <p className="label mb-4 md:mb-6 hero-text text-[10px] tracking-[0.4em]">
          MUMBAI · INDIA · EST. 2017
        </p>

        <h1 className="heading text-[42px] sm:text-[56px] md:text-[96px] leading-[0.95] hero-text">
          Swayam <br />
          <span className="italic text-gold">More</span>
        </h1>

        <p className="italic text-white/60 mt-4 md:mt-6 text-sm sm:text-base md:text-xl hero-text">
          Where every frame tells a story never told before
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10 hero-text">
          <button className="bg-gold text-white px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide transition hover:opacity-90">
            <Link to="/portfolio">VIEW PORTFOLIO</Link>
          </button>

          <button className="border border-white/30 px-6 md:px-8 py-3 md:py-4 text-sm tracking-wide hover:border-gold hover:text-gold transition">
            <a href="#contact">BOOK A SHOOT</a>
          </button>
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <div
        ref={imageRef}
        className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 w-70 h-105 border border-white/10 hero-text overflow-hidden"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop"
          alt="Photographer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(200,160,100,0.18),rgba(0,0,0,0.4))]" />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 md:h-10 bg-white/40" />
        <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-white/40">
          SCROLL
        </p>
      </div>

    </section>
  );
};

export default Hero;