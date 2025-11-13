'use client';
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected with Kyidom Rice</h2>
        <p className="max-w-2xl mx-auto text-brown-200 mb-8">
          Subscribe to receive updates on harvest seasons, exclusive offers, and stories from our partnering farmers across Ghana.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto bg-white text-brown-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Thank you for joining the Kyidom family!</h3>
            <p className="text-sm text-brown-700">
              We'll keep you posted with fresh updates and offers delivered straight to
              <span className="font-medium"> {email}</span>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl"
          >
            <div className="relative w-full sm:flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="Enter your email address"
                className="w-full bg-white text-brown-900 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-brown-900 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}