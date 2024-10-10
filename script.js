let countdown;
const daysElement = document.getElementById('days');
const hoursDisplay = document.getElementById('hoursDisplay');
const minutesDisplay = document.getElementById('minutesDisplay');
const secondsDisplay = document.getElementById('secondsDisplay');

function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    countdown = setInterval(function () {
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        daysElement.innerHTML = String(days).padStart(2, '0');
        hoursDisplay.innerHTML = String(hours).padStart(2, '0');
        minutesDisplay.innerHTML = String(minutes).padStart(2, '0');
        secondsDisplay.innerHTML = String(seconds).padStart(2, '0');

        if (--timer < 0) {
            clearInterval(countdown);
            alert("Countdown finished!");
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', () => {
    clearInterval(countdown); // Clear any existing countdown
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    const totalTime = hours * 3600 + minutes * 60 + seconds; // Convert to total seconds
    if (totalTime > 0) {
        startCountdown(totalTime);
    } else {
        alert("Please enter a valid time!");
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    clearInterval(countdown);
    daysElement.innerHTML = "00";
    hoursDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
});
