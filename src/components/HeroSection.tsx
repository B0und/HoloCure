import React from "react";

// https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51

const HeroSection = () => {
  return (
    <img
      className="mx-auto h-screen max-w-[95%] object-contain xl:max-w-[1143px]"
      src="/holocure-logo.png"
      alt="holocure logo"
    />
  );
};

export default HeroSection;
