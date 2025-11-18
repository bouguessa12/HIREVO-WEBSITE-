export default function Testimonials() {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Community",
      text: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
      rating: 5,
      highlighted: false
    },
    {
      name: "Leslie Alexander",
      role: "Community",
      text: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
      rating: 5,
      highlighted: true,
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/cc6721e97b8f7abba6d8e598b1486289dfb84e80?width=82"
    },
    {
      name: "Dianne Russell",
      role: "Community",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      rating: 5,
      highlighted: false,
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fc195addca532eb31fb5672492d0b451f46cccd1?width=82"
    },
    {
      name: "Darrell Steward",
      role: "Community",
      text: "Making your own mobile app is currently pretty easy for me. Thank you, with the aid of Circle assistive technologies!",
      rating: 5,
      highlighted: false,
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5eb4efb976a8c89664e3d34698c23b284dbb399a?width=82"
    }
  ];

  return (
    <section className="relative bg-navy/50 py-24 lg:py-32 overflow-hidden">
      {/* Blur effect */}
      <div className="absolute right-0 top-20 w-[493px] h-[361px] bg-white rounded-full opacity-30 blur-[171px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-white font-clash font-semibold text-5xl text-center mb-20">
          What people are saying about Circle
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full max-w-lg p-6 rounded-lg bg-[#151925] ${
                testimonial.highlighted ? 'border-2 border-purple-dark' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-white font-ibm font-medium text-base mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#9D9D9D] font-sans text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <p className="text-[#9D9D9D] font-ibm text-base leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {testimonial.highlighted && (
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12.0002 17L6.12223 20.59L7.72023 13.89L2.49023 9.41L9.35523 8.86L12.0002 2.5L14.6452 8.86L21.5112 9.41L16.2802 13.89L17.8782 20.59L12.0002 17Z" fill="#FFD964"/>
                    </svg>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
