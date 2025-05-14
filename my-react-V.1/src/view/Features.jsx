import { useInView } from "react-intersection-observer";

function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Experience lightning-fast load times and smooth interactions.",
    },
    {
      icon: "🔒",
      iconClass: "text-blue-500",
      title: "Secure Platform",
      description: "Your data is protected with top-tier security protocols.",
    },
    {
      icon: "🌐",
      iconClass: "text-green-500",
      title: "Global Access",
      description: "Access our platform from anywhere in the world.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-16 bg-gray-100 transition-opacity duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className={`text-4xl mb-4 ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
