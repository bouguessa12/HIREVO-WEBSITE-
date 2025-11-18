export default function FAQ() {
  const faqs = [
    {
      question: "What types of software do you support?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website."
    },
    {
      question: "Can you install software for me?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding."
    },
    {
      question: "How do I request help if I have a software issue?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding."
    },
    {
      question: "Do you assist with software updates?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding. with Omega that converts more visitors than any website."
    },
    {
      question: "Do you provide remote assistance?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding."
    },
    {
      question: "What if my problem is urgent?",
      answer: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding."
    }
  ];

  return (
    <section className="relative bg-navy/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white font-clash font-semibold text-5xl lg:text-6xl mb-6">
            Frequently Asked Question
          </h2>
          <p className="text-white/75 font-open text-xl">
            Create custom landing pages with Omega that converts.
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
