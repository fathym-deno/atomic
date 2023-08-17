import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";
import { DisplayProps, useDisplayChildren } from "../molecules/Display.tsx";
import { ActionProps, useActionChildren } from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { Header, HeaderProps } from "../organisms/Header.tsx";
import { Footer, FooterProps } from "../organisms/Footer.tsx";

export interface BasicLayoutProps extends JSX.HTMLAttributes<HTMLDivElement> {
  footer?: ComponentChildren;

  header?: ComponentChildren;

  children?: ComponentChildren;
}

export function BasicLayout(props: BasicLayoutProps) {
  // const { headerProps, header } = {
  //   headerProps: (props.header as HeaderProps)?.nav
  //     ? props.header as HeaderProps
  //     : undefined,
  //   header: !(props.header as HeaderProps)?.nav
  //     ? props.header as ComponentChildren
  //     : undefined,
  // };

  // const { footerProps, footer } = {
  //   footerProps: (props.footer as FooterProps)?.nav
  //     ? props.footer as FooterProps
  //     : undefined,
  //   footer: !(props.footer as FooterProps)?.nav
  //     ? props.footer as ComponentChildren
  //     : undefined,
  // };

  return (
    <>
      {props.header}

      {props.children && (
        <main class="flex-grow" style={{ minHeight: "calc(100vh - 15vh)" }}>
          {props.children}
        </main>
      )}

      {props.footer}
    </>
  );
}
