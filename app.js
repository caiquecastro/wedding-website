let remainingDays  = document.querySelector("#remaining-days");
let remainingHours = document.querySelector("#remaining-hours");
let remainingMinutes = document.querySelector("#remaining-minutes");
let remainingSeconds = document.querySelector("#remaining-seconds");

window.setInterval(function() {
	let remainingTime = getTimeRemaining('2017-03-11 12:00');

	remainingDays.innerHTML = remainingTime.days;
	remainingHours.innerHTML = remainingTime.hours;
	remainingMinutes.innerHTML = remainingTime.minutes;
	remainingSeconds.innerHTML = remainingTime.seconds;
}, 1000);

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