import React from 'react';
import openTab from './openTab';

const Demo = () => {
  return (
    <button
      type="button"
      onClick={() => {
        openTab({
          url: 'https://www.baidu.com',
          tagType: 'small',
        });
      }}
    >
      打开页面
    </button>
  );
};

export default Demo;
