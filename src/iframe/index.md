---
title: Iframe
toc: false
group:
  title: 浏览器
---

# Iframe - 页面 iframe 通信方案

基于 contentWindow 实现的 iframe 通信方案

### 如何使用

### API

```typescript
import { IFrame } from 'wa-utils';

interface EventType {
  name: string;
  type: string;
  [key: string]: any;
}

interface ConfigProps {
  name: string;  // cocos 项目约定 name
  entry: string; // cocos 项目访问入口
  container: HTMLElement | string; // 想要插入cocos页面的 dom元素 或者 id\类
}

new IFrame(config: ConfigProps)
```

### 普通项目加载

```typescript
// 使用演示
const iframe = new IFrame({
  name: 'game1', // 应与 dname 一致
  entry: '//10.10.50.177:5010',
  container: '#container',
});

// 初始化,是个异步函数
await iframe.init()

// 然后注册事件监听
iframe.on((event: EventType) => {
  // ....
})

// 派发事件给项目
iframe.emit(info: omit<EventType, 'name'>)

// 销毁
iframe.destory()  // 删除所有事件监听
```

### 项目加载

```typescript
// 注册事件监听
window.don((event: EventType) => {
  // ....
})

// 派发事件
window.demit(info: EventType)
```
