import { useState } from 'react';
import { Shield, Target, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

const slides1 = [
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
];
const slides2 = [
  'https://images.unsplash.com/photo-1457364559154-aa2644605ebb?w=800&q=80',
  'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80',
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
];

function ImageSlider({
  images,
  current,
  onPrev,
  onNext,
}: {
  images: string[];
  current: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (images.length === 0) return null;
  const showArrows = images.length > 1;
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
        <img
          src={images[current]}
          alt=""
          className="w-full aspect-video object-cover"
        />
      </div>
      {showArrows && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={onPrev}
            className="p-2 rounded-full bg-[#2e078e] text-white hover:bg-[#1a0452] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm font-medium text-gray-600">
            {current + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={onNext}
            className="p-2 rounded-full bg-[#2e078e] text-white hover:bg-[#1a0452] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Mission() {
  const [slide1Index, setSlide1Index] = useState(0);
  const [slide2Index, setSlide2Index] = useState(0);

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

        {/* Portable HF Antennas & RF Showcase */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-[#2e078e] mb-2">
            Portable HF Antennas & RF operation peripherals
          </h3>
          <p className="text-xl text-gray-600 mb-1">Showcase</p>
          <p className="text-sm text-gray-500 mb-8">
            All Photos in this section provided by our team members. Used with permission.
          </p>

          {/* Block 1: MMRU */}
          <div className="mb-16">
            <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              VSAT Satellite Earth Station and Mast-Mounted Router Unit (MMRU) project (1997-2005). Developed by S. Haque and PraDeshta Limited team.
            </p>
            <ImageSlider
              images={slides1}
              current={slide1Index}
              onPrev={() => setSlide1Index((s) => (s === 0 ? slides1.length - 1 : s - 1))}
              onNext={() => setSlide1Index((s) => (s === slides1.length - 1 ? 0 : s + 1))}
            />
          </div>

          {/* Block 2: Microthruster */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              Microthruster testbed and Flight Hardware (2013-2015). Control Unit and control algorithms development by S. Haque.
            </p>
            <ImageSlider
              images={slides2}
              current={slide2Index}
              onPrev={() => setSlide2Index((s) => (s === 0 ? slides2.length - 1 : s - 1))}
              onNext={() => setSlide2Index((s) => (s === slides2.length - 1 ? 0 : s + 1))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
