import { filter, find, isEqual } from 'lodash';

class VelocityOnCompleteHandler {
  constructor() {
    this.callbacks = [];
    this.setCompletePromise();
  }

  private callbacks: (() => void)[];
  private complete: Promise<void>;
  private resolve: () => void;

  private setCompletePromise = () => {
    this.complete = new Promise((resolve) => {
      this.resolve = resolve;
    });

    this.complete.then(this.resolveCallbacks);
  }

  private resolveCallbacks = () => {
    this.callbacks.forEach((callback) => {
      callback();
    });

    this.setCompletePromise();
  }

  handleVelocityComplete = () => {
    this.resolve();
  }

  registerCallback = (callback: () => void) => {
    const exists = !!find(this.callbacks, (cb) => isEqual(cb, callback));

    if (exists === false) {
      this.callbacks.push(callback);
    }
  }

  removeCallback = (callback: () => void) => {
    this.callbacks = filter(this.callbacks, (cb) => !isEqual(cb, callback));
  }
}

export default new VelocityOnCompleteHandler();
