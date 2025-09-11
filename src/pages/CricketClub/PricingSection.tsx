import React from "react";

interface Plan {
  title: string;
  price: string;
  desc: string;
}

const plans: Plan[] = [
  {
    title: "FULL FAMILY MEMBERSHIP",
    price: "$399",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
  {
    title: "FULL ADULT MEMBERSHIP",
    price: "$275",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
  {
    title: "DUAL (ADULT) MEMBERSHIP",
    price: "$250",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
  {
    title: "COURTS ONLY FAMILY MEMBERSHIP",
    price: "$350",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
  {
    title: "STUDENTS’ MEMBERSHIP",
    price: "$200",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
  {
    title: "JUNIOR PLAYER MEMBERSHIP",
    price: "$150",
    desc: "At vero eos et accusam et justo duo dolores.",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="mx-auto py-16 px-20 max-w-7xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-wide text-gray-500 text-lg font-semibold">
          About Us
        </p>
        <h2 className="text-3xl md:text-6xl font-semibold mt-2">
          Our Flexible Pricing Plan
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-x-14 gap-y-8">
        {plans.map((plan, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <span className="font-bold text-2xl">{plan.price}</span>
            </div>
            <p className="text-gray-500 text-lg font-sans mt-1">{plan.desc}</p>
            {/* dotted line */}
            <div className="border-b border-dotted border-gray-300 my-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
