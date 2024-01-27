import { ComponentChildren, JSX } from "../src.deps.ts";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { classSet } from "../utils/jsx.utils.ts";
import { MenuButton, MenuButtonStyleTypes } from "./MenuButton.tsx";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function ActionGroup(props: ActionGroupProps) {
  const { nav, navActions } = useActionChildren(props.children);

  const children: ComponentChildren = nav ||
    navActions?.map((action) => (
      <Action actionStyle={props.actionStyle} {...action} />
    ));

  return (
    <nav {...props} class={classSet(["-:px-2 -:flex -:items-center"], props)}>
      {children}
    </nav>
  );
}
