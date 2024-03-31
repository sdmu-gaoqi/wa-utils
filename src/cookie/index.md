---
title: cookie
toc: false
group:
  title: 浏览器
---

# cookie

`cookie` 操作 用法参考 `js-cookie`

https://www.npmjs.com/package/js-cookie

### 如何使用

### 简单使用

```typescript
import { cookie } from 'wa-utils';

cookie.set('token', 'xxxxxx');
cookie.get('token');
cookie.remove('token');
```

### 设置过期时间

```typescript
import { cookie } from 'wa-utils';
// expires 从现在起 7天后过期
cookie.set('foo', 'bar', { expires: 7 });

// 12小时过期
cookie.set('foo', 'bar', { expires: 12 / 24 });

// 30分钟过期
cookie.set('foo', 'bar', { expires: 0.5 / 24 });

// 15分钟后过期
const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
Cookies.set('foo', 'bar', {
  expires: inFifteenMinutes,
});
```
