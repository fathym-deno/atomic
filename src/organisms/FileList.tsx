import { JSX, useEffect, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export type FileListTreeNode = {
  ActionPath: string;

  Icon?: string;
};

// @ts-ignore FileListTreeNode eventually must resolve to string
export type FileListTree = Record<string, FileListTreeNode | FileListTree>;

export type FileListProps = {
  files: string[]; // Array of file names

  onFileClick?: (actionPath: string) => void | Promise<void>;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "title">;

export default function FileList({
  files,
  onFileClick,
  ...props
}: FileListProps): JSX.Element {
  const [isOpenMap, setIsOpenMap] = useState<Record<string, boolean>>({});

  const [fileTree, setFileTree] = useState<JSX.Element>();

  const filePaths = files.map((file) => {
    return [file, file.split("/").filter((f) => f)] as [string, string[]];
  });

  const extendFileTree = (
    fileTreeMap: FileListTree,
    file: string,
    path: string[],
    keys: string[],
  ): void => {
    const nextSegment = path.shift()!;

    if (!path.length) {
      fileTreeMap[nextSegment] = {
        ActionPath: file,
      } as FileListTreeNode;
    } else {
      if (!fileTreeMap[nextSegment]) {
        fileTreeMap[nextSegment] = {};

        const item = localStorage.getItem(
          `FathymAtomicFileList|${[...keys, nextSegment].join("/")}`,
        );

        isOpenMap[[...keys, nextSegment].join("/")] = item === undefined
          ? true
          : JSON.parse(item || `${true}`);
      }

      extendFileTree(fileTreeMap[nextSegment] as FileListTree, file, path, [
        ...keys,
        nextSegment,
      ]);
    }
  };

  const fileTreeMap: FileListTree = {};

  filePaths.forEach(([file, path]) => {
    extendFileTree(fileTreeMap, file, path, []);
  });

  setIsOpenMap(isOpenMap);

  const toggleIsOpen = (keys: string[], isOpen: boolean) => {
    localStorage.setItem(
      `FathymAtomicFileList|${keys.join("/")}`,
      `${!isOpen}`,
    );

    isOpenMap[keys.join("/")] = !isOpen;

    setTimeout(() => setIsOpenMap({ ...isOpenMap }), 0);
  };

  const handleFileClick = async (actionPath: string) => {
    await onFileClick?.(actionPath);
  };

  const buildFileTree = (
    node: FileListTree,
    keys: string[],
    first?: boolean,
  ): JSX.Element => {
    return (
      <div class={first ? "" : "ml-4"}>
        {Object.entries(node).map(
          ([key, value]: [string, FileListTreeNode | FileListTree]) => {
            const isLeaf = "ActionPath" in value;

            const hasChildren = !isLeaf;

            const isOpen = hasChildren && isOpenMap[[...keys, key].join("/")];

            return (
              <div key={key}>
                <div
                  class={`flex items-center cursor-pointer pr-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    hasChildren ? "group" : "pl-6"
                  }`}
                  onClick={() =>
                    hasChildren
                      ? toggleIsOpen([...keys, key], isOpen)
                      : handleFileClick(value.ActionPath)}
                >
                  {hasChildren && (
                    <svg
                      class={classSet([
                        "w-4 h-4 mx-1 transform transition-transform duration-300 ease-in-out",
                        isOpen ? "rotate-90" : "",
                      ])}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"
                      />
                    </svg>
                  )}

                  {key}
                </div>

                {hasChildren && (
                  <div
                    class={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {buildFileTree(value as FileListTree, [...keys, key])}
                  </div>
                )}
              </div>
            );
          },
        )}
      </div>
    );
  };

  useEffect(() => {
    setFileTree(buildFileTree(fileTreeMap, [], true));
  }, [isOpenMap]);

  return (
    <div {...props} class={classSet([], props)}>
      {fileTree}
    </div>
  );
}
