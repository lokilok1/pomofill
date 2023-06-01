import { formatTime } from "../shared/helper.js";
export default class timerView extends EventTarget {
  constructor() {
    super();
    this.$ = {
      startButton: document.querySelector("#start"),
      stopButton: document.querySelector("#stop"),
      resetButton: document.querySelector("#reset"),
      timeElement: document.querySelector("#time"),
      pomodoroSessionButton: document.querySelector("#pomodoro-session"),
      shortBreakButton: document.querySelector("#short-break"),
      longBreakButton: document.querySelector("#long-break"),
    };
  }

  render(counter) {
    this.$.timeElement.textContent = formatTime(counter);
  }
}
