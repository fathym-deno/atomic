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
      actionInputProps: { id: "submit", name: "submit" },
      forgotPasswordActionProps: { id: "forgot", name: "forgot" },
    },
  };

  it("renders with default props", () => {
    const html = render(
      <SignIn {...defaultProps} />
    );
    assertEquals(
      html,
      `<div class="flex flex-col space-y-4"><div class="flex flex-col space-y-2"><input id="username" name="username"/><input id="password" name="password"/><button id="submit" name="submit" class="rounded-full px-4 py-2 bg-blue-500 text-white"/><a id="forgot" name="forgot" class="text-blue-500 underline"/></div></div>`
    );
  });
});