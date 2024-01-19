import React, { useEffect } from 'react';
import { off, on } from '../eventListener';

const Demo = () => {
  useEffect(() => {
    on(document.querySelector('#demoButtn'), 'click', () => {
      console.log('button点击了');
    });
    return () => {
      off(document.querySelector('#demoButtn'), 'click', () => {
        console.log('button点击了');
      });
    };
  }, []);
  return (
    <button type="button" id="demoButtn">
      点击
    </button>
  );
};

export default Demo;
