import React from "react";

const BottomCtaCard = () => {
  return (
    <section className="bleed-wrapper  ">
      <div className="full-bleed flex flex-wrap items-start gap-8 bg-[#1A4762] py-8 px-6">
        <img
          className=" w-[200px] max-w-[75%] object-contain"
          src="/holocure-logo.png"
          alt="holocure logo"
        />
        <button className="fancy-shadow flex h-6  items-center rounded-full bg-white py-1 px-10 font-pop text-xs font-bold uppercase transition-all">
          <span className="text-[#FF9EC6]">Download&nbsp;from</span>
          <span className="ml-1 text-[#45B7F4]">itch.io</span>
        </button>
      </div>
    </section>
  );
};

export default BottomCtaCard;
