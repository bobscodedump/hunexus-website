import React from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: Props) {
  return <textarea {...props} />;
}
