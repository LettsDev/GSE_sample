import { IconType } from "react-icons";
import { NavType } from "../../components/component.types";
import { FaHouse, FaCalendar, FaTable } from "react-icons/fa6";

const navConfig: NavType[] = [
  { to: "/", label: "home", icon: FaHouse as IconType },
  { to: "/calendar", label: "calendar", icon: FaCalendar as IconType },
  { to: "/tables", label: "tables", icon: FaTable as IconType },
  // { to: "/admin", label: "admin", icon: FaHammer as IconType },
];
export default navConfig;
