import { useState } from "react";

const faqs = [
  { question: "What exactly is Binge Learning?", answer: "Binge Learning is a platform designed to provide comprehensive tools and knowledge for engineering and design students." },
  { question: "Who are these courses for?", answer: "Our courses are recommended for students, freshers, and early-career professionals looking to upskill." },
  { question: "Are the classes live or recorded?", answer: "We offer both live interactive sessions and pre-recorded self-paced videos." },
  { question: "What happens if I don't understand something?", answer: "We have dedicated doubt-solving sessions and technical support for our students." },
  { question: "Is special software required?", answer: "Some courses might require standard industry software like AutoCAD, SolidWorks, or ANSYS. Details will be in each course." },
  { question: "Will I get a certificate when I finish?", answer: "Yes, every completed course includes an industry-recognized certificate of completion." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section className="py-24 bg-gray-50" id="faqs">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2a073f] mb-4">
            Common FAQs
          </h2>
          <p className="text-gray-600 text-lg">
            Still Have Questions?{" "}
            <a href="/contact" className="text-[#3b82f6] hover:underline font-medium">
              Contact Us
            </a>
            , We are happy to help you.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300"
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <span className={`text-2xl text-[#3b82f6] transition-transform duration-300 ${openIdx === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIdx === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
