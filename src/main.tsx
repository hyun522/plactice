// src/index.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'mobx-react';
import stores from './stores'; // MobX 스토어들
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </StrictMode>
);
