export type ButtonProps = {
  message: string;
  children: React.ReactNode;
  handler: (message: string) => void;
};
