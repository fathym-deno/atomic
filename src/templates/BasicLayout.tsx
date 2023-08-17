import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.tsx";
import { DisplayProps, useDisplayChildren } from "../molecules/Display.tsx";
import { ActionProps, useActionChildren } from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { Header, HeaderProps } from "../organisms/Header.tsx";
import { Footer, FooterProps } from "../organisms/Footer.tsx";

export interface BasicLayoutProps extends JSX.HTMLAttributes<HTMLDivElement> {
  footer?: FooterProps | ComponentChildren;

  header?: HeaderProps | ComponentChildren;

  children?: ComponentChildren;
}

export function BasicLayout(props: BasicLayoutProps) {
  const { headerProps, header } = {
    headerProps: props.header as HeaderProps,
    header: props.header as ComponentChildren,
  };

  const { footerProps, footer } = {
    footerProps: props.footer as FooterProps,
    footer: props.footer as ComponentChildren,
  };

  return (
    <>
      {headerProps ? <Header {...headerProps} /> : header}

      {props.children && (
        <main class="flex-grow" style={{ minHeight: "calc(100vh - 15vh)" }}>
          {props.children}
        </main>
      )}

      {footerProps ? <Footer {...footerProps} /> : footer}
    </>
  );
}