"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {submitFormToGoogleScript} from '../../util/ca'

export default function caPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    why: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    why: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' });
    if (submissionStatus) {
      setSubmissionStatus(null);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      why: '',
    });
    setFormErrors({
      name: '',
      email: '',
      phone: '',
      college: '',
      why: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <PageWrapper>
      {/* Hero Section */}
      <section>
        <div className="pt-20 pb-10 px-6 mx-auto max-w-screen-xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Campus Ambassador
          </h1>
          <p className="text-xl md:text-2xl text-black/90 dark:text-white mb-8">
            Be the face of OOSC 3.0 at your campus! Lead, connect, and grow with
            us.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Why Become a Campus Ambassador?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Join a vibrant community of tech enthusiasts, represent OOSC 3.0 at your
          college, and gain valuable leadership experience. As a Campus
          Ambassador, you'll help spread the word, organize events, and connect
          with industry leaders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-indigo-600 mb-2">Leadership</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Organize and lead OOSC 3.0 activities at your campus.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-pink-600 mb-2">Networking</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Connect with industry experts, speakers, and fellow ambassadors.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-purple-600 mb-2">Perks &amp; Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get exclusive goodies, certificates, and a chance to attend OOSC 3.0.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action &amp; Form */}
      <section className="py-16 px-6 ">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Ready to Join?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Fill out the form below to apply as a Campus Ambassador for OOSC 3.0.
            We’ll get in touch with you soon!
          </p>
        </div>

        {/* Submission Status Messages */}
            {submissionStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-md flex flex-col items-center">
                <div>
                  <span className="mr-2">✅</span>
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            )}
            
            {submissionStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-md">
                <div className="flex items-center">
                  <span className="mr-2">❌</span>
                  <span className="font-medium">Failed to send message</span>
                </div>
                <p className="text-sm mt-1">Please try again or contact us directly at oosc2025.team@gmail.com</p>
              </div>
            )}

        <form className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block font-semibold mb-2 text-gray-800 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-gray-800 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-semibold mb-2 text-gray-800 dark:text-white"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="phone"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              placeholder="Your Phone No."
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="college"
              className="block font-semibold mb-2 text-gray-800 dark:text-white"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              placeholder="Your College Name"
              value={formData.college}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="why"
              className="block font-semibold mb-2 text-gray-800 dark:text-white"
            >
              Why do you want to be a Campus Ambassador?
            </label>
            <textarea
              id="why"
              rows={3}
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-5 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
              placeholder="Tell us in a few lines..."
              value={formData.why}
              onChange={handleInputChange}
              disabled={isSubmitting}
            ></textarea>
          </div>

          <Button 
                className="w-full bg-blue-300 hover:bg-blue-200 dark:bg-blue-400 dark:hover:bg-blue-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Apply Now'}
          </Button>

        </form>
      </section>
    </PageWrapper>
  );
}
