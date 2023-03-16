import React from "react"
import classes from '@design-system/design/container-layout-class';
import { joinClasses } from "@design-system/util/join-classes";

const ContainerLayout: React.FC<ILayoutProp> = ({children, classstyle, ...props}) => {
  return (
    <div { ...props } className={ joinClasses(classes.base, classstyle) }>
      {children}
    </div>
  )
}

export default ContainerLayout