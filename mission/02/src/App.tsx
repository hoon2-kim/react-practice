import UserProfile from './components/UserProfile';

export default function App() {
  const user1 = { name: '김짱구', age: 7, isAdmin: true };
  const user2 = { name: '김철수', age: 8, isAdmin: false };

  // return (
  //   <>
  //     <UserProfile {...user1} />
  //     <UserProfile {...user2} />
  //   </>
  // );
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserProfile {...user1} />
      <UserProfile {...user2} />
    </div>
  );
}
