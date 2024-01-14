let hitDate = new Date(2024, 7, 18, 0, 0, 0);
const time = document.querySelector('.time');

let intervalId = setInterval(() => {
    let nowDate = new Date();

    const distance = hitDate.getTime() - nowDate.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let s = Math.floor((distance % minute) / second)
    let m = Math.floor((distance % hour) / minute);
    let h = Math.floor((distance % day) / hour);
    let d = Math.floor(distance / day);

    const dayElem = document.querySelector('.day');
    const hourElem = document.querySelector('.hour');
    const minuteElem = document.querySelector('.minute');
    const secondElem = document.querySelector('.second');

    dayElem.innerHTML = d;
    hourElem.innerHTML = h;
    minuteElem.innerHTML = m;
    secondElem.innerHTML = s;

    if (distance < 0) {
        clearInterval(intervalId);
        time.innerHTML = "IT'S BIRTHDAY TIME!!!"
    };
    
}, 0);