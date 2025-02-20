import { JSX, useEffect } from "../src.deps.ts";

export const IsIsland = true;

export type BrowserNavBlockProps = {
  message: string;

  shouldBlock: (event: BeforeUnloadEvent) => boolean;
} & JSX.HTMLAttributes<HTMLInputElement>;

export default function BrowserNavBlock(props: BrowserNavBlockProps) {
  const isBrowser = typeof document !== "undefined";

  if (!isBrowser) {
    // deno-lint-ignore jsx-no-useless-fragment
    return <></>;
  }

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const shouldBlock = props.shouldBlock(event);

      if (shouldBlock) {
        // deno-lint-ignore no-window
        (event || window.event).returnValue = props.message; // Legacy for older browsers

        return props.message; // Standard for modern browsers
      }
    };

    addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // deno-lint-ignore jsx-no-useless-fragment
  return <></>;
}
