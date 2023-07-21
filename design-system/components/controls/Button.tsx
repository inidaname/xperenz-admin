import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";

const Button: React.FC<IButton> = ({ children, classstyle, ...props }) => {
  const rest: IButton = {
    shadow: props.shadow || "sm",
    width: props.width || "full",
    py: props.py || "6",
    // backgroundColor: props.backgroundColor || "#950067",
    textColor: props.textColor || "white",
    textTransform: props.textTransform || "uppercase",
    // transition: props.transition || "all 0.2s cubic-bezier(.08,.52,.52,1)",
    ...props,
  };

  return (
    <ChakraButton
      _active={{
        transform: "scale(0.99)",
      }}
      className={joinClasses(classstyle)}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
