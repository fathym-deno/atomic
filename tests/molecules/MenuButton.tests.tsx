import { assert, describe, render } from "../test.deps.ts";

import MenuButton, {
  MenuButtonStyleTypes,
} from "../../src/molecules/MenuButton.tsx";

describe("Menu Button Tests", () => {
  describe("Menu Button Children", () => {
    const html = render(
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
