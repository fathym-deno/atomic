import { Action, BasicLayout, Footer, Header } from "../../mod.ts";
import { assert, preactRenderToString } from "../test.deps.ts";

Deno.test("Basic Layout Tests", async (t) => {
  await t.step("With Components", () => {
    const logo = {
      LogoAlt: "Fathym Open BioTech",
      LogoUrl: "/o-biotech-logo.svg",
      LogoHref: "/",
    };

    const header = (
      <Header
        title="Hello World"
        logo={logo}
        nav={
          <>
            <Action href="/" class="text-xl mx-1">
              Home
            </Action>

            <Action href="/about" class="text-xl mx-1">
              About
            </Action>

            <Action href="/contact" class="text-xl mx-1">
              Contact
            </Action>
          </>
        }
      />
    );

    const footer = (
      <Footer
        companyName="Fathym Test"
        companyDescription="This is a description of the test"
        nav={[{
          class: "text-xl mx-1",
          href: "/",
          children: "Home",
        }, {
          class: "text-xl mx-1",
          href: "/about",
          children: "About",
        }, {
          class: "text-xl mx-1",
          href: "/contact",
          children: "Contact",
        }]}
      />
    );

    const html = preactRenderToString(
      <BasicLayout header={header} footer={footer}>
        <>
          <h2>This is the main content.</h2>
        </>
      </BasicLayout>,
    );

    assert(
      html.includes(`main class="-:flex-grow -:min-h-[100vh]"`),
    );
    assert(html.includes(`<h2>This is the main content.</h2>`));
    assert(html.includes("This is a description of the test"));
    assert(html.includes("Hello World"));
    assert(html.includes("/o-biotech-logo.svg"));
  });
});
