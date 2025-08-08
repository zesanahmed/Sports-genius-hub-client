import { Link } from "react-router-dom";

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
};

const MembershipCard = ({
  title,
  subtitle,
  price,
  period,
  features,
  buttonText,
}: PricingCardProps) => {
  return (
    <div className="border shadow-md px-6 py-16 w-64 text-center bg-white">
      <h3 className="text-3xl font-semibold text-black mb-1">{title}</h3>
      <p className="text-lg text-gray-500 font-sans mb-4">{subtitle}</p>

      <div className="text-black mb-4">
        <span className="text-2xl font-semibold align-top">$</span>
        <span className="text-6xl font-semibold">{price}</span>
        <span className="text-md font-sans font-medium text-gray-500">
          /{period}
        </span>
      </div>

      <ul className="text-gray-500 mb-10 space-y-3 font-sans text-md">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <Link to="/membership">
        <button className="btn-primary">{buttonText}</button>
      </Link>
    </div>
  );
};

export default MembershipCard;
