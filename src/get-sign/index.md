---
title: getSign
toc: false
order: 12
group:
  title: 数据处理
---

# getSign - 生成参数 md5 签名

生成请求参数的 md5 签名，提供给后端校验，防止篡改请求参数

## API

```ts
function (
    params: Record<string, string>,
    secretKey: string,
    excludeKeys: string[] = []
) => void
```

## 请求参数

| 参数        | 说明                 | 类型                     | 默认值 |
| ----------- | -------------------- | ------------------------ | ------ |
| params      | 需要生成 sign 的参数 | `Record<string, string>` | -      |
| secretKey   | md5 key              | `string`                 | -      |
| excludeKeys | 需要排除的 key       | `string[]`               | `[]`   |
