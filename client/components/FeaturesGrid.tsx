export default function FeaturesGrid() {
  const features = [
    {
      icon: "🔒",
      title: "Trusted And Accurate",
      description: "Automatically verifies identities and credentials to ensure only qualified and trustworthy candidates proceed."
    },
    {
      icon: "👔",
      title: "Professional Screening",
      description: "Advanced filters match candidates with roles based on skills, experience, and cultural fit."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Real-time insights and metrics help you make data-driven hiring decisions with confidence."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Streamlined processes reduce time-to-hire and get quality candidates in front of you faster."
    },
    {
      icon: "🎯",
      title: "Precision Matching",
      description: "AI-powered algorithms ensure the best candidate-job matches for optimal outcomes."
    },
    {
      icon: "🛡️",
      title: "Secure & Compliant",
      description: "Enterprise-grade security and compliance with global hiring standards and regulations."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/3960dd3dff581b3f954930191abd307258a93af6?width=2347"
            alt="Features Overview"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
