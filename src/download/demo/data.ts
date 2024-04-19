// @ts-ignore 只是演示
import localImg from './img.png';

export const xmlData = {
  _declaration: {
    _attributes: {
      version: '1.0',
      encoding: 'utf-8',
    },
  },
  name: {
    _text: '小红',
    _attributes: {
      age: '刚满18岁',
      desc: 'dia',
    },
  },
};

export const yamlData = {
  person: {
    name: '小红',
    age: '刚满18岁',
  },
};

export const pdfData = [
  { type: 'text', data: ['Hello world!', 10, 10] },
  { type: 'text', data: ['第一页', 10, 20] },
  {
    type: 'img',
    data: [
      {
        imageData:
          'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
        x: 10,
        y: 50,
        width: 100,
        height: 50,
      },
    ],
  },
  { type: 'page' },
  { type: 'text', data: ['第二页', 10, 10] },
  {
    type: 'img',
    data: [
      {
        imageData: localImg,
        x: 10,
        y: 40,
        width: 160,
        height: 100,
      },
    ],
  },
  {
    type: 'table',
    data: {
      head: [['Name', 'Age']],
      body: [['小红', '刚满18岁']],
    },
  },
];

export const xlsxData = {
  header: ['zh-CN', 'EN'],
  content: ['测试内容', 'test content'],
};
