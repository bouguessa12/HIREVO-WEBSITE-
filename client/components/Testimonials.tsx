export default function Testimonials() {
  const testimonials = [
    {
      name: "Amine B.",
      role: "Head of Talent, SaaS Startup",
      text:
        "With HireEvo AI, we can shortlist the right software engineers in seconds instead of days. The semantic matching understands our tech stack and seniority levels better than any keyword tool we’ve used.",
      rating: 5,
      highlighted: false
    },
    {
      name: "Sara L.",
      role: "Recruiter, Remote-first Company",
      text:
        "The two‑stage AI pipeline gives us fast lists of candidates and still feels incredibly accurate. Our time‑to‑screen dropped dramatically once we started using HireEvo for our IT roles.",
      rating: 5,
      highlighted: true,
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/cc6721e97b8f7abba6d8e598b1486289dfb84e80?width=82"
    },
    {
      name: "Yacine D.",
      role: "Full‑Stack Engineer",
      text:
        "Instead of sending CVs into a black hole, HireEvo actually understands my experience and suggests roles that make sense. The Auto‑CV feature built a clean profile for me from my GitHub and LinkedIn.",
      rating: 5,
      highlighted: false,
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fc195addca532eb31fb5672492d0b451f46cccd1?width=82"
    },
    {
      name: "Imane K.",
      role: "People Ops Lead",
      text:
        "What I love about HireEvo is the focus on skills and experience instead of bias‑prone signals. It helps us argue for fair, data‑driven decisions when we work with hiring managers.",
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
          What people are saying about HireEvo AI
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
