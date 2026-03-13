import { Globe as Globe2, History } from 'lucide-react';
import { GiRunningNinja, GiRocketFlight } from 'react-icons/gi';
import { FaPeopleRoof } from 'react-icons/fa6';
import aboutBg from '../asset/about_bg.jpg';

// const companyHistory = [
//   { year: '2000', text: 'Established in USA as a logistics partner of a Bangladesh licensed VSAT Satellite Operator and Internet Service Provider.' },
//   { year: 'Up to 2005', text: 'VSAT engineering consultant for multi-national companies and telecommunications carriers.' },
//   { year: '2006–2008', text: 'Business VOIP platform-as-a-service provider for US energy trading industry.' },
//   { year: '2008–present', text: 'Information Communications Technology services.' },
//   { year: '2016', text: 'Renamed as Tek Terrain LLC, and diversification into Aerospace industry.' },
// ];

const missionValues = [
  {
    icon: GiRunningNinja,
    title: 'Agile Engineering ',
    description: 'Lean-business model influenced agile engineering management and operations',
  },
  {
    icon: FaPeopleRoof,
    title: 'Capable and Mature',
    description: 'Multi-domain Science, R&D and Engineering expertise in Aerospace industry ',
  },
  {
    icon: GiRocketFlight,
    title: 'Flight Heritage',
    description: 'Adapting flight proven heritage designs ',
  },
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
        <div className="mb-16">
          

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We are a specialized aerospace technology company focused on developing cutting-edge electric propulsion, communications, command and control systems for reusable space vehicles, CubeSats and SmallSats.
              Over its 25+ years of operation the company has also served Tier-1 multi-national telco companies and managed network service providers with specialized network engineering and systems integration, fixed satellite
              services, telecom engineering and wide area network services.
            </p>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {missionValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg py-4 px-6 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-[#FFA500] w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Icon className="text-[#0b0025]" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-100 text-center text-sm leading-snug">
                    {value.description}
                  </p>
                  
                </div>
                
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Developing technologies for Future Space Transportation Systems and Off-Earth AI/AGI Data Centers.
            </p>
          </div>
        </div>

        {/* 
        <div className="mt-16 mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <History className="text-[#FFA500]" size={32} />
            Company History
          </h3>
          <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Established in the USA in 2000 as a logistics partner for a Bangladesh-licensed VSAT satellite operator and internet service provider.
            Up to 2005, the company served as a VSAT engineering consultant for multinational companies and telecommunications carriers.
            Between 2006 and 2008, it operated as a business VoIP platform-as-a-service provider for the U.S. energy trading industry.
            From 2008 to the present, the company has provided Information Communications Technology (ICT) services.
            In 2016, the company was renamed Tek Terrain LLC and expanded into the aerospace industry.
          </p>
          <p className="mt-8 text-sm text-white max-w-3xl mx-auto text-center">
            Formerly operated as PraDeshta Space and Telecommunications Network Services, LLC d/b/a PSTN Services LLC.
          </p>
        </div>
        */}

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
            <Globe2 className="text-[#FFA500]" size={32} />
            Space Agency Links
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