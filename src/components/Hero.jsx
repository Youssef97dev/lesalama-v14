"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
];

const mobileImages = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/g6rzpp98zct8gcxlsexv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/aqahxx69j3zioo0uwvrq",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/olx3popyo3msqjowhbl5",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/usuix6tsgjhreciq8pcf",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative w-full h-full lg:h-screen">
      <div className="h-[94vh] w-full px-3 py-3 block lg:hidden">
        {mobileImages.map((src, index) => (
          <div
            key={index}
            className={`absolute   rounded-md inset-0 transition-opacity duration-1000 m-3  ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full px-3 py-3 hidden lg:block">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 m-3  ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-brightness-75 hidden lg:block m-3 rounded-md"></div>

      {/* Content 
      <div className="absolute top-64 left-5 pr-32 text-white text-[14px] font-azahra block lg:hidden">
        <TypeAnimation
          sequence={[t("hero.text_1"), 3000, t("hero.text_2"), 3000]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </div>*/}

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
