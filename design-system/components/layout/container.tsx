import React from "react";
import classes from "@design-system/design/container-layout-class";
import { joinClasses } from "@design-system/util/join-classes";
import { Container as ChakraContainer } from "@chakra-ui/react";

const Container: React.FC<IContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ChakraContainer
      {...props}
      className={joinClasses(classes.base, className)}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;

