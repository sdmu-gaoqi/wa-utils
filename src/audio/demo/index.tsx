import React from 'react';
import { AudioController } from 'wa-utils';

const Demo = () => {
  const audio = new AudioController({
    src: `https://www.onlinemictest.com/wp-content/themes/onlinemictest/sound.mp3`,
  });
  // eslint-disable-next-line react/button-has-type
  return (
    <>
      <button type="button" onClick={() => audio.play()}>
        播放音频
      </button>
      <button type="button" onClick={() => audio.pause()}>
        暂停
      </button>
      <button
        type="button"
        onClick={() =>
          audio.changeUrl(
            'https://www.hivi.com/resources/audiotesting/1/audiocheck.net_C.wav',
          )
        }
      >
        切换音频
      </button>
    </>
  );
};

export default Demo;
