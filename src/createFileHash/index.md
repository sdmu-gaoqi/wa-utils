---
title: getFileId
toc: false
group:
  title: 文件相关
---

# getFileId

### 如何使用

根据文件`hash`值通过`web worker`给文件生成唯一 id

```ts
import { getFileId } from 'wa-utils';

const fileId = await getFileId(file);
```

<code src='./demo.tsx'></code>
