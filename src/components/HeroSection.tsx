import React from "react";

const HeroSection = () => {
  return (
    <section className="bleed-wrapper  ">
      <div className="full-bleed  flex flex-col items-start gap-8 bg-[#1A4762] py-8 px-6">
        <h2 className="-ml-10 flex h-11 items-center rounded-full bg-[#f1f1f1] text-[#1A4762] md:-ml-12 md:h-14">
          <span className="mx-6 ml-10 font-pop text-xl font-semibold md:mx-10 md:ml-14 md:text-3xl">
            Welcome to HoloCure!
          </span>
        </h2>

        <p className="  max-w-prose font-inter text-base text-[#e9e9e9] md:text-lg">
          This is a completely free, unofficial fangame featuring the vtuber talents of Hololive,
          with gameplay that is heavily inspired by Vampire Survivors and Magic Survival. <br />
          Collect powerful weapons and items and experiment with all kinds of builds to create the
          ultimate character! Will you be able to defeat the endless waves of enemies, and reach the
          top rankings?
        </p>
        <button className="fancy-shadow flex h-6 items-center rounded-full bg-white py-1 px-10 font-pop text-base font-bold uppercase transition-all md:py-4 md:px-16 md:text-lg">
          <span className="text-[#45B7F4]">play </span>
          <span className="ml-1 text-[#FF9EC6]">now</span>
        </button>

        <div className="flex flex-col gap-4">
          <img src="/a-chan.png" alt="A-Chan in a HoloCure store" />
          <img
            src="/gameplay1.png"
            alt="Gameplay showing Gawr Gura fighting a bunch of skeletons (dead-beats)"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
