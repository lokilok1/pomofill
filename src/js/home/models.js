import { defaultConfig } from "../shared/config.js";

export const TimerMode = {
  pomodoro: "pomodoro",
  longBreak: "long-break",
  shortBreak: "short-break",
};

export default class HomeStore extends EventTarget {
  #timerId = null;
  #config;
  #currentMode;
  counter;
  constructor() {
    super();
    this.#config = defaultConfig;
    this.#currentMode = TimerMode.pomodoro; // TODO: try to fetch config from local storage first
    this.reset();
  }

  #getInitialDuration() {
    switch (this.#currentMode) {
      case TimerMode.pomodoro:
        return this.#config.pomodoroDuration;
      case TimerMode.shortBreak:
        return this.#config.shortBreakDuration;
      case TimerMode.longBreak:
        return this.#config.longBreakDuration;
      default:
        throw new Error("invalid timer modd");
    }
  }

  #save() {
    this.dispatchEvent(new CustomEvent("save"));
  }

  start() {
    if (this.#timerId != null) {
      clearInterval(this.#timerId);
    }
    this.#timerId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.stop();
      }
      this.#save();
    }, 1000);
  }

  stop() {
    if (this.#timerId) {
      clearInterval(this.#timerId);
      this.#timerId = null;
    }
  }

  reset() {
    this.stop();
    this.counter = this.#getInitialDuration();
    this.#save();
  }

  setMode(mode) {
    if (this.#currentMode == mode) {
      return;
    }
    this.#currentMode = mode;
    this.reset();
  }
}
