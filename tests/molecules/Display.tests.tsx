import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

import { Display } from "../../src/molecules/Display.tsx";

describe("Display Tests", () => {
  it("Renders display element with provided props", () => {
    const html = render(
      <Display displayStyle={DisplayStyleTypes.Top} title="My Display">
        <p>Content goes here</p>
      </Display>
    );
    assertEquals(
      html,
      `<div class="flex flex-col justify-start items-start"><h1 class="font-bold text-2xl md:text-3xl inline-block">My Display</h1><p>Content goes here</p></div>`
    );
  });
});