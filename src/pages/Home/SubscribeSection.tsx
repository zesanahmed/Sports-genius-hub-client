import img from "../../assets/sports/subscribe.jpg";
import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail("");
    } catch (error) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <section className="flex flex-col md:flex-row w-full gap-10 px-20 bg-white">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img src={img} alt="Subscribe" className="w-full h-full object-cover" />
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          SUBSCRIBE FOR THE
        </h2>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">UPDATES!</h2>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full border-b-2 p-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" required />
            <span>
              I agree to the{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button type="submit" className="btn-primary uppercase">
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </section>
  );
};

export default SubscribeSection;
