import ModCard from "../components/ModCard";
import rrc from "../assets/images/RRC.png";
import prolonpo from "../assets/images/prolonpo.png";
import rc from "../assets/images/RC.png";
import anarchy from "../assets/images/Anarchy.png";
import guardian from "../assets/images/Guardian.png";
import { Mod } from "../Types";

const mods: Mod[] = [
  {
    fullName: "Ranked RiceCake Mod",
    acronym: "RRC",
    creators: ["Chaos", "Syal", "SoupThyme"],
    description:
      "An advanced version of RC mod, designed for competitive gameplay. Used by the AoTTG Ranking Community. It supports many extra features that help you grind for ranks and it is the recommended mod to use for proving the legitimacy of your rank submissions.",
    image: rrc,
    category: "green",
    links: {
      download:
        "https://www.mediafire.com/file/kb2u5jl8xyxbmgk/RRC_Launcher.rar/file",
      site: "http://localhost:3000/download",
      discord: "https://discord.gg/Z3HPvMKgm8",
    },
  },
  {
    fullName: "RiceCake Mod",
    acronym: "RC",
    creators: ["RiceCake"],
    description:
      "Considered the the most official / baseline version of AoTTG. Most other mods are built off some version of RC.",
    image: rc,
    category: "green",
    links: {
      download: "http://aotrc.weebly.com/download.html",
      site: "http://aotrc.weebly.com",
      discord: "https://discord.gg/rBXBHhKPH7",
    },
  },
  {
    fullName: "Anarchy Mod",
    acronym: undefined,
    creators: ["Order", "Saber"],
    description:
      "An alternative version of the game, close to source material. It includes revamped UI, optimization and performance improvements, improved security and enhanced custom maps.",
    image: anarchy,
    category: "green",
    links: {
      download: "https://www.dropbox.com/s/6xdlszjdc6c6a45/Anarchy.exe?dl=0",
      site: undefined,
      discord: "https://discord.gg/8wy5Pkm",
    },
  },
  {
    fullName: "AoT AntiCheat Mod",
    acronym: "AC",
    creators: ["Josh"],
    description:
      '"This client aims to stop any cheats that are abusive or considerably advantage-giving, as well as fix most bugs and provide a better experience, with some miscellaneous utilities/fun things on the side - it\'s not perfect but it works!" -From the website',
    image: undefined,
    category: "green",
    links: {
      download: "https://aottgfan.site/clients/aotanticheat/AoTAC.zip",
      site: "http://aotanticheat.weebly.com/",
      discord: undefined,
    },
  },
  {
    fullName: "Cyrus' Essentials Mod",
    acronym: "CE",
    creators: ["Cyrus"],
    description:
      '"The Cyrus\' Essentials (CE) mod is my attempt to include all the Essentials of enjoying the base AOTTG experience into one mod, as well as some popular options and personal picks that I think help give you more options and enjoyment. Details will be in an upcoming video, but the following list should give you a basic idea." -From the website',
    image: undefined,
    category: "green",
    links: {
      download: "https://goo.gl/LZSxor",
      site: "http://cyrusaot.weebly.com/ce.html",
      discord: undefined,
    },
  },
  {
    fullName: "Cyrus' RiceCake Mod",
    acronym: "CRC",
    creators: ["Cyrus"],
    description:
      '"It was supposed to be the successor to the RC mod. Ricecake himself gave me his source code and entrusted that task to me when he left. At first I was basically going to copy it over to my active project and just build off of that. My initial release date was a few weeks after the source code was given to me. Next, I started seeing all kinds of stuff I wanted to redo and expand. So then the release date switched to whenever it was done and I started rewriting it from the ground up." -From the website',
    image: undefined,
    category: "green",
    links: {
      download: "https://www.dropbox.com/s/xkhaxtdjlv005ox/CRC.exe?dl=0",
      site: "http://cyrusaot.weebly.com/crc.html",
      discord: undefined,
    },
  },
  {
    fullName: "The Last Winter Mod",
    acronym: "TLW",
    creators: ["Syal", "Syne", "SoupThyme"],
    description:
      "A modified version of the RC mod, made specifically for the bomb PvP community. It also includes some features like changing the physics update rate, which makes kills on titans registering easier. Therefore, it's not allowed to use for rank submissions.",
    image: undefined,
    category: "orange",
    links: {
      download: undefined,
      site: undefined,
      discord: "https://discord.gg/rJyazCYrqN",
    },
  },
  {
    fullName: "Guardian Mod",
    acronym: undefined,
    creators: ["Hannah"],
    description:
      "A free, open-source, and feature-rich mod for AoTTG. It includes custom textures and sounds, highly customizable in-game settings, more gamemodes and map options.",
    image: guardian,
    category: "orange",
    links: {
      download: "https://aottgfan.site/clients/guardian/ModLauncher.exe",
      site: "https://aottgfan.site",
      discord: "https://discord.gg/JGzTdWm",
    },
  },
  {
    fullName: "AottgRC x Prolonpo",
    acronym: undefined,
    creators: ["Prolonpo"],
    description:
      "AottgRC x Prolonpo is a mod that builds upon the RC mod in order to add new long-desired features to the game such as: New Supplier Class capable of dropping resupply kits, Titan on Titan friendly fire (titans can kill other titans), New Game Mode to Rescue a Stranded Boat in Titan Territory, Thunder Spears that can kill titans and more.",
    image: prolonpo,
    category: "orange",
    links: {
      download: "https://aottgfan.site/clients/guardian/ModLauncher.exe",
      site: "https://aottgfan.site",
      discord: "https://discord.gg/JGzTdWm",
    },
  },
  {
    fullName: "Anarchy-Expedition Mod",
    acronym: "AEM",
    creators: ["sonicv6"],
    description: "XD",
    image: undefined,
    category: "orange",
    links: {
      download:
        "https://drive.google.com/file/d/1f7SlZY_Ta3V1uEtUwYxHP86wB_4sNun4/view?usp=sharing",
      site: undefined,
      discord: "https://discord.gg/Prvq5dFTTs",
    },
  },
];

