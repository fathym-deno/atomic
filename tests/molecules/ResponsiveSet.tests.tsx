import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

import { ResponsiveSet } from "../../src/molecules/ResponsiveSet.tsx";
import { prefixClasses } from "../../src/utils/jsx.utils.ts";

describe("ResponsiveSet Tests", () => {
  it("Renders responsive set element with provided props", () => {
    const html = render(
      <ResponsiveSet toggleChildren="Toggle">
        <p>Content goes here</p>
      </ResponsiveSet>,
    );

    const rootCss = prefixClasses("-:", "menu-wrapper relative");

    const toggleCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(
      html,
      `<div class="${rootCss} md:hidden"><button class="${toggleCss} flex items-center p-2 rounded">Toggle</button></div><span toggleChildren="Toggle" class="-:hidden -:md:flex -:flex-col -:md:flex-row -:md:items-center"><p>Content goes here</p></span>`,
    );
  });
});
