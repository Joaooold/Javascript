class StopWatch {
  elapsedTimeInSeconds = 0;
  intervalID = null;

  start() {
    this.intervalID = setInterval(() => {
      this.elapsedTimeInSeconds++;
      console.log(this.elapsedTime);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }
  reset() {
    this.elapsedTimeInSeconds = 0;
  }
  get elapsedTime() {
    return StopWatch.formatTime(this.elapsedTimeInSeconds)
  }

  static formatTime(timeSeconds) {
    const hours = Math.floor(timeSeconds / 3600);
    const minutes = Math.floor((timeSeconds % 3600) / 60);
    const seconds = timeSeconds - hours * 3600 - minutes * 60;

    return `${StopWatch.zeroPadding(hours)}:${StopWatch.zeroPadding(minutes)}:${StopWatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desireAmountDigits = 2) {
    let StringNumber = String(originalNumber);
    const zeroRequired = desireAmountDigits - StringNumber.length;
    if (zeroRequired <= 0) {
      return StringNumber;
    }
    for (let counter = 0; counter < zeroRequired; counter++) {
      StringNumber = `0${StringNumber}`;
      return StringNumber;
    }
  }
}

const sw1 = new StopWatch();
sw1.start();
