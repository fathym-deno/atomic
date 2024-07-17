import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";
import { DisplayProps, useDisplayChildren } from "../molecules/Display.tsx";

export interface FeaturesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  callToAction?: ComponentChildren;

  children?: ComponentChildren | Array<DisplayProps>;
}

export function Features(props: FeaturesProps) {
  const { displayElement } = useDisplayChildren(props.children);

  return (
    <div
      {...props}
      class={classSet(["-:flex -:flex-col -:justify-center"], props)}
    >
      <div class="flex flex-col md:flex-row gap-8 justify-center md:flex-row md:gap-16 [&>*]:flex-grow [&>*]:basis-0">
        {displayElement}
      </div>

      {props.callToAction}
    </div>
  );
}
