import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_text.png";
import logo_landscape from "../assets/images/logo_text_landscape.png";
import NavbarLink from "./NavbarLink";
import { LinkProps } from "../Types";

type Props = {
  onToggleSidebar: () => void;
};

export default function Header({ onToggleSidebar }: Props) {
  const linksLeft: LinkProps[] = [
    { text: "Download", to: "/download" },
    { text: "Setup", to: "/setup" },
    { text: "Tools", to: "/tools" },
  ];

  const linksRight: LinkProps[] = [
    { text: "Community", to: "/community" },
    { text: "Leaderboard", to: "/leaderboard" },
    { text: "Home", to: "/" },
  ];

  return (
    <header className="h-[150px] px-10 flex justify-between items-center bg-rrc-blue flex-wrap flex-row gap-3 lg:gap-0 border-b-2 border-rrc-blue-light">
      <button
        className="block lg:hidden text-5xl hover:text-rrc-platinum transition-colors"
        onClick={onToggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className="hidden lg:flex items-center flex-wrap gap-6 flex-row w-1/3">
        {linksLeft.map(({ text, to }) => {
          return <NavbarLink key={text} text={text} to={to} />;
        })}
      </nav>

      <div className="flex items-center lg:mx-auto m-2">
        <Link to="/" className="h-max">
          <img src={logo} className="hidden lg:block h-[125px]" alt="logo" />
          <img
            src={logo_landscape}
            className="lg:hidden w-[200px]"
            alt="logo_landscape"
          />
        </Link>
      </div>

      <nav className="hidden lg:flex items-center flex-wrap gap-6 flex-row-reverse w-1/3">
        {linksRight.map(({ text, to }) => {
          return <NavbarLink key={text} text={text} to={to} />;
        })}
      </nav>
    </header>
  );
}
