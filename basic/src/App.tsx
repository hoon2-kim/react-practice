import Footer from './Footer';
import Header from './Header';
import Home from './Home';

// 루트 컴포넌트 - App.tsx
// 함수형 컴포넌트
// 함수형 컴포넌트는 반환을 jsx나 null로 해야한다.
export default function App() {
  // jsx문법
  // jsx는 반드시 태그를 닫아야 한다, 두 단어 이상이면 카멜케이스 사용한다, html과 일부 속성명이 다르다, 중괄호로 표현식 사용 가능
  // style 속성을 표현식을 사용해 객체 형태로 작성 해야한다.
  return (
    <>
      {/* <h1>App Component</h1> */}
      <Header /> {/* 새로운 컴포넌트 불러오기 , 자식 컴포넌트(컴포넌트 트리 구조)*/}
      <Home />
      <Footer />
    </>
  );
}

// 컴포넌트란? UI를 구성하는 독립적이고 재사용 가능한 작은 단위
// 컴포넌트는 하나의 루트 요소만 반환해야한다.
// <> </> -> React.Fragment
// div로 할 시 div가 불필요하게 렌더링 된다.
