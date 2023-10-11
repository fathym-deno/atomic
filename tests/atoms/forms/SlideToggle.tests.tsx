import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../../test.deps.ts";

import { SlideToggle } from "../../../src/atoms/forms/SlideToggle.tsx";

describe("SlideToggle Tests", () => {
  it("Renders slide toggle element with provided props", () => {
    const html = render(<SlideToggle checked={true} value="toggle" />);
    assertEquals(
      html,
      `<label class="relative inline-flex items-center cursor-pointer"><input checked value="toggle" type="checkbox" class="sr-only peer"/><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div></label>`,
    );
  });
});
