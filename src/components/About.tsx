import { Globe as Globe2 } from 'lucide-react';

export default function About() {
  const partners = [
    { name: 'NASA', url: 'https://www.nasa.gov' },
    { name: 'ESA', url: 'https://www.esa.int' },
    { name: 'JAXA', url: 'https://global.jaxa.jp' },
    { name: 'ISRO', url: 'https://www.isro.gov.in' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e078e] mb-6">
            About Tek Terrain
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are a specialized aerospace technology company focused on developing
            cutting-edge electric propulsion systems for small spacecraft applications.
            Our proprietary technologies are designed to enable the next generation of
            CubeSat and SmallSat missions.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#2e078e] text-center mb-8 flex items-center justify-center gap-3">
            <Globe2 className="text-[#82d830]" size={32} />
            Space Agency Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0095eb] hover:text-[#82d830] font-bold text-2xl transition-colors duration-300"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
