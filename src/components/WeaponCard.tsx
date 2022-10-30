import clsx from "clsx";
import React from "react";

interface IWeaponCard {
  title: string;
  description: string;
  src: string;
  alt: string;
  className?: string;
}

const WeaponCard = ({ title, description, src, alt, className }: IWeaponCard) => {
  return (
    <div
      className={clsx(
        "min-w-fit max-w-[225px] rounded-lg bg-[#4abef9] p-1 font-vt text-base text-white",
        className
      )}
    >
      <div className="flex items-center">
        <img className="h-8" src={src} alt={alt} />
        <h3>{title}</h3>
      </div>

      <p className="leading-none text-[#e4e4e4]">{description}</p>
    </div>
  );
};

export default WeaponCard;
