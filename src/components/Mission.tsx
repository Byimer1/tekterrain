import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const earthGlob = import.meta.glob('../asset/EARTH/*', { eager: true }) as Record<string, { default: string }>;

const slides1 = Object.keys(earthGlob)
  .sort()
  .map((key) => earthGlob[key].default);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (slides1.length > 0) setSlide1Index((s) => (s + 1) % slides1.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* RF / Photos section only */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-[#000000] mb-2">
            RF and Communications Engineering
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

        </div>
      </div>
    </section>
  );
}
