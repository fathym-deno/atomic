// deno-lint-ignore-file no-explicit-any
export function isObject(item: any): any {
  return (item && typeof item === "object" && !Array.isArray(item));
}

export function mergeDeep(target: any, source: any) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const desc = Reflect.getOwnPropertyDescriptor(target, key);

      if (isObject(source[key])) {
        if (!(key in target) && desc?.set) {
          target[key] = source[key];
        } else if (desc?.set) {
          target[key] = mergeDeep(target[key], source[key]);
        }
      } else if (desc?.set) {
        target[key] = source[key];
      }
    });
  }
}
