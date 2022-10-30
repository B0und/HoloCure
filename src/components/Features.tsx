import React from "react";
import WeaponCard from "./WeaponCard";

const FeatureText = ({ children }: { children: React.ReactNode }) => (
  <p className="rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762] md:py-4 md:px-8 md:text-lg ">
    {children}
  </p>
);

interface IFeatureImage {
  src: string;
  alt: string;
}
const FeatureImage = (props: IFeatureImage) => (
  <img
    className="max-w-[214px] rounded-lg object-cover md:max-w-[400px]"
    src={props.src}
    alt={props.alt}
  />
);

const Features = () => {
  return (
    <section className="mx-3 rounded-lg bg-[#1A4762] px-3 md:px-12">
      <h2 className="mx-auto mt-[-22px] flex h-11 w-fit items-center rounded-full bg-[#f1f1f1] px-6 py-1 text-xl font-semibold text-[#1A4762] md:h-14 md:px-10 md:text-3xl">
        Features
      </h2>
      <div className="mt-9 flex flex-col items-center gap-5">
        <div className="flex items-center">
          <FeatureImage
            src="/specials.webp"
            alt="Calliope Mori using her ultimate skill, which summons a huge death god, giving her a buff."
          />

          <FeatureText>Unique skills and special attacks for every character</FeatureText>
        </div>

        <div className="flex items-center justify-between flex-1 w-full">
          <div className="max-w-[350px]">
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
              src="/tentacle.png"
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

        <div className="mb-14 flex items-center">
          <FeatureImage
            src="/secrets.png"
            alt="Amelia Watson petting her dog in the game. Very cute."
          />

          <FeatureText>Hidden mechanics</FeatureText>
        </div>
      </div>
    </section>
  );
};

export default Features;
