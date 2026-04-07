import Hero from "../../components/home/Hero";
import WhyBinge from "../../components/home/WhyBinge";
import CourseTracks from "../../components/home/CourseTracks";
import StudentWork from "../../components/home/StudentWork";

import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-[#2a073f] to-[#3b0a5f] text-white">
      <Hero />
      <WhyBinge />
      <CourseTracks />
      <StudentWork />

      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
