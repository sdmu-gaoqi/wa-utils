---
title: getParameterByName
toc: false
order: -1
group:
  title: 工具函数
---

# getParameterByName

获取 `url` `search` 参数

### 如何使用

```typescript
import { getParameterByName } from 'wa-utils';

getParameterByName('id', false);
```

### API

```typescript
/**
 * @param { string } key
 * @param { boolean } isHash 是否是hash的参数
 * */
type GetParameterByName = (key: string, isHash?: boolean) => string;
```
