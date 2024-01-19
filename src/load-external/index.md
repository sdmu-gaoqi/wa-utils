---
title: loadExternal
order: 2
toc: false
group:
  title: 浏览器
---

# loadExternal - 资源加载

加载外部 js/css 资源辅助函数, 多次加载只生效一次

## 示例

### API

```typescript
import { loadExternal } from 'wa-utils'

type Status = 'loading' | 'ready' | 'error'

loadExternal(path: string, props?: {}): Promise<Status>
```

### 用法

```ts
// 默认用法
loadExternal(
  'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js',
).then(() => {
  new window.VConsole();
});

// 判断加载状态,然后处理业务逻辑(比如加载完毕后,再执行某些操作,多次加载只生效一次)
const status = await loadExternal(css);
if (status === 'ready') {
  // do something
}
```
