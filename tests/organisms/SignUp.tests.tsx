import { SignUp, SignUpProps } from "../../src/organisms/SignUp.tsx";
import { assert, describe, it, render } from "../test.deps.ts";

describe("SignUp", () => {
  const defaultProps: SignUpProps = {
    signUpOptions: {
      submitActionProps: { id: "submit", name: "submit" },
    },
  };

  it("renders with default props", () => {
    const html = render(
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
