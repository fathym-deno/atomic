import { ComponentChildren, JSX, useState } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.tsx";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
};

export function Input(props: InputProps) {
  const { placeholder, ...rest } = props;

  const [value, setValue] = useState("");

  return (
    <input
      {...rest}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      class={classSet(
        props,
        "w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      )}
    />
  );
}