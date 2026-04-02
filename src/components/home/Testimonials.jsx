const testimonials = [
  {
    quote: "Binge Learning has been a turning point in my career. The mentors made learning easy and effective!",
    name: "Pooja Bisht",
    course: "Graphic Design",
  },
  {
    quote: "Joining Binge Learning was the best decision I made. The practical style improved my creativity.",
    name: "Subham Sinha",
    course: "CAD Course",
  },
  {
    quote: "Personal attention and guidance made me confident to build my design career.",
    name: "Sourya Jain",
    course: "3D Design",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2a073f] mb-4">
            What Our Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition shadow-sm">
              <div className="flex gap-1 mb-6">
                {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400 text-xl">{star}</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{test.quote}"
              </p>
              <div className="mt-auto border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900 text-lg">{test.name}</p>
                <p className="text-[#3b82f6] font-medium">{test.course}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
