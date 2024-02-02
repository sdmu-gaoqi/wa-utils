// import nanoid from 'nanoid';

export { default as copy } from 'copy-to-clipboard';
export { default as cloneDeep } from 'lodash/cloneDeep';
export { default as debounce } from 'lodash/debounce';
export { default as isEmpty } from 'lodash/isEmpty';
export { default as isEqual } from 'lodash/isEqual';
export { default as isObject } from 'lodash/isObject';
export { default as throttle } from 'lodash/throttle';
export { default as aesDecrypt } from './aes-decrypt';
export { default as aesEncrypt } from './aes-encrpyt';
export { default as AudioController } from './audio/audio';
export type { AudioOptions } from './audio/audio';
export { default as Request } from './axios/axios';
export type { RequestOption } from './axios/axios';
export { default as base64 } from './base64';
export { default as clientRect } from './clientRect/clientRect';
export { default as convertImgColor } from './convertImgColor';
export { default as cookie } from './cookie/cookie';
export { default as createFileHash } from './createFileHash';
export { default as debug } from './debug/debug';
export { default as download } from './download';
export { off, on } from './eventListener/eventListener';
export { default as eventemitter } from './eventemitter/eventemitter';
export { default as fileOpts } from './file/file';
export { default as formatPercent } from './format-percent';
export { default as formatString } from './format-string';
export { formatDiscount, formatMoney } from './format/format';
export { default as fullscreen } from './fullscreen/fullscreen';
export { default as getSign } from './get-sign';
export { default as IFrame } from './iframe';
export { injectionScript, injectionStyle } from './injection/injection';
export type { ScriptOption, styleOption } from './injection/injection';
export { default as isNumber } from './is-number';
export { default as joinCss } from './joinCss/joinCss';
export { default as loadExternal } from './load-external';
export { default as obj2url } from './obj2url';
export { default as openTab } from './openTab/openTab';
export { default as registerPageHidden } from './page-hidden';
export { default as regexs } from './regex/regex';
export { default as ResizeListener } from './resizeObserver/resizeObserver';
export { default as safeJson } from './safeJson/safeJson';
export { default as sleep } from './sleep/sleep';
export { default as smoothScrollTo } from './smoothScrollTo/smoothScrollTo';
export type { SmoothScrollToOptions } from './smoothScrollTo/smoothScrollTo';
export { default as Storage } from './storage/storage';
export { default as timestamp } from './timestamp/timestamp';
export { getParameterByName } from './url/url';
export { default as uuid } from './uuid/uuid';
