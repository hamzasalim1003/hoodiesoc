import React, { useState } from 'react';
import { Star, Award, Heart, Users, CheckCircle2, Mail, Phone, School } from 'lucide-react';

const SchoolLeavers = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    schoolName: '',
    email: '',
    phone: '',
    yearGroup: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        role: '',
        schoolName: '',
        email: '',
        phone: '',
        yearGroup: '',
        quantity: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const leaversDesigns = [
    {
      id: 1,
      name: "Signature Leavers Hoodie",
      description: "Premium black hoodie featuring elegant Kensington Wade branding with golden crest on front. Back displays 'SOPHIA 26 LEAVERS' with student signatures artistically arranged in the number.",
      image: "whatsapp_image_2025-12-09_at_19.55.20_a3ee241c.jpg"
    },
    {
      id: 2,
      name: "Premium Names Edition",
      description: "Black hoodie with sophisticated Kensington Wade design on front. Back features all student names elegantly arranged within the '26' number outline with golden accents.",
      image: "/whatsapp_image_2025-12-09_at_19.55.21_f890ecf0.jpg"
    },
    {
      id: 3,
      name: "Navy Quarter-Zip Executive",
      description: "Professional navy quarter-zip with embroidered Kensington Wade crest. Back displays 'SOPHIA 26 LEAVERS' with complete student name roster in premium typography.",
      image: "/kensington_wade_leavers_navy_quarterzip.png"
    },
    {
      id: 4,
      name: "Maroon 2025 Heritage",
      description: "Rich maroon hoodie featuring Kensington Wade branding with '2025 LEAVERS' chest print. Back showcases 'SOPHIA 26 LEAVERS' with full student names in golden outlined design.",
      image: "/kensington_wade_leavers_maroon_2025.png"
    },
    {
      id: 5,
      name: "Classic Leavers 2026",
      description: "Traditional 'Class of 26' back print with all student names in bold typography. School crest embroidered on the front chest.",
      image: "/whatsapp_image_2025-12-09_at_19.55.22_e5c0b677.jpg"
    },
    {
      id: 6,
      name: "Streetwear Leavers",
      description: "Bold, modern back graphic with large '26 LEAVERS' text and student names integrated into the number design. Contemporary and eye-catching.",
      image: "/whatsapp_image_2025-12-09_at_19.55.23_45ca4d76.jpg"
    },
    {
      id: 7,
      name: "Quarter-Zip Premium",
      description: "Sophisticated quarter-zip style with embroidered school crest on chest. Names arranged in the '26' on the back in gold/white text.",
      image: "/whatsapp_image_2025-12-09_at_20.03.29_17683f0a.jpg"
    },
    {
      id: 8,
      name: "Heritage Leavers",
      description: "Premium design featuring school name and crest with traditional typography. Classic '2025 LEAVERS' chest detail, full names on back.",
      image: "/whatsapp_image_2025-12-09_at_20.03.29_64d92fcf.jpg"
    },
    {
      id: 9,
      name: "Full-Zip Signature",
      description: "Full-zip hoodie with embroidered crest and personalized name on chest. Back features bold '26 LEAVERS' with all student names.",
      image: "/whatsapp_image_2025-12-09_at_20.03.29_eff8d5f0.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400 text-sm font-semibold">New for 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                School Leavers <span className="text-yellow-400">Hoodies 2026</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium leavers hoodies for Year 6, Year 11 and Sixth Form – with a simple, stress-free process for your school.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('designs')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  View Leavers Designs
                </button>
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  Request a Custom Design
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="/whatsapp_image_2025-12-09_at_19.55.20_5602fdc5.jpg"
                  alt="School Leavers Hoodie 2026"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold text-lg shadow-xl">
                Class of 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We've Brought Our <span className="text-yellow-400">University Quality</span> to Schools
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Hoodie Sociaty started by designing premium hoodies for university societies. Now we bring the same quality, modern designs and smooth process to school leavers. Whether it's Year 6, Year 11 or Sixth Form, we help you create hoodies that students will actually want to wear long after 2026.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-400">Hoodie Sociaty</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We make leavers hoodies that students love and staff appreciate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Designs</h3>
              <p className="text-gray-400">
                Streetwear-inspired styles, not generic templates. Designs that students actually want to wear beyond school.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">One-to-One Custom Design</h3>
              <p className="text-gray-400">
                We create a unique leavers design tailored specifically for your year group and school identity.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High-Quality Hoodies</h3>
              <p className="text-gray-400">
                Comfortable, durable, everyday wear. Premium fabrics and printing that lasts for years.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
              <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Process for Staff</h3>
              <p className="text-gray-400">
                We simplify design, orders and communication. No stress, no hassle – just great hoodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leavers Designs Catalogue */}
      <section id="designs" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leavers <span className="text-yellow-400">Hoodie Designs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Browse a selection of our leavers hoodie styles below. Every design can be customised with your school name, crest, colours and student names. We can also create a completely unique design for your school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {leaversDesigns.map((design) => (
              <div
                key={design.id}
                className="group bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {design.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-black border border-gray-800 rounded-xl p-8">
            <p className="text-xl text-gray-300">
              Every design here is fully customisable – or we can create something completely new for your school.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Our Leavers Hoodie <span className="text-yellow-400">Process Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">Tell Us About Your School</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Share your school name, year group and design ideas. We'll discuss colours, styles and what makes your leavers special.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">Approve Your Design</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We create and tweak a custom digital mockup for your school. You approve it once you're happy with every detail.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">Order & Delivery</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We confirm quantities and deliver the hoodies in time for your leavers celebrations. Simple as that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalisation Options */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Make Every Hoodie <span className="text-yellow-400">Personal</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your leavers hoodies should be as unique as your students. We offer extensive personalisation options to make each hoodie special.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Student names on the back</h4>
                    <p className="text-gray-400">All student names arranged in your chosen design layout</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Initials on sleeve or chest</h4>
                    <p className="text-gray-400">Personal initials for an extra touch of individuality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold text-lg">School crest or logo</h4>
                    <p className="text-gray-400">Print or embroidery options for your school branding</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold text-lg">'Class of 2026' designs with names</h4>
                    <p className="text-gray-400">Names integrated into the number or surrounding design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-semibold text-lg">Multiple colour and fit options</h4>
                    <p className="text-gray-400">School colours, sizes for all ages, and different hoodie styles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/whatsapp_image_2025-12-09_at_19.55.21_df31912e.jpg"
                alt="Personalised School Leavers Hoodie"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Custom Design <span className="text-yellow-400">for Your School</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start planning your 2026 leavers hoodies? Tell us a few details below and we'll come back to you with ideas and a custom design for your school.
            </p>
          </div>

          {submitted ? (
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-xl p-12 text-center">
              <CheckCircle2 className="text-yellow-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 text-lg">
                We've received your enquiry and will be in touch about your 2026 leavers hoodies soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-white font-semibold mb-2">
                    Role <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="e.g. Head of Year, Teacher, Parent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="schoolName" className="block text-white font-semibold mb-2">
                  School Name <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  required
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your school name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="your.email@school.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="yearGroup" className="block text-white font-semibold mb-2">
                    Year Group
                  </label>
                  <select
                    id="yearGroup"
                    name="yearGroup"
                    value={formData.yearGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  >
                    <option value="">Select year group</option>
                    <option value="year6">Year 6</option>
                    <option value="year11">Year 11</option>
                    <option value="year13">Year 13/Sixth Form</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-white font-semibold mb-2">
                    Estimated Number of Hoodies
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Approximate number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your design ideas, school colours, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Request My Design</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default SchoolLeavers;
