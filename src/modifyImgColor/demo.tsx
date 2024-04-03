import React, { useEffect, useState } from 'react';
import { modifyImgColor } from 'wa-utils';

const img =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F15%2F20200415121019_GHsn3.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1714474959&t=0342f4410c8715e244736df691e51d8d';

export default () => {
  const [newImg, setNewImg] = useState('');
  const convert = async () => {
    const url = await modifyImgColor(img, { red: 198, green: 229, blue: 0 });
    setNewImg(url);
  };
  useEffect(() => {
    convert();
  }, []);
  return (
    <div>
      <img src={img} alt="" style={{ width: '100%' }} />
      <img src={newImg} alt="" style={{ width: '100%' }} />
    </div>
  );
};
