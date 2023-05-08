import { HStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const FlowStack: React.FC<IStackLayout> = ({
  classstyle,
  children,
  ...props
}) => {
  return (
    <HStack className={joinClasses("", classstyle)} {...props}>
      {children}
    </HStack>
  );
};

export default FlowStack;
