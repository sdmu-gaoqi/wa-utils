import React, { useState } from 'react';
import { download } from 'wa-utils';
import { pdfData, xlsxData } from './data';

const OfficeDemo = () => {
  const [downPdfLoading, setDownPdfLoading] = useState(false);
  return (
    <div id="downloadDemo">
      <pre title={JSON.stringify(pdfData)}>{JSON.stringify(pdfData)}</pre>
      <button
        type="button"
        onClick={async () => {
          if (downPdfLoading) {
            return console.log('生成文件中,请稍后再试');
          }
          setDownPdfLoading(true);
          await download.pdf(
            pdfData as Parameters<typeof download.pdf>[0],
            '文件',
          );
          setDownPdfLoading(false);
        }}
      >
        下载pdf
      </button>
      <button
        type="button"
        onClick={() => {
          download.domPdf({
            target: document.querySelector('#downloadDemo')!,
            fileName: '这个页面',
            scale: 2,
          });
        }}
      >
        dom以pdf格式下载
      </button>

      <pre title={JSON.stringify(xlsxData)}>{JSON.stringify(xlsxData)}</pre>
      <button type="button" onClick={() => download.excel(xlsxData, '文件')}>
        以xlsx格式下载
      </button>
      <button type="button" onClick={() => download.csv(xlsxData, '文件')}>
        以csv格式下载
      </button>
    </div>
  );
};

export default OfficeDemo;
