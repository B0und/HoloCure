import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import Link from "../../components/Link";
import HeroSection from "../../components/HeroSection";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);

  return (
    <div className="max-w-[1920px] ml-auto mr-auto pl-4 pr-4">
      <HeroSection />
      <h1 className="text-3xl text-red-700 font-bold underline">Hello world red!</h1>
      <Header heading={t("h1")} title={t("title")} />
      <div>
        <Link skipLocaleHandling={false} href="/second-page">
          <button type="button">{t("to-second-page")}</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
