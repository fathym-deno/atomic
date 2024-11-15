import { ComponentChildren, JSX, useEffect, useState } from "../src.deps.ts";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export enum MenuButtonStyleTypes {
  Popover = 1 << 0,
  Slideout = 1 << 1,
  Responsive = 1 << 2,
}

export interface MenuButtonProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: ComponentChildren | Array<ActionProps>;

  menuStyle?: MenuButtonStyleTypes;

  toggleChildren: ComponentChildren;
}

export default function MenuButton(props: MenuButtonProps) {
  const { nav, navActions } = useActionChildren(props.children);

  const [showMenu, setShowMenu] = useState(false);

  const menuCloseCheck = (eTarget: HTMLDivElement) => {
    setShowMenu(!!eTarget!.closest(".menu-wrapper"));
  };

  const outsideClickHandler = () => {
    const eventHandler = (e: MouseEvent) => {
      menuCloseCheck(e.target as HTMLDivElement);
    };

    document.addEventListener("click", eventHandler);

    return () => {
      document.removeEventListener("click", eventHandler);
    };
  };

  useEffect(outsideClickHandler, []);

  return (
    <>
      <div class={classSet(["menu-wrapper -:relative"], props)}>
        <Action
          actionStyle={ActionStyleTypes.Link |
            ActionStyleTypes.Rounded |
            ActionStyleTypes.Icon}
          onClick={() => setShowMenu(!showMenu)}
          class="flex items-center"
        >
          {props.toggleChildren}
        </Action>

        {showMenu && (
          <div
            class={classSet([
              "bg-gray-300 dark:bg-gray-700 shadow-md",
              props.menuStyle === MenuButtonStyleTypes.Popover
                ? "absolute right-0 mt-2"
                : undefined,
              props.menuStyle === MenuButtonStyleTypes.Slideout
                ? "fixed top-0 bottom-0 left-0 z-50 w-[80%]"
                : undefined,
              props.menuStyle === MenuButtonStyleTypes.Responsive
                ? "fixed top-0 bottom-0 left-0 z-50 w-[80%] md:absolute md:right-0 md:mt-2 md:top-auto md:bottom-auto md:left-auto md:w-auto"
                : undefined,
            ])}
          >
            {nav || (
              <ul class="divide-y divide-gray-200">
                {navActions?.map((action) => (
                  <li>
                    <Action
                      actionStyle={ActionStyleTypes.None}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      {...action}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}
