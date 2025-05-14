
function Hero() {
  return (
    <section className=" h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
          Welcome to ME!!
        </h1>
        <h1 className="text-5xl md:text-xl mb-8 max-w-2xl mx-auto">
          NEW BER
        </h1>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
