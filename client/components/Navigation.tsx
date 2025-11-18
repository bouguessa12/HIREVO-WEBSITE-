import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c37addd26b77fa4b10537e8af4a8dd3e1531c0ca?width=182" 
              alt="HIREVO Logo" 
              className="h-10 w-10 sm:h-14 sm:w-14"
            />
            <span className="text-white font-inter font-extrabold text-2xl sm:text-3xl tracking-tight">
              HIREVO
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white font-clash font-semibold text-lg tracking-wide hover:text-primary-purple transition-colors">
              Homepage
            </Link>
            <a href="#features" className="text-white font-clash text-lg tracking-wide hover:text-primary-purple transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-white font-clash text-lg tracking-wide hover:text-primary-purple transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-white font-clash text-lg tracking-wide hover:text-primary-purple transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-white font-clash text-lg tracking-wide hover:text-primary-purple transition-colors">
              Blog
            </a>
          </div>

          <Link to="/signup" className="hidden md:inline-flex">
            <button className="items-center justify-center h-12 px-7 bg-primary-purple hover:bg-purple-dark text-white font-inter font-extrabold text-lg rounded-lg transition-all duration-200 hover:scale-105">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
