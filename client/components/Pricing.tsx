export default function Pricing() {
  const plans = [
    {
      name: "STARTUP",
      price: "$0",
      features: [
        "Early access for small teams",
        "Up to 5 active roles",
        "Up to 5,000 candidates indexed",
        "Core semantic matching engine",
        "Basic reporting dashboard",
        "Email support"
      ]
    },
    {
      name: "GROWTH",
      price: "$99",
      popular: true,
      features: [
        "For scaling startups and agencies",
        "Unlimited active roles",
        "Up to 100,000 candidates indexed",
        "Two‑stage retrieval + ranking pipeline",
        "AI Web Scanner for public profiles",
        "Auto‑CV generation from LinkedIn/GitHub",
        "Fair‑Match Engine configuration",
        "Priority support"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      features: [
        "On‑prem or VPC deployment",
        "Custom data connectors and ATS integration",
        "Dedicated models for your hiring domain",
        "Advanced analytics & salary insights",
        "SLA-backed support & onboarding",
        "Security and compliance reviews"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative bg-navy/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white font-clash font-semibold text-6xl mb-6">
            Pricing Plans
          </h2>
          <p className="text-white/75 font-dm text-base max-w-lg mx-auto mb-8">
            HireEvo AI is designed to be cost‑effective: near‑zero cost per search with custom models trained for software and IT hiring.
          </p>
          
          <div className="inline-flex rounded-lg border border-silver bg-white p-1">
            <button className="px-7 py-3 bg-purple-dark text-white font-dm font-bold text-sm rounded-lg">
              Monthly
            </button>
            <button className="px-7 py-3 text-grey font-dm font-bold text-sm hover:text-purple-dark">
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border border-silver bg-dark-bg p-8 ${
                plan.popular ? 'md:-mt-8 bg-purple-dark border-none' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-soft-yellow border-8 border-white">
                  <span className="text-[#313131] font-dm font-bold text-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="text-white/50 font-dm font-bold text-sm mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-dm font-bold text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-white font-dm font-medium text-lg">
                    /month
                  </span>
                </div>
              </div>

              <div className="h-px bg-white/20 mb-6" />

              <ul className="space-y-5 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-white/20' : 'bg-purple-dark'}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white font-dm text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full h-12 rounded-lg font-dm font-bold text-base transition-all ${
                plan.popular
                  ? 'bg-white text-[#2A85FF] hover:bg-gray-100'
                  : 'bg-soft-grey text-purple-dark hover:bg-white'
              }`}>
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
