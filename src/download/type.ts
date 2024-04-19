import type { Options } from 'html2canvas';
import type { jsPDF, jsPDFOptions } from 'jspdf';
import type autoTable from 'jspdf-autotable';

export type DownloadPdf = (
  data: (
    | {
        type: 'text';
        data: Parameters<jsPDF['text']>;
      }
    | {
        type: 'img';
        data: Parameters<jsPDF['addImage']>;
      }
    | {
        type: 'table';
        data: Parameters<typeof autoTable>[1];
      }
    | { type: 'page' }
  )[],
  fileName: string,
  other?: DownloadPdfParmas,
) => void;
export type DownloadDomPdf = (
  data: {
    /** 分辨率,数值越大,越清晰,文件体积也越大,默认为2 */
    scale?: number;
    /** 目标dom节点 */
    target: HTMLElement;
    fileName: string;
    html2canvasProps?: Options;
  },
  pageOptions?: {
    pageWidth: number;
    pageHeight: number;
  },
) => void;

export type DownloadPdfParmas = {
  initialParams: jsPDFOptions;
  font?: {
    /** 字体文件名,例MyFont.ttf */
    fontFileName: string;
    /** 字体资源地址,支持通过线上资源自由替换字体,注意,只支持ttf文件 */
    fontResource: string;
    /** 字体名,也可以理解为唯一标识,例MyFont */
    name: string;
    /** 字体样式,默认normal */
    fontStyle?: string;
  };
};
