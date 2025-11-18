import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl bg-purple-dark p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white font-clash font-semibold text-4xl lg:text-5xl mb-6">
              Be part of the next evolution of hiring.
            </h2>
            <p className="text-white/75 font-redhat text-lg leading-relaxed mb-8">
              HireEvo AI combines semantic understanding, fast retrieval, and fair matching so startups and candidates meet faster,
              without wasting weeks on manual search.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-[#313131] font-redhat font-medium text-lg rounded-md hover:bg-gray-100 transition-colors">
                Join HireEvo waitlist
              </button>
              <Link to="/contact" className="inline-flex">
                <button className="px-8 py-4 border border-white text-white font-redhat font-medium text-lg rounded-md hover:bg-white/10 transition-colors">
                  Talk to us
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-[491px] h-[400px] hidden lg:block">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/01e147714a490df248ae587969baf34506da1f35?width=982"
              alt="Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
