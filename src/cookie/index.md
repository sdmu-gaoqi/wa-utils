---
title: cookie
toc: false
order: -1
group:
  title: 浏览器
---

# cookie - cookie 操作

```typescript
// 用法参考js-cookie
/**
 * @see https://www.npmjs.com/package/js-cookie
 */
import { cookie } from 'wa-utils';

cokkie.get('key');
cookie.set('key', 'key');
cookie.remove('key');
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
