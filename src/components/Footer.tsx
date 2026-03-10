import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b0025] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#82d830] mb-6">
              Tek Terrain LLC
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Designing and building secure, robust, and capable subsystems for
              the future of space exploration.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#82d830] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">
                  1425 4th St SW #A115<br />
                  Washington, DC 20024<br />
                  United States
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#82d830] flex-shrink-0" size={24} />
                <a
                  href="tel:+12028123325"
                  className="text-gray-300 hover:text-[#82d830] transition-colors"
                >
                  (202) 812-3325
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#82d830] flex-shrink-0" size={24} />
                <a
                  href="mailto:info@tekterrain.com"
                  className="text-gray-300 hover:text-[#82d830] transition-colors"
                >
                  info@tekterrain.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tek Terrain LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
