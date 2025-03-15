"use client"; // Required for using React hooks in Next.js
import { useState } from "react";

const Gallery = () => {
  // List of image URLs
  const images = [
    "/scene.jpg",
    "/scene2.jpg",
    "/scene3.jpg",
    "/scene4.jpg",
    "/scene5.jpg",
    "/scene6.jpg",
    "/scene7.jpg",
    "/scene8.jpg",
  ];

  // State to track the selected image for the lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-48 bg-cover bg-center rounded-lg cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setSelectedImage(image)}
            ></div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[80vw] h-[80vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200"
              onClick={(e) => {
                e.stopPropagation(); // Prevent lightbox from closing when clicking the button
                setSelectedImage(null);
              }}
            >
              &times; {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
