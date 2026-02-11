class StopWatch {
  // Colocar # antes de um nome torna ele um membro privado que so pode ser acessado dentro da classe
  #elapsedTimeInSeconds = 0;
  #intervalID = null;

  start(Callback = () => {}) {
    this.#intervalID = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      Callback();
    }, 1000);
  }
  stop(Callback = () => {}) {
    clearInterval(this.#intervalID);
    Callback();
  }
  reset(Callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    Callback();
  }
  get elapsedTime() {
    return StopWatch.formatTime(this.#elapsedTimeInSeconds);
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
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const stopwatchDisplay = document.getElementById("stopwatch-display");
function UpdateDisplay() {
  stopwatchDisplay.innerText = sw1.elapsedTime;
}

startBtn.addEventListener("click", () => {
  sw1.start(UpdateDisplay);
});
stopBtn.addEventListener("click", () => {
  sw1.stop();
});
resetBtn.addEventListener("click", () => {
  sw1.reset(UpdateDisplay);
});
