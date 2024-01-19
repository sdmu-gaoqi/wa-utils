import React, { useEffect, useState } from 'react';
import { convertImgColor } from 'wa-utils';

const img = 'https://assets.papegames.com/resources/cdn/4d298d9ae567897c.png';

export default () => {
  const [newImg, setNewImg] = useState('');
  const convert = async () => {
    const url = await convertImgColor(img, { red: 198, green: 229, blue: 0 });
    setNewImg(url);
  };
  useEffect(() => {
    convert();
  }, []);
  return (
    <div>
      <img src={img} alt="" />
      <img src={newImg} alt="" />
    </div>
  );
};
