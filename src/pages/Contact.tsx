import React from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

const Contact = () => {

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Ready to order for your society? We'd love to help make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form action="https://formspree.io/f/xrbnyolr" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="society" className="block text-sm font-medium text-gray-300 mb-2">
                    Society/Organization
                  </label>
                  <input
                    type="text"
                    id="society"
                    name="society"
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="e.g. UCL Islamic Society"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your hoodie requirements, quantity, design preferences, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">hoodiesociety103@gmail.com</p>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-400">+44 7346 094301</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9am-6pm GMT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-yellow-400 mt-1">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Instagram</h3>
                    <p className="text-gray-400">@the.hoodie.society</p>
                    <p className="text-gray-400 text-sm">See our latest work and updates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Order Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p className="text-gray-400 text-sm">Get in touch with your requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p className="text-gray-400 text-sm">Receive quote and design mockups</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p className="text-gray-400 text-sm">Approve design and place order</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    4
                  </div>
                  <p className="text-gray-400 text-sm">Fast delivery – your hoodie arrives before you know it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;