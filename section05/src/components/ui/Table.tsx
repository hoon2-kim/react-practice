// 이벤트 전파란? DOM에서 이벤트가 발생했을 때, 이벤트가 전달되는 과정 / 캡쳐링 -> 타겟 -> 버블링

// 버블링 - 리액트에서는 기본 적용
export default function Table() {
  return (
    <>
      <table border={1} onClick={() => console.log('table')}>
        <tbody onClick={() => console.log('tbody')}>
          <tr onClick={() => console.log('tr')}>
            <td
              onClick={(event) => {
                event.stopPropagation(); // 버블링 차단
                console.log('td');
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

// 캡쳐링 - 기본 적용 x
// export default function Table() {
//   return (
//     <>
//       <table border={1} onClickCapture={() => console.log('table')}>
//         <tbody onClickCapture={() => console.log('tbody')}>
//           <tr onClickCapture={() => console.log('tr')}>
//             <td onClickCapture={() => console.log('td')}>Mike</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }
