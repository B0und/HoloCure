import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import Link from "../../components/Link";
import HeroSection from "../../components/HeroSection";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);

  return (
    <div className="h-full">
      <HeroSection />
      <div className="ml-auto mr-auto max-w-[1920px]">
        <h1 className="text-3xl font-bold text-red-700 underline">Hello world red!</h1>
        <Header heading={t("h1")} title={t("title")} />
        <div>
          <Link skipLocaleHandling={false} href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
