import React from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { MobileNav } from "../../components/MobileNav";
import { Footer } from "../../components/Footer";

import Link from "../../components/Link";
import LogoSection from "../../components/LogoSection";
import { GiHamburgerMenu } from "react-icons/gi";
import HeroSection from "../../components/HeroSection";
import Features from "../../components/Features";
import CharactersSection from "../../components/Characters";
import BottomCtaCard from "../../components/BottomCtaCard";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="h-full font-pop">
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
      <LogoSection />
      <div className="flex flex-col gap-16">
        <HeroSection />
        <Features />
        <CharactersSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
