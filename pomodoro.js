const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timerDisplay = document.querySelector(".timer");
const status = document.querySelector(".status");


function startTimer(seconds) {
    const now = Date.now()
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round( (then - Date.now()) / 1000 );
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

stop.onclick = function() {
    status.textContent = "Stopped.";
}

reset.onclick = function() {
    timerDisplay.textContent = "00:00";
    status.textContent = "Resetted.";
}