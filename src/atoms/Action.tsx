import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export enum ActionStyleTypes {
  Solid = 1 << 0,
  Outline = 1 << 1,
  Link = 1 << 2,
  Rounded = 1 << 3,
  None = 1 << 4,
  All = ~0 << 5,
}

export function useActionChildren(
  children: ComponentChildren | Array<ActionProps>,
): { nav: ComponentChildren; navActions: Array<ActionProps> | undefined } {
  const nav = Array.isArray(children) //&& children.every(item => item instanceof ActionProps)
    ? undefined
    : children as ComponentChildren;

  const navActions = Array.isArray(children) //&& children.every(item => item instanceof ActionProps)
    ? children as Array<ActionProps>
    : undefined;

  return { nav, navActions };
}

export type ActionAnchorProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export type ActionButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export type ActionProps = (ActionAnchorProps | ActionButtonProps) & {
  actionStyle?: ActionStyleTypes;
};

export function Action(
  props: ActionProps,
) {
  const actionStyle = props.actionStyle ||
    (ActionStyleTypes.Solid |
      ActionStyleTypes.Rounded | ActionStyleTypes.Link);

  const shared = (
    <div
      class={classSet(
        props,
        "block px-4 py-2 font-bold",
        "transition-colors duration-200 ease-out",
        (actionStyle & ActionStyleTypes.Rounded) ===
            ActionStyleTypes.Rounded
          ? "rounded"
          : "",
        (actionStyle & ActionStyleTypes.Solid) === ActionStyleTypes.Solid
          ? "bg-blue-500 text-white"
          : "text-black",
        (actionStyle & ActionStyleTypes.Outline) ===
            ActionStyleTypes.Outline
          ? "text-blue-700 border-blue-700 border-solid border hover:border-blue-900"
          : "border-none",
        (actionStyle & ActionStyleTypes.Link) ===
            ActionStyleTypes.Link
          ? "hover:(bg-blue-700 bg-opacity-80 text-white)"
          : "",
      )}
    >
    </div>
  );

  return (
    <>
      {!props.href && (
        <button
          {...(props as ActionButtonProps)}
          class={shared.props.class}
        />
      )}

      {props.href && (
        <a
          {...(props as ActionAnchorProps)}
          class={shared.props.class}
        />
      )}
    </>
  );
}
