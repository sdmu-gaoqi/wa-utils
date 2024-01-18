import React from 'react';
import { debug } from 'wa-utils';

const Demo = () => {
  const _debug = new debug();
  return (
    <button type="button" onClick={() => _debug.show()}>
      debug
    </button>
  );
};

export default Demo;
