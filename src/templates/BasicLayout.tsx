import { ComponentChildren, JSX } from "../src.deps.ts";
import { classSet } from "../utils/jsx.utils.ts";
import { Header, HeaderProps } from "../organisms/Header.tsx";
import { Footer, FooterProps } from "../organisms/Footer.tsx";

export interface BasicLayoutProps extends JSX.HTMLAttributes<HTMLDivElement> {
  footer?: FooterProps | ComponentChildren;

  header?: HeaderProps | ComponentChildren;

  children?: ComponentChildren;
}

export function BasicLayout(props: BasicLayoutProps) {
  const { headerProps, header } = {
    headerProps: (props.header as HeaderProps)?.nav
      ? props.header as HeaderProps
      : undefined,
    header: !(props.header as HeaderProps)?.nav
      ? props.header as ComponentChildren
      : undefined,
  };

  const { footerProps, footer } = {
    footerProps: (props.footer as FooterProps)?.nav
      ? props.footer as FooterProps
      : undefined,
    footer: !(props.footer as FooterProps)?.nav
      ? props.footer as ComponentChildren
      : undefined,
  };

  return (
    <>
      {headerProps ? <Header {...headerProps} /> : header}

      {props.children && (
        <main
          class={classSet(
            ["-:flex-grow", "-:min-h-[100vh]"],
            props,
          )}
        >
          {props.children}
        </main>
      )}

      {footerProps ? <Footer {...footerProps} /> : footer}
    </>
  );
}
