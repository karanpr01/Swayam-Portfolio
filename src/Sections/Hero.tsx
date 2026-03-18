import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {

  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll(".hero-text"),{
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black-custom text-white overflow-hidden flex items-center px-6 md:px-16"
    >

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-125 h-125 bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,transparent_70%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <p className="label mb-6 hero-text">
          MUMBAI · INDIA · EST. 2017
        </p>

        <h1 className="heading text-[52px] md:text-[96px] leading-[0.9] hero-text">
          Swayam <br />
          <span className="italic text-gold">More</span>
        </h1>

        <p className="italic text-white/60 mt-6 text-lg md:text-xl hero-text">
          Where every frame tells a story never told before
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 hero-text">
          <button className="bg-gold text-white px-8 py-4 text-sm tracking-wide transition hover:opacity-90">
            VIEW PORTFOLIO
          </button>

          <button className="border border-white/30 px-8 py-4 text-sm tracking-wide hover:border-gold hover:text-gold transition">
            BOOK A SHOOT
          </button>
        </div>

      </div>

      {/* RIGHT PORTRAIT BLOCK */}
      <div className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 w-70 h-105 border border-white/10 hero-text overflow-hidden">

        <img
          src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop"
          alt="Photographer"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(200,160,100,0.18),rgba(0,0,0,0.4))]" />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/40" />
        <p className="text-[9px] tracking-[0.3em] text-white/40">
          SCROLL
        </p>
      </div>

    </section>
  );
};

export default Hero;