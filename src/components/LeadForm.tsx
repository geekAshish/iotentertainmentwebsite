import React, { useState } from 'react';

export default function LeadForm() {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxm139UoywfHkLpPvnfHhapUB3tMkMsHmZIf71GNCKq-KZIfmsouoK5q8Ri0esrNdbRuA/exec";

  const [formData, setFormData] = useState({
    name: '',
    contact_number: '',
    email: '',
    description: '',
    is_follow_up: 'No' // Default value
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // We use 'no-cors' mode because Google Scripts redirects, which browser security often blocks in standard CORS checks.
      // NOTE: With 'no-cors', you won't get a readable JSON response back, but the data WILL save.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus('Success! Details saved.');
      // Optional: Reset form
      setFormData({ name: '', contact_number: '', email: '', description: '', is_follow_up: 'No' });

    } catch (error) {
      console.error("Error:", error);
      setStatus('Error submitting form.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {status === 'Submitting...' ? 'Sending...' : 'Submit'}
        </button>

        {status && <p className="text-center text-sm mt-4 text-green-600">{status}</p>}
      </form>
    </div>
  );
}