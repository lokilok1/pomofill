import { formatTime } from "../shared/helper.js";
export default class timerView extends EventTarget {
  constructor() {
    super();
    this.startButton = document.querySelector("#start");
    this.stopButton = document.querySelector("#stop");
    this.resetButton = document.querySelector("#reset");
    this.timeElement = document.querySelector("#time");
    this.pomodoroSessionButton = document.querySelector("#pomodoro-session");
    this.shortBreakButton = document.querySelector("#short-break");
    this.longBreakButton = document.querySelector("#long-break");
  }

  addHandlerTimerBtns(element, handler) {
    element.addEventListener("click", () => {
      handler();
    });
  }

  // Removed because the task of listening to changes in the model is now handled by the controller
  // addHandlerRenderTimer(homeStore) {
  //   homeStore.addEventListener("save", () => {
  //     this.render(homeStore.counter);
  //   });
  // }

  render(counter) {
    this.timeElement.textContent = formatTime(counter);
  }
}
