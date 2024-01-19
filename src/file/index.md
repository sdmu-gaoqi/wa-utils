---
title: file
toc: false
order: -1
group:
  title: 文件相关
---

# fileOpts 文件相关操作

```typescript
import { fileOpts } from 'wa-utils';

fileOpts.getFileName(); // 生成一个随机的文件名

/**
 * @param { string } dataUrl
 * @param { string } fileName
 * @description 将dataUrl转换为文件
 * ie无法使用new File构造函数，建议使用dataURLtoBlob
 * @return {any} 文件对象
 * */
fileOpts.dataURLtoFile();

/**
 * @param {string} base64
 * @param {string} fileName
 * @returns {any} 文件对象
 * @description 将（base64 编码的数据）转换为 File 对象
 * */
fileOpts.base64toFile();

/**
 * @func dataURLtoBlob
 * @param { string } dataurl
 * @desc 将dataUrl/base64转换为blob
 * @return { Blob } Blob
 * @example let blob = dataURLtoBlob(dataurl)
 */
fileOpts.dataURLtoBlob();

/**
 * @func base64toBlob
 * @param { string } base64
 * @desc 将base64转换为blob
 * @return { Blob } Blob
 * @example let blob = base64toBlob(dataurl)
 */
fileOpts.base64toBlob();

/**
 * @func blobtoFile
 * @param { Blob } blob
 * @param { string } fileName
 * @desc 将blob转换为文件
 * @return { any } 文件对象
 * @example let file = blobtoFile(blob, filename)
 */
fileOpts.blobtoFile();

/**
 * @func filetoBase64
 * @param file 文件对象
 * @desc 文件对象转base64
 * @return { Promise } Promise对象，异步处理
 */
fileOpts.filetoBase64();

/**
 * @func getFileExt
 * @param { string } fileName
 * @desc 获取文件后缀名
 * */
fileOpts.getFileExt(); // 获取文件的扩展名
```
