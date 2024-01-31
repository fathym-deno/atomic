import { ComponentChildren, isValidElement, JSX, VNode } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export enum ActionStyleTypes {
  Solid = 1 << 0,
  Outline = 1 << 1,
  Link = 1 << 2,
  Rounded = 1 << 3,
  Icon = 1 << 4,
  None = 1 << 5,
  All = ~0 << 6,
}

export function useActionChildren(
  children: ComponentChildren | Array<ActionProps>,
): { nav: ComponentChildren; navActions: Array<ActionProps> | undefined } {
  const nav = Array.isArray(children) //&& children.every(item => item instanceof ActionProps)
    ? undefined
    : (children as ComponentChildren);

  const navActions = Array.isArray(children) //&& children.every(item => item instanceof ActionProps)
    ? (children as Array<ActionProps>)
    : undefined;

  return { nav, navActions };
}

export type ActionAnchorProps = JSX.HTMLAttributes<HTMLAnchorElement>;

export type ActionButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export type ActionProps = (ActionAnchorProps | ActionButtonProps) & {
  actionStyle?: ActionStyleTypes;
};

export function Action(props: ActionProps) {
  const actionStyle = props.actionStyle ||
    ActionStyleTypes.Solid | ActionStyleTypes.Rounded | ActionStyleTypes.Link;

  const shared = (
    <div
      class={classSet(
        [
          "-:block -:font-bold",
          "-:transition-colors -:duration-200 -:ease-out",
          (actionStyle & ActionStyleTypes.Icon) === ActionStyleTypes.Icon
            ? "-:px-2 -:py-2 -:hover:text-blue-700 -:hover:text-opacity-80"
            : "-:px-4 -:py-2",
          (actionStyle & ActionStyleTypes.Rounded) === ActionStyleTypes.Rounded
            ? (actionStyle & ActionStyleTypes.Icon) === ActionStyleTypes.Icon
              ? "-:rounded-full"
              : "-:rounded"
            : "",
          (actionStyle & ActionStyleTypes.Solid) === ActionStyleTypes.Solid
            ? "-:bg-blue-500 -:text-white"
            : "-:text-black -:dark:text-white",
          (actionStyle & ActionStyleTypes.Outline) === ActionStyleTypes.Outline
            ? "-:text-blue-700 -:border-blue-700 -:border-solid -:border -:hover:border-blue-900"
            : "-:border-none",
          (actionStyle & ActionStyleTypes.Link) === ActionStyleTypes.Link &&
            (actionStyle & ActionStyleTypes.Icon) !== ActionStyleTypes.Link
            ? "-:hover:bg-blue-700 -:hover:bg-opacity-80 -:hover:text-white"
            : "",
        ],
        props,
      )}
    >
    </div>
  );

  return (
    <>
      {!props.href && (
        <button {...(props as ActionButtonProps)} class={shared.props.class} />
      )}

      {props.href && (
        <a {...(props as ActionAnchorProps)} class={shared.props.class} />
      )}
    </>
  );
}
