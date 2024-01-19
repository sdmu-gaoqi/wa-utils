export default class WorkerBuilder extends Worker {
  constructor(worker: any) {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    const blobURL = URL.createObjectURL(blob);
    super(blobURL);
    URL.revokeObjectURL(blobURL);
  }
}
