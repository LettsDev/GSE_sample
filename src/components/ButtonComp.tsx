import { forwardRef } from "react";

type Ref = HTMLButtonElement;
interface Props {
  children: React.ReactNode;
  style?: string;
}

const ButtonComp = forwardRef<Ref, Props>((props, ref) => {
  const {
    children,
    style = "bg-orange-500 p-3 rounded-lg w-full text-white font-medium ",
  } = props;
  return (
    <button className={style} ref={ref}>
      {children}
    </button>
  );
});

export default ButtonComp;
