import React from 'react';
import { download } from 'wa-utils';
import { xmlData, yamlData } from './data';

const PdfDemo = () => {
  return (
    <div>
      <pre title={JSON.stringify(yamlData)}>{JSON.stringify(yamlData)}</pre>

      <button type="button" onClick={() => download.json(yamlData, '文件')}>
        下载json文件
      </button>
      <button
        type="button"
        onClick={() => {
          download.yaml({
            fileName: 'yaml文件',
            data: yamlData,
          });
        }}
      >
        下载yaml文件
      </button>
      <pre title={JSON.stringify(xmlData)}>{JSON.stringify(xmlData)}</pre>
      <button
        type="button"
        onClick={() => {
          download.xml({
            fileName: 'xml文件',
            data: xmlData,
          });
        }}
      >
        下载xml文件
      </button>
    </div>
  );
};

export default PdfDemo;
