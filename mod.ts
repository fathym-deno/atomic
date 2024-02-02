export * from "./src/_exports.ts";

export function islandsConfig() {
  return [
    {
      baseLocation: import.meta.url,
      paths: [
        "./src/molecules/MenuButton.tsx",
        "./src/molecules/ResponsiveSet.tsx",
        "./src/molecules/Tabs.tsx",
      ],
    },
  ];
}
