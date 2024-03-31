---
title: injectionScript
toc: false
order: -1
group:
  title: 工具函数
---

# injectionScript

`html` 插入 `script` 或 `style` 标签
支持远程 `url` 或自定义内容

```typescript
import {
  injectionScript,
  injectionStyle,
  checkRepeat,
  removeStyle,
} from 'wa-utils';
checkRepeat();
injectionScript();
removeStyle();
injectionStyle();
```

### API

```typescript
/**
 * 检查文档中是否存在具有特定源或ID的元素。
 *
 * @param {string} src - 要检查的元素的源属性。
 * @param {string} id - 要检查的元素的ID属性。
 * @return {any} 匹配源或ID的元素，如果未找到则返回undefined。
 */
type CheckRepeat = (src?: string, id?: string) => any;

/**
 * 根据提供的选项将脚本注入到 DOM 中。
 *
 * @param {ScriptOption} option - 注入脚本的选项。
 * @return {Promise<any>} 当脚本成功注入时解析的 Promise，如果出现问题则拒绝并返回错误。
 */
interface ScriptOption {
  src: string; // 资源地址
  innerHTML?: string; // 当资源内容是手动填充时传入的内容
  type?: HTMLScriptElement['type'];
  inner?: 'body' | 'head';
  equal?: boolean;
  id?: string; // 放置在html中元素的唯一id
  async?: boolean;
  defer?: boolean;
}
type InjectionScript = (options: ScriptOption) => void;

interface styleOption {
  css: string; // css内容
  id: string; // 放置在html中元素的唯一id
}
type InjectionStyle = (options: styleOption) => void;
type RemoveStyle = (id: string) => void;
```
