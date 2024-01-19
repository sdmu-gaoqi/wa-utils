---
title: base64
toc: false
order: -1
group:
  title: 数据处理
---

# base64 - 编码和解码

兼容游览器与 node 执行环境的通用 base64 编码和解码

## 示例

```ts
import { base64 } from 'wa-utils';

base64.encode('yesio and momo'); // -> eWVzaW8gYW5kIG1vbW8=
base64.decode('eWVzaW8gYW5kIG1vbW8='); // -> yesio and momo
```
