import React, { useState } from "react";
import axios from "axios";

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
        <p className="uppercase tracking-wide text-gray-500 text-sm">
          Contact Us
        </p>
        <h2 className="text-3xl font-bold mt-2 mb-4">
          Have Questions? <br /> Get in Touch!
        </h2>
        <p className="text-gray-500 mb-6">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
        <ul className="space-y-4">
          <li>📍 11792 London Rd, Derby, OH 43117</li>
          <li>📞 +1 800 555 45 65</li>
          <li>✉️ info@email.com</li>
        </ul>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded shadow"
          >
            ✈️ Get in Touch
          </button>
          <span className="text-sm text-gray-500">{status}</span>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
