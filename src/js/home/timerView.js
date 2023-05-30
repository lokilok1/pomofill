import { formatTime } from "../shared/helper.js";
export default class timerView extends EventTarget {
  constructor() {
    super();
    this.startButton = document.querySelector("#start");
    this.stopButton = document.querySelector("#stop");
    this.resetButton = document.querySelector("#reset");
    this.timeElement = document.querySelector("#time");
  }

  addHandlerTimerBtns(element, handler) {
    element.addEventListener("click", () => {
      handler();
    });
  }

  addHandlerRenderTimer(homeStore) {
    homeStore.addEventListener("save", () => {
      this.render(homeStore.counter);
    });
  }

  render(counter) {
    this.timeElement.textContent = formatTime(counter);
  }
}