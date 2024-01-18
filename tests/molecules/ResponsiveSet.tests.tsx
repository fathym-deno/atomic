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

describe("ResponsiveSet Tests", () => {
  it("Renders responsive set element with provided props", () => {
    const html = render(
      <ResponsiveSet toggleChildren="Toggle">
        <p>Content goes here</p>
      </ResponsiveSet>,
    );
    assertEquals(
      html,
      `<div class="md:hidden menu-wrapper relative"><button class="flex items-center p-2 rounded block px-4 py-2 font-bold transition-colors duration-200 ease-out rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white">Toggle</button></div><span toggleChildren="Toggle" class="hidden md:flex"><p>Content goes here</p></span>`,
    );
  });
});
