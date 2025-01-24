import { useEffect } from "preact/hooks";
import { ComponentChildren, JSX, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export interface Tab {
  label: ComponentChildren;
  content: ComponentChildren;
}

export interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  activeTab?: number;

  tabs: Tab[];

  tabsDisplay?: "stretch" | "center" | "start" | "end";
}

export default function Tabs(props: TabsProps) {
  const { activeTab, tabs, ...rest } = props;

  const [activeTabValue, setActiveTabValue] = useState(activeTab ?? 0);

  useEffect(() => {
    setActiveTabValue(activeTab ?? 0);
  }, [activeTab]);

  return (
    <div {...rest}>
      <div
        class={classSet([
          "flex border-b border-gray-200",
          !props.tabsDisplay || props.tabsDisplay === "center"
            ? "justify-center"
            : "",
          props.tabsDisplay === "start" ? "flex-start" : "",
          props.tabsDisplay === "end" ? "flex-end" : "",
        ])}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            class={classSet([
              "py-2 px-1 font-medium text-sm",
              activeTabValue === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500",
              props.tabsDisplay === "stretch" ? "flex-1" : "",
            ])}
            onClick={() => setActiveTabValue(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div class="mt-4">{tabs[activeTabValue].content}</div>
    </div>
  );
}
