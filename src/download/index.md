---
title: download
toc: false
order: -1
group:
  title: 文件相关
---

# download

下载的简单封装

## 如何使用

<code src="./demo.tsx" inline></code>

## API

```typescript
type Download = {
  downloadTxt: (filename: string, content: string) => void; // 以txt文件下载
  downloadBlob: (filename: string, blob: Blob) => void; // 下载一份bolb数据
  downloadFileFromUrl: (url: string, fileName: string) => Promise<void>; // 从url获取资源下载
  downloadExcel: (
    data: { header: any[]; content: any[] },
    fileName: string,
    creator?: string,
  ) => void; // 以xlsx文件下载
  downloadCsv: (
    data: { header: any[]; content: any[] },
    fileName: string,
    creator?: string,
  ) => void; // 以csv文件下载
  downloadJson: (data: any, fileName: string) => void; // 以json文件下载
};
```
