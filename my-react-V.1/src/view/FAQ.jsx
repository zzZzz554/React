import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is included in the Basic plan?',
      answer: 'The Basic plan includes access for 1 user, up to 5 projects, and basic support.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 14-day free trial for the Pro plan. No credit card required!',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      ref={ref}
      className={`py-16 bg-white transition-opacity duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-2xl text-gray-600">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 animate-fade-in">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
