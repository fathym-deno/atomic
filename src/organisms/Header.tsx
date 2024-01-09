import { ComponentChildren, JSX } from "../src.deps.ts";
import {
  Action,
  ActionAnchorProps,
  ActionButtonProps,
  ActionProps,
  ActionStyleTypes,
} from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.ts";
import { MenuButton, MenuButtonStyleTypes } from "../molecules/MenuButton.tsx";

export class HeaderLogo {
  public LogoAlt?: string;

  public LogoUrl?: string;

  public LogoHref?: string;
}

export function useHeaderLogoChildren(
  children: ComponentChildren | HeaderLogo,
): {
  logo: ComponentChildren;
  logoDetails: HeaderLogo | undefined;
  logoAction: JSX.Element;
} {
  const isHeaderLogo = !!(children as HeaderLogo)?.LogoUrl;

  const logo = isHeaderLogo ? undefined : children as ComponentChildren;

  const logoDetails = isHeaderLogo ? children as HeaderLogo : undefined;

  const logoAction = (
    <Action
      href={logoDetails?.LogoHref}
      actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
    >
      <img
        src={logoDetails?.LogoUrl}
        class="w-48 sm:w-32"
        alt={logoDetails?.LogoAlt}
      />
    </Action>
  );

  return { logo, logoDetails, logoAction };
}

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren | HeaderLogo;

  nav?: ComponentChildren | Array<ActionProps>;
}

export function Header(props: HeaderProps) {
  const { logo, logoAction } = useHeaderLogoChildren(props.logo);

  return (
    <header
      {...props}
      class={classSet(
        props,
        "flex items-center justify-between",
      )}
    >
      <div class="px-4 py-3 sm:p-0">
        {logo || logoAction}
      </div>

      <ActionGroup>
        {props.nav}
      </ActionGroup>
    </header>
  );
}
