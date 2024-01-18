import { JSX } from "../src.deps.ts";

export function classSet(
  props?: {
    class?: string | undefined | JSX.SignalLike<string | undefined>;
    className?: string | undefined | JSX.SignalLike<string | undefined>;
  },
  ...set: Array<string | undefined>
): string {
  return [props?.class || props?.className, ...set].filter((c) => c).join(" ");
}

// deno-lint-ignore no-explicit-any
export function factory<T extends { new (...args: any[]): any }>(
  type: T,
  data?: InstanceType<T>,
): InstanceType<T> {
  return Object.assign(new type(), data || {} as InstanceType<T>);
}
