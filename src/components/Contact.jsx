"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaDivide,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="w-full min-h-[60vh] flex md:flex-row flex-col-reverse"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="map le salama"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="map le salama"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
      </div>
      <div className="w-full min-h-[60vh]">
        <div className="w-full p-5 lg:p-10">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center bg-background lg:p-20 p-5 font-medium">
            <img
              src="/logo-salama-brown.png"
              alt="Logo le salama"
              className={`w-52 h-30`}
            />
            <p className="text-[11px] leading-[30px] uppercase">
              {t("contact.title")}
            </p>
            <p className="text-[11px] leading-[30px] uppercase">
              {t("contact.open")}
            </p>
            <div className="text-[11px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Email : </span>
              <Link href="#">{`reservations@lesalamamarrakech.com`}</Link>
            </div>
            <div className="text-[11px] leading-[30px] uppercase flex justify-center items-center gap-2">
              <span>Tel :</span>
              <Link href="#">{`+212 675-480018`}</Link>
            </div>
            <div className="w-full text-black py-4 flex justify-center items-center gap-3">
              <Link href="http://wa.me/212675480018" target="_blank">
                <FaWhatsappSquare size={25} color="#8b5330" />
              </Link>
              <Link
                href="https://www.instagram.com/lesalamamarrakech/"
                target="_blank"
              >
                <FaInstagramSquare size={25} color="#8b5330" />
              </Link>
              <Link
                href="mailto:reservations@lesalamamarrakech.com"
                target="_blank"
              >
                <FaMailBulk size={25} color="#8b5330" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
