/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const filters = ["ALL", "WEDDINGS", "PRE-WEDDING", "PORTRAITS", "FASHION", "EVENTS"];

const gallery = [
  {
    id: 1,
    title: "Getting Ready",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
  },
  {
    id: 2,
    title: "Haldi Ceremony",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  },
  {
    id: 3,
    title: "Mehendi Close-up",
    category: "PRE-WEDDING",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200",
  },
  {
    id: 4,
    title: "Portrait Shot",
    category: "PORTRAITS",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
  },
  {
    id: 5,
    title: "Fashion Shoot",
    category: "FASHION",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
  },
  {
    id: 6,
    title: "Event Coverage",
    category: "EVENTS",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
  },
  {
    id: 7,
    title: "Golden Hour Couple",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
  },
  {
    id: 8,
    title: "Candid Laugh",
    category: "PORTRAITS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeImage, setActiveImage] = useState<any>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // FILTER LOGIC
  const filteredGallery =
    activeFilter === "ALL"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  // GSAP ANIMATION ON FILTER CHANGE
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  // LIGHTBOX NAV
  const nextImage = () => {
    setActiveImage((prev: any) => {
      const currentIndex = filteredGallery.findIndex((i) => i.id === prev.id);
      return filteredGallery[(currentIndex + 1) % filteredGallery.length];
    });
  };

  const prevImage = () => {
    setActiveImage((prev: any) => {
      const currentIndex = filteredGallery.findIndex((i) => i.id === prev.id);
      return filteredGallery[
        (currentIndex - 1 + filteredGallery.length) % filteredGallery.length
      ];
    });
  };

  return (
    <div ref={sectionRef} className="bg-[#F5F2EE] text-black">

        <Navbar/>

      {/* HERO */}
      <section className="h-100 bg-black text-white flex items-center justify-center text-center">
        <div>
          <p className="label mb-4">PORTFOLIO</p>
          <h1 className="heading text-5xl md:text-7xl">
            The Full <span className="italic text-gold">Collection</span>
          </h1>
          <p className="text-white/60 mt-4">
            A curated selection of moments captured
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 bg-[#F5F2EE] border-b py-6 flex justify-center gap-3 flex-wrap z-40">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-[11px] tracking-[0.2em] border transition
              ${
                activeFilter === filter
                  ? "bg-gold text-white border-gold"
                  : "border-black/20 hover:border-gold hover:text-gold"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <div className="columns-1 md:columns-3 gap-4 space-y-4 px-6 md:px-16 py-20">

        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className="gallery-item break-inside-avoid relative group cursor-pointer"
            onClick={() => setActiveImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover mb-4 transition duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

            <p className="absolute bottom-4 left-4 text-white italic opacity-0 group-hover:opacity-100 transition">
              {item.title}
            </p>
          </div>
        ))}

      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          <img
            src={activeImage.image}
            className="max-w-[90%] max-h-[80%] object-cover"
          />

          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-3xl"
          >
            ←
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-3xl"
          >
            →
          </button>

        </div>
      )}

      <Footer/>
    </div>
  );
};

export default Portfolio;