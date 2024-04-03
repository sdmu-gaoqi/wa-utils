import React, { useEffect, useState } from 'react';
import { getImgSize, type ImgSizeData } from 'wa-utils';

const Demo = () => {
  const src =
    'https://img-space.30sche.com/202101/11/97490da315abb0b1867d11ad47b31e1b66670.png?imageView2/2/w/900/h/0';
  const [imgData, setImgData] = useState<ImgSizeData>();
  const [fileImgData, setFileImgData] = useState<ImgSizeData>();
  const [filesImgData, setFilesImgData] = useState<ImgSizeData[]>();

  useEffect(() => {
    getImgSize(src).then((data) => {
      if (data) {
        setImgData(data);
      }
    });
  }, [src]);
  return (
    <div>
      <img src={src} style={{ width: '100%' }} />
      <p>图片数据：{JSON.stringify(imgData)}</p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={async (e) => {
          if (e.target.files) {
            const data = e.target.files?.[0];
            const res = await getImgSize(data);
            setFileImgData(res);
          }
        }}
      />
      <p>图片数据(单选)：{JSON.stringify(fileImgData)}</p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={async (e) => {
          if (e.target.files) {
            const data = e.target.files;
            const res = await getImgSize(data);
            setFilesImgData(res);
          }
        }}
      />
      <p>图片数据(多选)：{JSON.stringify(filesImgData)}</p>
    </div>
  );
};

export default Demo;
