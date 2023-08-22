import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";
import { DisplayProps } from "../../src/molecules/Display.tsx";
import { StepsFeatures } from "../../src/organisms/StepsFeatures.tsx";
import { factory } from "../../mod.ts";

describe("StepsFeatures Tests", () => {
  describe("Simple", () => {
    const html = render(
      <StepsFeatures
        step={1}
        hideDescription={true}
      >
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
