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
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null!;
  });

  it("Renders tabs with provided props", () => {
    const tabs = [
      { label: "Tab 1", content: <p>Tab 1 content</p> },
      { label: "Tab 2", content: <p>Tab 2 content</p> },
      { label: "Tab 3", content: <p>Tab 3 content</p> },
    ];

    render(<Tabs tabs={tabs} />, container);

    assert(container.querySelector(".tabs"));
    assert(container.querySelector(".tab-list"));
    assert(container.querySelector(".tab-content"));

    const tabButtons = container.querySelectorAll(".tab");
    assert(tabButtons.length === tabs.length);

    tabs.forEach((tab, index) => {
      const tabButton = tabButtons[index];
      assert(tabButton.textContent === tab.label);
    });

    const activeTab = container.querySelector(".tab.active");
    assert(activeTab.textContent === tabs[0].label);

    const tabContent = container.querySelector(".tab-content");
    assert(tabContent.textContent === "Tab 1 content");
  });

  it("Calls onTabChange when a tab is clicked", () => {
    const tabs = [
      { label: "Tab 1", content: <p>Tab 1 content</p> },
      { label: "Tab 2", content: <p>Tab 2 content</p> },
      { label: "Tab 3", content: <p>Tab 3 content</p> },
    ];

    let activeTab = 0;
    const handleTabChange = (index: number) => {
      activeTab = index;
    };

    render(<Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />, container);

    const tabButtons = container.querySelectorAll(".tab");
    const secondTabButton = tabButtons[1] as HTMLButtonElement;
    secondTabButton.click();

    assert(activeTab === 1);
  });
});