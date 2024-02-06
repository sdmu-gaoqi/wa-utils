import React from 'react';
import download from '.';

export default () => (
  <div>
    <button
      type="button"
      onClick={() => {
        download.downloadTxt('file', '这是一段测试文案');
      }}
    >
      下载文本-这是一段测试文案
    </button>
    <button
      type="button"
      onClick={() => {
        download.downloadBlob('file', new Blob(['这是一段测试文案']));
      }}
    >
      下载blob-这是一段测试文案
    </button>
    <button
      type="button"
      onClick={() => {
        download.downloadFileFromUrl('', 'test');
      }}
    >
      从url下载-这是一段测试文案
    </button>
    <button
      type="button"
      onClick={() => {
        download.downloadExcel(
          {
            header: ['key'],
            content: ['test'],
          },
          'test',
        );
      }}
    >
      把Object下载下来成xlsx
    </button>
    <button
      type="button"
      onClick={() => {
        download.downloadCsv(
          {
            header: ['key'],
            content: ['test'],
          },
          'test',
        );
      }}
    >
      把Object下载下来成csv
    </button>
    <button
      type="button"
      onClick={() => {
        download.downloadJson(
          {
            name: '哈哈',
          },
          'test',
        );
      }}
    >
      把Object下载下来成json
    </button>
  </div>
);
