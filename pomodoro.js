const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
const status = document.querySelector(".status");
start.onclick = function() {
    timer.textContent = "25:00";
}

stop.onclick = function() {
    status.textContent = "Stopped.";
}

reset.onclick = function() {
    timer.textContent = "00:00";
    status.textContent = "Resetted.";
}