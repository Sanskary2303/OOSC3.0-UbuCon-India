"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {submitFormToGoogleScript} from '../../util/contact'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      subject: '',
      message: '',
    });
    setFormErrors({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
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
      <div className="container mx-auto px-6 py-24 pt-32 md:pt-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8 dark:text-gray-300">
              Have questions or need more information about OOSC 3.0 & UbuCon India?
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="mr-2 text-xl">📍</span>
                <div>
                  <h3 className="font-semibold dark:text-white">Location</h3>
                  <p className="dark:text-gray-300">IIT Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-xl">📧</span>
                <div>
                  <h3 className="font-semibold dark:text-white">Email</h3>
                  <a href="mailto:oosc2025.team@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">oosc2025.team@gmail.com</a>
                </div>
              </div>
              {/* <div className="flex items-start">
                <span className="mr-2 text-xl">📱</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+91 " className="hover:underline">+91 </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Send us a message</h2>
            
            {/* Submission Status Messages */}
            {submissionStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-md">
                <div className="flex items-center">
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <p className="help-block text-danger">{formErrors.name}</p>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <p className="help-block text-danger">{formErrors.email}</p>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your Phone No."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <p className="help-block text-danger">{formErrors.phone}</p>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <p className="help-block text-danger">{formErrors.subject}</p>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <p className="help-block text-danger">{formErrors.message}</p>
              </div>
              <Button 
                className="w-full bg-blue-200 hover:bg-blue-300 dark:bg-blue-300 dark:hover:bg-blue-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}