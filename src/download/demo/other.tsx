import React from 'react';
import { download } from 'wa-utils';

const OtherDemo = () => {
  const text = '拿来吧你';
  const fileUrl =
    'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF';
  return (
    <div>
      <p>{text}</p>
      <button
        type="button"
        onClick={() => {
          download.txt(`文本${Date.now()}.txt`, text);
        }}
      >
        下载文本
      </button>

      {/* 下载图片 */}
      <p>
        <img src={fileUrl} style={{ width: '100%' }} crossOrigin="anonymous" />
      </p>
      <button
        onClick={() => download.fileFormUrl(fileUrl, '图片.png')}
        type="button"
      >
        下载远程图片
      </button>

      <div>dom以图片下载</div>
      <button
        type="button"
        onClick={() =>
          download.img(
            `${Date.now()}.jpeg`,
            document?.querySelector('#demoPage') || document.body,
          )
        }
      >
        下载
      </button>
    </div>
  );
};

export default OtherDemo;
