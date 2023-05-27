import "hacktimer";

import { HomeStore } from "./models.js";
import { formatTime } from "../shared/helper.js";

const homeStore = new HomeStore();

const Home = {
  $: {
    startButton: document.querySelector("#start"),
    stopButton: document.querySelector("#stop"),
    resetButton: document.querySelector("#reset"),
    timeElement: document.querySelector("#time"),
  },
  init() {
    // Register event handler
    Home.$.startButton.addEventListener("click", () => {
      homeStore.start();
    });
    Home.$.stopButton.addEventListener("click", () => {
      homeStore.stop();
    });
    Home.$.resetButton.addEventListener("click", () => {
      homeStore.reset();
    });
    homeStore.addEventListener("save", () => {
      Home.render();
    });
    // Initial Render
    Home.render();
  },
  render() {
    // NOTE: DOM manipulation should only happen here
    Home.$.timeElement.textContent = formatTime(homeStore.counter);
  },
};

Home.init();
