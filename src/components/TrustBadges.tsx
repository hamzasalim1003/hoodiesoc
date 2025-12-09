import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield size={24} />,
      title: "Secure Payments",
      description: "Safe & encrypted transactions"
    },
    {
      icon: <Users size={24} />,
      title: "Bulk Order Friendly",
      description: "Discounts for large quantities"
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Turnaround",
      description: "Quick delivery for urgent orders"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-yellow-400/30 transition-colors duration-200"
            >
              <div className="text-yellow-400 flex-shrink-0">
                {badge.icon}
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  {badge.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;