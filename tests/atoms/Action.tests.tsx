import { assertEquals, describe, render } from "../test.deps.ts";

import { Action, ActionStyleTypes } from "../../src/atoms/Action.tsx";
import { prefixClasses } from "../../src/utils/jsx.utils.ts";

describe("Action Tests", () => {
  describe("Anchor Exists", () => {
    const html = render(
      <Action href="/" class="w-32">
        Hello
      </Action>,
    );

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(html, `<a href="/" class="${rootCss} w-32">Hello</a>`);
  });

  describe("Button Exists", () => {
    const html = render(<Action disabled>Hello</Action>);

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(
      html,
      `<button disabled class="${rootCss}">Hello</button>`,
    );
  });

  describe("Class Overrides", () => {
    const html = render(<Action class="px-0 py-0">Hello</Action>);

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(
      html,
      `<button class="${rootCss} px-0 py-0">Hello</button>`,
    );
  });

  describe("Action Styles: None", () => {
    const html = render(
      <Action actionStyle={ActionStyleTypes.None}>Hello</Action>,
    );

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 text-black dark:text-white border-none",
    );

    assertEquals(
      html,
      `<button actionStyle="32" class="${rootCss}">Hello</button>`,
    );
  });
});
