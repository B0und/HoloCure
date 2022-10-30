import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitchLink from "./LanguageSwitchLink";
import pkg from "next-i18next/package.json";
import pkgLD from "next-language-detector/package.json";

import i18nextConfig from "../../next-i18next.config";

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("footer");
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <footer className="bleed-wrapper">
      <div className="full-bleed flex flex-wrap items-start justify-center gap-8 bg-[#1A4762] py-8 px-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
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

        <p className="pt-6 text-center text-xs text-[#b4b4b4]">
          Hololive cover corp long legal text, please dont sue us. bottom text bottom text bottom
          text
        </p>
      </div>
    </footer>
  );
};
