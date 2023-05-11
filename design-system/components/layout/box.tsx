import { Box as ChackraBox } from "@chakra-ui/react";
import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const Box: React.FC<IBox> = ({ className, as, children, ...props }) => {
  return (
    <ChackraBox
      as={as || "div"}
      className={joinClasses("", className)}
      {...props}
    >
      {children}
    </ChackraBox>
  );
};

export default Box;
