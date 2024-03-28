import { ForwardedRef } from "../../src.deps.ts";
import {
  ComponentChildren,
  forwardRef,
  JSX,
  useState,
} from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.ts";

export const IsIsland = true;

export type SlideToggleProps = {
  children?: ComponentChildren;

  ref?: ForwardedRef<HTMLInputElement>;
} & JSX.HTMLAttributes<HTMLInputElement>;

export default function SlideToggle(props: SlideToggleProps) {
  return forwardRef(
    (props: SlideToggleProps, ref: ForwardedRef<HTMLInputElement>) => {
      // const { checked, value, ...rest } = props;

      // const [checkedState, setCheckedState] = useState(checked);

      //       // onChange={() => setCheckedState(!checked)}
      //       // value={value}
      //       // checked={checkedState}
      return (
        <label class="relative flex flex-wrap items-center cursor-pointer">
          <input {...props} type="checkbox" ref={ref} class="sr-only peer" />

          <div
            class={classSet(
              [
                "-:flex-none -:w-11 -:h-6 -:rounded-full",
                "-:bg-gray-200 -:dark:bg-gray-700 -:border-gray-400 -:dark:border-gray-600",
                "-:after:content-[''] -:after:absolute -:after:top-[2px] -:after:left-[2px] -:after:border -:after:rounded-full -:after:h-5 -:after:w-5 -:after:transition-all",
                "-:after:bg-white -:after:border-gray-300",
                // '-:peer-focus:outline-none -:peer-focus:ring-4 -:peer-focus:ring-blue-300 -:dark:peer-focus:ring-blue-800',
                "-:peer-checked:after:translate-x-full -:peer-checked:after:border-white -:peer-checked:bg-green-200 -:peer-checked:dark:bg-green-700",
              ],
              props,
            )}
          >
          </div>

          {props.children}
        </label>
      );
    },
  );
}
