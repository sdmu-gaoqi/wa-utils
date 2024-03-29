---
title: clientRect
toc: false
order: -1
group:
  title: 浏览器
---

# clientRect

获取 `dom` 在页面中的位置信息

## 示例

<code src="./demo/index.tsx"></code>

## 如何使用

```typescript
import { clientRect } from 'wa-utils';

const boxPosition = clientRect(document.querySelecor('#id'));
```

## 返回值

```typescript
type Response = Record<
  'bottom' | 'height' | 'left' | 'right' | 'top' | 'width' | 'x' | 'y',
  number
>;
```
