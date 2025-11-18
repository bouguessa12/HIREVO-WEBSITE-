import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />

      <main className="relative pt-28 pb-24">
        {/* Background blobs */}
        <div className="hidden lg:block absolute -left-40 top-40 w-80 h-80 bg-primary-blue rounded-full blur-[140px] opacity-40 animate-blob-1" />
        <div className="hidden xl:block absolute right-[-120px] top-20 w-[420px] h-[420px] bg-purple-500 rounded-full blur-[180px] opacity-60 animate-blob-2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <section className="grid lg:grid-cols-[1.1fr,1fr] gap-16 items-start">
            {/* Copy */}
            <div>
              <p className="text-primary-blue font-poppins text-sm tracking-[0.3em] mb-4 uppercase">
                Contact
              </p>
              <h1 className="text-white font-clash font-semibold text-4xl lg:text-5xl leading-tight mb-6">
                Talk to us about the next evolution of hiring.
              </h1>
              <p className="text-white/70 font-open text-lg leading-relaxed mb-8">
                Whether you're a startup trying to fill critical software roles or a candidate
                looking for a fair way to be discovered, HireEvo AI is built to reduce the noise
                and focus on skills, experience, and real job fit.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h2 className="text-white font-poppins font-semibold mb-1">
                    For startups & teams
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    See how our two‑stage ML pipeline can plug into your existing hiring flow and
                    help you shortlist engineers in milliseconds.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h2 className="text-white font-poppins font-semibold mb-1">
                    For candidates
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Join the waitlist to be matched to roles based on your actual experience,
                    GitHub, and projects – not just keywords on a CV.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-white/75 text-sm font-open">
                <p>
                  <span className="font-semibold text-white">Email</span>:{" "}
                  <a
                    href="mailto:hello@hireevo.ai"
                    className="text-soft-yellow hover:underline"
                  >
                    hello@hireevo.ai
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Region focus</span>: Algeria, EMEA & global remote‑friendly startups
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-blue/60 via-purple-500/60 to-soft-yellow/60 rounded-3xl opacity-70 blur-2xl" />
              <div className="relative rounded-3xl bg-[#050B1F]/90 border border-white/10 p-6 sm:p-8">
                <h2 className="text-white font-clash font-semibold text-2xl mb-2">
                  Send us a message
                </h2>
                <p className="text-white/70 text-sm mb-6">
                  Share a bit about your hiring needs or your profile. We’ll get back to you soon.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent (placeholder).");
                  }}
                >
                  <div className="space-y-1">
                    <label className="block text-sm text-white/80 font-medium">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/70"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm text-white/80 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/70"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm text-white/80 font-medium">
                      I’m contacting you as a
                    </label>
                    <select
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-blue/70"
                      defaultValue="startup"
                    >
                      <option value="startup">Startup / Hiring team</option>
                      <option value="candidate">Candidate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm text-white/80 font-medium">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/70"
                      placeholder="Tell us about your hiring challenges or profile..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-purple px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-dark transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


