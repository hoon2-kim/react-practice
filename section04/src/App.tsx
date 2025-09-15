import Button from './components/Button';
import PrintValue from './components/PrintValue';
import User from './components/User';
import User2 from './components/User2';

export default function App() {
  // 기본 자료형
  const primitiveString = 'Hello, World!';
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol('mySymbol');
  const primitiveBigInt = 9007199254740991n;

  // 참조 자료형
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: 'John', age: 30 };
  const referenceFunction = () => '함수의 리턴 값';
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  // 많이 쓰이는 자료형 데이터 전달 예제
  const numberValue = 42;
  const stringValue = 'Hello World';
  const booleanValue = true;
  const arrayValue = [1, 2, 3, 4];
  const objectValue = { name: 'John Doe', age: 30 };
  const handleClick = () => alert('버튼이 클릭되었습니다.');

  // 스프레드 연산자 활용
  const userObj = { name: 'jack', age: 20, gender: 'male' };

  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefined)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>symbol: {String(primitiveSymbol)}</p>
      <p>BigInt: {primitiveBigInt}</p>

      <p>배열: {referenceArray}</p>
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>함수: {referenceFunction.toString()}</p>
      <p>Date: {referenceDate.toString()}</p>
      <p>정규식: {referenceRegExp.toString()}</p>
      <p>Map: {JSON.stringify(Array.from(referenceMap))}</p>
      <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>

      {/* 자식 컴포넌트인 User에게 데이터(props) 전달 */}
      <User name="Jack" age={20} />
      <User name="Mike" age={30} />

      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />

      <User2 {...userObj} />

      {/* props 대신 children 방식으로 전달하는 방법도 있음 */}
      <Button>
        <em>Logout</em>
      </Button>
    </>
  );
}

// Boolean값, undefined, null, symbol은 렌더링 되지않는다. Boolean은 렌더링 하려면 문자열로 변경해야함
// 나머지는 String으로 감싸줘야함

// 배열은 각 요소를 평가해 각 요소가 개별적으로 출력된다.
// 객체는 직접 렌더링이 안되므로 JSON.stringify()를 사용해야한다.

// 리액트는 부모 컴포넌트-> 자식 컴포넌트로만 데이터가 전달이 가능하다.
