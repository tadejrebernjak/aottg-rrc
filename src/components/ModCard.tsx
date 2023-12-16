import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faWrench } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Mod } from "../Types";

export default function ModCard({
  fullName,
  acronym,
  image,
  link,
  description,
}: Mod) {
  const isRRC = acronym === "RRC";

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 p-5 md:p-10 rounded-lg",
        !isRRC && "bg-slate-900",
        isRRC && "bg-slate-800 col-span-2"
      )}
    >
      <div className="flex items-center gap-5">
        <img src={image} alt={fullName} className="rounded-full w-20 h-20" />
        <div>
          <h2 className="text-3xl">
            {fullName + (acronym !== undefined ? " - " + acronym : "")}
          </h2>
        </div>
      </div>
      <hr className="border-rrc-platinum" />
      <p className="text-justify">{description}</p>
      <div className="flex gap-4 flex-row flex-wrap justify-end">
        <Link to={"/setup"} className={clsx(acronym !== "RRC" && "hidden")}>
          <button className="p-3 float-right bg-rrc-blue-light text-white text-2xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faWrench} className="mr-2" />
            Setup
          </button>
        </Link>
        <a href={link}>
          <button className="p-3 float-right bg-rrc-blue-light text-white text-2xl rounded-lg hover:bg-rrc-red-light transition-colors">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
