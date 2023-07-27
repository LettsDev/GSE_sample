import { NavList } from ".";
import ButtonComp from "../ButtonComp";
import TextInputComp from "../TextInputComp";
interface Props {
  tableNav: "equipment" | "services" | "tickets";
  setTableNav: React.Dispatch<
    React.SetStateAction<"equipment" | "services" | "tickets">
  >;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export default function Toolbar({
  tableNav,
  setTableNav,
  query,
  setQuery,
}: Props) {
  return (
    <div className=" flex flex-col items-center ">
      <NavList tableNav={tableNav} setTableNav={setTableNav} />
      <div className="bg-inherit py-3 px-1 flex  gap-1 w-full max-w-screen-sm">
        {/* search bar */}

        <TextInputComp
          label="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <ButtonComp>Add</ButtonComp>
      </div>
    </div>
  );
}
