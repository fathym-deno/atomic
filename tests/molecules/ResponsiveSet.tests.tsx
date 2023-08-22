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
      </ResponsiveSet>
    );
    assertEquals(
      html,
      `<><MenuButton class="md:hidden" menuStyle={MenuButtonStyleTypes.Responsive} toggleChildren="Toggle"><p>Content goes here</p></MenuButton><span class="hidden md:flex"><p>Content goes here</p></span></>`
    );
  });
});