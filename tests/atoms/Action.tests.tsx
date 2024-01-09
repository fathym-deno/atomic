import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

import { Action, ActionStyleTypes } from "../../src/atoms/Action.tsx";

describe("Action Tests", () => {
  describe("Anchor Exists", () => {
    const html = render(<Action href="/" class="w-32">Hello</Action>);

    assertEquals(
      html,
      `<a href="/" class="block px-4 py-2 font-bold transition-colors duration-200 ease-out rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white w-32">Hello</a>`,
    );
  });

  describe("Button Exists", () => {
    const html = render(<Action disabled>Hello</Action>);

    assertEquals(
      html,
      `<button disabled class="block px-4 py-2 font-bold transition-colors duration-200 ease-out rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white">Hello</button>`,
    );
  });

  describe("Class Overrides", () => {
    const html = render(<Action class="px-0 py-0">Hello</Action>);

    assertEquals(
      html,
      `<button class="block px-4 py-2 font-bold transition-colors duration-200 ease-out rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white px-0 py-0">Hello</button>`,
    );
  });

  describe("Action Styles: None", () => {
    const html = render(
      <Action actionStyle={ActionStyleTypes.None}>Hello</Action>,
    );

    assertEquals(
      html,
      `<button actionStyle="16" class="block px-4 py-2 font-bold transition-colors duration-200 ease-out text-black border-none">Hello</button>`,
    );
  });
});
