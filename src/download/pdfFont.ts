import type { DownloadPdfParmas } from './type';

type FontData = DownloadPdfParmas['font'] & { fontData: string };

const getFontDataStr = (
  url: string,
  fontFileName: string,
  name: string,
): Promise<FontData> => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader?.result as string;
          const resolveData = {
            fontData: result,
            fontFileName,
            name,
            fontResource: url,
          };
          resolve(resolveData);
        };
        reader.readAsBinaryString(blob);
      });
  });
};

class PdfFont {
  readonly fontData: Record<string, FontData> = {};
  private defaultFont =
    'https://github.com/wordshub/free-font/blob/master/assets/font/%E4%B8%AD%E6%96%87/%E6%80%9D%E6%BA%90%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%80%9D%E6%BA%90%E5%AE%8B%E4%BD%93/SourceHanSerifCN-Bold.ttf';
  init(
    opt: DownloadPdfParmas['font'],
  ): Promise<{ data: FontData; registered: boolean }> {
    return new Promise((resolve) => {
      if (opt) {
        if (this.fontData && this.fontData && this.fontData?.[opt.name]) {
          // 已经注册过不再注册
          resolve({ data: this.fontData?.[opt.name], registered: true });
        } else {
          getFontDataStr(opt.fontResource, opt.fontFileName, opt.name).then(
            (fontData) => {
              this.fontData[opt.name] = fontData;
              resolve({ data: fontData, registered: false });
            },
          );
        }
      } else {
        if (this.fontData.default) {
          // 已经注册过不再注册
          resolve({ data: this.fontData.default, registered: true });
        } else {
          getFontDataStr(
            this.defaultFont,
            'DreamHanSerifCN.ttf',
            'DreamHanSerifCN',
          ).then((fontData) => {
            this.fontData.default = fontData;
            resolve({ data: fontData, registered: false });
          });
        }
      }
    });
  }
}

export default PdfFont;
