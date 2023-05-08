import { VStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const ColumnStack: React.FC<IStackLayout> = ({
  classstyle,
  children,
  ...props
}) => {
  return (
    <VStack className={joinClasses("", classstyle)} {...props}>
      {children}
    </VStack>
  );
};

export default ColumnStack;
