import { NavLinkProps } from "react-router-dom";

export type LinkProps = {
  text: string;
} & NavLinkProps;

export type Mod = {
  fullName: string;
  acronym: string | undefined;
  image: string;
  link: string;
  description: string;
};
