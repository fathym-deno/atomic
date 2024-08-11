import { assert, preactRenderToString } from "../test.deps.ts";

import MenuButton, {
  MenuButtonStyleTypes,
} from "../../src/molecules/MenuButton.tsx";

Deno.test("Menu Button Tests", async (t) => {
  await t.step("Menu Button Children", () => {
    const html = preactRenderToString(
      <MenuButton
        menuStyle={MenuButtonStyleTypes.Responsive}
        toggleChildren={<h1>Menu</h1>}
      >
        <p>Menu content</p>
      </MenuButton>,
    );

    assert(html.includes("<h1>Menu</h1>"));
  });
});
