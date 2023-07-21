import { joinClasses } from '@design-system/util/join-classes'
import React from 'react'

const Label: React.FC<ILabel> = ({children, classstyle, labelFor, ...props}) => {
  return (
    <label
    {...props}
    htmlFor={labelFor}
    className={joinClasses(classstyle)}
    >
      {children}
    </label>
  )
}

export default Label