'use client'
import { Handshake, Send } from "lucide-react";
import { useState } from "react";
import { submitFormToGoogleScript } from "../../util/sponsor"

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      await submitFormToGoogleScript(formData);
      setSubmissionStatus('success');
      console.log('Form submitted successfully:', formData);
      resetForm();
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl backdrop-blur-lg bg-opacity-30 dark:bg-opacity-20 border border-white border-opacity-20">
      <div className="flex justify-center mb-8">
        <Handshake className="w-24 h-24 text-white opacity-80 animate-pulse" />
      </div>
      <h2 className="text-5xl font-extrabold mb-12 text-white drop-shadow-lg text-center tracking-wide">
        Become a Sponsor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2 text-white" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="name"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white bg-opacity-10 px-5 py-3 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-white" htmlFor="company">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="company"
            type="text"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white bg-opacity-10 px-5 py-3 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="Your company/organization"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-white" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white bg-opacity-10 px-5 py-3 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2 text-white" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            name="phone"
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white bg-opacity-10 px-5 py-3 text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="+91 98765 43210"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 text-white font-extrabold text-xl tracking-wider shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300 flex items-center justify-center gap-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
