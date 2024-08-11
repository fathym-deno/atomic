import { ComponentChildren, JSX } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.ts";

export type InputWrapperProps = {
  children: ComponentChildren;

  isNumber?: boolean;

  position?: "prefix" | "suffix";

  text?: string;
} & JSX.HTMLAttributes<HTMLDivElement>;

export function InputWrapper(props: InputWrapperProps): JSX.Element {
  const position = props.position || "suffix";

  return (
    <div
      data-after-content={props.text || ""}
      {...props}
      class={classSet(
        [
          "-:relative -:after:absolute -:after:content-[attr(data-after-content)] -:after:transition-all",
          "-:after:text-gray-600 -:dark:after:text-gray-400",
          position === "suffix" ? "-:after:right-2" : "-:after:left-2",
          props.isNumber && position === "suffix"
            ? "-:focus-within:after:right-6 -:hover:after:right-6"
            : undefined,
        ],
        props,
      )}
    >
      {props.children}
    </div>
  );
}
