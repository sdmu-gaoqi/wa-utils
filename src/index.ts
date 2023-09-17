// import nanoid from 'nanoid';

export { default as copy } from 'copy-to-clipboard';
export { default as cloneDeep } from 'lodash/cloneDeep';
export { default as debounce } from 'lodash/debounce';
export { default as isEmpty } from 'lodash/isEmpty';
export { default as isEqual } from 'lodash/isEqual';
export { default as isObject } from 'lodash/isObject';
export { default as throttle } from 'lodash/throttle';
export { default as AudioController } from './audio/audio';
export type { AudioOptions } from './audio/audio';
export { default as Request } from './axios/axios';
export type { RequestOption } from './axios/axios';
export { default as clientRect } from './clientRect/clientRect';
export { default as cookie } from './cookie/cookie';
export { default as debug } from './debug/debug';
export { off, on } from './eventListener/eventListener';
export { default as eventemitter } from './eventemitter/eventemitter';
export { default as fileOpts } from './file/file';
export { default as fullscreen } from './fullscreen/fullscreen';
export { injectionScript, injectionStyle } from './injection/injection';
export type { ScriptOption, styleOption } from './injection/injection';
export { default as joinCss } from './joinCss/joinCss';
export * from './money/money';
export { default as openTab } from './openTab/openTab';
export { default as regexs } from './regex/regex';
export { default as ResizeListener } from './resizeObserver/resizeObserver';
export { default as safeJson } from './safeJson/safeJson';
export { default as sleep } from './sleep/sleep';
export { default as smoothScrollTo } from './smoothScrollTo/smoothScrollTo';
export type { SmoothScrollToOptions } from './smoothScrollTo/smoothScrollTo';
export { default as Storage } from './storage/storage';
export { default as timestamp } from './timestamp/timestamp';
// export { nanoid };
