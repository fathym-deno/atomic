import { assert, preactRenderToString } from "../test.deps.ts";

import { Action } from "../../src/atoms/Action.tsx";
import { Header } from "../../src/organisms/Header.tsx";

Deno.test("Header Tests", async (t) => {
  await t.step("Logo Children", () => {
    const html = preactRenderToString(
      <Header
        logo={<Action href="/">Hello World</Action>}
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
      />,
    );

    assert(html.includes("Hello World"));
    assert(html.includes("Contact"));
  });

  await t.step("Logo Simple", () => {
    const html = preactRenderToString(
      <Header
        logo={{
          LogoHref: "/",
          LogoUrl: "http://localhost:8000/logo.svg",
          LogoAlt: "Fathym Open BioTech",
        }}
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
      />,
    );

    assert(html.includes('href="/"'));
    assert(html.includes("http://localhost:8000/logo.svg"));
    assert(html.includes("Fathym Open BioTech"));
    assert(html.includes("Contact"));
  });

  await t.step("Nav Simple", () => {
    const html = preactRenderToString(
      <Header
        logo={{
          LogoHref: "/",
          LogoUrl: "http://localhost:8000/logo.svg",
          LogoAlt: "Fathym Open BioTech",
        }}
        nav={[
          {
            class: "text-xl mx-1",
            href: "/",
            children: "Home",
          },
          {
            class: "text-xl mx-1",
            href: "/about",
            children: "About",
          },
          {
            class: "text-xl mx-1",
            href: "/contact",
            children: "Contact",
          },
        ]}
      />,
    );

    assert(html.includes('href="/"'));
    assert(html.includes('src="http://localhost:8000/logo.svg"'));
    assert(html.includes('alt="Fathym Open BioTech"'));
    assert(html.includes(">Contact<"));
    assert(html.includes('href="/contact"'));
  });
});
