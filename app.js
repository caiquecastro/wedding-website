let remainingDays  = document.querySelector("#remaining-days");
let remainingHours = document.querySelector("#remaining-hours");
let remainingMinutes = document.querySelector("#remaining-minutes");
let remainingSeconds = document.querySelector("#remaining-seconds");

buildClock();
window.setInterval(buildClock, 1000);

function buildClock() {
    let remainingTime = getTimeRemaining('2017-03-11 12:33');

    remainingDays.innerHTML = addLeadingZeroes(remainingTime.days);
    remainingHours.innerHTML = addLeadingZeroes(remainingTime.hours);
    remainingMinutes.innerHTML = addLeadingZeroes(remainingTime.minutes);
    remainingSeconds.innerHTML = addLeadingZeroes(remainingTime.seconds);
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