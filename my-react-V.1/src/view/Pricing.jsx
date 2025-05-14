import { useInView } from "react-intersection-observer";

function Pricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const plans = [
    {
      name: "Basic",
      price: "$9",
      features: ["1 User", "5 Projects", "Basic Support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      features: [
        "5 Users",
        "Unlimited Projects",
        "Priority Support",
        "Analytics",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: [
        "Unlimited Users",
        "Custom Solutions",
        "24/7 Support",
        "Dedicated Manager",
      ],
      highlighted: false,
    },
  ];
  return (
    <section
      ref={ref}
      className={`py-16 bg-gray-100 transition-opacity duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md ${
                plan.highlighted ? "border-2 border-blue-500 relative" : ""
              } hover:shadow-lg transition transform hover:-translate-y-1`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price}
                <span className="text-base font-normal text-gray-600">
                  /month
                </span>
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">
                    ✔ {feature}
                  </li>
                ))}
              </ul>
              <div className="px-2 ">
                <button
                  onClick={() => alert(`Selected ${plan.name} plan`)}
                  className={`w-full py-3 rounded-full font-semibold transition ${
                    plan.highlighted
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
