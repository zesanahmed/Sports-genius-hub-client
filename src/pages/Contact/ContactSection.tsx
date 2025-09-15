import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", form);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
      {/* Left Info */}
      <div>
        <p className="uppercase tracking-wide text-black font-sans text-md font-semibold">
          Contact Us
        </p>
        <h2 className="text-6xl font-semibold mt-2 mb-5">
          Have Questions? <br /> Get in Touch!
        </h2>
        <p className="text-gray-500 font-sans text-lg mb-7">
          We're here to help and answer any questions you might have. We look
          forward to hearing from you!
        </p>
        <ul className="space-y-5 text-lg font-sans">
          <li className="flex items-center gap-5">
            <FaLocationArrow className="text-blue-500/90" /> Dhaka, Bangladesh
          </li>
          <li className="flex items-center gap-5">
            <FaPhone className="text-blue-500/90" /> +880 1954500994
          </li>
          <li className="flex items-center gap-5">
            <FaEnvelope className="text-blue-500/90" /> zesanahmed593@gmail.com
          </li>
        </ul>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-sans"
      >
        <input
          className="border-b border-gray-300 focus:outline-none p-2"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border-b border-gray-300 focus:outline-none p-2"
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="border-b border-gray-300 focus:outline-none p-2"
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="border-b border-gray-300 focus:outline-none p-2"
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          className="border-b border-gray-300 focus:outline-none p-2 md:col-span-2"
          name="message"
          placeholder="How can we help you? Feel free to get in touch!"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <div className="md:col-span-2 flex items-center gap-4">
          <button type="submit" className="btn-primary flex items-center gap-2">
            <FaPaperPlane /> Get in Touch
          </button>
          <span className="text-sm text-gray-500">{status}</span>
        </div>
        <div className="flex items-center md:col-span-2 space-x-2">
          <input
            type="checkbox"
            id="consent"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="consent" className="text-sm text-black ">
            I agree that my data is collected and stored.
          </label>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
