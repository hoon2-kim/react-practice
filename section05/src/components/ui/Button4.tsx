// 부모 컴포넌트에서 이벤트 핸들러를 전달하는 경우

export default function Button4({
  handleClick4,
}: {
  handleClick4: (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick4('Hello', event)}>클릭4</button>
    </>
  );
}
