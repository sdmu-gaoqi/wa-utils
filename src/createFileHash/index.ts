import WorkerBuilder, { fileWorker } from '../workers';

export default (file: any) => {
  return new Promise((resolve) => {
    const worker = new WorkerBuilder(fileWorker);
    worker.onmessage = (event) => {
      resolve(event.data);
    };
    worker.postMessage(file);
  });
};
