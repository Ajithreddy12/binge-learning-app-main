const CAD = () => {
  return (
    <section className="bg-gradient-to-b from-[#2b0a3d] to-[#120016] text-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CAD Course – <br />
            <span className="text-yellow-500">
              Draft, Design & Build with Precision
            </span>
          </h1>

          <p className="text-gray-300 mb-6">
            Learn professional 2D & 3D drafting used in mechanical, civil and
            architectural industries with live projects and internship support.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {["AutoCAD", "2D + 3D Drafting", "Live Projects", "Internship"].map(
              (item, i) => (
                <span
                  key={i}
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
            Enroll Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="CAD"
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { value: "700+", label: "Students Trained" },
          { value: "92%", label: "Placement Rate" },
          { value: "15+", label: "Industry Partners" },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl py-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">{s.value}</h3>
            <p className="text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>

      {/* OVERVIEW */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 text-gray-300">
          <p>
            This CAD course focuses on professional drafting workflows,
            precision drawing standards, and real-world engineering practices
            used across industries.
          </p>

          {[
            "Industry-oriented curriculum",
            "Hands-on drafting assignments",
            "Professional certification support",
          ].map((t, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              {t}
            </div>
          ))}
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-4">
            Practical Exposure
          </h4>
          <ul className="space-y-3 text-sm">
            <li>✔ Industrial drawings</li>
            <li>✔ Real project files</li>
            <li>✔ Internship support</li>
            <li>✔ Placement assistance</li>
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
            ["AutoCAD Basics", ["2D drafting", "Layers", "Dimensions"]],
            ["3D Modelling", ["Solid modelling", "Isometric views"]],
            ["Layouts & Printing", ["Plotting", "Scale management"]],
          ].map(([title, items], i) => (
            <div key={i} className="bg-white text-black rounded-2xl p-6">
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="text-sm space-y-2">
                {items.map((x, j) => (
                  <li key={j}>✔ {x}</li>
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

export default CAD;
