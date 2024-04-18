---
title: download
toc: false
order: -1
group:
  title: 文件相关
---

# download

几种常见的下载

- `download.txt` 将文字以文本文件下载
- `download.fileFromUrl` 下载远程资源
- `download.excel` 将数据以 xlsx 格式下载
- `download.csv` 将数据以 csv 格式下载
- `download.json` 将数据以 json 文件下载
- `download.pdf` 将数据以 pdf 文件下载
- `download.yaml` 将数据以 yaml 文件下载
- `download.domPdf` 将 dom 以 pdf 文件下载
- `download.xml` 以数据以 xml 文件下载
- `download.img` dom 以图片文件下载

`pdf`,`xlsx`,`csv`下载
<code src="./demo/office.tsx"></code>

`xml`,`yaml`,`json`下载
<code src="./demo/dataDescription.tsx"></code>

其他
<code src="./demo/other.tsx"></code>

## 注意项

### download.pdf

feat: 支持字符串解析

- 如何设置字体

  由于字体资源一般较大,方法规定字体只支持加载远程地址

  推荐字体库:https://github.com/wordshub/free-font/tree/master/assets/font/%E4%B8%AD%E6%96%87

  ```ts
  downlad.pdf(data, fileName, {
    font: {
      fontFileName: 'SourceHanSerifCN.ttf';
      fontResource: 'https://github.com/wordshub/free-font/blob/master/assets/font/%E4%B8%AD%E6%96%87/%E6%80%9D%E6%BA%90%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%80%9D%E6%BA%90%E5%AE%8B%E4%BD%93/SourceHanSerifCN-Bold.ttf';
      name: 'SourceHanSerifCN';
    }
  })
  ```

- 数据规则

  数据永远是[[]]二维数组

  - 文本模式(文本内容,x 坐标,y 坐标)

  ```json
  [{ "type": "text", "data": ["Hello world!", 10, 10] }]
  ```

  - 图文模式

  ```json
  [
    { type: 'text', data: ['Hello world!', 10, 10] },
    { type: 'text', data: ['Two Line', 10, 20] },
    { type: 'text', data: ['你好', 10, 60] },
    { type: 'img', data: {
      imageData: Require or Import or url,
      x: 10,
      y: 20,
      width: 360,
      height: 200,
    } }
  ]
  ```

  - 表格模式
    更多参数可以参考 [`jspdf-autotable`](https://www.npmjs.com/package/jspdf-autotable)

  ```json
  [
    {
      "type": "table",
      "data": {
        "head": [["Name", "Age"]],
        "body": [["小红", "刚满18岁"]]
      }
    }
  ]
  ```

### download.domPdf

- 页面会以[595.28,841.89]a4 尺寸自动做分页

### download.xml

- 更多数据定义参考 [`xml-js`](https://www.npmjs.com/package/xml-js)
