interface ConfigProps {
  name: string;
  entry: string;
  container: HTMLElement | string;
}

interface EventType {
  name: string;
  type: string;
  [key: string]: any;
}

interface CallbackFunc {
  (event: EventType): void;
  __context: any;
}

export default class IFrame {
  config: ConfigProps;
  iframe: HTMLIFrameElement | undefined;
  callbackList: CallbackFunc[];
  _init: boolean;

  constructor(config: ConfigProps) {
    this.config = config;
    this.iframe = undefined;
    this.callbackList = [];
    this._init = false;
    this._callback = this._callback.bind(this);
  }

  init() {
    if (this._init) {
      return Promise.resolve();
    }
    this.iframe = document.createElement('iframe');
    this.iframe.name = this.config.name;
    this.iframe.src = this.config.entry;
    // 插入标签
    if (typeof this.config.container === 'string') {
      const box = document.querySelector(this.config.container)!;
      box.appendChild(this.iframe);
    } else {
      this.config.container.appendChild(this.iframe);
    }

    return new Promise<void>((resolve, reject) => {
      this.iframe!.onload = () => {
        // 加载成功之后,建立通信机制
        window.addEventListener('message', this._callback);
        this._init = true;
        resolve();
      };
      this.iframe!.onerror = reject;
    });
  }

  _callback(event: any) {
    const data = event.data as EventType;
    if (data.name === this.config.name) {
      this.callbackList.forEach((cb) => {
        if (cb.__context) {
          cb.call(cb.__context, data);
        } else {
          cb(data);
        }
      });
    }
  }

  emit(data = {}) {
    const win = this.iframe?.contentWindow;
    win?.postMessage(
      {
        name: this.config.name,
        ...data,
      },
      new URL(this.config.entry).origin,
    );
  }

  on(callback: CallbackFunc, context: any) {
    if (!this.callbackList.includes(callback)) {
      if (context) {
        callback.__context = context;
      }
      this.callbackList.push(callback);
    }
  }

  remove(callback: CallbackFunc) {
    const index = this.callbackList.indexOf(callback);
    if (index !== -1) {
      return this.callbackList.splice(index, 1);
    }
  }

  destory() {
    window.removeEventListener('message', this._callback);
    this.callbackList = [];
    this.iframe?.parentNode?.removeChild(this.iframe);
    this.iframe = undefined;
    this._init = false;
  }
}
