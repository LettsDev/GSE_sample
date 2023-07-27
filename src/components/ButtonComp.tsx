import { forwardRef } from "react";

type Ref = HTMLButtonElement;
interface Props {
  children: React.ReactNode;
  style?: string;
}

const ButtonComp = forwardRef<Ref, Props>((props, ref) => {
  const {
    children,
    style = "bg-orange-500 p-3 rounded-lg  text-white font-medium w-1/2 ",
  } = props;
  return (
    <button className={style} ref={ref}>
      {children}
    </button>
  );
});

export default ButtonComp;
