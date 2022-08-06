const HeroSection = () => {
  return (
    <div className="h-[103vh] flex overflow-hidden">
      <img
        className="object-contain max-w-screen-md pb-24"
        width={960}
        height={100}
        src="/holocure-logo.png"
        alt=""
      />

      <video className=" clip-video object-cover -ml-12" autoPlay muted loop height="600">
        <source src="/hero-video.mp4" type="video/mp4" />
        Sorry, your browser does not support video content.
      </video>
    </div>
  );
};

export default HeroSection;
