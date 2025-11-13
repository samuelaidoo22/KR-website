'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Phone className="w-12 h-12 text-gold-600 mb-4" />
              <h3 className="text-xl font-bold text-brown-900 mb-2">Phone</h3>
              <p className="text-gray-700">+233 XX XXX XXXX</p>
              <p className="text-gray-700">+233 XX XXX XXXX</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Mail className="w-12 h-12 text-gold-600 mb-4" />
              <h3 className="text-xl font-bold text-brown-900 mb-2">Email</h3>
              <p className="text-gray-700">info@kyidomrice.com</p>
              <p className="text-gray-700">support@kyidomrice.com</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <MapPin className="w-12 h-12 text-gold-600 mb-4" />
              <h3 className="text-xl font-bold text-brown-900 mb-2">Location</h3>
              <p className="text-gray-700">Accra Central</p>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Clock className="w-12 h-12 text-gold-600 mb-4" />
              <h3 className="text-xl font-bold text-brown-900 mb-2">Business Hours</h3>
              <p className="text-gray-700">Mon - Fri: 8am - 6pm</p>
              <p className="text-gray-700">Sat: 9am - 4pm</p>
              <p className="text-gray-700">Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg mb-6">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="input-field"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="textarea-field"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto inline-flex items-center justify-center">
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Distribution Outlets */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-3xl font-bold text-brown-900 mb-6">Distribution Outlets</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brown-900 mb-2">Accra Main Office</h4>
                  <p className="text-gray-700">123 Independence Avenue, Accra</p>
                  <p className="text-gray-700 text-sm mt-1">+233 XX XXX XXXX</p>
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-2">Kumasi Branch</h4>
                  <p className="text-gray-700">45 Prempeh II Street, Kumasi</p>
                  <p className="text-gray-700 text-sm mt-1">+233 XX XXX XXXX</p>
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-2">Takoradi Branch</h4>
                  <p className="text-gray-700">78 Market Circle, Takoradi</p>
                  <p className="text-gray-700 text-sm mt-1">+233 XX XXX XXXX</p>
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-2">Tamale Branch</h4>
                  <p className="text-gray-700">12 Central Market, Tamale</p>
                  <p className="text-gray-700 text-sm mt-1">+233 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}