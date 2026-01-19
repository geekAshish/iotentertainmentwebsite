import { useState } from "react";
import video from '@/assets/iot-avatar-2-mp4 bg remove with green grass.webm';

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
    // Added min-h-screen and bg-zinc-950 for a full-page dark layout
    <div className="bg-zinc-950">
      <h2 id="contact-us" className="text-white text-center text-4xl md:text-6xl font-bold mb-5">Contact Us</h2>
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-2xl
          border border-zinc-800
          bg-zinc-900
          shadow-2xl
          md:flex-row
        "
      >
        {/* ==================== LEFT SIDE: VIDEO ==================== */}
        {/* Changed h-64 to h-56 for better mobile compactness, md:h-auto stretches it */}
        <div className="relative h-56 w-full shrink-0 md:h-auto md:w-1/2 lg:w-5/12">
          <video
            className="absolute inset-0 h-full w-full object-cover" // object-cover eliminates gaps
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />

          {/* Text Over Video */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h2 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl">
              Build with Us
            </h2>
            <p className="mt-1 text-sm text-zinc-100 drop-shadow-md sm:text-base">
              Let's create something amazing together.
            </p>
          </div>
        </div>

        {/* ==================== RIGHT SIDE: FORM ==================== */}
        <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-10 lg:w-7/12 lg:p-12">
          {/* Heading */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Get in Touch
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Tell us about your project and we’ll reach out.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  mt-1.5 w-full rounded-lg
                  border border-zinc-700
                  bg-zinc-800/50
                  px-4 py-2.5
                  text-white
                  placeholder-zinc-500
                  transition-all
                  focus:border-blue-500 focus:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500
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
                  mt-1.5 w-full rounded-lg
                  border border-zinc-700
                  bg-zinc-800/50
                  px-4 py-2.5
                  text-white
                  placeholder-zinc-500
                  transition-all
                  focus:border-blue-500 focus:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500
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
                  mt-1.5 w-full rounded-lg
                  border border-zinc-700
                  bg-zinc-800/50
                  px-4 py-2.5
                  text-white
                  placeholder-zinc-500
                  transition-all
                  focus:border-blue-500 focus:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500
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
                  mt-1.5 w-full rounded-lg
                  border border-zinc-700
                  bg-zinc-800/50
                  px-4 py-2.5
                  text-white
                  placeholder-zinc-500
                  transition-all
                  focus:border-blue-500 focus:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-blue-500
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "Submitting..."}
              className="
                mt-6 w-full
                rounded-lg
                bg-blue-600
                py-3
                text-sm font-medium text-white
                shadow-lg shadow-blue-500/20
                transition-all
                hover:bg-blue-500 hover:shadow-blue-500/40
                active:scale-[0.98]
                disabled:cursor-not-allowed disabled:opacity-70
              "
            >
              {status === "Submitting..." ? "Sending..." : "Submit Inquiry"}
            </button>

            {status && (
              <p
                className={`text-center text-sm font-medium mt-2 animate-pulse ${
                  status.includes("Error") ? "text-red-400" : "text-green-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}