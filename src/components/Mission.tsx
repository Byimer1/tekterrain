import { Shield, Target, Cpu } from 'lucide-react';

export default function Mission() {
  const values = [
    {
      icon: Shield,
      title: 'Secure',
      description: 'Robust security measures for mission-critical systems',
    },
    {
      icon: Target,
      title: 'Capable',
      description: 'Advanced capabilities for complex space missions',
    },
    {
      icon: Cpu,
      title: 'Tested',
      description: 'Rigorously tested subsystems and instruments',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e078e] mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To design and build secure, robust, capable and tested subsystems and instruments
            for small spacecraft missions and Human spaceflight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#82d830] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-[#0b0025]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2e078e] mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
