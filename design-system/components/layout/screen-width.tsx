import React from "react";
import classes from "@design-system/design/screen-width-class";
import { joinClasses } from "@design-system/util/join-classes";

const ScreenWidth: React.FC<IContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={joinClasses(classes.base, className)}>
      {children}
    </div>
  );
};

export default ScreenWidth;
