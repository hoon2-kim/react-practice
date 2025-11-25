// 이벤트 객체란? 이벤트와 관련된 다양한 정보를 포함하고 있는 객체
// React에서는 SyntheticEvent이다. (원본 DOM을 래핑함)

export default function Button3() {
  const handleClick = (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(message);
    console.log(event);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('handleClick2');
    console.log(event);
  };

  return (
    <>
      <button onClick={(event) => handleClick('click!', event)}>클릭</button>
      <button onClick={handleClick2}>클릭2</button>
    </>
  );
}
