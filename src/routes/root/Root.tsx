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
      <footer className="text-sm text-end ">
        <hr />
        <p className="mr-3">2023 LettsDev</p>
      </footer>
    </div>
  );
}
