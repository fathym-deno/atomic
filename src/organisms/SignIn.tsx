import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { Input, InputProps } from "../atoms/forms/Input.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.tsx";

export type UsernamePasswordOptions = {
  usernameInputProps?: InputProps;
  passwordInputProps?: InputProps;
  actionInputProps?: ActionProps;
  forgotPasswordActionProps?: ActionProps;
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
        <ActionGroup>
          {oauthProviders.map((provider, index) => (
            <Action key={index} {...provider} />
          ))}
        </ActionGroup>
      )}

      {usernamePasswordOptions && (
        <form class="flex flex-col space-y-2">
          <Input {...usernamePasswordOptions.usernameInputProps} />
          <Input {...usernamePasswordOptions.passwordInputProps} />

          <Action
            {...usernamePasswordOptions.actionInputProps}
            type="submit"
            actionStyle={ActionStyleTypes.Solid | ActionStyleTypes.Rounded}
          />

          <Action
            {...usernamePasswordOptions.forgotPasswordActionProps}
            actionStyle={ActionStyleTypes.Link}
          />
        </form>
      )}
    </div>
  );
}
