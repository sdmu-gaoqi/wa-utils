---
title: getParameterByName
toc: false
order: -1
group:
  title: 工具函数
---

# getParameterByName 获取 url 参数

```typescript
import { getParameterByName } from 'wa-utils';
// http://localhost:5173/?storeHeadquartersCode=103&storeCode=S01#/project/add?id=1
getParameterByName('storeHeadquartersCode'); // 103
getParameterByName('id', true); // 1
```
