import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const Input = React.forwardRef<React.ElementRef<"input">, IInputTypes>(
  ({ className, type, ...props }, ref) => {
    const rest = {
      background: props.background || "#F5F5F7",
      borderColor: props.borderColor || "gray.300",
      py: props.py || "6",
      appearance: props.appearance || "none",
      rounded: props.rounded || "md",
      px: props.px || "4",
      boxSizing: props.boxSizing || "border-box",
      shadow: props.shadow || "sm",
      ...props,
    };
    return type === "file" ? (
      <>
        <ChakraInput
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-5 file:-my-[3px] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary file:h-auto"
          type="file"
          id="formFile"
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </>
    ) : (
      <ChakraInput {...rest} className={joinClasses(className)} ref={ref} />
    );
  }
);

Input.displayName = "Input";

interface IFormControl extends FormControlProps {
  className?: string;
}

const InputFormControl: React.FC<IFormControl> = ({
  label,
  className,
  children,
  ...props
}) => {
  return (
    <FormControl
      as="fieldset"
      {...props}
      className={joinClasses(
        className,
        "flex flex-col items-start space-y-[8px]"
      )}
    >
      <>
        <FormLabel as="label" htmlFor={label}>
          {label}
        </FormLabel>
        {children}
      </>
    </FormControl>
  );
};

export { InputFormControl, Input };
