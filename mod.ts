export * from "./src/.exports.ts";

export function islandsConfig(): { baseLocation: string; paths: string[] }[] {
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
