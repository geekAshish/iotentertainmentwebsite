import { useState } from "react";

export default function LeadForm() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxm139UoywfHkLpPvnfHhapUB3tMkMsHmZIf71GNCKq-KZIfmsouoK5q8Ri0esrNdbRuA/exec";

  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    email: "",
    description: "",
    is_follow_up: "No",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("Success! Details saved.");
      setFormData({
        name: "",
        contact_number: "",
        email: "",
        description: "",
        is_follow_up: "No",
      });
    } catch {
      setStatus("Error submitting form.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="
        mx-auto
        w-full
        max-w-md
        sm:max-w-lg
        rounded-2xl
        border border-zinc-800
        bg-zinc-900
        p-5 sm:p-6 md:p-8
        shadow-xl
      ">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Get in Touch
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            Tell us about your project and we’ll reach out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="
                mt-1 w-full rounded-lg
                border border-zinc-700
                bg-zinc-800
                px-3 py-2.5
                text-white
                placeholder-zinc-500
                focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              "
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              required
              placeholder="+1 234 567 890"
              className="
                mt-1 w-full rounded-lg
                border border-zinc-700
                bg-zinc-800
                px-3 py-2.5
                text-white
                placeholder-zinc-500
                focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="
                mt-1 w-full rounded-lg
                border border-zinc-700
                bg-zinc-800
                px-3 py-2.5
                text-white
                placeholder-zinc-500
                focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              "
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your project..."
              className="
                mt-1 w-full rounded-lg
                border border-zinc-700
                bg-zinc-800
                px-3 py-2.5
                text-white
                placeholder-zinc-500
                focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-2 w-full
              rounded-lg
              bg-blue-600
              py-2.5
              text-sm font-medium text-white
              transition-colors
              hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            {status === "Submitting..." ? "Sending..." : "Submit"}
          </button>

          {status && (
            <p
              className={`text-center text-sm ${
                status.includes("Error")
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
