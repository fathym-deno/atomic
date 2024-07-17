import { assert, describe, render } from "../test.deps.ts";

import { DisplayProps } from "../../src/molecules/Display.tsx";
import { Features } from "../../src/organisms/Features.tsx";

describe("Features Tests", () => {
  describe("Simple", () => {
    const html = render(
      <Features>
        {[
          {
            title: "Start with Fathym CLI",
          } as DisplayProps,
          {
            title: "Start with Fathym UI",
          } as DisplayProps,
          {
            title: "Start with Thinky AI",
          } as DisplayProps,
        ]}
      </Features>,
    );

    assert(html.includes("Fathym CLI"));
    assert(html.includes("Fathym UI"));
    assert(html.includes("Thinky AI"));
  });
});
