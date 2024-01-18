import React, { useState } from 'react';
import { fullscreen } from 'wa-utils';

const Demo = () => {
  const [target, setTarget] = useState(false);
  fullscreen.listenTarget({
    target: document.body,
    onSuccess: () => {
      console.log(target);
      setTarget(!target);
    },
    onError: () => {},
  });
  return (
    <>
      <button type="button" onClick={() => fullscreen.to()}>
        全屏
      </button>
      <button type="button" onClick={() => fullscreen.exit()}>
        退出全屏
      </button>
      是否全屏: {String(target)}
    </>
  );
};

export default Demo;
