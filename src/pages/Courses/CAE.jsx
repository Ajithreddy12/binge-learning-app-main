import React from "react";

const CAE = () => {
  return (
    <section className="bg-[#2a073f] text-white">
      {/* HERO SECTION */}
      <div className="max-w-[1470px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Computer Aided Engineering (CAE) Course
          </h1>

          <p className="text-white/80 max-w-xl mb-8 leading-relaxed">
            Master simulation-driven engineering with industry-standard CAE
            tools. Learn structural, thermal, and fluid simulations used by
            automotive, aerospace, and manufacturing industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Live Projects
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Industry Mentors
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Internship Assistance
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
              Simulation Focused
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white/5 rounded-3xl p-6">
          <img
            src="https://images.unsplash.com/photo-1581092919534-09a5c2c6f1d9"
            alt="CAE Simulation"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* COURSE OVERVIEW */}
      <div className="max-w-[1470px] mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-10">Course Overview</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Industry-Oriented Curriculum
              </h3>
              <p className="text-white/80">
                Learn CAE concepts from fundamentals to advanced simulations,
                aligned with real-world engineering problems and workflows.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Hands-on Simulation Practice
              </h3>
              <p className="text-white/80">
                Perform real simulations including stress analysis, thermal
                analysis, and CFD using industry tools.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Expert Mentorship
              </h3>
              <p className="text-white/80">
                Learn from experienced CAE professionals with real industry
                exposure in automotive and manufacturing domains.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">
              Practical Exposure & Career Support
            </h3>

            <ul className="space-y-4 text-white/80">
              <li>✔ Real-world engineering simulation projects</li>
              <li>✔ Internship & placement assistance</li>
              <li>✔ Resume & interview preparation</li>
              <li>✔ Industry-recognized skill development</li>
              <li>✔ Portfolio-building simulation cases</li>
            </ul>
          </div>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="bg-[#3b0a5f] py-24">
        <div className="max-w-[1470px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CAE Fundamentals",
                points: [
                  "Introduction to CAE & simulation",
                  "Engineering problem-solving approach",
                  "Mesh generation basics",
                ],
              },
              {
                title: "Structural Analysis (FEA)",
                points: [
                  "Stress & strain analysis",
                  "Static & dynamic simulations",
                  "Failure & deformation analysis",
                ],
              },
              {
                title: "Thermal Analysis",
                points: [
                  "Heat transfer fundamentals",
                  "Steady & transient thermal analysis",
                  "Thermal stress coupling",
                ],
              },
              {
                title: "CFD Basics",
                points: [
                  "Fluid flow fundamentals",
                  "Boundary conditions",
                  "Flow visualization & results",
                ],
              },
              {
                title: "Industry Tools",
                points: [
                  "ANSYS Workbench",
                  "HyperMesh basics",
                  "Post-processing techniques",
                ],
              },
              {
                title: "Professional Skills",
                points: [
                  "Simulation report writing",
                  "Engineering decision-making",
                  "Industry project workflow",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl text-black p-6"
              >
                <h3 className="font-semibold text-lg mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

export default CAE;
