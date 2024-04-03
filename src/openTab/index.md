---
title: openTab
toc: false
order: -1
group:
  title: 浏览器
---

# openTab

默认小窗口打开新视图

### 如何使用

```typescript
import { openTab } from 'wa-utils';

openTab();
```

### API

```typescript
type OpenTab = ({ url: string, tagType: 'default' | 'small' }) => void
```

<code src="./demo.tsx"></code>
