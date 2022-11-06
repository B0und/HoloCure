import clsx from "clsx";
import React from "react";
import WeaponCard from "./WeaponCard";

const FeatureText = ({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => (
  <p
    className={clsx(
      "w-full max-w-[250px] rounded-lg bg-white py-2 px-4 text-center text-xs font-medium text-[#1A4762] sm:max-w-[360px] sm:py-4  sm:text-base md:py-4 md:px-8 md:text-lg",
      extraStyles
    )}
  >
    {children}
  </p>
);

interface IFeatureImage {
  src: string;
  alt: string;
}
const FeatureImage = (props: IFeatureImage) => (
  <img
    className="w-2/3 rounded-lg object-cover sm:max-w-[400px] md:max-w-[400px]"
    src={props.src}
    alt={props.alt}
  />
);

const Features = () => {
  return (
    <section className="mx-3 rounded-lg bg-[#1A4762] px-3 sm:mx-8 sm:px-12">
      <h2 className="mx-auto mt-[-22px] flex h-11 w-fit items-center rounded-full bg-[#f1f1f1] px-6 py-1 text-xl font-semibold text-[#1A4762] md:h-14 md:px-10 md:text-3xl">
        Features
      </h2>
      <div className="mt-9 flex flex-col items-center gap-5">
        <div className="flex w-full items-center justify-center">
          <FeatureImage
            src="/specials.webp"
            alt="Calliope Mori using her ultimate skill, which summons a huge death god, giving her a buff."
          />

          <FeatureText extraStyles="ml-[-65px] sm:ml-[-85px]">
            Unique skills and special attacks for every character
          </FeatureText>
        </div>

        <div className="flex w-full flex-1 items-center justify-between md:justify-center md:gap-40">
          <div className="z-10  ">
            <FeatureText>Unlock dozens of different weapons and passive items</FeatureText>
          </div>

          <div className=" -translate-x-[40%] translate-y-[20%]">
            <WeaponCard
              title="Pistol Shot"
              description="Shoots 3 projectiles forward. Horizontal only."
              src="/gun.png"
              alt=""
              className="relative h-20  border-[1px] border-[#ffffff] transition-all hover:z-30 hover:scale-110 hover:border-[#FF9EC6]"
            />
            <WeaponCard
              title="Trident Thrust"
              description="Mid ranged stab attack in front."
              src="/trident.png"
              alt=""
              className="relative z-10   h-20  translate-x-[10%] -translate-y-[50%] border-[1px] border-[#ffffff] transition-all hover:z-30 hover:scale-110 hover:border-[#FF9EC6]"
            />
            <WeaponCard
              title="Summon tentacle"
              description="A tentacle shoots out in front."
              src="/tentacle.png"
              alt=""
              className="relative z-10 h-20   translate-x-[20%] -translate-y-[100%] border-[1px] border-[#ffffff] transition-all hover:z-30 hover:scale-110 hover:border-[#FF9EC6]"
            />
            <WeaponCard
              title="Phoenix Sword"
              description="Short ranged slash in front."
              src="/phoenix.png"
              alt=""
              className="relative z-10 h-20   translate-x-[30%] -translate-y-[150%] border-[1px] border-[#ffffff] transition-all hover:z-30 hover:scale-110 hover:border-[#FF9EC6]"
            />
            <WeaponCard
              title="Scythe Swing"
              description="Swings in a half circle arc in front."
              src="/scythe.png"
              alt=""
              className="relative z-10  h-20 translate-x-[40%] -translate-y-[200%] border-[1px] border-[#ffffff] transition-all hover:z-30 hover:scale-110 hover:border-[#FF9EC6]"
            />
          </div>
        </div>

        <div className="mb-14 flex w-full  items-center justify-center">
          <FeatureImage
            src="/secrets.png"
            alt="Amelia Watson petting her dog in the game. Very cute."
          />

          <FeatureText extraStyles="-ml-[65px] text-center">Hidden mechanics</FeatureText>
        </div>
      </div>
    </section>
  );
};

export default Features;
