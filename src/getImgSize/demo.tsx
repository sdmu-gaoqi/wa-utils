import { getImgSize, type ImgSizeData } from '@diezhi/pal';
import { useEffect, useState } from 'react';

const Demo = () => {
  const src = 'https://assets.papegames.com/resources/cdn/a4fca43655627be4.png';
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
