import type { Action, I18nMap, Language } from './type';
import { SecurityActions } from './type';

const store = {
  currentState: { i18nMap: {} as I18nMap, language: 'zh' as Language },
  listeners: [] as any[],
  subscribe(onStoreChange: () => void) {
    store.listeners.push(onStoreChange);
    return onStoreChange;
  },
  getSnapshot() {
    return store.currentState;
  },
  dispatch(action: Action) {
    store.currentState = store.reducer(action);
    store.listeners.forEach((l) => {
      l();
    });
    return action;
  },
  reducer(action: Action) {
    switch (action.type) {
      case SecurityActions.injectI18nMap:
        return {
          ...store.currentState,
          i18nMap: action.data,
        };
      case SecurityActions.changeLanguage:
        return {
          ...store.currentState,
          language: action.data,
        };
      default:
        return store.currentState;
    }
  },
};

export default store;
