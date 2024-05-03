import { ComponentChildren, JSX, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export interface Tab {
  label: string;
  content: ComponentChildren;
}

export interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];

  tabsDisplay?: "stretch" | "center" | "start" | "end";
}

export default function Tabs(props: TabsProps) {
  const { tabs, ...rest } = props;

  const [activeTab, setActiveTab] = useState(0);

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
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500",
              props.tabsDisplay === "stretch" ? "flex-1" : "",
            ])}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div class="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
}
