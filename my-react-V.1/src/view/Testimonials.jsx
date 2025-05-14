import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Anna S.",
      role: "Developer",
      quote:
        "This platform has transformed the way I work. Highly recommended!",
      image: "https://via.placeholder.com/64",
    },
    {
      name: "John D.",
      role: "Designer",
      quote: "The tools are intuitive and the support team is fantastic.",
      image: "https://via.placeholder.com/64",
    },
    {
      name: "Maria K.",
      role: "Entrepreneur",
      quote: "I scaled my business thanks to their amazing features.",
      image: "https://via.placeholder.com/64",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 bg-white transition-opacity duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src="{testimonial.image}"
                  alt="{testimonial.name}"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
