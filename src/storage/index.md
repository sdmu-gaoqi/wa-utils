---
title: Storage
toc: false
order: -1
group:
  title: 浏览器
---

# Storage

更方便的 `storage` 操作 自带时间戳标识

### 如何使用

```typescript
import { Storage } from 'wa-utils';

/**
 * @param { 'session' | 'local' } type
 * @param { number } limit
 * @description limit 过期时间设置 默认-1 一个超大的过期时长 默认是一年
 * */
const storage = new Storage();

// 以基础格式设置 不携带过期信息
storage.baseSet();
// 配套baseSet使用
storage.baseGet();
// 携带过期时间的方式设置
set();
// 配套set使用
get();
// 移除
remove();
```
