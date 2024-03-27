---
title: getImgSize
group:
  title: 工具函数
---

# getImgSize

从远程资源或 `File` 文件中获取图片尺寸、内存大小信息

<code src="./demo.tsx"></code>

# 如何使用

```typescript
import { getImgSize } from '@diezhi/pal';

// 单个图片地址或多个图片地址
getImgSize('https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF').then(
  (size) => {
    console.log(size);
  },
);
getImgSize([
  'https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF',
]).then((sizes) => {
  console.log(sizes);
});

// 单个file或多个file
getImgSize(File).then((size) => {
  console.log(size);
});
getImgSize([File, File]).then((sizes) => {
  console.log(sizes);
});
```
