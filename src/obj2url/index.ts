const obj2url = (obj: any): string => {
  const urls = [];

  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      let value = obj[k];
      if (['', undefined, null].includes(value)) {
        continue;
      }
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      value = encodeURIComponent(value);
      urls.push(`${k}=${value}`);
    }
  }

  const str = urls.join('&');
  return str;
};

export default obj2url;
