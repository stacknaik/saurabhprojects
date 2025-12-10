import React from "react";

function Hero() {
  return (
    <div className="bg-black text-white overflow-hidden relative">

      {/* Background Moving Glow */}
      <div className="absolute w-[600px] h-[600px] bg-pink-500 blur-[180px] opacity-20 animate-pulse-slow top-10 -left-40 rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500 blur-[200px] opacity-20 animate-pulse-slow bottom-10 -right-40 rounded-full"></div>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">

        <div className="max-w-md mb-12 md:mb-0 crazy-slide-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 crazy-text">
            CREATE YOUR PC
          </h1>

          <p className="text-gray-300 mb-6 text-base md:text-lg crazy-fade">
            Build your dream PC with ease. Choose components, compare performance,
            and customize every part.
          </p>

          <button className="neon-btn px-8 py-3 rounded-lg text-lg crazy-button">
            Read more
          </button>
        </div>

        <div className="max-w-xl crazy-slide-right">
          <img
            src="/icon/img1.jpg"
            className="w-full rounded-2xl shadow-xl border border-gray-700 
                       animate-crazyFloat hover:scale-110 transition duration-300
                       hover:animate-imageShake"
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">

        <div className="max-w-md mb-10 md:mb-0 crazy-slide-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 crazy-text">
            Next-Gen 3D Build
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-4 crazy-fade">
            Beginner friendly for users to add components of their choice and
            customize PC builds according to their needs.
          </p>
        </div>

        <div className="max-w-md crazy-slide-right">
          <img
            src="/icon/3dmodel.jpg"
            className="w-full rounded-2xl border border-gray-700 
                       shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_25px_60px_rgba(255,255,255,0.25)]
                       hover:scale-110 transition duration-300
                       animate-crazyFloatSlow hover:animate-imageShake"
          />
        </div>

      </section>
    </div>
  );
}

export default Hero;
