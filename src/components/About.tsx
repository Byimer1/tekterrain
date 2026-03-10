import { Globe as Globe2, History } from 'lucide-react';
import aboutBg from '../asset/about_bg.jpg';

const companyHistory = [
  { year: '2000', text: 'Established in Nevada (USA) as a logistics partner of a licensed VSAT Satellite Operator and Internet Service Provider.' },
  { year: 'Up to 2005', text: 'VSAT engineering consultant for multi-national companies and telecommunications carriers.' },
  { year: '2006–2008', text: 'Business VOIP platform-as-a-service provider for US energy trading industry.' },
  { year: '2008–present', text: 'Information Communications Technology services.' },
  { year: '2016', text: 'Renamed as Tek Terrain LLC, and diversification into Aerospace industry.' },
];

export default function About() {
  const partners = [
    { name: 'NASA', url: 'https://www.nasa.gov' },
    { name: 'ESA', url: 'https://www.esa.int' },
    { name: 'JAXA', url: 'https://global.jaxa.jp' },
    { name: 'ISRO', url: 'https://www.isro.gov.in' },
  ];

  return (
    <section
      id="about"
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Tek Terrain
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are a specialized aerospace technology company focused on developing
            cutting-edge electric propulsion systems for small spacecraft applications.
            Our proprietary technologies are designed to enable the next generation of
            CubeSat and SmallSat missions.
          </p>
        </div>

        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <History className="text-[#82d830]" size={32} />
            Company History
          </h3>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {companyHistory.map((item, index) => (
              <li key={index} className="flex gap-4 sm:gap-6">
                <span className="shrink-0 font-bold text-[#82d830] w-28 sm:w-36 text-right">
                  {item.year}
                </span>
                <span className="text-gray-200 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-400 max-w-3xl mx-auto text-center">
            Formerly operated as PraDeshta Space and Telecommunications Network Services, LLC d/b/a PSTN Services LLC.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
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
                className="text-[#7dd3fc] hover:text-[#82d830] font-bold text-2xl transition-colors duration-300"
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
