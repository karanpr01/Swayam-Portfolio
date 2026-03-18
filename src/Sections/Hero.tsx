

const Hero = () => {
  return (
    <section className="h-screen bg-black-custom text-white flex items-center px-10 justify-around">

      <div className="max-w-2xl">

        <p className="label text-gold mb-4">
          MUMBAI · INDIA · EST. 2017
        </p>

        <h1 className="heading text-[80px] leading-none">
          Swayam <br/>
          <span className="italic text-gold">More</span>
        </h1>

        <p className="italic text-white/60 mt-4 text-xl text-muted">
          Where every frame tells a story never told before
        </p>

         <div className="flex gap-4 mt-8">
          <button className="bg-gold text-white px-8 py-4">
            VIEW PORTFOLIO
          </button>
          <button className="border border-white/30 px-8 py-4">
            BOOK A SHOOT
          </button>
        </div>

      </div>

      <div className="img">
        <img src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photographer image"
        width= "250px"
        className="border-4 rounded-2xl border-gold"
        />
      </div>
    </section>
  )
}

export default Hero