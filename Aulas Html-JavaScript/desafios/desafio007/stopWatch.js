class StopWatch {
  elapsedTimeInSeconds = 0;
  intervalID = null;

  start() {
    this.intervalID = setInterval(() => {
      this.elapsedTimeInSeconds++;
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }
  reset() {
    this.elapsedTimeInSeconds = 0;
  }
}

const sw1 = new StopWatch();
sw1.start();
