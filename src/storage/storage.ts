import safeJson from 'waUtils/safeJson/safeJson';

class _Storage {
  storage: Storage;
  limit: number; // 时间戳

  constructor(type: 'session' | 'local', limit?: number) {
    this.storage = type === 'session' ? sessionStorage : localStorage;
    this.limit = -1;
    if (limit) {
      this.limit = limit;
    }
  }

  baseSet(key: string, value: any) {
    this.storage.setItem(key, safeJson.stringify(value));
  }

  baseGet(key: string) {
    return safeJson.parse(this.storage.getItem(key));
  }

  set(key: string, value: any, limit?: number) {
    const _limit = limit || this.limit;
    const item = {
      value: value,
      ...(_limit && {
        timestamp: new Date().getTime() + _limit,
      }),
    };
    this.storage.setItem(key, safeJson.stringify(item));
  }

  get(key: string) {
    const storageData = safeJson.parse(this.storage.getItem(key));
    if (storageData) {
      const { value, timestamp } = storageData;
      if ('timestamp' in storageData && timestamp < new Date().getTime()) {
        this.remove(key);
        return null;
      }
      return value;
    }
    return null;
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}

export default _Storage;
