import { assert, describe, render } from "../test.deps.ts";

import { Action } from "../../src/atoms/Action.tsx";
import { ActionGroup } from "../../src/molecules/ActionGroup.tsx";

describe("Action Group Tests", () => {
  describe("Actions Children", () => {
    const html = render(
      <ActionGroup>
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
      </ActionGroup>,
    );

    assert(html.includes('href="/"'));
    assert(html.includes('href="/contact"'));
    assert(html.includes(">Contact<"));
    assert(html.includes("Contact"));
  });

  describe("Actions Simple", () => {
    const html = render(
      <ActionGroup>
        {[{
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
      </ActionGroup>,
    );

    assert(html.includes('href="/"'));
    assert(html.includes('href="/contact"'));
    assert(html.includes(">Contact<"));
    assert(html.includes("Contact"));
    assert(!html.includes("hidden md:flex"));
    assert(!html.includes("md:hidden"));
  });
});
