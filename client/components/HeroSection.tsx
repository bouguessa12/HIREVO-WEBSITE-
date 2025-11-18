import { Link } from "react-router-dom";
import HeroImage from "../../DESIGN/full hero image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden pt-20">
      {/* Blur effects */}
  {/* Decorative blur blobs - hidden on small screens to avoid overflow */}
  <div className="hidden md:block absolute -left-32 top-44 w-72 h-72 md:w-96 md:h-96 bg-primary-blue rounded-full opacity-50 blur-[120px]" />
  <div className="hidden lg:block absolute left-52 top-[520px] w-72 h-72 lg:w-[427px] lg:h-[427px] bg-purple-500 rounded-full blur-[120px]" />
  <div className="hidden xl:block absolute left-[740px] top-[602px] w-80 h-80 xl:w-[534px] xl:h-[534px] bg-primary-blue rounded-full blur-[120px]" />
      
      {/* Decorative dots */}
  <div className="hidden lg:block absolute left-20 top-[1602px] w-48 h-48 opacity-60">
        <svg width="187" height="187" viewBox="0 0 187 187" fill="none">
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 8 }).map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={2.17 + i * 26.09}
                cy={2.17 + j * 26.09}
                r="2.17"
                fill="white"
                fillOpacity="0.62"
              />
            ))
          )}
        </svg>
      </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main content */}
        <div className="text-center pt-16 lg:pt-24">
          <p className="text-[#EBEBEB] font-poppins text-xl mb-12">
            Next gen evolution of hiring !
          </p>
          
          <h1 className="text-white font-inter font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-12 capitalize">
            Integrate AI To connects people with companies faster and smarter.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Link to="/signup" className="inline-flex">
              <button className="inline-flex items-center justify-center h-12 px-10 bg-primary-purple hover:bg-purple-dark text-white font-inter font-extrabold text-lg rounded-lg transition-all duration-200 hover:scale-105">
                Join Now
              </button>
            </Link>
            <button className="inline-flex items-center justify-center h-12 px-10 border border-white text-white font-clash font-semibold text-base rounded-lg hover:bg-white/10 transition-all duration-200">
              Know More
            </button>
          </div>
        </div>

        {/* Hero preview image */}
        <div className="relative mt-8 lg:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-[30px] overflow-hidden">
            <img 
              src={HeroImage}
              alt="HIREVO Hero"
              className="w-full h-auto"
            />
          </div>
          
          {/* Stats overlay - stack under the image on small screens */}
          <div className="md:absolute md:-bottom-8 md:right-12 relative mt-6 md:mt-0 bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto md:mx-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/5 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.94 13.27C9.26 14.29 8.32 15.12 7.22 15.67C7.12 15.72 7 15.75 6.89 15.75C6.61 15.75 6.35 15.6 6.22 15.34C6.03 14.97 6.18 14.52 6.56 14.33C7.43 13.9 8.17 13.24 8.7 12.44C8.88 12.17 8.88 11.83 8.7 11.56C8.16 10.76 7.42 10.1 6.56 9.67C6.18 9.49 6.03 9.04 6.22 8.66C6.4 8.29 6.85 8.14 7.22 8.33C8.32 8.88 9.26 9.71 9.94 10.73C10.46 11.5 10.46 12.5 9.94 13.27ZM17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill="#236BFE"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-bold text-lg text-[#0A1E40] mb-1">
                  Hirevo Utilization
                </h3>
                <p className="text-sm text-[#0A1E40]/50 font-poppins mb-4">
                  24 Data available
                </p>
                <button className="w-full h-11 bg-[#236BFE] text-white font-poppins font-medium text-sm rounded hover:bg-blue-600 transition-colors">
                  Analysis Now
                </button>
              </div>
            </div>
          </div>
        </div>

          {/* Scrolling banner */}
        <div className="mt-32 overflow-hidden bg-primary-purple py-6">
          <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="text-white font-clash font-bold text-3xl tracking-wide">
                Join The Waitlist
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
