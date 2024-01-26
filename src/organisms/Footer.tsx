import { ComponentChildren, JSX } from "../src.deps.ts";
import { Action, ActionProps, ActionStyleTypes } from "../atoms/Action.tsx";
import { ActionGroup } from "../molecules/ActionGroup.tsx";
import { classSet } from "../utils/jsx.utils.ts";

export interface FooterProps extends JSX.HTMLAttributes<HTMLElement> {
  companyDescription?: string;

  companyName?: string;

  nav?: ComponentChildren | Array<ActionProps>;
}

export function Footer(props: FooterProps) {
  return (
    <footer
      {...props}
      class={classSet(["bg-gray-900 text-white"], props, "-:")}
    >
      <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="md:flex justify-between">
          <div class="mb-4 md:mb-0">
            {props.companyName && (
              <Action
                href="/"
                class="text-2xl uppercase tracking-widest"
                actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
              >
                {props.companyName}
              </Action>
            )}

            {props.companyDescription && (
              <p class="text-gray-400 mt-2">{props.companyDescription}</p>
            )}
          </div>

          <div class="md:flex md:flex-col md:items-end">
            <ActionGroup
              actionStyle={ActionStyleTypes.Link | ActionStyleTypes.Rounded}
              class="flex flex-wrap justify-center -mx-2 mt-4 md:mt-0"
            >
              {props.nav}
            </ActionGroup>

            <div class="mt-4 md:mt-8">
              <p class="text-gray-400">
                &copy; {new Date().getFullYear()}{" "}
                {props.companyName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
