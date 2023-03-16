import { joinClasses } from '@design-system/util/join-classes';
import React from 'react';

const FieldSet: React.FC<IFieldSet> = ({children, classstyle, ...props}) => {
  return (
    <div {...props} 
    className={joinClasses(classstyle, 'flex flex-col items-start space-y-[8px]')}
    >
      {children}
    </div>
  )
}

export default FieldSet;