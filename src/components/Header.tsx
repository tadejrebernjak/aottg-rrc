import { Link } from "react-router-dom";
import logo from "../assets/images/logo_text.png";
import NavbarLink from "./NavbarLink";

export default function Header() {
  return (
    <header className="py-5 px-10 flex justify-between items-center bg-rrc-blue flex-wrap flex-col lg:flex-row gap-3 lg:gap-0 border-b-2 border-rrc-blue-light">
      <nav className="flex items-center flex-wrap gap-6 flex-row lg:w-1/3">
        <NavbarLink text="Download" link="/download" />
        <NavbarLink text="Setup" link="/setup" />
        <NavbarLink text="Tools" link="/tools" />
      </nav>

      <div className="flex items-center mx-auto m-2">
        <Link to="/" className="h-max">
          <img src={logo} width={125} height={125} alt="logo" />
        </Link>
      </div>

      <nav className="flex items-center flex-wrap gap-6 flex-row-reverse lg:w-1/3">
        <NavbarLink text="Community" link="/community" />
        <NavbarLink text="Leaderboard" link="/leaderboard" />
        <NavbarLink text="Home" link="/" />
      </nav>
    </header>
  );
}
