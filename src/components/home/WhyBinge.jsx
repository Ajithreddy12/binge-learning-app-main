const features = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "Learn from industry professionals with real-world experience.",
  },
  {
    icon: "💼",
    title: "Internship with Live Projects",
    desc: "Hands-on training with real client-based projects.",
  },
  {
    icon: "🎯",
    title: "Job Ready Courses",
    desc: "Curriculum designed to make you placement-ready.",
  },
  {
    icon: "📺",
    title: "Live Classes",
    desc: "Interactive live sessions with doubt-solving support.",
  },
  {
    icon: "🔧",
    title: "Practical Learning",
    desc: "Focus on tools, workflows, and real industry skills.",
  },
];

const WhyBinge = () => {
  return (
    <section className="py-24 bg-white text-black border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="mb-16 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center uppercase tracking-widest text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-full mb-6">
            WHY BINGE LEARNING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a073f]">
            Excellence in every aspect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#3b82f6] text-2xl rounded-lg flex items-center justify-center border border-blue-100 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900 mb-2">{item.title}</h4>
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
