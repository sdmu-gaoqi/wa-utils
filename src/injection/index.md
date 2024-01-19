---
title: fullscreen
toc: false
order: -1
group:
  title: 工具函数
---

# injectionScript 加载脚本

```typescript
import {
  injectionScript,
  injectionStyle,
  checkRepeat,
  removeStyle,
} from 'wa-utils';
/**
 * 检查文档中是否存在具有特定源或ID的元素。
 *
 * @param {string} src - 要检查的元素的源属性。
 * @param {string} id - 要检查的元素的ID属性。
 * @return {any} 匹配源或ID的元素，如果未找到则返回undefined。
 */
checkRepeat();

/**
 * 根据提供的选项将脚本注入到 DOM 中。
 *
 * @param {ScriptOption} option - 注入脚本的选项。
 * @return {Promise<any>} 当脚本成功注入时解析的 Promise，如果出现问题则拒绝并返回错误。
 */
injectionScript();

/**
 * 从文档中删除具有指定ID的DOM元素。
 *
 * @param {string} id - 要删除的元素的ID。
 * @return {void} 此函数不返回任何值。
 */
removeStyle();

/**
 * 生成一个包含指定 CSS 的 style 标签，并将其插入到文档的 <head> 元素中。
 *
 * @param {styleOption} option - 一个包含 CSS 和可选 ID 的对象。
 * @return {object} 一个包含 `remove` 方法的对象，调用该方法可将 style 标签从文档中移除。
 */
injectionStyle();
```
