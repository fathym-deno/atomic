import { ComponentChildren, JSX } from "../src.deps.ts";
import { MenuButton, MenuButtonStyleTypes } from "./MenuButton.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export interface ResponsiveSetProps extends JSX.HTMLAttributes<HTMLElement> {
  menuStyle?: MenuButtonStyleTypes;

  toggleChildren: ComponentChildren;
}

export function ResponsiveSet(props: ResponsiveSetProps) {
  return (
    <>
      <MenuButton
        class="md:hidden"
        menuStyle={props.menuStyle || MenuButtonStyleTypes.Responsive}
        toggleChildren={props.toggleChildren}
      >
        {props.children}
      </MenuButton>

      <span {...props} class={classSet(["-:hidden -:md:flex"], props)}>
        {props.children}
      </span>
    </>
  );
}
