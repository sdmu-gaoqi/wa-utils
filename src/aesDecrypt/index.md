---
title: aesDecrypt
toc: false
order: 11
group:
  title: 数据处理
---

# aesDecrypt

AES 解密

使用 AES 密钥解密字符串，算法模式为`CBC`, 填充类型为`PKcs7`，偏移量同密钥

```ts
aesDecrypt(input: string, key: string) => string
```

## 代码示例

```ts
import { aesDecrypt } from 'wa-utils';

aesDecrypt('2hhPMzDlyngXvmAQkptoIw==', 'yuzq1HL0VnrCld7U'); // -> 'hello world!'
```
