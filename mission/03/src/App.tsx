import Button from './components/ui/Button';

export default function App() {
  const handleClick = (message: string) => alert(message);

  return (
    <>
      <Button message="미션 완료" handler={handleClick}>
        클릭
      </Button>
    </>
  );
}
