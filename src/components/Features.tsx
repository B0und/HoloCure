import React from "react";
import WeaponCard from "./WeaponCard";

const WEAPON_CARDS = [
  {
    title: "Pistol Shot",
    description: "Shoots 3 projectiles forward. Horizontal only.",
    src: "/gun.png",
  },
  {
    title: "Trident Thrust",
    description: "Mid ranged stab attack in front.",
    src: "/trident.png",
  },
  {
    title: "Summon tentacle",
    description: "A tentacle shoots out in front.",
    src: "/tentacle.png",
  },
  {
    title: "Phoenix Sword",
    description: "Short ranged slash in front.",
    src: "/phoenix.png",
  },
  {
    title: "Scythe Swing",
    description: "Swings in a half circle arc in front.",
    src: "/scythe.png",
  },
];
const Features = () => {
  return (
    <section className="mx-3 rounded-lg bg-[#1A4762] px-3">
      <h2 className="mx-auto mt-[-22px] flex h-11 w-fit items-center rounded-full bg-[#f1f1f1] px-6 py-1 text-xl font-semibold text-[#1A4762]">
        Features
      </h2>
      <div className="mt-9 flex flex-col gap-9">
        <div className="flex items-center">
          <img
            className="max-w-[60%]"
            src="/specials.webp"
            alt="Calliope Mori using her ultimate skill, which summons a huge death god, giving her a buff."
          />
          <p className="-ml-20 rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762]">
            Unique skills and special attacks for every character
          </p>
        </div>

        <div className="relative flex items-center">
          <p className="-mr-20 rounded-lg bg-white py-2 px-4 text-xs font-medium text-[#1A4762]">
            Unlock dozens of different weapons and passive items
          </p>
          <div className="relative top-0 left-0 ">
            {WEAPON_CARDS.map((card, ind) => {
              return (
                <WeaponCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  src={card.src}
                  alt={card.title}
                  className={``}
                />
              );
            })}
            {/* <WeaponCard
              title="Pistol Shot"
              description="Shoots 3 projectiles forward. Horizontal only."
              src="/gun.png"
              alt=""
              className="absolute"
            />
            <WeaponCard
              title="Trident Thrust"
              description="Mid ranged stab attack in front."
              src="/trident.png"
              alt=""
              className="absolute"
            />
            <WeaponCard
              title="Summon tentacle"
              description="A tentacle shoots out in front."
              src="/tentacle.png"
              alt=""
              className="absolute"
            />
            <WeaponCard
              title="Phoenix Sword"
              description="Short ranged slash in front."
              src="/tentacle.png"
              alt=""
              className="absolute"
            />
            <WeaponCard
              title="Scythe Swing"
              description="Swings in a half circle arc in front."
              src="/scythe.png"
              alt=""
              className="absolute"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
