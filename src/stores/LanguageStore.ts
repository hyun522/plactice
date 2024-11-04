// src/stores/LanguageStore.ts
import { makeAutoObservable } from 'mobx';
import {
  clearPersistedStore,
  makePersistable,
  isHydrated,
  isPersisting,
} from 'mobx-persist-store';

class LanguageStore {
  isOpen: boolean = false;
  selectedLanguage: string = 'Language';

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'LanguageStore',
      properties: ['isOpen', 'selectedLanguage'],
      storage: window.localStorage,
    });
  }

  toggleDropdown = () => {
    this.isOpen = !this.isOpen;
  };

  selectLanguage = (language: string) => {
    this.selectedLanguage = language;
    this.isOpen = false;
  };

  get isHydrated(): boolean {
    return isHydrated(this);
  }

  get isPersisting(): boolean {
    return isPersisting(this);
  }

  clearPersistedData = async () => {
    await clearPersistedStore(this);
  };
}

const languageStore = new LanguageStore();
export default languageStore;
