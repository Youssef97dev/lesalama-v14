"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col-reverse p-3"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-V2/urz9wpnkvpkgvjukvhxy"
          alt="le salama events large"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/im5ycq2zloqc6krnb0aj"
          alt="le salama events small"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md md:hidden block"
        />
        {/* Filter */}
      </div>
      <div className=" w-full py-5 p-0 lg:p-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] leading-[36px]  font-azahra uppercase text-primary mb-5">
            <TypeAnimation
              sequence={[t("events.title"), 2000]}
              wrapper="b"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[16px] leading-[34px] font-light px-0 2xl:px-12 ">
            {t("events.content_1")}
          </p>
          <p className="text-[16px] leading-[34px] font-light px-0 2xl:px-12 ">
            {t("events.content_2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
