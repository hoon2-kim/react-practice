import type { ButtonProps } from '../../types/button';

export default function Button({ message, children, handler }: ButtonProps) {
  return (
    <>
      <button onClick={() => handler(message)}>{children}</button>
    </>
  );
}
