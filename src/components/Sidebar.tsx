import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import { LinkProps } from "../Types";

type Props = {
  sidebar: boolean;
  onToggleSidebar: () => void;
};

const links: LinkProps[] = [
  { text: "Home", to: "/" },
  { text: "Leaderboard", to: "/leaderboard" },
  { text: "Community", to: "/community" },
  { text: "Download", to: "/download" },
  { text: "Setup", to: "/setup" },
  { text: "Tools", to: "/tools" },
];

export default function Sidebar({ sidebar, onToggleSidebar }: Props) {
  function handleClickLink() {
    if (sidebar) onToggleSidebar();
  }

  return (
    <>
      <div
        className={clsx(
          "fixed h-screen bg-rrc-blue-dark shadow-lg shadow-black z-50 transition-all duration-200 overflow-hidden",
          sidebar && "w-[300px]",
          !sidebar && "w-0"
        )}
      >
        <div className="flex h-[150px] px-10 bg-rrc-blue-darker items-center">
          <button
            className="block lg:hidden text-5xl hover:text-rrc-platinum transition-colors"
            onClick={onToggleSidebar}
          >
            {sidebar ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        <ul className="flex flex-col font-bignoodle p-5 gap-5">
          {links.map(({ text, to }) => {
            return (
              <SidebarLink
                key={text}
                text={text}
                to={to}
                onClick={handleClickLink}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-black transition-opacity",
          !sidebar && "opacity-0 hidden",
          sidebar && "opacity-50"
        )}
        onMouseUp={onToggleSidebar}
      ></div>
    </>
  );
}
