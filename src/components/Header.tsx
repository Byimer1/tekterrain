// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navigation = [
//     { name: 'Home', href: '#home' },
//     { name: 'Solutions', href: '#solutions' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className="fixed w-full top-0 z-50 bg-[#0b0025] shadow-lg">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-[#FFA500]">
//               Tek Terrain LLC
//             </h1>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-white hover:text-[#82d830] transition-colors duration-300 font-medium"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden pb-4">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block py-2 text-white hover:text-[#82d830] transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../asset/logo.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#000000] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Tek Terrain LLC"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-[#FFA500] hidden sm:block">
                Tek Terrain LLC
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#FFA500] transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-[#FFA500] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}