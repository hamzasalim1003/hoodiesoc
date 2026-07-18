import React from 'react';
import { Briefcase, Building2, Palette, Truck, Users, CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateMerch = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Briefcase size={32} />,
      title: 'Professional Branding',
      description:
        'Elevate your company identity with premium custom apparel that your team will be proud to wear.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Bespoke Design Service',
      description:
        'Our in-house design team works with you to create unique artwork that reflects your brand values.',
    },
    {
      icon: <Truck size={32} />,
      title: 'Reliable Delivery',
      description:
        'Fast turnaround and dependable lead times, so your merch arrives when you need it.',
    },
    {
      icon: <Users size={32} />,
      title: 'Scalable for Any Team',
      description:
        'From startups to enterprise — flexible quantities and bulk pricing for organisations of all sizes.',
    },
  ];

  const productTypes = [
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_06_05_14_PM.png',
      name: 'Tote Bags',
      description:
        'A simple, useful way to get your logo in front of clients. Perfect for events, staff gifting and welcome packs.',
    },
    {
      image: '/whatsapp_image_2025-12-09_at_19.55.20_a3ee241c.jpg',
      name: 'Quarter-Zips',
      description:
        'The most requested piece for offices: smart enough for client meetings, casual enough for every day.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_06_09_10_PM.png',
      name: 'Corporate Sport Kits',
      description:
        'Full kits for company sports days, five-a-side teams and wellness events, embroidered with logo, name and number.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_07_18_12_PM.png',
      name: 'Tipped Polos',
      description:
        'A sharper look for client-facing staff and front-of-house teams, with a twin-tipped collar and embroidered logo.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_07_11_36_PM.png',
      name: 'Padded Jackets',
      description:
        'A premium option for senior staff and site visits, with role and name embroidered for a polished finish.',
    },
    {
      image: '/whatsapp_image_2025-12-09_at_09.15.06_b91ca4fa.jpg',
      name: 'Gilets',
      description:
        'Practical layering for site visits, warehouses and outdoor briefings, embroidered with logo, name and role.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Brief & Brand Discovery',
      description:
        'Share your brand guidelines, colours and goals. We help you choose the right garments and finishes.',
    },
    {
      step: '2',
      title: 'Design & Mockups',
      description:
        'We create digital mockups for your approval, refining every detail until you are completely happy.',
    },
    {
      step: '3',
      title: 'Production & Delivery',
      description:
        'We manufacture to the highest standard and deliver straight to your office or event.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
                <Building2 className="text-yellow-400" size={18} />
                <span className="text-yellow-400 text-sm font-semibold">For Businesses</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Corporate <span className="text-yellow-400">Merch</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium custom apparel and merchandise for businesses, startups and organisations.
                Build team identity, impress clients and elevate your brand with quality you can feel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  Explore Products
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="/whatsapp_image_2025-12-09_at_11.03.48_251931a6.jpg"
                  alt="Corporate Merch"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold text-lg shadow-xl">
                Built for Brands
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Merch That <span className="text-yellow-400">Means Business</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We've built our reputation designing premium apparel for university societies and schools.
            Now we bring the same craft, care and quality to businesses — whether you're a five-person
            startup or a nationwide brand. From team uniforms to client gifting, we make merch that
            people actually want to keep.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-400">Hoodie Sociaty</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A corporate merch partner that treats your brand like their own
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-yellow-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section id="products" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Product Range</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From everyday team wear to premium executive gifting, we offer a full range of
              customisable corporate merchandise. Every item is branded to your specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productTypes.map((product, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-xl mb-4 aspect-square bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold italic text-yellow-400 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Our <span className="text-yellow-400">Process Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 mt-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalisation Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/whatsapp_image_2025-12-09_at_09.15.03_75f60bd2.jpg"
                  alt="Custom Corporate Apparel"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fully <span className="text-yellow-400">Customisable</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your brand is unique — your merch should be too. We offer extensive customisation
                to match your identity exactly.
              </p>

              <div className="space-y-4">
                {[
                  'Embroidery, screen print, DTG and DTF finishes',
                  'Matched Pantone colours and brand guidelines',
                  'Custom labels, tags and packaging options',
                  'Individual employee names and roles',
                  'Multiple garment styles, fits and colourways',
                  'Eco-friendly and sustainable fabric options',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a <span className="text-yellow-400">Corporate Quote</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about your business and what you need. We'll come back with ideas, mockups and
              a tailored quote — usually within 24 hours.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xrbnyolr"
            method="POST"
            className="bg-gray-900 border border-gray-800 rounded-xl p-8"
          >
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
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your company name"
                />
              </div>
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
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="you@company.com"
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
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="productType" className="block text-white font-semibold mb-2">
                  Product Type
                </label>
                <select
                  id="productType"
                  name="productType"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a product</option>
                  <option value="hoodies">Hoodies & Sweatshirts</option>
                  <option value="polos">Polos & T-Shirts</option>
                  <option value="promotional">Promotional Merchandise</option>
                  <option value="executive">Executive & Gifting</option>
                  <option value="mixed">Mixed / Multiple</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-white font-semibold mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Approximate number of items"
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
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                placeholder="Tell us about your brand, design ideas, deadlines, or any questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Request My Quote</span>
            </button>
          </form>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Prefer to talk to us directly?</p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold text-lg transition-colors"
            >
              <span>Visit our contact page</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateMerch;