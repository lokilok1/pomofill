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
  timerView.addHandlerRenderTimer(homeStore);
};

init();