import { joinClasses } from "@design-system/util/join-classes";
import React from "react";

const Label: React.FC<ILabel> = ({
  children,
  className,
  labelFor,
  ...props
}) => {
  return (
    <label {...props} htmlFor={labelFor} className={joinClasses(className)}>
      {children}
    </label>
  );
};

export default Label;
