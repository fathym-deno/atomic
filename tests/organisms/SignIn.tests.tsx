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
    usernamePasswordOptions: {
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

    assert(html.includes("flex flex-col space-y-4"));
    assert(html.includes(`<input id="username" name="username" `));
    assert(html.includes(`<input id="password" name="password" `));
    assert(html.includes(`<button id="submit" name="submit" type="submit" `));
    assert(html.includes(`<button id="forgot" name="forgot" `));
  });
});
