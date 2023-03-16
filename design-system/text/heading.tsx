import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

const HeadingText: React.FC<IHeadingProp & HeadingProps> = ({children, ...props}) => {
  return (
    <Heading {...props}>{children}</Heading>
  )
}

export default HeadingText