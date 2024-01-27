import { ComponentChildren, JSX, useState } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.ts";

export type SlideToggleProps = JSX.HTMLAttributes<HTMLInputElement> & {
  children?: ComponentChildren;
};

export function SlideToggle(props: SlideToggleProps) {
  // const { checked, value, ...rest } = props;

  // const [checkedState, setCheckedState] = useState(checked);

  //       // onChange={() => setCheckedState(!checked)}
  //       // value={value}
  //       // checked={checkedState}
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input {...props} type="checkbox" class="sr-only peer" />

      <div
        class={classSet(
          [
            "peer -:w-11 -:h-6 -:bg-gray-200 -:peer-focus:outline-none -:peer-focus:ring-4 -:peer-focus:ring-blue-300 -:dark:peer-focus:ring-blue-800 -:rounded-full -:dark:bg-gray-700 -:peer-checked:after:translate-x-full -:peer-checked:after:border-white -:after:content-[''] -:after:absolute -:after:top-[2px] -:after:left-[2px] -:after:bg-white -:after:border-gray-300 -:after:border -:after:rounded-full -:after:h-5 -:after:w-5 -:after:transition-all -:dark:border-gray-600 -:peer-checked:bg-blue-600",
          ],
          props,
        )}
      >
      </div>

      {props.children && (
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.children}
        </span>
      )}
    </label>
  );
}
