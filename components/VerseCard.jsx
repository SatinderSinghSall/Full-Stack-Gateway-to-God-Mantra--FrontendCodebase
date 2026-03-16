export default function VerseCard({ number, verse, transliteration, meaning }) {
  const verseLines = verse.split("।");

  return (
    <div className="text-center space-y-4 py-10 border-b border-orange-100">
      {/* Verse Number */}
      {/* <p className="text-orange-600 font-semibold text-sm">Verse {number}</p> */}

      {/* Hindi Verse */}
      <div className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-900">
        {verseLines.map((line, index) =>
          line.trim() !== "" ? <p key={index}>{line.trim()} ।</p> : null,
        )}
      </div>

      {/* Transliteration */}
      <p className="italic text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
        {transliteration}
      </p>

      {/* Meaning */}
      <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {meaning}
      </p>
    </div>
  );
}
