const services = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into paying clients.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Modern portfolio websites that build authority and attract opportunities.",
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for brands that want to stand out and scale online.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-black text-white px-6 md:px-16 py-24"
    >
      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <p className="label mb-4 text-white/60">SERVICES</p>
        <h2 className="heading text-4xl md:text-6xl leading-tight">
          What I Can <span className="italic text-gold">Do For You</span>
        </h2>
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group border border-white/10 p-8 transition-all duration-300 hover:border-gold cursor-pointer"
          >
            {/* NUMBER */}
            <p className="text-sm text-white/40 mb-6">
              0{index + 1}
            </p>

            {/* TITLE */}
            <h3 className="text-xl mb-4 group-hover:text-gold transition">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 leading-relaxed">
              {service.description}
            </p>

            {/* HOVER LINE */}
            <div className="mt-8 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;