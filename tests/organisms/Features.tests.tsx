import { assert, preactRenderToString } from "../test.deps.ts";

import { DisplayProps } from "../../src/molecules/Display.tsx";
import { Features } from "../../src/organisms/Features.tsx";

Deno.test("Features Tests", async (t) => {
  await t.step("Simple", () => {
    const html = preactRenderToString(
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
