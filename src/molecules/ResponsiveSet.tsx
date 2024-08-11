import { ComponentChildren, JSX } from "../src.deps.ts";
import MenuButton, { MenuButtonStyleTypes } from "./MenuButton.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export interface ResponsiveSetProps extends JSX.HTMLAttributes<HTMLElement> {
  menuStyle?: MenuButtonStyleTypes;

  toggleChildren: ComponentChildren;
}

export function ResponsiveSet(props: ResponsiveSetProps): JSX.Element {
  return (
    <>
      <MenuButton
        class="md:hidden"
        menuStyle={props.menuStyle || MenuButtonStyleTypes.Responsive}
        toggleChildren={props.toggleChildren}
      >
        {props.children}
      </MenuButton>

      <span
        {...props}
        class={classSet([
          "-:hidden -:md:flex -:flex-col -:md:flex-row -:md:items-center",
        ], props)}
      >
        {props.children}
      </span>
    </>
  );
}
