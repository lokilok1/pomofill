import "hacktimer";

import HomeStore from "./models.js";
import TimerView from "./timerView.js";

const init = () => {
  const homeStore = new HomeStore();
  const timerView = new TimerView();
  timerView.render(homeStore.counter);
  timerView.$.startButton.addEventListener("click", () => homeStore.start());
  timerView.$.stopButton.addEventListener("click", () => homeStore.stop());
  timerView.$.resetButton.addEventListener("click", () => homeStore.reset());
  timerView.$.pomodoroSessionButton.addEventListener(
    "click",
    () => homeStore.changeDuration(25, 0), // set to 25 min for pomodoro session
  );
  timerView.$.longBreakButton.addEventListener(
    "click",
    () => homeStore.changeDuration(10, 0), // set to 25 min for pomodoro session
  );
  timerView.$.shortBreakButton.addEventListener(
    "click",
    () => homeStore.changeDuration(5, 0), // set to 5 min for short break
  );
  homeStore.addEventListener("save", () => {
    timerView.render(homeStore.counter);
  });
};

init();
