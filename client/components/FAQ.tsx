export default function FAQ() {
  const faqs = [
    {
      question: "What is HireEvo AI?",
      answer:
        "HireEvo AI is a custom-built, two-stage machine learning system that understands the meaning of job descriptions and candidate profiles. It goes beyond keywords to match based on real skills, experience, and role fit for software and IT hiring."
    },
    {
      question: "How is HireEvo AI different from traditional keyword search?",
      answer:
        "Traditional tools mostly count overlapping keywords. HireEvo AI uses semantic embeddings (MiniLM) and a cross-encoder ranking model to understand context—like backend vs frontend experience, seniority, and tech stacks—so it can surface truly relevant candidates, not just keyword matches."
    },
    {
      question: "How accurate and fast is the matching?",
      answer:
        "On a real-world test set of 240 software/IT job–candidate pairs, HireEvo AI achieves 78.6% top‑1 accuracy compared to about 34% for keyword search. Thanks to the two‑stage pipeline, it returns results in around 80 ms end‑to‑end, even when searching tens of thousands of candidates."
    },
    {
      question: "What data was HireEvo AI trained on?",
      answer:
        "HireEvo AI is fine‑tuned on 1,200 real job–candidate pairs from software and IT roles: backend, frontend, mobile, ML, DevOps, and QA across all levels from intern to lead, and across regions (North America, EMEA, APAC, LATAM). Each pair has a human‑labeled match score between 0.0 and 1.0."
    },
    {
      question: "How does HireEvo AI stay fair and reduce bias?",
      answer:
        "The Fair‑Match Engine focuses on skills and experience instead of proxies like gender, age, or exact location. The models are optimized around job relevance scores, not demographic attributes, so startups can focus on who can actually do the work."
    },
    {
      question: "Do I need GPUs or expensive APIs to run it?",
      answer:
        "No. The current system was trained and optimized on an Intel Core i7 CPU and is designed to run without a GPU. After deployment, searches cost essentially zero per query, unlike commercial APIs that typically charge per call."
    }
  ];

  return (
    <section className="relative bg-navy/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white font-clash font-semibold text-5xl lg:text-6xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-white/75 font-open text-xl">
            Learn how HireEvo AI’s custom ML engine transforms hiring for startups and candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-white font-open font-extrabold text-xl lg:text-2xl mb-4">
                {faq.question}
              </h3>
              <p className="text-white/75 font-open text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/75 font-open text-base">
          Didn't find your answer?{" "}
          <a href="#contact" className="text-purple-dark hover:underline">
            Contact us here
          </a>
        </p>
      </div>
    </section>
  );
}
