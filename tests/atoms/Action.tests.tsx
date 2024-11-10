import { assertEquals, preactRenderToString } from "../test.deps.ts";

import { Action, ActionStyleTypes } from "../../src/atoms/Action.tsx";
import { prefixClasses } from "../../src/utils/jsx.utils.ts";

Deno.test("Action Tests", async (t) => {
  await t.step("Anchor Exists", () => {
    const html = preactRenderToString(
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

  await t.step("Button Exists", () => {
    const html = preactRenderToString(<Action disabled>Hello</Action>);

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white opacity-50 cursor-not-allowed",
    );

    assertEquals(html, `<button disabled class="${rootCss}">Hello</button>`);
  });

  await t.step("Class Overrides", () => {
    const html = preactRenderToString(<Action class="px-0 py-0">Hello</Action>);

    const rootCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(html, `<button class="${rootCss} px-0 py-0">Hello</button>`);
  });

  await t.step("Action Styles: None", () => {
    const html = preactRenderToString(
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
