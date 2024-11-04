// src/App.tsx
import React from 'react';
import LanguageDropdown from './components/LanguageDropdown';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Select Language</h1>
      <LanguageDropdown />
    </div>
  );
};

export default App;
