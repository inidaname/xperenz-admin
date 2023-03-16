import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { joinClasses } from '@design-system/util/join-classes';

const Button: React.FC<IButton> = ({children, classstyle, ...props}) => {

  const rest: IButton = {
    shadow: props.shadow || "sm",
    width: props.width || "full",
    py: props.py || "6",
    // backgroundColor: props.backgroundColor || "#950067",
    textColor: props.textColor || "white",
    textTransform: props.textTransform || "uppercase",
    ...props,
  }

  return (
      <ChakraButton className={joinClasses(classstyle)} {...rest}>
        {children}
      </ChakraButton>
  )
}

export default Button