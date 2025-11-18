import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-white font-clash font-bold text-8xl mb-4">404</h1>
        <h2 className="text-white font-clash font-semibold text-3xl mb-6">
          Page Not Found
        </h2>
        <p className="text-white/75 font-poppins text-lg mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center h-12 px-8 bg-primary-purple hover:bg-purple-dark text-white font-inter font-bold text-lg rounded-lg transition-all duration-200 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
