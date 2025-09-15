import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// index.html의 id가 root인거에 렌더링한다.
// 루트 컴포넌트 - 단일 컴포넌트로 하는게 좋다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// 컴포넌트 관계에서 형제관계는 부모가 같아야만 해당이된다.
