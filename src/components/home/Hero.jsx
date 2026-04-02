const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-16">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
        
        {/* Left Side: Text and CTAs */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-sm text-yellow-400 mb-4 font-semibold">
            Learn • Practice • Succeed
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            We Turn Learners Into Professionals
          </h1>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Unlock your potential with Binge Learning. Master Graphic Design, 3D, CAE, CAD, and AI tools through expert mentorship, live classes, and industry-focused training.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-md font-bold text-lg transition shadow-lg transform hover:-translate-y-1">
              View Courses
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition shadow-lg transform hover:-translate-y-1">
              Book Demo
            </button>
          </div>
        </div>

        {/* Right Side: Image/Video Placeholder */}
        <div className="relative hidden w-full lg:flex justify-center items-center">
          <div className="w-full h-[500px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
            {/* Mock Image Gradient / Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-[#4b136f]/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <span className="text-6xl mb-4 block">🎓</span>
              <p className="text-white/60 font-medium">Hero Image / Video</p>
            </div>
            
            {/* Floating badges for design aesthetic */}
            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
              40+ Courses
            </div>
            <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <span className="text-yellow-400">★</span> 4.8/5 Rating
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
