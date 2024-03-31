// import { HmacMD5 } from 'crypto-js';
// import { isEmpty } from 'wa-utils';

// const getSign = (
//   params: Record<string, string>,
//   secretKey: string,
//   excludeKeys: string[] = [],
// ) => {
//   let message = '';
//   Object.keys(params)
//     .filter((key) => {
//       return !excludeKeys.includes(key) && !isEmpty(params[key]);
//     })
//     .sort()
//     .forEach((key, index) => {
//       message += `${index === 0 ? '' : '&'}${key}=${
//         encodeURIComponent(params[key]) || ''
//       }`;
//     });
//   return HmacMD5(message, secretKey);
// };

// export default getSign;
