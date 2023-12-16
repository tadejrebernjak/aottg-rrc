import ModCard from "../components/ModCard";
import logo from "../assets/images/logo.png";
import { Mod } from "../Types";

const mods: Mod[] = [
  {
    fullName: "Ranked RiceCake Mod",
    acronym: "RRC",
    description:
      "RRC (Ranked RiceCake) mod is a modified version of an older release of the RC mod, made specifically for the ranking community. It supports many extra features that help you grind for ranks and it is the recommended mod to use for proving the legitimacy of your rank submissions.",
    link: "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
    image: logo,
  },
  {
    fullName: "RiceCake Mod",
    acronym: "RC",
    description:
      "RC (RiceCake) mod is the most widespread client for the game currently and most other mods are based off of it.",
    link: "http://aotrc.weebly.com/download.html",
    image: logo,
  },
  {
    fullName: "TLW Mod",
    acronym: "TLW",
    description:
      "A modified version of the RC mod, made specifically for the bomb PvP community.",
    link: "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
    image: logo,
  },
  {
    fullName: "Guardian Mod",
    acronym: undefined,
    description: "idk lol",
    link: "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
    image: logo,
  },
  {
    fullName: "Anarchy Mod",
    acronym: undefined,
    description: "anarchy",
    link: "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
    image: logo,
  },
  {
    fullName: "Expedition Mod",
    acronym: undefined,
    description: "XD",
    link: "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
    image: logo,
  },
];

export default function Download() {
  return (
    <>
      <h1 className="text-5xl text-rrc-red-light mb-10 text-center">
        Download
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-10">
        {mods.map((mod) => {
          return (
            <ModCard
              key={mod.fullName}
              fullName={mod.fullName}
              acronym={mod.acronym || undefined}
              description={mod.description}
              link={mod.link}
              image={mod.image}
            ></ModCard>
          );
        })}
      </section>
    </>
  );
}