export default function Download() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl text-rrc-red-light text-center">Download</h1>
      <section className="text-justify">
        <p>
          The game was originally hosted directly on its official website, but
          has been down for quite some time. Therefore, you can only play the
          game by using one of its modified desktop clients. Here you can find a
          list of the most widespread mods for the game.
        </p>
        <div className="mt-10">
          <p>
            <span className="text-rrc-red text-lg font-bold">IMPORTANT:</span>{" "}
            If you want to rank up in our community, we{" "}
            <span className="text-green-400">
              HIGHLY RECOMMEND using our mod - RRC
            </span>
            . Using this mod contributes a lot to validating the legitimacy of
            your scores, as well as offers many tools to help you play our game
            modes. The other mods are marked as follows{" "}
            <span className="text-rrc-damage">
              based on their allowance for rank submissions
            </span>
            . Some green mods may be outdated and unable to connect to the
            multiplayer servers, but are still allowed for rank submissions,
            because most if not all of our challenges can be done in
            singleplayer or offline mode:
          </p>
          <ul className="text-left list-disc ml-16 [&>li]:my-3">
            <li>
              <span className="text-green-400">GREEN:</span> These mods are also
              allowed for most of our categories{" "}
              <span className="text-rrc-damage underline">
                with some rare exceptions
              </span>
              . (For example, RC mod can disable punk waves in multiplayer, thus
              making waves 5, 10, 15 and 20 much easier. Therefore, do not use
              RC requirements that makes you do runs in multiplayer or offline
              mode)
            </li>
            <li>
              <span className="text-rrc-master">ORANGE:</span> These mods
              currently work, but are{" "}
              <span className="text-rrc-red">
                NOT allowed for rank submissions
              </span>
              . Use them freely for your other needs.
            </li>
          </ul>
        </div>
        <p>
          For more information regarding mods (like OS and multiplayer servers
          compatibility), you can check out{" "}
          <a href="https://aottgfan.site" target="_blank" rel="noreferrer">
            Hannah's website
          </a>
          .
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10">
        {mods.map((mod) => {
          return (
            <ModCard
              key={mod.fullName}
              fullName={mod.fullName}
              acronym={mod.acronym || undefined}
              creators={mod.creators}
              description={mod.description}
              links={mod.links}
              category={mod.category}
              image={mod.image}
            ></ModCard>
          );
        })}
      </section>
    </div>
  );
}
