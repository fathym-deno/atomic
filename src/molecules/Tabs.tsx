import { ComponentChildren, JSX, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";

export interface Tab {
  label: string;
  content: ComponentChildren;
}

export interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
}

export function Tabs(props: TabsProps) {
  const { tabs, ...rest } = props;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div {...rest}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classSet(
              "py-2 px-4 font-medium text-sm",
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
}
