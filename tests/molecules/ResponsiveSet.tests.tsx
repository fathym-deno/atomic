import { assertEquals, describe, it, render } from "../test.deps.ts";

import { ResponsiveSet } from "../../src/molecules/ResponsiveSet.tsx";
import { prefixClasses } from "../../src/utils/jsx.utils.ts";

describe("ResponsiveSet Tests", () => {
  it("Renders responsive set element with provided props", () => {
    const html = render(
      <ResponsiveSet toggleChildren="Toggle">
        <p>Content goes here</p>
      </ResponsiveSet>,
    );

    const rootCss = prefixClasses("-:", "relative");

    const toggleCss = prefixClasses(
      "-:",
      "block font-bold transition-colors duration-200 ease-out px-2 py-2 hover:text-blue-700 hover:text-opacity-80 rounded-full text-black dark:text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white",
    );

    assertEquals(
      html,
      `<div class="menu-wrapper ${rootCss} md:hidden"><button actionStyle="28" class="${toggleCss} flex items-center">Toggle</button></div><span toggleChildren="Toggle" class="-:hidden -:md:flex -:flex-col -:md:flex-row -:md:items-center"><p>Content goes here</p></span>`,
    );
  });
});
