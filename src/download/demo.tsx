import React from 'react';
import download from '.';

export default () => (
  <div>
    <p>
      这是一段测试文案
      <br />
      <button
        type="button"
        onClick={() => {
          download.downloadTxt('file', '这是一段测试文案');
        }}
      >
        下载文本
      </button>
    </p>
    <br />
    <button
      type="button"
      onClick={() => {
        download.downloadBlob('file', new Blob(['这是一段测试文案']));
      }}
    >
      下载blob数据
    </button>

    <br />
    <button
      type="button"
      onClick={() => {
        download.downloadFileFromUrl(
          'https://haowallpaper.com/link/common/file/previewFileImg/7ddba4c351782b3bcd3f23de5e8d5712',
          'test.jpg',
        );
      }}
    >
      从url下载
    </button>
    <br />
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
    <br />
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
    <br />
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
