import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

import { Action } from "../../src/atoms/Action.tsx";
import { ActionGroup } from "../../src/molecules/ActionGroup.tsx";
import {
  MenuButton,
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

    console.log(html);

    assert(html.includes("<h1>Menu</h1>"));
  });
});
