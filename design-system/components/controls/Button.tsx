import React from 'react';
interface iButton extends React.FC {

}
const Button: React.FC<iButton> = ({children}) => {
  return (
    <>
      <button>
        {children}
      </button>
    </>
  )
}

export default Button