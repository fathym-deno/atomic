import { ComponentChildren } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";
import { Features, FeaturesProps } from "./Features.tsx";
import { DisplayStyleTypes } from "../molecules/Display.tsx";

export function buildTitle(
  stepNumber: number,
  title: ComponentChildren,
  complete: boolean,
  active: boolean,
): ComponentChildren {
  const textGradient = (
    <div
      class={classSet([
        complete
          ? "bg-gradient-to-tr from-green-500 to-blue-500/75"
          : active
          ? "bg-gradient-to-tr from-blue-500 to-purple-500/75"
          : "bg-gradient-to-tr from-blue-500 to-blue-700/75",
      ])}
    >
    </div>
  );

  const circleGradient = (
    <div
      class={classSet([
        complete
          ? "bg-gradient-to-br from-green-500 to-blue-700/75 py-2"
          : active
          ? "bg-gradient-to-br from-blue-500 to-purple-500/75"
          : "bg-gradient-to-br from-blue-500 to-blue-700/75",
      ])}
    >
    </div>
  );

  return (
    <h1
      class={classSet(
        [
          "text-2xl font-bold md:text-3xl inline-block my-4 bg-clip-text text-transparent",
        ],
        textGradient.props,
      )}
    >
      <span
        class={classSet(
          ["rounded-full px-4 py-1 border(solid 1) m-2 shadow-lg text-white"],
          circleGradient.props,
        )}
      >
        {complete ? "\u2713" : stepNumber}
      </span>

      {title}
    </h1>
  );
}

export interface StepFeature {
  children: ComponentChildren;

  class?: string;

  description?: string;

  title: string | ComponentChildren;
}

export interface StepsFeaturesProps extends FeaturesProps {
  children?: Array<StepFeature>;

  hideDescription?: boolean;

  step?: number;
}

export function StepsFeatures(props: StepsFeaturesProps) {
  return (
    <Features
      {...props}
      class={classSet(["m-2 md:m-8 text-center"], props, "-:")}
    >
      {props.children?.map((childStep: StepFeature, i) => {
        const active = props.step == i;

        const complete: boolean = (props.step as number) > i;

        const title = typeof childStep.title === "string"
          ? buildTitle(i + 1, childStep.title, complete, active)
          : childStep.title;

        return {
          title: title,
          class: classSet(
            ["shadow-lg p-4 m-4 justify-start sm:p-1 sm:m-1"],
            {
              class: childStep.class,
            },
            "-:",
          ),
          displayStyle: DisplayStyleTypes.Center,
          children: (
            <>
              <p class="m-2">{childStep.description}</p>

              {props.step === i && childStep.children}
            </>
          ),
        };
      })}
    </Features>
  );
}
