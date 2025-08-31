import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };

export function Button({ className = '', ...props }: ButtonProps) {
  return <button {...props} className={className} />;
}
