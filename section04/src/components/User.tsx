// 부모로 부터 받는 데이터(매개변수)를 props로 받는다.
export default function User(props: { name: string; age: number }) {
  // console.log(props) // 객체 형태로 받는다.
  return (
    <>
      <div>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
      </div>
    </>
  );
}
