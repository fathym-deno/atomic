import { ForwardedRef, forwardRef, JSX } from "../../src.deps.ts";
import { classSet } from "../../utils/jsx.utils.ts";

export type InputProps =
  & {
    multiline?: boolean;
    // prepareValue?: (value: string) => string;

    ref?: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>;
  }
  & (
    | JSX.HTMLAttributes<HTMLInputElement>
    | JSX.HTMLAttributes<HTMLTextAreaElement>
  );

export const Input = forwardRef(
  (
    props: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // const { prepareValue, value, ...rest } = props;

    // const [valueState, setValue] = useState(value);

    // const onValueChange = (value: string) => {
    //   if (prepareValue) {
    //     value = prepareValue(value);
    //   }

    //   setValue(value);
    // };

    // const onTextAreaChange = (
    //   e: JSX.TargetedEvent<HTMLTextAreaElement, Event>,
    // ) => {
    //   const target = (e.target as HTMLTextAreaElement)!;

    //   onValueChange(target.value);
    // };

    // const onInputChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    //   const target = (e.target as HTMLInputElement)!;

    //   onValueChange(target.value);
    // };

    // onChange={onTextAreaChange}
    // value={valueState}
    // onChange={onInputChange}
    // value={valueState}
    const input = props.multiline
      ? (
        <textarea
          {...(props as JSX.HTMLAttributes<HTMLTextAreaElement>)}
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
          class={classSet(
            [
              "-:w-full -:px-4 -:py-2 -:text-gray-800 -:dark:text-gray-100 -:bg-white -:dark:bg-gray-700 -:border -:border-gray-300 -:rounded-md -:shadow-sm -:focus:outline-none -:focus:ring-2 -:focus:ring-blue-500 -:focus:border-blue-500",
            ],
            props,
          )}
        >
        </textarea>
      )
      : (
        <input
          {...(props as JSX.HTMLAttributes<HTMLInputElement>)}
          ref={ref as ForwardedRef<HTMLInputElement>}
          type={props.type || "text"}
          class={classSet(
            [
              "-:w-full -:px-4 -:py-2 -:text-gray-800 -:dark:text-gray-100 -:bg-white -:dark:bg-gray-700 -:border -:border-gray-300 -:rounded-md -:shadow-sm -:focus:outline-none -:focus:ring-2 -:focus:ring-blue-500 -:focus:border-blue-500",
            ],
            props,
          )}
        />
      );

    return input;
  },
);
