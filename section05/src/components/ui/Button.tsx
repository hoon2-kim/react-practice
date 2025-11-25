// export default function Button() {
//   // 이벤트 핸들러
//   // 이벤트 속성은 카멜케이스로
//   const handleClick = (value: string) => alert(value);

import type React from 'react';

//   return (
//     <>
//       {/* 매개변수를 받기 위해서는 함수로 감싸진 형태로 작성해야한다. 단순히 handleClick('Hello')로 하게되면 함수 즉시 호출이기 때문에 렌더링 되자마자 실행된다. */}
//       <button onClick={() => handleClick('Hello')}>클릭</button>
//     </>
//   );
// }

export default function Button({ message, children }: { message: string; children: React.ReactNode }) {
  const handleClick = () => alert(message);

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

// children은 컴포넌트의 시작 태그와 닫는 태그 사이에 들어가는 내용
