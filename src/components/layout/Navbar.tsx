


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-10 z-50 border border-bottom-1 ">

      {/* logo */}
      <div className="heading text-xl text-gold">
        <span className="">Swayam</span>
        <span className="italic "> More</span>
      </div>

      {/* links */}
      <div className="flex gap-5">
        {["Portfolio", "Services", "About","Stories", "Contact"].map((item) => (
          <a key={item} href="#" className="text-white hover:text-gold transition">
            {item}
          </a>
        ))}
      </div>

       {/* CTA */}
      <button className="bg-black text-white px-6 py-2 text-sm">
        BOOK A SHOOT
      </button>
    </nav>
  )
}

export default Navbar