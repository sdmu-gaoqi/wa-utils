---
title: createFileHash
toc: false
group:
  title: 工具函数
---

# createFileHash <Badge>v2.5.45</Badge>

通过`web worker`给文件生成唯一 id， 中后台上传使用

```ts
import { createFileHash } from 'wa-utils';

const id = await createFileHash(file);
```
