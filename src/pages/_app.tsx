import { appWithTranslation } from "next-i18next";
import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import "../styles/globals.css";
import { particlesOptions } from "../particlesOptions";
import ParticlesComponent from "../components/ParticlesComponent";

// import "swiper/css/bundle";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/core";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ParticlesComponent />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
