import { JSX } from "../src.deps.ts";
import { BrowserNavBlockProps } from "./BrowserNavBlock.tsx";

export * from "./forms/_exports.ts";
export * from "./Action.tsx";
export { type BrowserNavBlockProps } from "./BrowserNavBlock.tsx";

export const BrowserNavBlock: (props: BrowserNavBlockProps) => JSX.Element = (
  await import("./BrowserNavBlock.tsx")
).default;
