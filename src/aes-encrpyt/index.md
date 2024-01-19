---
title: aesEncrypt
toc: false
order: 10
group:
  title: 数据处理
---

# aesEncrypt - AES 加密

使用 AES 密钥加密字符串，算法模式为`CBC`, 填充类型为`PKcs7`，偏移量同密钥

```ts
aesEncrypt(input: string, key: string) => string
```

## 代码示例

```ts
import { aesEncrypt } from 'wa-utils';

aesEncrypt('hello world!', 'yuzq1HL0VnrCld7U');
```
