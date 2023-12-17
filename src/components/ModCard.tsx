import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faGlobe,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Mod } from "../Types";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function ModCard({
  fullName,
  acronym,
  creators,
  image,
  description,
  category,
  links,
}: Mod) {
  const isRRC = acronym === "RRC";

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 p-5 md:p-10 rounded-lg border-2 justify-between",
        isRRC && "bg-slate-800 lg:col-span-2",
        !isRRC && "bg-slate-900",
        category === "green" && "border-green-700",
        category === "orange" && "border-yellow-700"
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <img src={image} alt={fullName} className="rounded-full w-20 h-20" />
          <div>
            <h2 className="text-3xl">
              {fullName + (acronym !== undefined ? " - " + acronym : "")}
            </h2>
            <h3 className="text-xl">
              By{" "}
              {creators.map((creator, i) => {
                if (i === creators.length - 1) return creator;
                else return creator + ", ";
              })}
            </h3>
          </div>
        </div>
        <hr className="border-rrc-platinum" />
        <p className="text-justify">{description}</p>
      </div>
      <div className="flex gap-4 flex-row flex-wrap justify-end">
        <a
          className={clsx(links.site === undefined && "hidden")}
          href={links.site}
        >
          <button className="p-2 bg-rrc-blue-light text-white text-xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            Website
          </button>
        </a>
        <a
          className={clsx(links.discord === undefined && "hidden")}
          href={links.discord}
        >
          <button className="p-2 bg-rrc-blue-light text-white text-xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faDiscord} className="mr-2" />
            Discord
          </button>
        </a>
        <Link to={"/setup"} className={clsx(acronym !== "RRC" && "hidden")}>
          <button className="p-2 bg-rrc-blue-light text-white text-xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faWrench} className="mr-2" />
            Setup
          </button>
        </Link>
        <a
          className={clsx(links.download === undefined && "hidden")}
          href={links.download}
        >
          <button className="p-2 bg-rrc-blue-light text-white text-xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
