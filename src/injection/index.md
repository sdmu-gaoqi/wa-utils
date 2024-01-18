---
title: fullscreen
toc: false
order: -1
group:
  title: 工具函数
---

# injectionScript 加载脚本函数

```typescript
import { injectionScript, injectionStyle } from 'wa-utils';

injectionScript({ src: '??????' }); // 加载脚本
injectionStyle({ css: `body { color: red; }` }); // 加载样式
```
