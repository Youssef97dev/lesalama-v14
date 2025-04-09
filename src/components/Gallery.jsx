import React from "react";
import Image from "next/image";
import Link from "next/link";

const imagesUrl = [
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/salama-V2/jijioevym7tnocxelt0y",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/salama-V2/urz9wpnkvpkgvjukvhxy",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_427,w_640/v1/salama-V2/rimrxc1hbygsfdidqrdl",
];

const Gallery = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center space-x-2 p-3">
        {imagesUrl.map((image, index) => (
          <Link
            key={index}
            href="/gallery"
            target="_blank"
            className="cursor-pointer"
          >
            <div className="relative">
              <Image
                src={image}
                alt="casa lalla takerkoust gallery"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery" className="cursor-pointer p-3 rounded-md">
        <div className="flex h-full w-full justify-center items-center  relative md:hidden">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/fnezjj5w3bb716kn09y9"
            alt="casa lalla tekerkoust gallery"
            width={600}
            height={700}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="z-10 absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-20 rounded-md"></div>
          <span className="absolute w-full h-full font-azahra flex justify-center items-center text-5xl text-white z-10">
            GALLERY
          </span>
        </div>
      </Link>
    </>
  );
};

export default Gallery;
