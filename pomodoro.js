const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const timerDisplay = document.querySelector(".timer");
const endTimeDisplay = document.querySelector(".end-time");
const timerButtons = document.querySelectorAll("[data-mins]");
let countdown;
let isEuTime = false; // 24hrs(EU) or 12hrs format
let secondsLeft = 25*60;

function startTimer(seconds) {
    clearInterval(countdown); // Reset (if any) previous timers
    const now = Date.now()
    const then = now + seconds * 1000;
    displayEndTime(then);
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        secondsLeft = Math.round( (then - Date.now()) / 1000 );
        console.log(`left: ${secondsLeft}`);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            alert("TIME'S UP!");
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const displayText = `${minutes}:${(seconds < 10) ? "0" : ""}${seconds}`;
    document.title = (`Time Left : ${displayText}`);
    timerDisplay.textContent = displayText;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTimeDisplay.textContent = `Countdown ends at ${(!isEuTime && hours >= 12 ? hours-12 : hours)}:${(minutes < 10) ? "0" : ""}${minutes}`;
}
function startTimerOnClick() {
    const minutes = parseInt(this.dataset.mins);
    const seconds = minutes * 60;
    startTimer(seconds);
}
timerButtons.forEach(button => button.addEventListener("click", startTimerOnClick))

// The following should be optimized.
// secondsLeft cannot be const. So, it is declared outside the function.
let pausedTimeLeft;
startBtn.addEventListener("click", continueTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
function pauseTimer(e){
    console.log("paused");
    e.preventDefault();
    clearInterval(countdown);
}
function continueTimer(e){
    console.log("continued");
    e.preventDefault();
    startTimer(secondsLeft);
    end = (Date.now() + secondsLeft*1000);
    displayEndTime(end);
}
function resetTimer(e){
    console.log("resetted");
    e.preventDefault();
    clearInterval(countdown);
    secondsLeft = 25*60;
    displayTimeLeft(secondsLeft);
    endTimeDisplay.textContent = "";
    
}
