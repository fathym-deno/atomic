import { ComponentChildren, JSX, useEffect, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";

export type LineItemProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "icon"> & {
  actionPath: string;

  actionText: ComponentChildren;

  confirmAction?: () => Promise<void>;

  confirmIcon?: ComponentChildren;

  confirmRedirect?: string;

  confirmText?: string;
};

export function LineItem(props: LineItemProps) {
  const [reload, setReload] = useState(false);

  const {
    actionText,
    actionPath,
    confirmAction,
    confirmIcon,
    confirmRedirect,
    confirmText,
  } = props;

  const handleAction = async () => {
    if (confirmAction) {
      if (confirmText && window.confirm(confirmText)) {
        await confirmAction();
      } else {
        await confirmAction();
      }

      setReload(true);
    }
  };

  useEffect(() => {
    if (reload) {
      location.href = confirmRedirect || `${location.href}`;
    }
  }, [reload]);

  return (
    <div>
      <a href={actionPath} class="text-blue-500 hover:underline">
        {actionText}
      </a>

      {confirmIcon && (
        <button
          class="ml-2"
          onClick={() => {
            handleAction().then();
          }}
        >
          {confirmIcon}
        </button>
      )}
    </div>
  );
}
