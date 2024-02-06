import React from 'react';
import { clientRect } from 'wa-utils';

const Demo = () => {
  const position = clientRect(document.body);
  return <div>{JSON.stringify(position)}</div>;
};

export default Demo;
