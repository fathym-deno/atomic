import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export type HeaderLogo = {
  LogoAlt?: string;

  LogoUrl?: string;

  LogoHref?: string;
} & JSX.HTMLAttributes<HTMLImageElement>;

export function useHeaderLogoChildren(
  children: ComponentChildren | HeaderLogo,
): {
  logo: ComponentChildren;
  logoDetails: HeaderLogo | undefined;
  logoAction: JSX.Element;
} {
  const isHeaderLogo = !!(children as HeaderLogo)?.LogoUrl;

  const logo = isHeaderLogo ? undefined : (children as ComponentChildren);

  const logoDetails = isHeaderLogo ? (children as HeaderLogo) : undefined;

  const logoAction = (
    <Action
      href={logoDetails?.LogoHref}
      actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
    >
      <img
        src={logoDetails?.LogoUrl}
        alt={logoDetails?.LogoAlt}
        {...(logoDetails || {})}
        class={classSet(
          ["-:w-48 -:sm:w-32 -:fill-black -:dark:fill-white"],
          logoDetails,
        )}
      />
    </Action>
  );

  return { logo, logoDetails, logoAction };
}

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  logo?: ComponentChildren | HeaderLogo;

  nav?: ComponentChildren | Array<ActionProps>;
}

export function Header(props: HeaderProps): JSX.Element {
  const { logo, logoAction } = useHeaderLogoChildren(props.logo);

  return (
    <header
      {...props}
      class={classSet(
        [
          "-:flex -:items-center -:justify-between -:bg-gray-100 -:dark:bg-gray-800",
        ],
        props,
      )}
    >
      <div class="px-4 py-3 sm:p-0">{logo || logoAction}</div>

      <ActionGroup class="flex-1">{props.nav}</ActionGroup>
    </header>
  );
}
