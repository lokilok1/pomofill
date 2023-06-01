import { defaultConfig } from "../shared/config.js";

export default class HomeStore extends EventTarget {
  constructor() {
    super();
    this.timerId = null;
    this.currentMode = "pomodoro";
    // TODO: try to fetch config from local storage first
    this.config = defaultConfig;
    this.reset();
  }

  _getInitialDuration() {
    switch (this.currentMode) {
      case "pomodoro":
        return this.config.pomodoroDuration;
      case "short-break":
        return this.config.shortBreakDuration;
      case "long-break":
        return this.config.longBreakDuration;
      default:
        throw new Error("invalid timer modd");
    }
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
    this.counter = this._getInitialDuration();
    this._save();
  }

  setMode(mode) {
    if (this.currentMode == mode) {
      return;
    }
    this.currentMode = mode;
    this.reset();
  }
}
