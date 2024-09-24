let timerDisplay = document.querySelector('.timer');
let buttonStart = document.querySelector('.buttonStart');
let buttonStop = document.querySelector('.buttonStop');

let startTime;
let seconds = 0;
let minutes = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = performance.now();
        requestAnimationFrame(updateTimer);d
    }
}

function stopTimer() {
    isRunning = false;
}

function updateTimer(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    
    if (elapsedTime >= 1000) {
        seconds++;
        startTime = timestamp;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        let displayMinutes = ("0" + minutes).slice(-2);
        let displaySeconds = ("0" + seconds).slice(-2);
        timerDisplay.textContent = displayMinutes + ":" + displaySeconds;
    }
    
    if (isRunning) {
        requestAnimationFrame(updateTimer);
    }
}

buttonStart.addEventListener('click', function() {
    startTimer();
});

buttonStop.addEventListener('click', function() {
    stopTimer();
});
























