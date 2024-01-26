import { JSX } from "../src.deps.ts";

export type ClassedProps = {
  class?: string | undefined | JSX.SignalLike<string | undefined>;
  className?: string | undefined | JSX.SignalLike<string | undefined>;
};

export function prefixClasses(prefix: string, classes: string): string;

export function prefixClasses(
  prefix: string,
  classes: Array<string | undefined>,
): Array<string | undefined>;

export function prefixClasses(
  prefix: string,
  classes: Array<string | undefined> | string,
): Array<string | undefined> | string {
  let workingClasses = Array.isArray(classes) ? [...classes] : [classes];

  const complClasses = workingClasses
    .filter((c) => c)
    .join(" ")
    .split(" ");

  workingClasses = complClasses
    .filter((c) => c)
    .map((className) => `${prefix}${className}`);

  return Array.isArray(classes)
    ? [...workingClasses]
    : workingClasses.join(" ");
}

export function classSet(
  set: Array<string | undefined>,
  props?: ClassedProps,
  prefix = "",
): string {
  return [...prefixClasses(prefix, [...set!]), props?.class || props?.className]
    .filter((c) => c)
    .join(" ");
}

// deno-lint-ignore no-explicit-any
export function factory<T extends { new (...args: any[]): any }>(
  type: T,
  data?: InstanceType<T>,
): InstanceType<T> {
  return Object.assign(new type(), data || ({} as InstanceType<T>));
}
