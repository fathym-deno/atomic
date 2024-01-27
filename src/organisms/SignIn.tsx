import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { Input, InputProps } from "../atoms/forms/Input.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export type SignInOptions = {
  usernameInputProps?: InputProps;
  passwordInputProps?: InputProps;
  submitActionProps?: ActionProps;
  forgotPasswordActionProps?: ActionProps;
  formProps?: JSX.HTMLAttributes<HTMLFormElement>;
};

export interface SignInProps extends JSX.HTMLAttributes<HTMLElement> {
  oauthProviders?: Array<ActionProps>;
  signInOptions?: SignInOptions;
}

export function SignIn(props: SignInProps) {
  const { oauthProviders, signInOptions } = props;

  return (
    <div class={classSet(["-:flex -:flex-col -:space-y-4"], props)}>
      {oauthProviders && (
        <ActionGroup class="flex flex-col space-y-2">
          {oauthProviders.map((provider, index) => (
            <Action key={index} {...provider} />
          ))}
        </ActionGroup>
      )}

      {signInOptions && (
        <form {...signInOptions.formProps} class="flex flex-col space-y-2">
          <Input
            placeholder="Username"
            name="Username"
            {...signInOptions.usernameInputProps}
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            {...signInOptions.passwordInputProps}
          />

          <div class="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 md:items-center">
            <Action
              actionStyle={ActionStyleTypes.Link}
              class="order-2 md:order-1"
              children={"Forgot Password"}
              {...signInOptions.forgotPasswordActionProps}
            />

            <Action
              type="submit"
              actionStyle={ActionStyleTypes.Solid | ActionStyleTypes.Rounded}
              class="order-1 md:order-2"
              children={"Submit"}
              {...signInOptions.submitActionProps}
            />
          </div>
        </form>
      )}
    </div>
  );
}
