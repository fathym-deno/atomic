import { assert, describe, render } from "../test.deps.ts";

import { Footer } from "../../src/organisms/Footer.tsx";

describe("Footer Tests", () => {
  describe("Nav Simple", () => {
    const html = render(
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
      />,
    );

    assert(html.includes(">Fathym Test<"));
    assert(html.includes('href="/"'));
    assert(html.includes(">Contact<"));
    assert(html.includes('href="/contact"'));
  });
});
