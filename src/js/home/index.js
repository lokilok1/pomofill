import "hacktimer";

import HomeStore, { TimerMode } from "./models.js";
import TimerView from "./timerView.js";

const init = () => {
  const homeStore = new HomeStore();
  const timerView = new TimerView();
  timerView.render(homeStore.counter);
  timerView.$.startButton.addEventListener("click", () => homeStore.start());
  timerView.$.stopButton.addEventListener("click", () => homeStore.stop());
  timerView.$.resetButton.addEventListener("click", () => homeStore.reset());
  timerView.$.pomodoroSessionButton.addEventListener("click", () =>
    homeStore.setMode(TimerMode.pomodoro)
  );
  timerView.$.longBreakButton.addEventListener("click", () =>
    homeStore.setMode(TimerMode.longBreak)
  );
  timerView.$.shortBreakButton.addEventListener("click", () =>
    homeStore.setMode(TimerMode.shortBreak)
  );
  homeStore.addEventListener("save", () => {
    timerView.render(homeStore.counter);
  });
};

init();
