import { NavLinkProps } from "react-router-dom";

export type LinkProps = {
  text: string;
} & NavLinkProps;

export type Mod = {
  fullName: string;
  acronym: string | undefined;
  creators: string[];
  image: string | undefined;
  description: string;
  category: "green" | "orange";
  links: {
    download: string | undefined;
    site: string | undefined;
    discord: string | undefined;
  };
};
