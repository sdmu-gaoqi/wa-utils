export function getParameterByName(name = '', byHash = false) {
  // @ts-nocheck
  // eslint-disable-next-line no-param-reassign, no-useless-escape
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  let results = regex.exec(location[byHash ? 'hash' : 'search']);
  // eslint-disable-next-line eqeqeq
  return results == null ? '' : decodeURIComponent(results[1]);
}
