interface ListenProps {
  target: HTMLElement;
  onSuccess: () => void;
  onError?: () => void;
}

const fullscreen = {
  to: () => {
    const ele = document.body as any;
    if (ele.requestFullscreen) {
      ele.requestFullscreen();
    } else if (ele.msRequestFullscreen) {
      ele.msRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullscreen) {
      ele.webkitRequestFullscreen();
    }
  },
  exit: () => {
    const ele = document as any;
    if (ele.exitFullscreen) {
      ele.exitFullscreen();
    } else if (ele.msExitFullscreen) {
      ele.msExitFullscreen();
    } else if (ele.mozCancelFullScreen) {
      ele.mozCancelFullScreen();
    } else if (ele.webkitExitFullscreen) {
      ele.webkitExitFullscreen();
    }
  },
  listenTarget: (props: ListenProps) => {
    const { target, onSuccess, onError = () => {} } = props;
    if (!target) {
      return;
    }
    target.onfullscreenchange = onSuccess;
    target.onfullscreenerror = onError;
  },
  status: () => {
    const dom = document as any;
    return (
      (dom?.fullscreenElement && dom?.fullscreenElement !== null) ||
      (dom?.webkitFullscreenElement && dom?.webkitFullscreenElement !== null) ||
      (dom?.mozFullScreenElement && dom?.mozFullScreenElement !== null) ||
      (dom?.msFullscreenElement && dom?.msFullscreenElement !== null)
    );
  },
};

export default fullscreen;
