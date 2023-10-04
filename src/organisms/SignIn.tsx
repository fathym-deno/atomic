import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { Input, InputProps } from "../atoms/forms/Input.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.tsx";

export type UsernamePasswordOptions = {
  usernameInputProps?: InputProps;
  passwordInputProps?: InputProps;
  submitActionProps?: ActionProps;
  forgotPasswordActionProps?: ActionProps;
  formProps?: JSX.HTMLAttributes<HTMLFormElement>;
};

export interface SignInProps extends JSX.HTMLAttributes<HTMLElement> {
  oauthProviders?: Array<ActionProps>;
  usernamePasswordOptions?: UsernamePasswordOptions;
}

export function SignIn(props: SignInProps) {
  const { oauthProviders, usernamePasswordOptions } = props;

  return (
    <div class={classSet(props, "flex flex-col space-y-4")}>
      {oauthProviders && (
        <ActionGroup class="flex flex-col space-y-2">
          {oauthProviders.map((provider, index) => (
            <Action key={index} {...provider} />
          ))}
        </ActionGroup>
      )}

      {usernamePasswordOptions && (
        <form
          {...usernamePasswordOptions.formProps}
          class="flex flex-col space-y-2"
        >
          <Input {...usernamePasswordOptions.usernameInputProps} />
          <Input {...usernamePasswordOptions.passwordInputProps} />

          <div class="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 md:items-center">
            <Action
              {...usernamePasswordOptions.forgotPasswordActionProps}
              actionStyle={ActionStyleTypes.Link}
              class="order-2 md:order-1"
            />
            <Action
              {...usernamePasswordOptions.submitActionProps}
              type="submit"
              actionStyle={ActionStyleTypes.Solid | ActionStyleTypes.Rounded}
              class="order-1 md:order-2"
            />
          </div>
        </form>
      )}
    </div>
  );
}
