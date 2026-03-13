import { useState, useEffect } from 'react';
import { Zap, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import spaceimg from '../asset/space_image.jpg';
const spaceGlob = import.meta.glob('../asset/SPACE/*', { eager: true }) as Record<string, { default: string }>;

const propulsionSlides = Object.keys(spaceGlob)
  .sort()
  .map((key) => spaceGlob[key].default);

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
      <div className="overflow-hidden rounded-xl bg-gray-100/10 shadow-lg">
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
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm font-medium text-gray-200">
            {current + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={onNext}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const technologies = [
    {
      icon: Radio,
      title: '4-channel CubeSat pulsed electric thruster synchronization unit',
      patent: 'US Patent 10,006,445',
    },
    {
      icon: Zap,
      title: '4-channel SmallSat/CubeSat conformal thruster pack',
      patent: 'Patent Pending',
    },
    // {
    //   icon: Rocket,
    //   title: 'Scalable Stratosphere/VLEO/LEO electric propulsion subsystem',
    //   patent: 'Patent Pending',
    // },
  ];

  const [propulsionIndex, setPropulsionIndex] = useState(0);

  useEffect(() => {
    if (propulsionSlides.length === 0) return;
    const intervalId = setInterval(
      () => setPropulsionIndex((s) => (s + 1) % propulsionSlides.length),
      4000,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    // <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-[#0b0025] to-[#2e078e] text-white">
//     <section
//   id="home"
//   className="pt-32 pb-20 bg-cover bg-center bg-no-repeat text-white"
//   style={{ backgroundImage: `url(${spaceimg})` }}
// >
  
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Advanced Propulsion for
//             <span className="text-[#82d830]"> Small Spacecraft</span>
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//             Pioneering electric propulsion technologies for the next generation of space missions
//           </p>
//         </div>

//         <div className="mb-12">
//           <div className="inline-block bg-[#82d830] text-[#0b0025] px-6 py-3 rounded-full font-bold text-lg mb-8">
//             In Development (2026)
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {technologies.map((tech, index) => {
//             const Icon = tech.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
//               >
//                 <div className="bg-[#82d830] w-16 h-16 rounded-full flex items-center justify-center mb-6">
//                   <Icon className="text-[#0b0025]" size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 leading-tight">
//                   {tech.title}
//                 </h3>
//                 <p className="text-[#82d830] font-medium">{tech.patent}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>


// <section
// id="home"
// className="pt-32 pb-20 w-full min-h-[600px] bg-contain bg-center bg-no-repeat text-white relative"
// style={{ backgroundImage: `url(${spaceimg})` }}
// >
// {/* overlay */}
// <div className="absolute inset-0 bg-black/60" />
// {/* content on top */}
// <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//   <div className="text-center mb-16">
//     <h2 className="text-5xl md:text-6xl font-bold mb-6">
//       Advanced Propulsion for
//       <span className="text-[#82d830]"> Small Spacecraft</span>
//     </h2>
//     <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//       Pioneering electric propulsion technologies for the next generation of space missions
//     </p>
//   </div>
//   <div className="mb-12">
//     <div className="inline-block bg-[#82d830] text-[#0b0025] px-6 py-3 rounded-full font-bold text-lg mb-8">
//       In Development (2026)
//     </div>
//   </div>
//   <div className="grid md:grid-cols-3 gap-8">
//     {technologies.map((tech, index) => {
//       const Icon = tech.icon;
//       return (
//         <div
//           key={index}
//           className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
//         >
//           <div className="bg-[#82d830] w-16 h-16 rounded-full flex items-center justify-center mb-6">
//             <Icon className="text-[#0b0025]" size={32} />
//           </div>
//           <h3 className="text-xl font-semibold mb-4 leading-tight">
//             {tech.title}
//           </h3>
//           <p className="text-[#82d830] font-medium">{tech.patent}</p>
//         </div>
//       );
//     })}
//   </div>
// </div>
// </section>
//   );
// }
<section
  id="home"
  className="pt-32 pb-20 w-full min-h-[600px] bg-cover bg-center bg-no-repeat text-white relative"
  style={{ backgroundImage: `url(${spaceimg})` }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
         SP<span className="text-[#FFA500]">&amp;</span>CE<sup className="align-super text-2xl" style={{ fontSize: '2rem' }} >&reg;</sup>
      </h2>


      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
      Space propulsion and communications engineering products and services
      </p>
    </div>

    {/* <div className="mb-12 text-center">
      <div className="inline-block bg-[#82d830] text-[#0b0025] px-6 py-3 rounded-full font-bold text-lg mb-8">
        In Development (2026)
      </div>
    </div> */}

    <div className="grid md:grid-cols-2 gap-8">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-[#FFA500] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Icon className="text-[#0b0025]" size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-4 leading-tight">
              {tech.title}
            </h3>

            <p className="text-[#FFA500] font-medium">
              {tech.patent}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-16">
      <h3 className="text-3xl font-bold mb-4 text-center">
        Electric propulsion system
      </h3>
      <p className="text-gray-200 text-center max-w-3xl mx-auto mb-6">
        Microthruster testbed and flight hardware (2013–2015). Control unit and control algorithms development by S. Haque.
      </p>
      <ImageSlider
        images={propulsionSlides}
        current={propulsionIndex}
        onPrev={() =>
          setPropulsionIndex((s) =>
            s === 0 ? propulsionSlides.length - 1 : s - 1,
          )
        }
        onNext={() =>
          setPropulsionIndex((s) =>
            s === propulsionSlides.length - 1 ? 0 : s + 1,
          )
        }
      />
    </div>

  </div>
</section>
);
}