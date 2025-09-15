import type { UserProfileProps } from '../types/userProfile';

export default function UserProfile(props: UserProfileProps) {
  const { name, age, isAdmin } = props;

  return (
    <>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>{isAdmin ? '관리자 계정' : '일반 사용자'}</p>
      </div>
    </>
  );
}
