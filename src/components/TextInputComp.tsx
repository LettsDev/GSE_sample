import { forwardRef } from "react";

interface Props {
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
type Ref = HTMLInputElement;

const TextInputComp = forwardRef<Ref, Props>((props, ref) => {
  const { label, value, onChange } = props;
  return (
    <div className="w-1/2 sm:w-96 flex items-center">
      <label htmlFor={label}>{label}</label>
      <input
        ref={ref}
        type="text"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-slate-500 focus:border-orange-500 focus:ring-orange-500 focus:ring-1 caret-blue-600 w-full ml-1"
      />
    </div>
  );
});
export default TextInputComp;
