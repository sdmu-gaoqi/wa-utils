import React, { useEffect } from 'react';
import { ResizeListener } from 'wa-utils';

const Demo = () => {
  const resizable = new ResizeListener();

  useEffect(() => {
    resizable.on(document.body, (data) => {
      const { contentRect } = data?.[0];
      console.log(`body元素尺寸信息,${JSON.stringify(contentRect)}`);
    });
    return () => {
      resizable.off();
    };
  }, []);

  return <div>可以打开f12,拖动浏览器窗口大小,查看效果</div>;
};

export default Demo;
