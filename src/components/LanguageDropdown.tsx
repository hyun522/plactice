// src/components/LanguageDropdown/LanguageDropdown.tsx
import React from 'react';
import { observer } from 'mobx-react';
import useStores from '../stores/useStores';
import './LanguageDropdown.css';

const LanguageDropdown: React.FC = observer(() => {
  const { languageStore } = useStores();

  return (
    <div className='dropdown-container'>
      <div
        className='dropdown-header'
        onClick={() => languageStore.toggleDropdown()}
      >
        {languageStore.selectedLanguage}
        <span className='dropdown-arrow'></span>
      </div>
      {languageStore.isOpen && (
        <ul className='dropdown-menu'>
          <li
            onClick={() => languageStore.selectLanguage('English')}
            className={
              languageStore.selectedLanguage === 'English' ? 'selected' : ''
            }
          >
            English
          </li>
          <li
            onClick={() => languageStore.selectLanguage('한국어(KR)')}
            className={
              languageStore.selectedLanguage === '한국어(KR)' ? 'selected' : ''
            }
          >
            한국어(KR)
          </li>
        </ul>
      )}
    </div>
  );
});

export default LanguageDropdown;
