export default function Button2({
  handleClick,
  message,
  children,
}: {
  handleClick: (message: string) => void;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
