import { Hero, HeroProps } from "../../src/organisms/Hero.tsx";
import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

describe("Hero", () => {
  const defaultProps: HeroProps = {
    callToAction: "Call to action",
    heroStyle: 1,
  };

  it("renders with default props", () => {
    const html = render(
      <Hero {...defaultProps} />,
    );
    assertEquals(
      html,
      `<div callToAction="Call to action" heroStyle="1" class="flex flex-col p-8 gap-8 w-full bg-cover bg-center bg-no-repeat bg-gray-100 text-white rounded-3xl"><div class="flex flex-col [&amp;>*]:mx-auto"><p class="text-xl max-w-lg text-blue-100">Call to action</p><nav class="px-2 pt-2 pb-4 flex"></nav></div></div>`,
    );
  });
});
