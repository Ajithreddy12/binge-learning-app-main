import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Back to top button */}
        <div className="flex justify-start -mt-28 mb-10 pb-4 border-b border-gray-800">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center text-xl shadow-lg transition"
          >
            ↑
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Career Paths */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Career Paths</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/login" className="hover:text-yellow-500 transition">Login</Link></li>
              <li><Link to="/courses" className="hover:text-yellow-500 transition">All Courses</Link></li>
              <li><Link to="/cad" className="hover:text-yellow-500 transition">CAD Path</Link></li>
              <li><Link to="/simulation" className="hover:text-yellow-500 transition">FEA/CAE Path</Link></li>
              <li><Link to="/industry4" className="hover:text-yellow-500 transition">Industry 4.0 Path</Link></li>
              <li><Link to="/metrology" className="hover:text-yellow-500 transition">Metrology Path</Link></li>
              <li><Link to="/free-courses" className="hover:text-yellow-500 transition">Free Course</Link></li>
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Tools</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/paths" className="hover:text-yellow-500 transition">Career Paths</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-500 transition">Blog</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-500 transition">Projects</Link></li>
              <li><Link to="/interviews" className="hover:text-yellow-500 transition">300+ Interview Q&A</Link></li>
              <li><Link to="/notes" className="hover:text-yellow-500 transition">Notes Library</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
              <li><Link to="/#pricing" className="hover:text-yellow-500 transition">Pricing</Link></li>
              <li><Link to="/business" className="hover:text-yellow-500 transition">Business Plan</Link></li>
              <li><Link to="/#faqs" className="hover:text-yellow-500 transition">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-500 transition">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Social Media</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <span className="font-bold">in</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaDiscord /> Discord
                </a>
              </li>
              <li>
                <a href="https://wa.me/918707493336" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-yellow-500 transition">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm leading-relaxed max-w-3xl">
          <p className="mb-4">
            Binge Learning – Strategic learning and career-focused training helping students build real-world skills and professional confidence.
          </p>
          <p>
            © 2026 Binge Learning. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
