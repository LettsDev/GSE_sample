import { ReactElement } from "react";
import { IconType } from "react-icons";
export type NavType = {
  to: string;
  label?: string;
  icon?: IconType;
  navClassActive?: string;
  navClassPending?: string;
  navClassDefault?: string;
};
