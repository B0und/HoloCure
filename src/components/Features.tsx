import React from "react";
import WeaponCard from "./WeaponCard";

const Features = () => {
  return (
    <section className="mx-3 rounded-lg bg-[#1A4762] px-3">
      <h2 className="mx-auto mt-[-22px] flex h-11 w-fit items-center rounded-full bg-[#f1f1f1] px-6 py-1 text-xl font-semibold text-[#1A4762]">
        Features
      </h2>
      <div className="mt-9 flex flex-col gap-5">
        <div className="flex items-center">
          <img
            className="max-w-[214px] rounded-lg object-cover"
            src="/specials.webp"
            alt="Calliope Mori using her ultimate skill, which summons a huge death god, giving her a buff."
          />
          <p className="-ml-20 rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762]">
            Unique skills and special attacks for every character
          </p>
        </div>

        <div className=" -mt-9 flex items-center">
          <p className=" z-10 -mr-20 rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762]">
            Unlock dozens of different weapons and passive items
          </p>
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
          <img
            className="max-w-[214px] rounded-lg object-cover"
            src="/secrets.png"
            alt="Calliope Mori using her ultimate skill, which summons a huge death god, giving her a buff."
          />
          <p className="-ml-20 rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762] ">
            Hidden mechanics
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
