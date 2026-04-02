import { Link } from "react-router-dom";
import course1 from "../../assets/courses/course1.jpeg";
import course2 from "../../assets/courses/course2.jpeg";
import course3 from "../../assets/courses/course3.jpeg";
import course4 from "../../assets/courses/course4.jpeg";
import course5 from "../../assets/courses/course5.jpeg";

const categories = [
  {
    title: "Design & Modeling Courses",
    description: "Build design output that teams can manufacture: 2D drafting, 3D modeling, assemblies, and graphics.",
    courses: [
      { title: "Graphics Design", img: course1, path: "/courses/graphics" },
      { title: "3D Design & Character Modelling", img: course2, path: "/courses/3d" },
      { title: "CAD Course", img: course5, path: "/courses/cad" },
    ]
  },
  {
    title: "CAE Simulation & Physics",
    description: "Validate before you build. This track covers FEA and simulation workflows used in CAE and R&D teams.",
    courses: [
      { title: "CAE Course", img: course3, path: "/courses/cae" },
      { title: "Physics of Design", img: course4, path: "/courses/physics" },
    ]
  }
];

const CourseTracks = () => {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center justify-center uppercase tracking-widest text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-full mb-6">
            COURSES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2a073f]">
            Building careers together
          </h2>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx} className="border-t border-gray-200 pt-16 first:border-0 first:pt-0">
              <div className="mb-10 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {category.courses.map((course, cIdx) => (
                  <Link 
                    key={cIdx} 
                    to={course.path}
                    className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full sm:w-[340px] lg:w-[320px] xl:w-[300px]"
                  >
                    <div className="h-44 sm:h-48 overflow-hidden relative">
                      {/* Using mock bg if img fails to load, but we have imports */}
                      <img 
                        src={course.img} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white font-medium">View Course →</span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                        {course.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseTracks;
