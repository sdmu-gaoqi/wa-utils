import { canUseDom } from '../utils/can-use-dom';

type Status = 'loading' | 'ready' | 'error';
type LoadProps = {
  listenLoadStatus?: boolean;
  [x: string]: any;
};

const loadScript = (path: string, props: LoadProps, remove: boolean) => {
  const { listenLoadStatus = false } = props;
  return new Promise<Status>((resolve, reject) => {
    const script = document.querySelector(`script[src="${path}"]`);
    if (!script) {
      const newScript = document.createElement('script');
      newScript.src = path;

      Object.keys(props).forEach((key) => {
        // @ts-ignore
        newScript[key] = props[key];
      });

      newScript.setAttribute('data-status', 'loading');
      document.body.appendChild(newScript);

      newScript.onload = () => {
        newScript.setAttribute('data-status', 'ready');
        resolve('ready');
        if (remove) {
          document.body.removeChild(newScript);
        }
      };

      newScript.onerror = () => {
        newScript.setAttribute('data-status', 'error');
        reject('error');
        if (remove) {
          document.body.removeChild(newScript);
        }
      };
    } else {
      // listenLoadStatus默认为false维持原逻辑
      if (!listenLoadStatus) {
        resolve((script.getAttribute('data-status') as Status) || 'ready');
      } else {
        (script as HTMLScriptElement).onload = () => {
          resolve('ready');
        };
        (script as HTMLScriptElement).onerror = () => {
          resolve('error');
        };
      }
    }
  });
};

const loadCss = (path: string, props: LoadProps, remove: boolean) => {
  const { listenLoadStatus } = props;
  return new Promise<Status>((resolve, reject) => {
    const css = document.querySelector(`link[href="${path}"]`);
    if (!css) {
      const newCss = document.createElement('link');
      newCss.rel = 'stylesheet';
      newCss.href = path;
      Object.keys(props).forEach((key) => {
        // @ts-ignore
        newCss[key] = props[key];
      });
      // IE9+
      const isLegacyIECss = 'hideFocus' in newCss;
      // use preload in IE Edge (to detect load errors)
      if (isLegacyIECss && newCss.relList) {
        newCss.rel = 'preload';
        newCss.as = 'style';
      }
      newCss.setAttribute('data-status', 'loading');
      document.head.appendChild(newCss);

      newCss.onload = () => {
        newCss.setAttribute('data-status', 'ready');
        resolve('ready');
        if (remove) {
          document.head.removeChild(newCss);
        }
      };

      newCss.onerror = () => {
        newCss.setAttribute('data-status', 'error');
        reject('error');
        if (remove) {
          document.head.removeChild(newCss);
        }
      };
    } else {
      // 默认为false 维持原逻辑
      if (!listenLoadStatus) {
        resolve((css.getAttribute('data-status') as Status) || 'ready');
      } else {
        (css as HTMLStyleElement).onload = () => {
          resolve('ready');
        };
        (css as HTMLStyleElement).onerror = () => {
          resolve('error');
        };
      }
    }
  });
};

const loadExternal = (path: string, props: LoadProps = {}, remove = false) => {
  if (!path || !canUseDom) {
    return Promise.resolve();
  }
  const pathname = path.replace(/[|#].*$/, '');
  if (/(^css!|\.css$)/.test(pathname)) {
    return loadCss(path, props || {}, remove);
  } else {
    return loadScript(path, props || {}, remove);
  }
};

export default loadExternal;
