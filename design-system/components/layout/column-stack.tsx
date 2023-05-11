import { VStack } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const ColumnStack: React.FC<IStackLayout> = ({
  className,
  children,
  ...props
}) => {
  return (
    <VStack className={joinClasses("", className)} {...props}>
      {children}
    </VStack>
  );
};

export default ColumnStack;
