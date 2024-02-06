export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>),
    );
  } else {
    console.log('dom不存在 事件创建失败');
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['removeEventListener']>
    // eslint-disable-next-line @typescript-eslint/ban-types
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>),
    );
  } else {
    console.log('dom不存在 事件注销失败');
  }
}
