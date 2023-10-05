import { ComponentChildren, type JSX, useState } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.tsx";

export type InputProps =
  & (
    | JSX.HTMLAttributes<HTMLInputElement>
    | JSX.HTMLAttributes<HTMLTextAreaElement>
  )
  & {
    multiline?: boolean;

    prepareValue?: (value: string) => string;
  };

export function Input(props: InputProps) {
  const { prepareValue, value, ...rest } = props;

  const [valueState, setValue] = useState(value);

  const onValueChange = (value: string) => {
    if (prepareValue) {
      value = prepareValue(value);
    }

    setValue(value);
  };

  const onTextAreaChange = (
    e: JSX.TargetedEvent<HTMLTextAreaElement, Event>,
  ) => {
    const target = (e.target as HTMLTextAreaElement)!;

    onValueChange(target.value);
  };

  const onInputChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const target = (e.target as HTMLInputElement)!;

    onValueChange(target.value);
  };

  const input = props.multiline
    ? (
      <textarea
        onChange={onTextAreaChange}
        {...(rest as JSX.HTMLAttributes<HTMLTextAreaElement>)}
        value={valueState}
        class={classSet(
          props,
          "w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        )}
      >
      </textarea>
    )
    : (
      <input
        onChange={onInputChange}
        {...(rest as JSX.HTMLAttributes<HTMLInputElement>)}
        value={valueState}
        type={props.type || "text"}
        class={classSet(
          props,
          "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        )}
      />
    );

  return input;
}
