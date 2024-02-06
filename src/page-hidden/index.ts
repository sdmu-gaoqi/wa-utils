import { canUseDom } from '../utils/can-use-dom';
type Callback = () => void;

const registerPageHidden = (
  hiddenCallback?: Callback,
  showCallback?: Callback,
) => {
  if (!canUseDom) {
    return () => {};
  }
  let property = 'hidden';
  let eventName = 'visibilitychange';
  const doc = document as any;
  if (typeof doc.hidden !== 'undefined') {
    property = 'hidden';
    eventName = 'visibilitychange';
  } else if (typeof doc?.webkitHidden !== 'undefined') {
    property = 'webkitHidden';
    eventName = 'webkitvisibilitychange';
  }

  const pageChange = (e: any) => {
    if (doc[property] || e.hidden || doc.visibilityState === 'hidden') {
      hiddenCallback?.();
    } else {
      showCallback?.();
    }
  };

  document.addEventListener(eventName, pageChange, false);

  return () => {
    document.removeEventListener(eventName, pageChange, false);
  };
};

export default registerPageHidden;
