import React, { useEffect } from 'react';
import eventemitter from './eventemitter';

export default () => {
  useEffect(() => {
    eventemitter.on('click', () => {
      console.log('我点击了');
    });
  }, []);
  return (
    <button
      type="button"
      onClick={() => {
        eventemitter.emit('click');
      }}
    >
      发送事件
    </button>
  );
};
