import state from './model.js';
import updateTimerUI from './views/timerView.js';

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

state.onTick = (minute, second) => updateTimerUI(minute, second);

startButton.addEventListener('click', () => {
    state.start();
});

stopButton.addEventListener('click', () => {
    state.stop();
    updateTimerUI(state.minute, state.second);
});

resetButton.addEventListener('click', () => {
    state.reset();
    updateTimerUI(state.minute, state.second);
});

// Initial UI update
updateTimerUI(state.minute, state.second);