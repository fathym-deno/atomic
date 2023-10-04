import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { Input, InputProps } from "../atoms/forms/Input.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.tsx";

export type SignUpOptions = {
  usernameInputProps?: InputProps;
  passwordInputProps?: InputProps;
  confirmPasswordInputProps?: InputProps;
  submitActionProps?: ActionProps;
  formProps?: JSX.HTMLAttributes<HTMLFormElement>;
};

export interface SignUpProps extends JSX.HTMLAttributes<HTMLElement> {
  signUpOptions?: SignUpOptions;
}

export function SignUp(props: SignUpProps) {
  const { signUpOptions } = props;

  return (
    <div class={classSet(props, "flex flex-col space-y-4")}>
      {signUpOptions && (
        <form {...signUpOptions.formProps} class="flex flex-col space-y-2">
          <Input {...signUpOptions.usernameInputProps} />
          <Input {...signUpOptions.passwordInputProps} />
          <Input {...signUpOptions.confirmPasswordInputProps} />

          <Action
            {...signUpOptions.submitActionProps}
            type="submit"
            actionStyle={ActionStyleTypes.Solid | ActionStyleTypes.Rounded}
          />
        </form>
      )}
    </div>
  );
}
