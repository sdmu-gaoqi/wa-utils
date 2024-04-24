import { useSyncExternalStore } from 'react';
import store from './store';

const useStore = () => {
  const state = useSyncExternalStore(store.subscribe, () =>
    store.getSnapshot(),
  );

  return {
    store: state,
    dispatch: store.dispatch,
  };
};

export default useStore;
