export class HomeStore extends EventTarget {
  constructor() {
    super();
    this.initialDuration = 25 * 60;
    this.counter = this.initialDuration;
    this.timerId = null;
  }

  _save() {
    this.dispatchEvent(new CustomEvent("save"));
  }

  configure(options) {
    this.initialDuration = options.duration;
    this.reset();
  }

  start() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
    }
    this.timerId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.stop();
      }
      this._save();
    }, 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    this.stop();
    this.counter = this.initialDuration;
    this._save();
  }
}
