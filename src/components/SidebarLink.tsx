import { Link, useLocation } from "react-router-dom";
import { LinkProps } from "../Types";

interface Props extends LinkProps {
  onClick: () => void;
}

export default function SidebarLink({ text, to, onClick }: Props) {
  const { pathname } = useLocation();

  return pathname !== to ? (
    <Link
      to={to}
      className="relative group h-max text-3xl hover:text-rrc-red transition-colors duration-300"
      onClick={onClick}
    >
      <span>{text}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-rrc-red to-rrc-red-light group-hover:w-full group-hover:transition-all"></span>
    </Link>
  ) : (
    <div className="relative group h-max text-3xl text-rrc-red">
      <span>{text}</span>
      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-rrc-red to-rrc-red-light"></span>
    </div>
  );
}
