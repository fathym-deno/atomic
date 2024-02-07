import {
  ComponentChildren,
  ForwardedRef,
  forwardRef,
  JSX,
} from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.ts";

export type SelectProps = {
  children: ComponentChildren;

  ref?: ForwardedRef<HTMLSelectElement>;
} & JSX.HTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(
  (props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        {...props}
        ref={ref}
        class={classSet(
          [
            "-:w-full -:text-gray-800 -:dark:text-gray-100 -:bg-white -:dark:bg-gray-700 -:border -:border-gray-400 -:hover:border-gray-500 -:px-4 -:py-2 -:rounded-lg -:shadow-sm -:focus:outline-none -:focus:shadow-lg -:focus:border-blue-500 -:placeholder-gray-500",
          ],
          props,
        )}
      >
        {props.children}
      </select>
    );
  },
);
