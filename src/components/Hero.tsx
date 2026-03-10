import { Rocket, Zap, Radio } from 'lucide-react';
import spaceimg from '../asset/space_image.jpg';

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
    {
      icon: Rocket,
      title: 'Scalable Stratosphere/VLEO/LEO electric propulsion subsystem',
      patent: 'Patent Pending',
    },
  ];

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
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Advanced Propulsion for
        <span className="text-[#82d830]"> Small Spacecraft</span>
      </h2>

      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Pioneering electric propulsion technologies for the next generation of space missions
      </p>
    </div>

    <div className="mb-12 text-center">
      <div className="inline-block bg-[#82d830] text-[#0b0025] px-6 py-3 rounded-full font-bold text-lg mb-8">
        In Development (2026)
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-[#82d830] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Icon className="text-[#0b0025]" size={32} />
            </div>

            <h3 className="text-xl font-semibold mb-4 leading-tight">
              {tech.title}
            </h3>

            <p className="text-[#82d830] font-medium">
              {tech.patent}
            </p>
          </div>
        );
      })}
    </div>

  </div>
</section>
);
}