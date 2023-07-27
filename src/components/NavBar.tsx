import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import navConfig from "../routes/root/navConfig";
import { NavLink } from "react-router-dom";
import pascoLogo from "../assets/pasco_icon.svg";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
export default function NavBar() {
  const location = useLocation();

  const customTheme: CustomFlowbiteTheme = {
    navbar: {
      link: {
        active: {
          on: "bg-orange-500 text-white md:bg-transparent md:text-orange-500",
        },
      },
    },
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid rounded className="pl-3">
        <Navbar.Brand href="/">
          <img
            src={pascoLogo}
            alt="GSE logo"
            className="mr-3 h-7 sm:h-8 md:h-9 rounded-full"
          />
          <h1 className=" font-serif text-xl">Sample</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navConfig.map((link) => (
            <Navbar.Link
              as={NavLink}
              to={link.to}
              key={link.label}
              active={location.pathname === link.to}
            >
              {link.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
