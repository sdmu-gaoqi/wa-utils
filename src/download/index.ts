import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import * as convert from 'xml-js';
import * as Yaml from 'yamljs';
import PdfFont from './pdfFont';
import type { DownloadDomPdf, DownloadPdf } from './type';

const downloadTxt = (filename: string, content: string) => {
  const domA = document.createElement('a');
  domA.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(content),
  );
  domA.setAttribute('download', filename);
  if (window.Event) {
    // const event = new Event('click', { bubbles: true, cancelable: true })
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    // initEvent 还在生效 弃用时再使用Event 现在Event还不完全生效
    domA.dispatchEvent(evt);
  } else {
    domA.click();
  }
};

const downloadBlob = (name: string, blob: any) => {
  try {
    if ('download' in document.createElement('a')) {
      // 非IE下载
      const elink = document.createElement('a');
      elink.download = name;
      elink.style.display = 'none';
      elink.href = URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
    } else {
      // IE10+下载
      // @ts-ignore
      window?.navigator?.msSaveBlob(blob, name);
    }
  } catch (e) {
    console.error(e);
  }
};

const downloadFileFromUrl = (url: string, fileName: string) => {
  const $fileName = fileName || new Date().toLocaleString();

  return new Promise((resolve, reject) => {
    try {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'blob';
      request.onload = () => {
        downloadBlob($fileName, request.response);
        resolve(true);
      };
      request.send();
    } catch (e) {
      reject(false);
      console.error(e);
    }
  });
};

const downloadExcel = (
  data: Record<'header' | 'content', any[]>,
  fileName: string,
  creator = 'unknown',
) => {
  const workbook = XLSX.utils.book_new();

  workbook.Props = {
    Title: fileName,
    Author: creator,
    CreatedDate: new Date(),
    ModifiedDate: new Date(),
  };

  const sheetName = 'Sheet';
  workbook.SheetNames.push(sheetName);
  const worksheet = XLSX.utils.aoa_to_sheet([data.header, data.content]);
  workbook.Sheets[sheetName] = worksheet;

  try {
    const excelBuffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx',
    });
    downloadBlob(
      fileName + '.xlsx',
      new Blob([excelBuffer], { type: 'application/octet-stream' }),
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const downloadCsv = (
  data: { header: any[]; content: any[] },
  fileName: string,
  creator = 'unknown',
) => {
  const workbook = XLSX.utils.book_new();

  workbook.Props = {
    Title: fileName,
    Author: creator,
    CreatedDate: new Date(),
  };

  const sheetName = 'Sheet';
  const worksheet = XLSX.utils.aoa_to_sheet([data.header, data.content]);

  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  try {
    const csvData = XLSX.utils.sheet_to_csv(worksheet);
    const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    downloadBlob(fileName + '.csv', csvBlob);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const downloadJson = (data: any, fileName: string) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json;charset=utf-8',
  });
  downloadBlob(`${fileName || new Date().toLocaleString()}.json`, blob);
};

const downloadPdf: DownloadPdf = async (data, fileName, other) => {
  const pdfFont = new PdfFont();
  const { initialParams = {}, font } = other || {};
  const doc = new jsPDF(initialParams);
  const fontInfo = await pdfFont.init(font);
  autoTable(doc, { html: '#my-table' });

  // 如果设置了字体信息,设置字体
  if (fontInfo) {
    const {
      name,
      fontFileName,
      fontData,
      fontStyle = 'normal',
    } = fontInfo.data;
    if (!fontInfo.registered) {
      doc.addFileToVFS(fontFileName, fontData);
      doc.addFont(fontFileName, name, fontStyle);
      doc.setFont(name);
    } else {
      doc.setFont(name);
    }
  }

  const typeFn = {
    text: 'text',
    img: 'addImage',
  };

  data.forEach((item) => {
    const type = item.type as keyof typeof typeFn;
    const runType = item.type in typeFn ? typeFn[type] : null;
    if (item.type === 'page') {
      return doc.addPage();
    }
    if (item.type === 'table') {
      return autoTable(doc, {
        ...item.data,
        styles: {
          font: fontInfo?.data?.name,
          ...item?.data?.foot,
        },
      });
    }
    if (runType) {
      doc?.[runType as keyof jsPDF]?.(...item.data);
    }
  });

  await doc.save(`${fileName}.pdf`);
};

const downloadPdfByDom: DownloadDomPdf = (data, pageOptions) => {
  const { target, scale = 2, fileName, html2canvasProps = {} } = data;
  const { pageWidth = 595.28, pageHeight = 841.89 } = pageOptions || {};
  html2canvas(target, {
    allowTaint: true,
    scale,
    useCORS: true,
    ...html2canvasProps,
  }).then((canvas) => {
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;

    const height = (contentWidth / pageWidth) * pageHeight;
    //未生成pdf的html页面高度
    let leftHeight = contentHeight;
    //页面偏移
    let position = 0;
    const imgWidth = pageWidth;
    const imgHeight = (pageWidth / contentWidth) * contentHeight;

    const pageData = canvas.toDataURL('image/jpeg', 1.0);

    const pdf = new jsPDF('' as any, 'pt', 'a4');

    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      // 分页
      while (leftHeight > 0) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= height;
        position -= pageHeight;
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(`${fileName}.pdf`);
  });
};

const downloadXml = (params: {
  fileName: string;
  data: Parameters<typeof convert.js2xml>[0];
  opts?: Parameters<typeof convert.js2xml>[1];
}) => {
  const xml = convert.js2xml(params.data, {
    compact: true,
    ...(params?.opts || {}),
  });
  const blob = new Blob([xml], { type: 'application/xml' });
  downloadBlob(`${params?.fileName || new Date().toLocaleString()}.xml`, blob);
};

const downloadYaml = (params: { fileName: string; data: any }) => {
  const data = Yaml.stringify(params.data);

  const blob = new Blob([data], { type: 'application/yaml' });
  downloadBlob(`${params?.fileName || new Date().toLocaleString()}.yaml`, blob);
};

const downloadImage = (
  name: string,
  target: Parameters<typeof html2canvas>[0],
  data?: Parameters<typeof html2canvas>[1],
) => {
  html2canvas(target, {
    allowTaint: true,
    ...data,
    scale: data?.scale ?? 2,
    useCORS: true,
  }).then((canvas) => {
    canvas.toBlob((res) => {
      if (res) {
        downloadBlob(name, res);
      }
    });
  });
};

export default {
  txt: downloadTxt,
  fileFormUrl: downloadFileFromUrl,
  excel: downloadExcel,
  csv: downloadCsv,
  json: downloadJson,
  /**
   * 包默认字体不包含中文字体,这里会默认使用前端站字体库字体
   * -
   *
   * ```ts
   * // 简单使用
   * download.pdf([
   *  { type: 'text', data: ['第一行', 10, 10] },
   *  { type: 'img', data: {
   *  imageData: Require or Import or url,
   *  x: 10,
   *  y: 20,
   *  width: 100,
   *  height: 100
   *  } },
   * ])
   * ```
   * */
  pdf: downloadPdf,
  /**
   * 请将页面的img标签设置上`{crossOrigin: 'anonymous'}`,并保证服务器资源具有`Access-Control-Allow-Origin`,函数默认开启`useCORS`
   * -
   * - 页面以[595.28,841.89]a4尺寸做分页
   * - 文件名默认携带pdf,只需关注文件名即可
   * */
  domPdf: downloadPdfByDom,
  xml: downloadXml,
  yaml: downloadYaml,
  img: downloadImage,
};
