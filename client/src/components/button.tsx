import React, { ButtonHTMLAttributes } from 'react'

export const Button: React.FunctionComponent<ButtonHTMLAttributes<any>> = ({ children, onClick, ...props }) =>
  <button
    className="rounded-full bg-green-300 px-8 py-4 text-lg font-medium"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>

