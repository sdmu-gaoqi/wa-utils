---
title: modifyImgColor
toc: false
group:
  title: 浏览器
---

# modifyImgColor

用于把一个指定的图片转换为用指定的 rgba 值填充颜色的图片

```ts
import { modifyImgColor } from 'wa-utils';

const url = await modifyImgColor(img, { red: 198, green: 229, blue: 0 });
```

<code src="./demo.tsx"></code>
