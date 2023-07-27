interface Props {
  setTableNav: React.Dispatch<
    React.SetStateAction<"equipment" | "services" | "tickets">
  >;
  tableNav: "equipment" | "services" | "tickets";
}

export default function NavList({ tableNav, setTableNav }: Props) {
  const labels: ("equipment" | "services" | "tickets")[] = [
    "equipment",
    "services",
    "tickets",
  ];
  return (
    <ul className=" flex p-1 w-full max-w-screen-sm">
      {labels.map((label) => (
        <li
          key={label}
          className={
            " p-3  cursor-pointer  rounded-lg font-medium grow text-center" +
            (label.toLocaleLowerCase() === tableNav
              ? " bg-white transition-transform hover:scale-95"
              : " hover:bg-slate-200 ")
          }
          onClick={() => setTableNav(label)}
        >
          {label.toLocaleUpperCase()}
        </li>
      ))}
    </ul>
  );
}
