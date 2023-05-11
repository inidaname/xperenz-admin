import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

const Paragraph: React.FC<ITextProps> = ({children, ...props}) => {
  return (
    <Text {...props}>
      {children}
    </Text>
  )
}

export default Paragraph