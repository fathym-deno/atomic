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
    const html = render(
      <Action href="/" class="w-32">
        Hello
      </Action>,
    );

    assertEquals(
      html,
      `<a href="/" class="w-32 block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white">Hello</a>`,
    );
  });

  describe("Button Exists", () => {
    const html = render(<Action disabled>Hello</Action>);

    assertEquals(
      html,
      `<button disabled class="block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white">Hello</button>`,
    );
  });

  describe("Class Overrides", () => {
    const html = render(<Action class="px-0 py-0">Hello</Action>);

    assertEquals(
      html,
      `<button class="px-0 py-0 block font-bold transition-colors duration-200 ease-out px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-700 hover:bg-opacity-80 hover:text-white">Hello</button>`,
    );
  });

  describe("Action Styles: None", () => {
    const html = render(
      <Action actionStyle={ActionStyleTypes.None}>Hello</Action>,
    );

    assertEquals(
      html,
      `<button actionStyle="32" class="block font-bold transition-colors duration-200 ease-out px-4 py-2 text-black dark:text-white border-none">Hello</button>`,
    );
  });
});
