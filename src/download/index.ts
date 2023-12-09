import * as XLSX from 'xlsx';

const downloadTxt = (filename: string, content: string) => {
  const domA = document.createElement('a');
  domA.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(content),
  );
  domA.setAttribute('download', filename);
  if (window.Event) {
    const event = new Event('click', { bubbles: true, cancelable: true });
    domA.dispatchEvent(event);
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
  data: { header: any[]; content: any[] },
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
  const worksheet = XLSX.utils.aoa_to_sheet([data.header, ...data.content]);
  workbook.Sheets[sheetName] = worksheet;
  console.log(workbook, 'worksheet');

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
  const worksheet = XLSX.utils.aoa_to_sheet([data.header, ...data.content]);

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

export default {
  downloadTxt,
  downloadFileFromUrl,
  downloadBlob,
  downloadExcel,
  downloadCsv,
  downloadJson,
};
