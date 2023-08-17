import { ComponentChildren, JSX, useState } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.tsx";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { value, ...rest } = props;

  const [valueState, setValue] = useState(value);

  return (
    <input
      onChange={(e) => setValue((e.target as HTMLInputElement)!.value)}
      {...rest}
      value={valueState}
      type="text"
      class={classSet(
        props,
        "w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      )}
    />
  );
}
