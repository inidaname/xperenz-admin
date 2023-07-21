import React from "react";
import { Textarea as ChakraTextarea } from "@chakra-ui/react";

const Textarea = React.forwardRef<React.ElementRef<"textarea">, ITextarea>(
  ({ children, ...props }, ref) => {
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
    return (
      <ChakraTextarea ref={ref} {...rest}>
        {children}
      </ChakraTextarea>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
