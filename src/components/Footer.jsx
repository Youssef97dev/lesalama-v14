"use client";
import React, { useEffect } from "react";
import i18next from "../../i18n";

const Footer = () => {
  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);
  return (
    <div className="w-full min-h-[16vh] bg-primary_7 flex flex-col justify-center items-center gap-3 pt-3 pb-16 lg:pb-3 text-white text-[14px] leading-[30px] ">
      <span>{`@2025 Le Salama Marrakech - Rooftop & Sky Bar`}</span>
      <span>{`40 Rue des Banques, Marrakech 40000, Maroc`}</span>
      <div className="w-full flex justify-center items-center gap-4 px-3 py-2">
        <div className="cursor-pointer" onClick={() => changeLanguage("en")}>
          <img src="/english.png" className="w-7 h-7" />
        </div>
        <div className="cursor-pointer" onClick={() => changeLanguage("fr")}>
          <img src="/france.png" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
