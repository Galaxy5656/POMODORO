const startingMin = 25;
let time = startingMin * 60; //converts min to sec

const countdownEl = document.getElementById("timer1");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor (time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`; //writes the string
    time--;

    if (time < 0) //stops the interval when timer hits 0
        clearInterval(refreshIntervalid);
}