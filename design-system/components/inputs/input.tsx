import React from 'react'

export interface IInput {
  children: React.ReactNode;
  name: string;
  placeholder: string;
  onchange?: (event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent) => void
}

const Input = React.forwardRef<React.ElementRef<'input'>, IInput>(
  ({name, placeholder, children, onchange, ...props}, ref) => (
    <input
      {...props}
      ref={ ref }
      name={ name }
      placeholder={ placeholder }
      onChange={ () => onchange }
    />
  )
);

Input.displayName = "Input";

export default Input