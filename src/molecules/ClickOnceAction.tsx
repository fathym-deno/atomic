import { Action, ActionProps } from "../atoms/Action.tsx";
import { Icon } from "../atoms/Icon.tsx";
import { JSX, useState } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";

export const IsIsland = true;

export type ClickOnceActionProps = {
  icons?: {
    LoadingIcon?: string;

    IconSet?: string;
  };
} & ActionProps;

export default function ClickOnceAction(props: ClickOnceActionProps) {
  const { icons, ...actionProps } = props;

  const [clicked, setClicked] = useState(false);

  const onClick: JSX.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = (
    e: Omit<MouseEvent, "currentTarget"> & {
      readonly currentTarget: HTMLAnchorElement;
    } & { readonly currentTarget: HTMLButtonElement },
  ) => {
    setClicked(true);

    props.onClick?.(e);
  };

  return !clicked
    ? (
      <Action
        {...actionProps}
        onClick={(
          e: JSX.TargetedMouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        ) => onClick(e)}
      />
    )
    : (
      <Icon
        class={classSet(["-:w-6 -:h-6"], actionProps)}
        src={icons?.IconSet || "/icons/iconset"}
        icon={icons?.LoadingIcon || "loading"}
      >
      </Icon>
    );
}
