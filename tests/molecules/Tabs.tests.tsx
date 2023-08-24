import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

import { Tabs } from "../../src/molecules/Tabs.tsx";

describe("Tabs Tests", () => {
  it("Renders tabs with provided props", () => {
    const tabs = [
      { label: "Tab 1", content: <p>Tab 1 content</p> },
      { label: "Tab 2", content: <p>Tab 2 content</p> },
      { label: "Tab 3", content: <p>Tab 3 content</p> },
    ];

    const html = render(<Tabs tabs={tabs} />);

    assert(html.includes("Tab 1"));
    assert(html.includes("Tab 2"));
    assert(html.includes("Tab 3"));
    assert(html.includes("Tab 1 content"));
    assert(!html.includes("Tab 2 content"));
    assert(!html.includes("Tab 3 content"));
  });
});
