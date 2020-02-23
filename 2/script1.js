window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	const greeting = document.querySelector('.greeting'),
	weekDay = document.querySelector('.weekday'),
	currenTime = document.querySelector('.currenTime'),
	timerDays = document.querySelector('#timer-days'),	
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

		let dataArr = [];
		dataArr.push(currHours);
		dataArr.push(currMinutes);
		dataArr.push(currSeconds);
	

	    for(let i =0; i< dataArr.length; i++){
	    	if(dataArr[i] < 10){
	    		dataArr[i] = '0' +dataArr[i];
	    	}
	    }

		currenTime.textContent = dataArr[0] + ':' +dataArr[1] + ':' + dataArr[2];

	}


	const getTimeRemaining = (deadline) =>{
		const dateStop = new Date(deadline).getTime(),
		dateNow = new Date(),
		dateCurrent = dateNow.getTime(),
		timeRemaning = (dateStop - dateCurrent) /1000,
		days =  Math.floor(timeRemaning / 60 /60 /24);
				
		if(timeRemaning > 0){
			return {days};
		}else{
			return {days: '0'};
		}

	}	


	const updateTimer = () => {      

		const timer =  getTimeRemaining(deadline);

		for (let key in timer){
			if(timer[key]<10 ){
				timer[key] = "0" + timer[key];
			}
		}

		timerDays.textContent = timer.days;
		


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