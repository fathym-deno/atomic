import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export type CollapsibleProps = {
  title: string;
  children?: ComponentChildren;
  isOpen?: boolean;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "title">;

export function Collapsible({
  title,
  children,
  isOpen = false,
  ...props
}: CollapsibleProps): JSX.Element {
  return (
    <div {...props} class={classSet(["w-full"], props)}>
      <input
        type="checkbox"
        class="hidden peer"
        id="collapsible-toggle"
        defaultChecked={isOpen}
      />

      <label
        for="collapsible-toggle"
        class="block cursor-pointer px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {title}
      </label>

      <div class="max-h-0 peer-checked:max-h-[2000px] overflow-hidden transition-all duration-300 ease-in-out">
        <div class="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
