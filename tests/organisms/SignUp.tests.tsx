import { SignUp, SignUpProps } from "../../src/organisms/SignUp.tsx";
import {
  afterEach,
  assert,
  describe,
  it,
  render,
} from "../test.deps.ts";

describe("SignUp", () => {
  const defaultProps: SignUpProps = {
    signUpOptions: {
      usernameInputProps: { id: "username", name: "username" },
      passwordInputProps: { id: "password", name: "password" },
      confirmPasswordInputProps: { id: "confirmPassword", name: "confirmPassword" },
      submitActionProps: { id: "submit", name: "submit" },
    },
  };

  it("renders with default props", () => {
    const html = render(
      <SignUp {...defaultProps} />,
    );

    assert(html.includes("flex flex-col space-y-4"));
    assert(html.includes(`<input id="username" name="username"`));
    assert(html.includes(`<input id="password" name="password"`));
    assert(html.includes(`<input id="confirmPassword" name="confirmPassword"`));
    assert(html.includes(`<button id="submit" name="submit" type="submit"`));
  });
});