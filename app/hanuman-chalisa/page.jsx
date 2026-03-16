import Navbar from "@/components/Navbar";
import VerseCard from "@/components/VerseCard";
import { hanumanChalisa } from "@/data/hanumanChalisa";

const images = [
  "/hanuman1.jpg",
  "/hanuman2.jpg",
  "/hanuman3.jpg",
  "/hanuman4.jpg",
  "/hanuman5.jpg",
];

export default function HanumanChalisa() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar />

      {/* Title / Hero */}
      <section className="relative py-12 md:py-20">
        {/* Background glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-24 w-[700px] h-[700px] bg-orange-200/40 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative">
          {/* Images */}
          <div className="mb-14">
            {/* Desktop gallery */}
            <div className="hidden md:flex items-end justify-center gap-8">
              <img
                src="/hanuman1.jpg"
                className="w-40 h-56 object-cover rounded-xl shadow-md -translate-y-6"
              />
              <img
                src="/hanuman2.jpg"
                className="w-48 h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/hanuman3.jpg"
                className="w-72 h-[420px] object-cover rounded-xl shadow-2xl"
              />
              <img
                src="/hanuman4.jpg"
                className="w-48 h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/hanuman5.jpg"
                className="w-40 h-56 object-cover rounded-xl shadow-md -translate-y-6"
              />
            </div>

            {/* Mobile slider */}
            <div className="md:hidden flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory scroll-px-6">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-56 h-80 flex-shrink-0 object-cover rounded-xl snap-center shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            श्री हनुमान चालीसा
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Śrī Hanumān Cālisā • Tulasīdās
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 text-orange-500 text-lg mt-6">
            <span>🪔</span>
            <span className="w-16 h-px bg-orange-300"></span>
            <span>🪔</span>
          </div>
        </div>
      </section>

      {/* VERSES SECTION */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="space-y-10">
          {hanumanChalisa.map((item, index) => (
            <VerseCard
              key={index}
              number={item.number}
              verse={item.verse}
              transliteration={item.transliteration}
              meaning={item.meaning}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
