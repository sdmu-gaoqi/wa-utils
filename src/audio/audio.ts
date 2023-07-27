export interface AudioOptions {
  src: string;
}

class AudioController {
  src = '';
  timeMaps = new Map(); // 记录时长
  audio: HTMLAudioElement | null = null;
  constructor(data: AudioOptions) {
    this.src = data.src;
  }
  changeUrl(url: string) {
    this.src = url;
  }
  play() {
    if (this.audio) {
      this.audio.play();
    } else {
      this.audio = new Audio(this.src);
      this.audio.onload = () => {
        if (this.audio) {
          this.audio.play();
        }
      };
    }
  }
  pause() {
    if (this.audio) {
      this.audio.pause();
      const { currentTime, duration } = this.audio;
      const time = currentTime >= duration ? 0 : currentTime;
      this.timeMaps.set(this.src, time);
    }
  }
  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}

export default AudioController;
