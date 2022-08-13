import React from "react";

// https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51

const HeroSection = () => {
  return (
    <div className=" flex h-full items-center overflow-hidden">
      <img
        className="mr-auto h-full  min-w-0 max-w-5xl basis-full object-contain"
        width={1025}
        height={100}
        src="/holocure-logo.png"
        alt="holocure logo"
      />

      {
        <div className="mask-video video-border flex aspect-square h-full min-w-0 basis-full translate-x-1/2  scale-[1.7] items-center object-cover">
          <video
            className="mask-video video-border h-full w-full object-cover"
            autoPlay
            muted
            loop
            height="900"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Sorry, your browser does not support video content.
          </video>
        </div>
      }
    </div>
  );
};

export default HeroSection;
