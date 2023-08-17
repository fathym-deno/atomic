import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";

export type SlideToggleProps = JSX.HTMLAttributes<HTMLInputElement>;

export function SlideToggle(props: SlideToggleProps) {
  return (
    <div class="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        {...props}
        type="checkbox"
        class={classSet(
          props,
          "absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-colors duration-200 ease-out",
          "checked:bg-blue-500 checked:border-blue-500",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        )}
      />
      <label
        for={props.id}
        class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      >
        <span
          class={classSet(
            "block h-full w-6 rounded-full bg-white shadow-inner transition-transform duration-200 ease-out",
            "transform translate-x-0",
            props.checked ? "translate-x-full" : ""
          )}
        ></span>
      </label>
    </div>
  );
}
