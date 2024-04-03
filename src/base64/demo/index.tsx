import React, { useState } from 'react';
import { base64 } from 'wa-utils';

const Demo = () => {
  const [oldValue, setOldValue] = useState('');
  const [baseValue, setBaseValue] = useState('');

  return (
    <>
      <p>转换后的值:{base64.encode(oldValue)}</p>
      <br />
      <input
        placeholder="请输入原始值"
        value={oldValue}
        onChange={(e) => setOldValue(e.target.value)}
      />
      <br />

      <p>转换后的值:{base64.decode(baseValue)}</p>
      <input
        placeholder="请输入base4"
        value={baseValue}
        onChange={(e) => setBaseValue(e.target.value)}
      />
    </>
  );
};

export default Demo;
