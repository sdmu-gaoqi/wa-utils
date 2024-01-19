---
title: regexs
toc: false
order: -1
group:
  title: 正则工具
---

# regexs 常用正则

```typescript
import { regexs } from 'wa-utils';

regexs.isChines(''); // 是否是中文
regexs.isTelNumber(''); // 是否是手机号
regexs.isIdCard(''); // 是否为身份证号
regexs.isPostCode(''); // 校验是否是大陆邮政编码
regexs.isIPv6(''); // 校验是否是IPv6地址
regexs.isEmail(''); // 是否是邮箱
regexs.isHasEmoji(''); // 是否包含emoji表情
regexs.isUrl(''); // 校验是否是URL
regexs.isColor(''); // 校验是否是十六进制的颜色值
regexs.removeHTMLTag('');
```
