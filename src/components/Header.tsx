"use client"; // Required for using React hooks in Next.js
import { useEffect, useState } from "react";

const Header = () => {
  // Array of background image URLs
  const backgroundImages = [
    "/bg1.jpg", // Replace with your image paths
    "/bg2.jpg",
    "/bg3.jpg",
  ];

  // State to track the current background image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the background image at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  return (
    <header
      className="h-screen bg-cover bg-center text-white text-center transition-all duration-1000 ease-in-out relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      {/* Overlay to ensure content is readable */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            KFU Guest House & River Touch Camping
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the beauty of Kalash Valley with our riverside
            accommodation in Bumburat, Chitral
          </p>
          <a
            href="#contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
