import { FunctionalComponent, Ref } from "../../src.deps.ts";
import { SlideToggleProps } from "./SlideToggle.tsx";

export * from "./Input.tsx";
export * from "./InputWrapper.tsx";
export * from "./Select.tsx";

export { type SlideToggleProps } from "./SlideToggle.tsx";
export const SlideToggle: FunctionalComponent<
  React.PropsWithoutRef<SlideToggleProps> & {
    ref?: Ref<HTMLInputElement> | undefined;
  }
> = (await import("./SlideToggle.tsx")).default;
