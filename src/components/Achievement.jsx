import { useState } from "react";
import { listAchievement } from "../data";

const Achievement = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievement" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Judul */}
        <h2
          className="text-4xl font-bold text-center mb-12 text-green-500"
          data-aos="fade-up"
          data-aos-once="false"
        >
          Achievements
        </h2>

        {/* Grid Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listAchievement.map((ach) => (
            <div
              key={ach.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_20px_4px_rgba(16,185,129,0.8)]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <img
                src={ach.thumbnail}
                alt={ach.title}
                className="w-full h-56 sm:h-48 object-contain cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(ach)}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{ach.desc}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                  {ach.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[95%] sm:max-w-4xl p-4 sm:p-6 relative">
            {/* Tombol Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            {/* PDF Sertifikat */}
            <iframe
              src={selectedImage.pdf}
              title={selectedImage.title}
              className="w-full h-[80vh] rounded-lg border"
            />

            {/* Info Achievement */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 mb-3">{selectedImage.desc}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                {selectedImage.date}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievement;
