import { DEFAULT_MIN, DEFAULT_SEC } from "../shared/config";

export default class HomeStore extends EventTarget {
  constructor() {
    super();
    this.initialDuration = DEFAULT_MIN * 60 + DEFAULT_SEC;
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

  // Switch between Pomodoro session, shortbreak and longbreak
  changeDuration(min, sec) {
    this.initialDuration = min * 60 + sec; // duration is in minutes and secs
    this.counter = this.initialDuration;
    this._save();
  }
}
