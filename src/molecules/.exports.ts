import { JSX } from '../src.deps.ts';

export * from './ActionGroup.tsx';
export * from './Collapsible.tsx';
export * from './Display.tsx';
export * from './LineItem.tsx';
export * from './ResponsiveSet.tsx';

import { ClickOnceActionProps } from './ClickOnceAction.tsx';
export { type ClickOnceActionProps } from './ClickOnceAction.tsx';
export const ClickOnceAction: (props: ClickOnceActionProps) => JSX.Element = (
  await import('./ClickOnceAction.tsx')
).default;

import { CollapsibleProps } from './Collapsible.tsx';
export { type CollapsibleProps } from './Collapsible.tsx';
export const Collapsible: (props: CollapsibleProps) => JSX.Element = (
  await import('./Collapsible.tsx')
).default;

import { MenuButtonProps } from './MenuButton.tsx';
export { type MenuButtonProps, MenuButtonStyleTypes } from './MenuButton.tsx';
export const MenuButton: (props: MenuButtonProps) => JSX.Element = (
  await import('./MenuButton.tsx')
).default;

import { TabsProps } from './Tabs.tsx';
export { type Tab, type TabsProps } from './Tabs.tsx';
export const Tabs: (props: TabsProps) => JSX.Element = (
  await import('./Tabs.tsx')
).default;
