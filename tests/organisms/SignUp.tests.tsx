import { SignUp, SignUpProps } from "../../src/organisms/SignUp.tsx";
import { assert, preactRenderToString } from "../test.deps.ts";

Deno.test("SignUp", async (t) => {
  const defaultProps: SignUpProps = {
    signUpOptions: {
      submitActionProps: { id: "submit", name: "submit" },
    },
  };

  await t.step("renders with default props", () => {
    const html = preactRenderToString(
      <SignUp {...defaultProps} />,
    );

    assert(html.includes("-:flex -:flex-col -:space-y-4"));
    assert(
      html.includes(
        `<input placeholder="Username" name="Username" type="text" `,
      ),
    );
    assert(
      html.includes(
        `<input placeholder="Password" type="password" name="password"`,
      ),
    );
    assert(
      html.includes(
        `<input placeholder="Confirm Password" type="password" name="confirmPassword"`,
      ),
    );
    assert(html.includes(`<button id="submit" name="submit" type="submit"`));
  });
});
