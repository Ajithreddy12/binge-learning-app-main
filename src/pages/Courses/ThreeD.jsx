const ThreeD = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">
      
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            3D Design & Character Modelling – <br />
            <span className="text-yellow-500">
              Build Worlds, Characters & Careers
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Learn professional 3D modelling, texturing, lighting and animation
            with live projects, internship and career support.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Industry Projects",
              "Internship Included",
              "Placement Support",
              "Animation Ready",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold text-black">
              Enroll Now
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-xl">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1614850715973-58c3167b30a0"
            alt="3D Design"
            className="rounded-2xl shadow-xl"
          />
          <span className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Industry Certified • Professional Course
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "800+", label: "Students Trained" },
          { value: "90%", label: "Placement Rate" },
          { value: "15+", label: "Studio Partners" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-xl py-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* COURSE OVERVIEW */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">
        
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            This 3D Design & Character Modelling course is designed to take you
            from beginner to professional. You’ll work on real-world assets,
            characters, environments and animations used in games, films and
            advertising.
          </p>

          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">
              Flexible Learning Duration
            </h4>
            <p className="text-gray-400 text-sm">
              Choose between regular batch or fast-track intensive learning
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">
              Industry-Oriented Curriculum
            </h4>
            <p className="text-gray-400 text-sm">
              Covers modelling, texturing, lighting, rigging and animation
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">
              Expert Mentorship
            </h4>
            <p className="text-gray-400 text-sm">
              Learn from professional 3D artists with real studio experience
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white/5 rounded-2xl p-6 h-fit">
          <h4 className="text-xl font-semibold mb-4">
            Practical Exposure & Career Support
          </h4>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <span className="font-semibold text-white">Live 3D Projects</span>
              <br />
              Characters, environments & props for real use cases
            </li>
            <li>
              <span className="font-semibold text-white">Showreel Creation</span>
              <br />
              Build a professional demo reel for studios
            </li>
            <li>
              <span className="font-semibold text-white">Guaranteed Internship</span>
              <br />
              Hands-on industry exposure after course completion
            </li>
            <li>
              <span className="font-semibold text-white">Placement Assistance</span>
              <br />
              Interview prep & studio connections
            </li>
          </ul>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You Will Learn
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Blender",
              points: [
                "3D modelling & sculpting",
                "UV mapping",
                "Lighting & rendering",
                "Animation basics",
              ],
            },
            {
              title: "ZBrush",
              points: [
                "High-poly sculpting",
                "Character anatomy",
                "Detailing & texturing",
                "Professional workflows",
              ],
            },
            {
              title: "Substance Painter",
              points: [
                "PBR texturing",
                "Material creation",
                "Game-ready assets",
                "Industry pipelines",
              ],
            },
            {
              title: "Maya",
              points: [
                "Rigging & animation",
                "Character setup",
                "Studio workflows",
                "Production pipelines",
              ],
            },
            {
              title: "Rendering Engines",
              points: [
                "Cycles & Eevee",
                "Lighting techniques",
                "Photorealism",
                "Optimization",
              ],
            },
            {
              title: "Portfolio Development",
              points: [
                "Showreel creation",
                "Project presentation",
                "Client-ready assets",
                "Industry standards",
              ],
            },
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4">{tool.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {tool.points.map((p, j) => (
                  <li key={j}>✔ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE BINGE LEARNING */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Binge Learning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "👥",
              title: "Experienced Industry Mentors",
              desc: "Learn from professionals with 10+ years of real-world design experience in top agencies",
            },
            {
              icon: "🎒",
              title: "Hands-on Live Project Practice",
              desc: "Work on real client projects and build a portfolio that showcases your skills",
            },
            {
              icon: "📈",
              title: "Job-Oriented Curriculum",
              desc: "95% placement rate with dedicated career coaching and access to 50+ hiring partners",
            },
            {
              icon: "⏰",
              title: "Flexible Learning Schedule",
              desc: "Choose between weekend batches or weekday sessions that fit your lifestyle",
            },
            {
              icon: "🎧",
              title: "Lifetime Support & Updates",
              desc: "Get ongoing mentorship, course updates, and access to our alumni network forever",
            },
            {
              icon: "🎯",
              title: "100% Practical Training",
              desc: "Work on real client projects and build a portfolio that showcases your skills",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#1e052d] border border-white/10 rounded-2xl p-6 flex gap-4">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHOOSE YOUR LEARNING PATH */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your <span className="text-[#ff1493]">Learning Path</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Regular Batch */}
          <div className="bg-white text-black rounded-3xl p-8 relative">
            <div className="absolute top-0 left-0 bg-[#ff1493] text-white px-4 py-2 rounded-tl-3xl rounded-br-2xl font-bold text-sm">
              Most Popular
            </div>
            <div className="text-center mt-6 mb-8">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto text-3xl mb-4">
                📅
              </div>
              <h3 className="text-2xl font-bold mb-1">Regular Batch</h3>
              <p className="text-gray-500 font-medium">18 Weeks</p>
              <div className="text-3xl font-bold mt-4">₹</div>
              <div className="text-green-500 font-bold text-sm mt-1">Save</div>
              <p className="text-gray-400 text-sm mt-2">One-time payment • EMI options available</p>
            </div>
            <ul className="space-y-4 mb-8 text-sm font-medium">
              {[
                "Complete mastery of 6 software tools",
                "Weekend & weekday batch options",
                "3-4 hours per session",
                "10+ live client projects",
                "Personalized mentorship",
                "Guaranteed internship placement",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#ff1493]">✔</span> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#ff1493] hover:bg-[#e00d7d] text-white font-bold py-4 rounded-xl transition">
              ENROLL NOW
            </button>
          </div>

          {/* Fast-Track Batch */}
          <div className="bg-white text-black rounded-3xl p-8 relative">
            <div className="absolute top-0 left-0 bg-[#00ced1] text-white px-4 py-2 rounded-tl-3xl rounded-br-2xl font-bold text-sm">
              Intensive
            </div>
            <div className="text-center mt-6 mb-8">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl mb-4">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-1">Fast-Track Batch</h3>
              <p className="text-gray-500 font-medium">6 Weeks</p>
              <div className="text-3xl font-bold mt-4">₹</div>
              <div className="text-green-500 font-bold text-sm mt-1">Save</div>
              <p className="text-gray-400 text-sm mt-2">One-time payment • EMI options available</p>
            </div>
            <ul className="space-y-4 mb-8 text-sm font-medium">
              {[
                "Intensive daily sessions",
                "Fast-paced curriculum coverage",
                "5-6 hours per session",
                "5+ live client projects",
                "Dedicated mentor support",
                "Guaranteed internship placement",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#00ced1]">✔</span> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#00ced1] hover:bg-[#00b8bc] text-white font-bold py-4 rounded-xl transition">
              ENROLL NOW
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Secure payment • 7-day money-back guarantee
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ThreeD;
