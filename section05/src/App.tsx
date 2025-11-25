import Button from './components/ui/Button';
import Button2 from './components/ui/Button2';
import Button3 from './components/ui/Button3';
import Button4 from './components/ui/Button4';
import Table from './components/ui/Table';

function App() {
  const handleClick = (message: string) => alert(message);

  const handleClick4 = (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(message);
    console.log(event);
    event.currentTarget.innerText = message;
  };

  // preventDefault로 기본 동작 막을 수 있음
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Button message="Playing!">Play Movie</Button>
      <Button message="Uploading!">Upload Movie</Button>

      {/* 이벤트 핸들러를 props로 전달하는 방법 */}
      <Button2 handleClick={handleClick} message="playing!">
        Play Movie2
      </Button2>

      {/* 이벤트 객체 */}
      <Button3 />

      <Button4 handleClick4={handleClick4} />

      <Table />

      {/* 이벤트 기본 동작 막기 */}
      <form onSubmit={handleSubmit}>
        <a href="https://ko.wikipedia.org/" onClick={(event) => event.preventDefault()}>
          위키피디아
        </a>
        <button type="submit">전송</button>
      </form>
    </>
  );
}

export default App;
