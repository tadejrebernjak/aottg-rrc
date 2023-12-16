import { Link, useLocation } from "react-router-dom";
import { LinkProps } from "../Types";

export default function NavbarLink({ text, to }: LinkProps) {
  const { pathname } = useLocation();

  return pathname !== to ? (
    <Link
      to={to}
      className="relative group h-max text-3xl hover:text-rrc-red transition-colors duration-300"
    >
      <span>{text}</span>
      <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-rrc-red to-rrc-red-light group-hover:w-1/2 group-hover:transition-all"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-gradient-to-l from-rrc-red to-rrc-red-light group-hover:w-1/2 group-hover:transition-all"></span>
    </Link>
  ) : (
    <div className="relative group h-max text-3xl text-rrc-red">
      <span>{text}</span>
      <span className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-rrc-red to-rrc-red-light"></span>
      <span className="absolute -bottom-1 right-1/2 w-1/2 h-1 bg-gradient-to-l from-rrc-red to-rrc-red-light"></span>
    </div>
  );
}
