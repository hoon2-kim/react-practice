type PrintValueProps = {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
};

// props로 안받고 비구조화할당으로 받아도 됨
export default function PrintValue({
  numberValue,
  stringValue,
  booleanValue,
  arrayValue,
  objectValue,
  handleClick,
}: PrintValueProps) {
  return (
    <>
      <p>number: {numberValue}</p>
      <p>string: {stringValue}</p>
      <p>boolean: {booleanValue.toString()}</p>
      <p>array: {arrayValue}</p>
      <p>object: {JSON.stringify(objectValue)}</p>
      <p>function: {handleClick.toString()}</p>
    </>
  );
}
