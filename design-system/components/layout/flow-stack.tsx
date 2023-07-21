import { HStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const FlowStack: React.FC<IStackLayout> = ({
  className,
  children,
  ...props
}) => {
  return (
    <HStack as="div" className={joinClasses("", className)} {...props}>
      {children}
    </HStack>
  );
};

export default FlowStack;
