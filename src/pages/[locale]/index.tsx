import React from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { MobileNav } from "../../components/MobileNav";
import { Footer } from "../../components/Footer";

import Link from "../../components/Link";
import HeroSection from "../../components/HeroSection";
import { GiHamburgerMenu } from "react-icons/gi";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fixed top-2 right-2 m-4 h-6 w-6"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <MobileNav isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
      <HeroSection />

      <div className="bleed-wrapper ml-auto mr-auto ">
        <div className="full-bleed  flex flex-col items-start gap-8 bg-[#1A4762] py-16 px-6">
          <h2 className="-ml-10 flex h-11 items-center rounded-full bg-[#f1f1f1] text-[#1A4762]">
            <span className="mx-6 ml-10 font-pop text-xl font-semibold ">Welcome to HoloCure!</span>
          </h2>

          <p className=" max-w-prose font-inter text-base text-[#e9e9e9]">
            This is a completely free, unofficial fangame featuring the vtuber talents of Hololive,
            with gameplay that is heavily inspired by Vampire Survivors and Magic Survival. <br />
            Collect powerful weapons and items and experiment with all kinds of builds to create the
            ultimate character! Will you be able to defeat the endless waves of enemies, and reach
            the top rankings?
          </p>
          <button className="fancy-shadow flex h-6 items-center rounded-full bg-white py-1 px-10 font-pop text-base font-bold uppercase transition-all">
            <span className="text-[#FF9EC6]">play </span>
            <span className="ml-1 text-[#45B7F4]">now</span>
          </button>

          <div className="flex flex-col gap-4">
            <img src="/a-chan.png" alt="A-Chan in a HoloCure store" />
            <img
              src="/gameplay1.png"
              alt="Gameplay showing Gawr Gura fighting a bunch of skeletons (dead-beats)"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
