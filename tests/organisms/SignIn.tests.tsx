import { SignIn, SignInProps } from "../../src/organisms/SignIn.tsx";
import {
  afterEach,
  assert,
  assertEquals,
  beforeEach,
  describe,
  it,
  render,
} from "../test.deps.ts";

describe("SignIn", () => {
  const defaultProps: SignInProps = {
    oauthProviders: [],
    signInOptions: {
      usernameInputProps: { id: "username", name: "username" },
      passwordInputProps: { id: "password", name: "password" },
      submitActionProps: { id: "submit", name: "submit" },
      forgotPasswordActionProps: { id: "forgot", name: "forgot" },
    },
  };

  it("renders with default props", () => {
    const html = render(
      <SignIn {...defaultProps} />,
    );

    console.log(html);
    assert(html.includes("flex flex-col space-y-4"));
    assert(
      html.includes(
        `<input placeholder="Username" id="username" name="username" `,
      ),
    );
    assert(
      html.includes(
        `<input placeholder="Password" type="password" id="password" name="password" `,
      ),
    );
    assert(html.includes(`<button type="submit"`));
    assert(html.includes(`id="submit" name="submit"`));
    assert(html.includes(`id="forgot" name="forgot"`));
  });
});
