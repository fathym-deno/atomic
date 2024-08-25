import { ComponentChildren, JSX, useState } from "../src.deps.ts";
import { classSet, IS_BROWSER } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export type CollapsibleProps = {
  title: string;
  children?: ComponentChildren;
  isOpenDefault?: boolean;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "title">;

export default function Collapsible({
  key,
  title,
  children,
  isOpenDefault = false,
  id,
  ...props
}: CollapsibleProps): JSX.Element {
  let colKey = key ? `${key}|${title}` : title;

  colKey = id ? `${id}|${colKey}` : colKey;

  isOpenDefault = IS_BROWSER
    ? JSON.parse(
      localStorage.getItem(`FathymAtomicCollapsible|${colKey}`) ||
        `${isOpenDefault}`,
    )
    : false;

  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleIsOpen = () => {
    localStorage.setItem(`FathymAtomicCollapsible|${colKey}`, `${!isOpen}`);

    setIsOpen(!isOpen);
  };

  return (
    <div {...props} class={classSet(["-:w-full"], props)}>
      <label
        onClick={() => toggleIsOpen()}
        class="collapsible-title w-full px-2 py-2 flex flex-row items-center cursor-pointer"
      >
        <svg
          class={classSet([
            "pr-2 w-6 h-6 inline-block origin-center transform transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-90" : "",
          ])}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"
          />
        </svg>

        {title}
      </label>

      <div
        class={classSet([
          "collapsible-children overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px]" : "max-h-0",
        ])}
      >
        {children}
      </div>
    </div>
  );
}
