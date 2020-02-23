window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	const greeting = document.querySelector('.greeting'),
	weekDay = document.querySelector('.weekday'),
	currenTime = document.querySelector('.currenTime'),
	timerHours = document.querySelector('#timer-hours'),
	timerMinutes = document.querySelector('#timer-minutes'),
	timerSeconds = document.querySelector('#timer-seconds'),	
	deadline = '01 January 2021 00:00:00';

	let dateNow;
	

	const sayWelcome = () =>{
		dateNow = new Date();
		const hoursNow = dateNow.getHours();
		if(hoursNow >0 && hoursNow < 12){
			greeting.textContent = "Goog morning";
		} else if(hoursNow >= 12  && hoursNow < 18){
			greeting.textContent = "Goog day";
		}  else {
			greeting.textContent = "Goog evening";
		}
	}

	

	const getWeeekDay = () => {
		dateNow = new Date();
		const jsWeekDay = dateNow.getDay();
		const daysArr = ['Воскресенье', 'Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота'];
		weekDay.textContent = daysArr[jsWeekDay];
	}


	const getCurrentTime = () =>{
		dateNow = new Date();
		const currHours = dateNow.getHours(),
		currMinutes = dateNow.getMinutes(),
		currSeconds = dateNow.getSeconds();

		currenTime.textContent = `${currHours}  : ${currMinutes} : ${currSeconds}`;

	}


	const getTimeRemaining = (deadline) =>{
		const dateStop = new Date(deadline).getTime(),
		dateNow = new Date(),
		dateCurrent = dateNow.getTime(),
		timeRemaning = (dateStop - dateCurrent) /1000,
		seconds =  Math.floor(timeRemaning % 60),
		minutes =  Math.floor((timeRemaning / 60) % 60),        
		hours =  Math.floor(timeRemaning / 60 / 60);
		if(timeRemaning > 0){
			return {hours, minutes, seconds};
		}else{
			return {hours: '0', minutes: '0', seconds: '0'};
		}

	}	


	const updateTimer = () => {      

		const timer =  getTimeRemaining(deadline);

		for (let key in timer){
			if(timer[key]<10 ){
				timer[key] = "0" + timer[key];
			}
		}

		timerHours.textContent = timer.hours;
		timerMinutes.textContent = timer.minutes;
		timerSeconds.textContent = timer.seconds;


	}

	const update = () => {
		updateTimer()
		sayWelcome()
		getCurrentTime()
		getWeeekDay();
	}

    update();
	setInterval(update, 1000);


});