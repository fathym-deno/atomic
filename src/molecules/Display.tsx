import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export enum DisplayStyleTypes {
  Top = 1 << 0,
  Center = 1 << 1,
  Bottom = 1 << 2,
  Large = 1 << 3,
  None = 1 << 4,
}

export type DisplayProps = JSX.HTMLAttributes<HTMLDivElement> & {
  displayStyle?: DisplayStyleTypes;

  title?: string | ComponentChildren;
};

export function useDisplayChildren(
  children: ComponentChildren | Array<DisplayProps>,
): {
  display: ComponentChildren;
  displayDetails: Array<DisplayProps> | undefined;
  displayElement: ComponentChildren;
} {
  const display = Array.isArray(children) //&& children.every(item => item instanceof DisplayProps)
    ? undefined
    : (children as ComponentChildren);

  const displayDetails = Array.isArray(children) //&& children.every(item => item instanceof DisplayProps)
    ? (children as Array<DisplayProps>)
    : undefined;

  const displayElement = display || (
    <>
      {displayDetails?.map((dd) => <Display {...dd} />)}
    </>
  );

  return { display, displayDetails, displayElement };
}

export function Display(props: DisplayProps) {
  const displayStyle = props.displayStyle || DisplayStyleTypes.None;

  const displayTitle = typeof props.title === "string"
    ? (
      <h1
        class={classSet([
          "font-bold",
          (displayStyle & DisplayStyleTypes.Large) === DisplayStyleTypes.Large
            ? "text-3xl md:text-4xl inline-block"
            : "text-2xl md:text-3xl inline-block",
        ])}
      >
        {props.title}
      </h1>
    )
    : (
      props.title as ComponentChildren
    );

  return (
    <div
      {...props}
      class={classSet(
        [
          "-:flex -:flex-col",
          (displayStyle & DisplayStyleTypes.Center) === DisplayStyleTypes.Center
            ? "-:justify-center -:items-center"
            : undefined,
          (displayStyle & DisplayStyleTypes.Top) === DisplayStyleTypes.Top
            ? "-:justify-start -:items-start"
            : undefined,
          (displayStyle & DisplayStyleTypes.Bottom) === DisplayStyleTypes.Bottom
            ? "-:justify-end -:items-end"
            : undefined,
        ],
        props,
      )}
    >
      {displayTitle}

      {props.children}
    </div>
  );
}
