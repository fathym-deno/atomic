import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.tsx";
import { DisplayProps, useDisplayChildren } from "../molecules/Display.tsx";
import { ActionProps, useActionChildren } from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";

export interface FeaturesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  callToAction?: ComponentChildren;

  children?: ComponentChildren | Array<DisplayProps>;
}

export function Features(props: FeaturesProps) {
  const { displayElement } = useDisplayChildren(props.children);

  return (
    <div
      {...props}
      class={classSet(
        props,
        "flex flex-col justify-center",
      )}
    >
      <div
        class={classSet(
          props,
          "flex flex-col gap-8 justify-center md:(flex-row gap-16) [&>*]:(flex-grow basis-0)",
        )}
      >
        {displayElement}
      </div>

      {props.callToAction}
    </div>
  );
}
