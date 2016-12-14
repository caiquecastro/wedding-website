let remainingDays  = document.querySelector("#remaining-days");
let remainingHours = document.querySelector("#remaining-hours");
let remainingMinutes = document.querySelector("#remaining-minutes");
let remainingSeconds = document.querySelector("#remaining-seconds");
let hoursCountdown = document.querySelector('#hours-countdown');
let minutesCountdown = document.querySelector('#minutes-countdown');
let secondsCountdown = document.querySelector('#seconds-countdown');

buildClock();
window.setInterval(buildClock, 1000);

function buildClock() {
    let remainingTime = getTimeRemaining('2017-03-11 9:00');

    remainingDays.innerHTML = formatNumberAndWord(remainingTime.days, 'dia');
    remainingHours.innerHTML = formatNumberAndWord(remainingTime.hours, 'hora');
    remainingMinutes.innerHTML = formatNumberAndWord(remainingTime.minutes, 'minuto');
    remainingSeconds.innerHTML = formatNumberAndWord(remainingTime.seconds, 'segundo');

    let hoursCount = remainingTime.days * 24 + remainingTime.hours;
    let minutesCount = hoursCount * 60 + remainingTime.minutes;
    let secondsCount = minutesCount * 60 + remainingTime.seconds;

    hoursCountdown.innerHTML = thousandsSeparator(hoursCount);
    minutesCountdown.innerHTML = thousandsSeparator(minutesCount);
    secondsCountdown.innerHTML = thousandsSeparator(secondsCount);
}

function formatNumberAndWord(number, word) {
    let response = number + ' ' + word;
    if (number === 1) {
      return response;
    }

    return response + 's';
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function addLeadingZeroes(number) {
    return (number < 10) ? "0" + number : number;
}

function thousandsSeparator(number) {
  return number.toLocaleString();
}