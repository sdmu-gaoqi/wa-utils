---
title: convertImgColor
toc: false
group:
  title: 浏览器
---

# convertImgColor <Badge>v2.5.15</Badge>

用于把一个指定的图片转换为用指定的 rgba 值填充颜色的图片

```ts
import { convertImgColor } from 'wa-utils';

const url = await convertImgColor(img, { red: 198, green: 229, blue: 0 });
```

<code src="./demo.tsx"></code>
