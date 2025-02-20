import { ComponentChildren, JSX, useEffect, useState } from "../src.deps.ts";

export type LineItemProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "icon"> & {
  actionPath: string;

  actionText: ComponentChildren;

  confirmAction?: () => Promise<void>;

  confirmIcon?: ComponentChildren;

  confirmRedirect?: string;

  confirmText?: string;
};

export function LineItem(props: LineItemProps): JSX.Element {
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
      if (confirmText && confirm(confirmText)) {
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
          type="button"
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
