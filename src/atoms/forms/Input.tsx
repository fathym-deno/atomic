import { ComponentChildren, type JSX, useState } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.tsx";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement> & {
  prepareValue?: (value: string) => string;
};

export function Input(props: InputProps) {
  const { prepareValue, value, ...rest } = props;

  const [valueState, setValue] = useState(value);

  return (
    <input
      onChange={(e) => {
        const target = (e.target as HTMLInputElement)!;

        let value = target.value;

        if (prepareValue) {
          value = prepareValue(value);
        }

        setValue(value);
      }}
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
