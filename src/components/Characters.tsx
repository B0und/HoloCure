import clsx from "clsx";
import React, { useState } from "react";

interface IRoundedButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isActive: boolean;
}
const RoundedButton = (props: IRoundedButton) => {
  const { isActive, text, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={clsx(
        "whitespace-nowrap rounded-full border-2 border-white py-1 px-3 text-sm text-white",
        {
          "border-[#FF9EC6] text-[#FF9EC6]": isActive,
        }
      )}
    >
      {text}
    </button>
  );
};

interface IHololiveData {
  src: string;
  alt: string;
  name: string;
  jpName: string;
  description?: string;
}
const hololiveData: Record<string, IHololiveData[]> = {
  Myth: [
    {
      src: "/carousel/calli.png",
      alt: "calli",
      name: "Mori Calliope",
      jpName: "森カリオペ",
      description: `The Grim Reaper's first apprentice. Due to modern medical care causing a decline in the reaping business, Calliope decided to become a VTuber to harvest souls instead. It seems that the ascended souls of the people who are vaporized by the wholesome interactions between VTubers go to her as well. 
      
        That being said, despite the image her hardcore vocals and manner of speech gives off, she's actually a gentle-hearted girl who cares greatly for her friends.`,
    },
    { src: "/carousel/kiara.png", alt: "kiara", name: "Takanashi Kiara", jpName: "" },
    { src: "/carousel/ina.png", alt: "ina", name: "Ninomae Inanis", jpName: "" },
    { src: "/carousel/gura.png", alt: "gura", name: "Gawr Gura", jpName: "" },
    { src: "/carousel/ame.png", alt: "ame", name: "Amelia Watson", jpName: "" },
  ],
};

type GenType = "Myth" | "Council" | "Hope" | "Gamers" | "JP Gen 0";
const GENS: GenType[] = ["Myth", "Council", "Hope", "Gamers", "JP Gen 0"];

const CharactersSection = () => {
  const [selectedGen, setSelectedGen] = useState<GenType>("Myth");
  const [selectedVtuber, setSelectedVtuber] = useState(0);

  const genMembers = hololiveData[selectedGen];
  const vtuber = genMembers?.[selectedVtuber];

  return (
    <section className="bleed-wrapper  ">
      <div className="full-bleed  flex flex-col items-start gap-8 bg-[#1A4762] py-8 px-6">
        <h2 className="mx-auto mt-[-52px] flex h-11 w-fit items-center rounded-full bg-[#f1f1f1] px-6 py-1 text-xl font-semibold text-[#1A4762]  md:h-14 md:px-10 md:text-3xl">
          Choose your idol
        </h2>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
          {GENS.map((gen, ind) => (
            <RoundedButton
              text={gen}
              key={gen}
              onClick={() => setSelectedGen(GENS[ind])}
              isActive={GENS[ind] === selectedGen}
            />
          ))}
        </div>

        <div className="item-center flex flex-wrap gap-8 ">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {genMembers?.map((vtuber, ind) => (
                <button key={vtuber.src} onClick={() => setSelectedVtuber(ind)}>
                  <img
                    className={clsx("min-w-[64px] max-w-[64px] grayscale", {
                      "grayscale-0": ind === selectedVtuber,
                    })}
                    src={vtuber.src}
                    alt={vtuber.alt}
                  />
                </button>
              ))}
            </div>
            <div className="flex flex-col text-white">
              <h2 className=" text-2xl ">{vtuber?.name}</h2>
              <p className="-mt-1">{vtuber?.jpName}</p>
              <p className="max-w-prose pt-3 font-inter text-sm text-[#CDCDCD]">
                {vtuber?.description}
              </p>
            </div>
          </div>
          <img className="mx-auto" src="/temp.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
