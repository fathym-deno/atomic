import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../../test.deps.ts";
import { Input } from "../../../src/atoms/forms/Input.tsx";

describe("Input Tests", () => {
  it("Renders input element", () => {
    const html = render(<Input />);
    assertEquals(
      html,
      `<input type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>`,
    );
  });
});
