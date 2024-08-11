import { JSX } from "../src.deps.ts";
import { ClickOnceActionProps } from "./ClickOnceAction.tsx";
import { MenuButtonProps } from "./MenuButton.tsx";
import { TabsProps } from "./Tabs.tsx";

export * from "./ActionGroup.tsx";
export { type ClickOnceActionProps } from "./ClickOnceAction.tsx";
export * from "./Display.tsx";
export { type MenuButtonProps, MenuButtonStyleTypes } from "./MenuButton.tsx";
export * from "./LineItem.tsx";
export * from "./ResponsiveSet.tsx";
export { type Tab, type TabsProps } from "./Tabs.tsx";

export const ClickOnceAction: (props: ClickOnceActionProps) => JSX.Element =
  (await import("./ClickOnceAction.tsx")).default;
export const MenuButton: (props: MenuButtonProps) => JSX.Element =
  (await import("./MenuButton.tsx")).default;
export const Tabs: (props: TabsProps) => JSX.Element =
  (await import("./Tabs.tsx")).default;
