import { assert, preactRenderToString } from "../test.deps.ts";
import { StepsFeatures } from "../../src/organisms/StepsFeatures.tsx";

Deno.test("StepsFeatures Tests", async (t) => {
  await t.step("Simple", () => {
    const html = preactRenderToString(
      <StepsFeatures step={1} hideDescription>
        {[
          {
            title: "Step 1",
            children: <p>Step 1 Content</p>,
          },
          {
            title: "Step 2",
            children: <p>Step 2 Content</p>,
          },
          {
            title: "Step 3",
            children: <p>Step 3 Content</p>,
          },
        ]}
      </StepsFeatures>,
    );

    assert(html.includes("Step 1"));
    assert(html.includes("Step 2"));
    assert(html.includes("Step 3"));
    assert(html.includes("Step 2 Content"));
  });
});
