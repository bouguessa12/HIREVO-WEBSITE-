import activity from "../../DESIGN/new activity.png";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.9996 32.3996C25.9525 32.3996 32.3996 25.9525 32.3996 17.9996C32.3996 10.0467 25.9525 3.59961 17.9996 3.59961C10.0467 3.59961 3.59961 10.0467 3.59961 17.9996C3.59961 25.9525 10.0467 32.3996 17.9996 32.3996ZM24.6724 15.6724C25.3753 14.9695 25.3753 13.8298 24.6724 13.1268C23.9695 12.4239 22.8298 12.4239 22.1268 13.1268L16.1996 19.054L13.8724 16.7268C13.1695 16.0239 12.0298 16.0239 11.3268 16.7268C10.6239 17.4298 10.6239 18.5695 11.3268 19.2724L14.9268 22.8724C15.6298 23.5753 16.7695 23.5753 17.4724 22.8724L24.6724 15.6724Z" fill="white"/>
        </svg>
      ),
      title: "Smart CV Analysis",
      description: "Extracts key information and checks for clean, professional formatting."
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.20039 7.19961C7.20039 5.21138 8.81217 3.59961 10.8004 3.59961H25.2004C27.1886 3.59961 28.8004 5.21138 28.8004 7.19961V28.7996C29.7945 28.7996 30.6004 29.6055 30.6004 30.5996C30.6004 31.5937 29.7945 32.3996 28.8004 32.3996H22.6004C22.0481 32.3996 21.6004 31.9519 21.6004 31.3996V26.9996C21.6004 26.0055 20.7945 25.1996 19.8004 25.1996H16.2004C15.2063 25.1996 14.4004 26.0055 14.4004 26.9996V31.3996C14.4004 31.9519 13.9527 32.3996 13.4004 32.3996H7.20039C6.20628 32.3996 5.40039 31.5937 5.40039 30.5996C5.40039 29.6055 6.20628 28.7996 7.20039 28.7996V7.19961ZM12.6004 8.99961H16.2004V12.5996H12.6004V8.99961ZM16.2004 16.1996H12.6004V19.7996H16.2004V16.1996ZM19.8004 8.99961H23.4004V12.5996H19.8004V8.99961ZM23.4004 16.1996H19.8004V19.7996H23.4004V16.1996Z" fill="white"/>
        </svg>
      ),
      title: "AI Suitability Scoring",
      description: "Calculates a score based on how well the candidate fits the job."
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.8016 10.8016V9.00156C10.8016 6.01922 13.2192 3.60156 16.2016 3.60156H19.8016C22.7839 3.60156 25.2016 6.01923 25.2016 9.00156V10.8016H28.8016C30.7898 10.8016 32.4016 12.4133 32.4016 14.4016V20.8289C27.9189 22.4921 23.0684 23.4015 18.0016 23.4015C12.9348 23.4015 8.08422 22.4921 3.60156 20.8289V14.4016C3.60156 12.4133 5.21334 10.8016 7.20156 10.8016H10.8016ZM14.4016 9.00156C14.4016 8.00745 15.2075 7.20156 16.2016 7.20156H19.8016C20.7957 7.20156 21.6016 8.00745 21.6016 9.00156V10.8016H14.4016V9.00156ZM16.2016 18.0016C16.2016 17.0075 17.0075 16.2016 18.0016 16.2016H18.0196C19.0137 16.2016 19.8196 17.0075 19.8196 18.0016C19.8196 18.9957 19.0137 19.8016 18.0196 19.8016H18.0016C17.0075 19.8016 16.2016 18.9957 16.2016 18.0016Z" fill="white"/>
          <path d="M3.60156 24.6476V28.8016C3.60156 30.7898 5.21334 32.4016 7.20156 32.4016H28.8016C30.7898 32.4016 32.4016 30.7898 32.4016 28.8016V24.6477C27.8786 26.1744 23.0351 27.0015 18.0016 27.0015C12.9681 27.0015 8.12459 26.1744 3.60156 24.6476Z" fill="white"/>
        </svg>
      ),
      title: "Profile Analysis",
      description: "Reviews online profiles to gauge skills and experience."
    }
  ];

  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img 
              src={activity}
              alt="Analysis Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-white font-clash font-semibold text-4xl lg:text-5xl leading-tight mb-12 capitalize">
              help you find the best analysis for your business
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-purple flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-poppins text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/75 font-poppins text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
