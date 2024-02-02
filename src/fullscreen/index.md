---
title: fullscreen
toc: false
order: -1
group:
  title: 浏览器
---

# fullscreen -全屏

```typescript
import { fullscreen } from 'wa-utils';

fullscreen.to();
fullscreen.exit();
fullScreen.status(); // 获取全屏状态
fullScreen.listenTarget({
  target: document.body,
  onSuccess: () => {},
  onError: () => {},
});
```

<code src="./demo/index.tsx"></code>
