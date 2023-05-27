class TimerState {
  constructor() {
    this.minute = 25;
    this.second = 0;
    this.timerId = null;
    this.onTick = null;
  }

  sessionTime() {
    return this.minute * 60 + this.second;
  }

  start() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = this.countdown(this.sessionTime());
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    this.stop();
    this.minute = 25;
    this.second = 0;
  }

  countdown(time) {
    const tick = () => {
      const min = Math.trunc(time / 60);
      const sec = time % 60;
      this.minute = min;
      this.second = sec;
      if (this.onTick) {
        this.onTick(this.minute, this.second);
      }
      if (time === 0) {
        clearInterval(this.timerId);
        // console.log("Time is up!");
      }
      time--;
    };
    tick();
    const timerId = setInterval(tick, 1000);
    return timerId;
  }
}

export default new TimerState();
