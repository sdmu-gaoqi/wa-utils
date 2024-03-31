import React from 'react';
import { getFileId } from 'wa-utils';

const Demo = () => {
  return (
    <div>
      <input
        type="file"
        onChange={async (e) => {
          if (e?.target?.files) {
            const res = await getFileId(e?.target?.files[0]);
            console.log(`文件id为,${res}`);
          }
        }}
      ></input>
    </div>
  );
};

export default Demo;
