"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import Gallery from "./Gallery";
import Footer from "@/components/Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="relative flex flex-col justify-center items-center">
          <Gallery />
          <Footer />
          <div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <BookingButton />
          </div>
          <div className="fixed top-12 right-10 w-[20%] hidden lg:block z-10">
            <BookingButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
