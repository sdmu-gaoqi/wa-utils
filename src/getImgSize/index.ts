export type ImgSizeData =
  | Record<'width' | 'height' | 'size', number>
  | undefined;

const getSizeByLink = async (url: string): Promise<ImgSizeData> => {
  try {
    const imgData = await fetch(url).then((res) => res.blob());

    return await new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
          size: imgData.size,
        });
      };
      img.onerror = () => {
        reject('图片加载失败');
      };
    });
  } catch (err) {
    throw new Error('图片加载失败');
  }
};

const getSizeByFile = (data: File): Promise<ImgSizeData> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = (event) => {
      const baseData = event?.target?.result as string;
      const img = new Image();
      img.src = baseData;
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
          size: data.size,
        });
      };
      img.onerror = () => reject('图片加载失败');
    };
    reader.onerror = () => reject('图片加载失败');
  });
};

async function getImgSize(
  data: string | File,
): Promise<Record<'width' | 'height' | 'size', number>>;
async function getImgSize(data: string[] | FileList): Promise<ImgSizeData[]>;
async function getImgSize(
  data: string | File | string[] | FileList,
): Promise<ImgSizeData | ImgSizeData[]> {
  if (typeof data === 'string') {
    const imgData = await getSizeByLink(data);
    return imgData;
  } else if (data instanceof File) {
    const imgData = await getSizeByFile(data);
    return imgData;
  } else if (Array.isArray(data) || data instanceof FileList) {
    const imgDatas: ImgSizeData[] = [];
    for (const item of data) {
      try {
        if (typeof item === 'string') {
          const imgData = await getSizeByLink(item);
          imgDatas.push(imgData);
        } else if (item instanceof File) {
          const imgData = await getSizeByFile(item);
          imgDatas.push(imgData);
        } else {
          imgDatas.push(undefined);
        }
      } catch (err) {
        imgDatas.push(undefined);
      }
    }
    return imgDatas;
  }
}

export default getImgSize;
