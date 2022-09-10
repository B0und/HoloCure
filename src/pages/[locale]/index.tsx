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
        <div className="full-bleed  bg-[#1A4762] py-48">
          <h2 className="inline-block  h-8 rounded-full bg-[#f1f1f1] text-[#1A4762]">
            <span className="mx-6 font-pop text-xl font-semibold">Welcome to HoloCure!</span>
          </h2>

          <p className="ml-32 max-w-prose text-white">
            This is a completely free, unofficial fangame featuring the vtuber talents of Hololive,
            with gameplay that is heavily inspired by Vampire Survivors and Magic Survival. Collect
            powerful weapons and items and experiment with all kinds of builds to create the
            ultimate character! Will you be able to defeat the endless waves of enemies, and reach
            the top rankings?
          </p>
          <button className="rounded-full bg-white p-4 uppercase">play now</button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
