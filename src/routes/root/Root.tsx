import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function Root() {
  return (
    <div className="root">
      <header className="  pt-1  ">
        <NavBar />
        <hr className="w-full" />
      </header>
      <Outlet />
    </div>
  );
}
