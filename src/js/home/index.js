import "hacktimer";

import HomeStore from "./models.js";
import TimerView from "./timerView";

const init = () => {
  const homeStore = new HomeStore();
  const timerView = new TimerView();
  timerView.render(homeStore.counter);
  timerView.addHandlerTimerBtns(
    timerView.startButton,
    homeStore.start.bind(homeStore)
  );
  timerView.addHandlerTimerBtns(
    timerView.stopButton,
    homeStore.stop.bind(homeStore)
  );
  timerView.addHandlerTimerBtns(
    timerView.resetButton,
    homeStore.reset.bind(homeStore)
  );
  timerView.addHandlerTimerBtns(
    timerView.pomodoroSessionButton,
    () => homeStore.changeDuration(25, 0) // set to 25 min for pomodoro session
  );

  timerView.addHandlerTimerBtns(
    timerView.longBreakButton,
    () => homeStore.changeDuration(10, 0) // set to 10 min for long break
  );

  timerView.addHandlerTimerBtns(
    timerView.shortBreakButton,
    () => homeStore.changeDuration(5, 0) // set to 5 min for short break
  );
  homeStore.addEventListener("save", () => {
    timerView.render(homeStore.counter);
  });
};

init();
