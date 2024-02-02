const safeJson = {
  stringify: (val: any) => {
    try {
      return JSON.stringify(val);
    } catch (err) {
      console.error('序列化失败');
      return JSON.stringify('');
    }
  },
  parse: (val: any) => {
    try {
      return JSON.parse(val);
    } catch (err) {
      console.error('反序列化失败');
      return undefined;
    }
  },
};

export default safeJson;
