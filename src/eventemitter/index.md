---
title: eventemitter
toc: false
order: -1
group:
  title: 工具函数
---

# eventemitter

```typescript
/**
 * @see https://www.npmjs.com/package/eventemitter3
 * @description 用法参考eventemitter3
 * */
```

<code src="./demo.tsx" inline></code>

```typescript
// a.js
import eventemitter from './eventemitter';

eventemitter.on('outletClick', (data) => {
  console.log(data, 'aaaaaa');
});
```

```typescript
document.body.addEventListener('click', () => {
  eventemitter.emit('outletClick', { data: 'outlet' });
});
```
