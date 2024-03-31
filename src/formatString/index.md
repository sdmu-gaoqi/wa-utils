---
title: formatString
toc: false
group:
  title: 数据处理
---

# formatString -

字符串格式化

字符串格式化，会自动将空值转化为空字符串，避免渲染出`undefined`等。同时提供了一些可选的过滤项。

### 如何使用

```ts
import { formatString } from 'wa-utils';

const s1 = null;
const s2 = undefined;
const s3 = { a: 1 };
const s4 = new Date();
const s5 = Symbol('a');

// nullish,对象和Symbol返回空字符串
formatString(s1);
formatString(s2);
formatString(s3);
formatString(s4);
formatString(s5);

// 去除首尾空格
const s6 = ' Inspiring    ';
formatString(s4, { trim: true }); // -> 'Inspiring'

// 去除连续的空格
const s7 = 'Across   the great  wall';
formatString(s7, { removeExtraSpace: true }); // -> 'Across the great wall'

// 过滤emoji
const s8 = 'Sweet heart!😘';
formatString(s8, { filterEmoji: true }); // -> 'Sweet heart!'

// 判断是否有emoji
formatString.hasEmoji(s8); // -> true
```

## API

```typescript
interface Options {
  filterEmoji: boolean
  trim: boolean
  removeExtraSpace: boolean
}

function formatString(val: any, options: Options): string

formatString.hasEmoji(val: any): boolean
```

### Options

| 参数             | 说明                     | 类型      | 默认值  |
| ---------------- | ------------------------ | --------- | ------- |
| filterEmoji      | 过滤 emoji               | `boolean` | `false` |
| trim             | 去除首尾空格             | `boolean` | `false` |
| removeExtraSpace | 去除连续的空格，保留一个 | `boolean` | `false` |
