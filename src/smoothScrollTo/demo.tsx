import React from 'react';
import smoothScrollTo from './smoothScrollTo';

const Demo = () => {
  return (
    <div
      style={{
        overflow: 'hidden auto',
      }}
      id="testBox"
    >
      <div
        style={{
          height: '120vh',
          width: '100vw',
          backgroundColor: 'red',
        }}
      >
        滑动到最底部看看
      </div>
      <button
        type="button"
        onClick={() => {
          smoothScrollTo(0, {
            target: document.querySelector('#testBox'),
          });
        }}
      >
        滚动到顶部
      </button>
    </div>
  );
};

export default Demo;
