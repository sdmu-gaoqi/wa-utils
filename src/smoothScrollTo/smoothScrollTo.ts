interface SmoothScrollToOptions {
  duration?: number;
  isHorizontal?: boolean;
  target?: any;
}

const getStartPosition = (isHorizontal: boolean, targetElement: any) => {
  if (targetElement === window) {
    return isHorizontal ? targetElement.scrollX : targetElement.scrollY;
  }
  return isHorizontal ? targetElement.scrollLeft : targetElement.scrollTop;
};

function smoothScrollTo(
  distance: number,
  options?: SmoothScrollToOptions,
): void {
  const { duration = 500, isHorizontal = false, target } = options || {};
  const targetElement = target || window;
  const startPosition = getStartPosition(isHorizontal, targetElement);
  const startTime = performance.now();

  function ease(timeElapsed: number, difference: number): number {
    let time = timeElapsed / duration;
    const amount = --time * time * time + 1;
    return startPosition + amount * difference;
  }

  function animation(currentTime: number): void {
    const difference = distance - startPosition;
    const timeElapsed = currentTime - startTime;
    const scroll = ease(timeElapsed, difference);

    if (isHorizontal) {
      targetElement.scrollTo({ left: scroll });
    } else {
      targetElement.scrollTo({ top: scroll });
    }

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default smoothScrollTo;
