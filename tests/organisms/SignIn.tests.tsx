import { SignIn, SignInProps } from "../../src/organisms/SignIn.tsx";
import { assert, describe, it, render } from "../test.deps.ts";

describe("SignIn", () => {
  const defaultProps: SignInProps = {
    oauthProviders: [],
    signInOptions: {
      submitActionProps: { id: "submit", name: "submit" },
      forgotPasswordActionProps: { id: "forgot", name: "forgot" },
    },
  };

  it("renders with default props", () => {
    const html = render(
      <SignIn {...defaultProps} />,
    );

    assert(html.includes("-:flex -:flex-col -:space-y-4"));
    assert(
      html.includes(
        `<input placeholder="Username" name="Username" type="text" `,
      ),
    );
    assert(
      html.includes(
        `<input placeholder="Password" type="password" name="password" `,
      ),
    );
    assert(html.includes(`<button type="submit"`));
    assert(html.includes(`id="submit" name="submit"`));
    assert(html.includes(`id="forgot" name="forgot"`));
  });
});
