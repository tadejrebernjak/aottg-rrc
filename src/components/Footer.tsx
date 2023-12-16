import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo_text_landscape.png";

export default function Footer() {
  return (
    <footer className="px-5 py-10 flex justify-center items-center text-lg bg-rrc-blue-dark flex-wrap flex-col-reverse sm:flex-row gap-3 sm:gap-10 border-t-2 border-rrc-blue">
      <div className="">
        <Link to="/" className="h-max">
          <img src={logo} width={200} height={200} alt="logo" />
        </Link>
      </div>
      <div>
        <h2 className="text-2xl">Join us:</h2>
        <a
          href="https://discord.gg/Z3HPvMKgm8"
          target="_blank"
          rel="noreferrer"
          className="hover:text-rrc-red-light transition-colors"
        >
          <FontAwesomeIcon icon={faDiscord} className="mr-2" />
          Discord
        </a>
      </div>
      <div>
        <h2 className="text-2xl">Follow us:</h2>
        <a
          href="https://youtube.com/@aottgrankingcommunity9881"
          target="_blank"
          rel="noreferrer"
          className="hover:text-rrc-red-light transition-colors"
        >
          <FontAwesomeIcon icon={faYoutube} className="mr-2" />
          YouTube
        </a>
      </div>
    </footer>
  );
}
