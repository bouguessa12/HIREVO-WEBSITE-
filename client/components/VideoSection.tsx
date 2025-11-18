export default function VideoSection() {
  return (
    <section className="relative bg-navy/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-white font-clash font-semibold text-5xl lg:text-6xl leading-tight mb-6">
          Why Orinix would be your best fit?
        </h2>
        
        <p className="text-white/75 font-poppins text-xl mb-12 max-w-3xl mx-auto">
          Watch this 1 min video to learn about Hirevo !
        </p>

        <div className="relative max-w-6xl mx-auto rounded-[30px] overflow-hidden shadow-2xl">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e856ab6365a4381a5b0047a71f95d254a0ba1928?width=2592"
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
          
          {/* Play button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-primary-purple flex items-center justify-center hover:scale-110 transition-transform group">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="ml-2">
              <path d="M15 10L30 20L15 30V10Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
