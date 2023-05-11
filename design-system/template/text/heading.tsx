import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util";

const HeadingText: React.FC<IHeadingProp> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Heading className={joinClasses("", className)} {...props}>
      {children}
    </Heading>
  );
};

export default HeadingText;
