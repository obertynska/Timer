window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	//timer


	let timerHours = document.querySelector('#timer-hours'),
	timerMinutes = document.querySelector('#timer-minutes'),
	timerSeconds = document.querySelector('#timer-seconds'),
	deadline = '08 March 2020';


	function getTimeRemaining(deadline){
		let dateStop = new Date(deadline).getTime(),
		dateNow = new Date().getTime(),
		timeRemaning = (dateStop - dateNow) /1000,
		seconds =  Math.floor(timeRemaning % 60),
		minutes =  Math.floor((timeRemaning / 60) % 60),        
		hours =  Math.floor(timeRemaning / 60 / 60);
		if(timeRemaning > 0){
			return {hours, minutes, seconds};
		}else{
			return {hours: '0', minutes: '0', seconds: '0'};
		}

	}	


	function updateClock(){

		let timer =  getTimeRemaining(deadline);

		for (let key in timer){
			if(timer[key]<10 ){
				timer[key] = "0" + timer[key];
			}
		}

		timerHours.textContent = timer.hours;
		timerMinutes.textContent = timer.minutes;
		timerSeconds.textContent = timer.seconds;	

	}
    updateClock()
	setInterval(updateClock, 1000);
	


});