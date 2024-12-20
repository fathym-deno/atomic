import { ComponentChildren, JSX } from "../src.deps.ts";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
  useActionChildren,
} from "../atoms/Action.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export interface ActionGroupProps extends JSX.HTMLAttributes<HTMLElement> {
  actionStyle?: ActionStyleTypes;

  children?: ComponentChildren | Array<ActionProps>;
}

export function ActionGroup(props: ActionGroupProps): JSX.Element {
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
