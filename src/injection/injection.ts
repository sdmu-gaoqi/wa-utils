import { nanoid } from 'nanoid';

interface ScriptOption {
  src: string;
  innerHTML?: string;
  type?: HTMLScriptElement['type'];
  inner?: 'body' | 'head';
  equal?: boolean;
  id?: string;
  async?: boolean;
  defer?: boolean;
}

interface styleOption {
  css: string;
  id: string;
}

const checkRepeat = (src?: string, id?: string) => {
  let has: any;
  if (src && document?.querySelector) {
    has = document.querySelector(`[src="${src}"]`);
  }
  if (id) {
    has = document.getElementById(`${id}`);
  }
  return has;
};

const injectionScript = (option: ScriptOption) => {
  const { inner = 'head', equal = true, id, src } = option;
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    const injectKeys = ['src', 'innerHtml', 'type', 'id'];
    injectKeys.forEach((item) => {
      const itemKey = item as keyof Pick<
        ScriptOption,
        'src' | 'innerHTML' | 'type' | 'id' | 'async' | 'defer'
      >;
      const injectValue = option[itemKey] as never;
      if (itemKey in option && injectValue) {
        scriptEl[itemKey] = injectValue;
      }
    });
    if (equal) {
      const has = checkRepeat(src, id);
      if (has) {
        reject('目标已存在');
      }
    }
    document[inner].appendChild(scriptEl);
    scriptEl.onload = (...rest) => {
      resolve(rest);
    };
    scriptEl.onerror = (err) => {
      reject(err);
    };
  });
};

const removeStyle = (id: string) => {
  const dom = document.querySelector(`#${id}`);
  if (dom) {
    dom.parentNode?.removeChild(dom);
  }
};

const injectionStyle = (option: styleOption) => {
  const { css, id = nanoid() } = option;
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('id', id);

  const has = checkRepeat(undefined, id);
  if (has) {
    return;
  }

  // 将 <style> 标签插入到 <head> 元素中
  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(style);
  return {
    remove: () => removeStyle(id),
  };
};

export { injectionScript, injectionStyle };
