const fileWorker = () => {
  self.importScripts(
    'https://cdn.jsdelivr.net/npm/spark-md5@3.0.2/spark-md5.min.js',
  );
  function calculateHash(data: any) {
    // @ts-ignore
    const spark = new self.SparkMD5.ArrayBuffer();
    spark.append(data);
    return spark.end();
  }
  self.onmessage = function (event) {
    const file = event.data;

    // 读取文件并生成哈希值
    const fileReader = new FileReader() as any;
    fileReader.onload = function () {
      const fileData = new Uint8Array(fileReader.result);
      const fileHash = calculateHash(fileData);

      // 向主线程发送哈希值
      self.postMessage(fileHash);
    };
    fileReader.readAsArrayBuffer(file);
  };
};

export default fileWorker;
