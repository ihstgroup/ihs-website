import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">International House of Sciences</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-2">Empowering minds through innovative education</p>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              <strong>Location:</strong> Berges du Lac, Tunis
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-2">
              <strong>Hours:</strong> Open 7 Days a Week, 10 AM - 8 PM
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              <strong>Phone:</strong> +216 24 225 975
            </p>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                "Online Learning Platforms",
                "Language Tutoring",
                "Science Tutoring",
                "Math Tutoring",
                "Technology Tutoring",
              ].map((program) => (
                <li key={program}>
                  <Link
                    href={`/programs#${program.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Home", "About Us", "Contact Us", "Careers", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Stay updated with our latest news and offers. Follow us on social media:
            </p>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Facebook, name: "Facebook" },
                { icon: Instagram, name: "Instagram" },
                { icon: Twitter, name: "Twitter" },
                { icon: Linkedin, name: "LinkedIn" },
              ].map(({ icon: Icon, name }) => (
                <a key={name} href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                  <Icon size={24} />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-3 py-2 text-sm rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            &copy; {new Date().getFullYear()} International House of Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

