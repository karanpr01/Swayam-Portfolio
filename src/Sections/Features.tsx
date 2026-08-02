import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  title: string;
  image: string;
  className: string;
};

const Card = ({ title, image, className }: CardProps) => {
  return (
    <div
      className={`feature-card group relative overflow-hidden ${className} cursor-pointer`}
    >
      {/* IMAGE */}
      <div className="feature-img-wrapper w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-110 transition duration-500 group-hover:scale-115"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

      {/* TAG */}
      <p className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-white">
        {title}
      </p>

      {/* HOVER TEXT */}
      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500">
        <p className="heading text-white text-xl italic">{title}</p>
      </div>

      {/* GOLD LINE */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold translate-y-full group-hover:translate-y-0 transition-all duration-500" />
    </div>
  );
};

const Featured = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);
      const cards = q(".feature-card");
      const images = q(".feature-img");

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      images.forEach((img, i) => {
        gsap.to(img, {
          y: i % 2 === 0 ? 20 : -20,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-background py-25 px-6 md:px-16 overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="label mb-4">SELECTED WORK</p>
          <h2 className="heading text-[40px] md:text-[56px]  text-black">
            Captured <span className="italic text-muted">Moments</span>
          </h2>
        </div>

        <Link to="/portfolio" className="text-sm tracking-wide transition hover:text-(--gold) hover:underline">
          View All Work →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-4">

        {/* BIG CARD */}
        <Card
          title="WEDDINGS"
          className="col-span-12 md:col-span-5 h-95"
          image="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
        />

        {/* RIGHT GRID */}
        <div className="col-span-12 md:col-span-7 grid grid-cols-6 gap-4">

          <Card
            title="PRE-WEDDING"
            className="col-span-6 md:col-span-3 h-45"
            image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          />

          <Card
            title="FASHION"
            className="col-span-6 md:col-span-3 h-45"
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Card
            title="PORTRAITS"
            className="col-span-6 md:col-span-3 h-45"
            image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
          />

          <Card
            title="EVENTS"
            className="col-span-6 md:col-span-3 h-45"
            image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
          />

        </div>

      </div>

    </section>
  );
};

export default Featured;