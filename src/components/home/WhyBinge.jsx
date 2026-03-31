const features = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "Learn from industry professionals with real-world experience. Every topic is taught with practical steps so you can apply it directly to real projects.",
  },
  {
    icon: "💼",
    title: "Internships & Live Projects",
    desc: "Every track includes hands-on learning projects so you practice like a working engineer, ending up with output you can show in interviews.",
  },
  {
    icon: "🎯",
    title: "Job Ready Courses",
    desc: "Curriculum designed to make you placement-ready. We bridge the gap between academic theory and the skills companies actually need.",
  },
  {
    icon: "📺",
    title: "Beginner-Friendly Live Classes",
    desc: "Short video lessons, live interactive sessions, and quick quizzes, so you don't get lost halfway and always know what to learn next.",
  },
];

const WhyBinge = () => {
  return (
    <section className="py-24 bg-white text-black border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="mb-16 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center uppercase tracking-widest text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-full mb-6">
            Why Binge Learning?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a073f]">
            Learn the Essential Skills
          </h2>
          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            One comprehensive bundle of Design, 3D, and Engineering Courses 
            so you learn what's actually used in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-start"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#3b82f6] text-2xl rounded-lg flex items-center justify-center border border-blue-100 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyBinge;
