import React from 'react';
import { Briefcase, Building2, Palette, Truck, Users } from 'lucide-react';

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
      image: '/image copy copy.png',
      name: 'Tote Bags',
      description:
        'A simple, useful way to get your logo in front of clients. Perfect for events, staff gifting and welcome packs.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_07_11_36_PM copy.png',
      name: 'Quarter-Zips',
      description:
        'The most requested piece for offices: smart enough for client meetings, casual enough for every day.',
    },
    {
      image: '/ChatGPT_Image_May_28,_2026,_12_14_00_PM.png',
      name: 'Corporate Sport Kits',
      description:
        'Full kits for company sports days, five-a-side teams and wellness events, embroidered with logo, name and number.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_06_09_10_PM copy.png',
      name: 'Tipped Polos',
      description:
        'A sharper look for client-facing staff and front-of-house teams, with a twin-tipped collar and embroidered logo.',
    },
    {
      image: '/ChatGPT_Image_Jun_21,_2026,_06_05_14_PM copy.png',
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
                  onClick={() => scrollToSection('products')}
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Explore Products
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src="/1689828011244.jpeg"
                  alt="Corporate team in branded uniforms"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default CorporateMerch;
