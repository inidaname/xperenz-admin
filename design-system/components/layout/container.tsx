import React from "react"
import classes from '@design-system/design/container-layout-class';
import { joinClasses } from "@design-system/util/join-classes";
import { Container } from "@chakra-ui/react";

const ContainerLayout: React.FC<ILayoutProp> = ({children, classstyle, ...props}) => {
  return (
    <Container { ...props } className={ joinClasses(classes.base, classstyle) }>
      {children}
    </Container>
  )
}

export default ContainerLayout