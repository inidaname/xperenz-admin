import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const Input = React.forwardRef<React.ElementRef<"input">, IInputTypes>(
  ({ classstyle, ...props }, ref) => {
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
    return <ChakraInput {...rest} className={joinClasses(classstyle)} ref={ref} />;
  }
);

Input.displayName = "Input";

interface IFormControl extends FormControlProps {
  classstyle?: string;
}

const InputFormControl: React.FC<IFormControl> = ({
  label,
  classstyle,
  children,
  ...props
}) => {
  return (
    <FormControl as="fieldset" {...props} className={joinClasses(classstyle, "flex flex-col items-start space-y-[8px]")}>
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
