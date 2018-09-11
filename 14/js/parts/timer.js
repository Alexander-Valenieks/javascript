function timer() {

	let deadline = '2018-08-27';

	getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60),
		minutes = Math.floor( (t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) ),
			
			checkTime = (i) => {
				if (i < 10) {i = "0" + i};
				return i;
			}
			
		hours = checkTime(hours),
		minutes = checkTime(minutes),
		seconds = checkTime(seconds);

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	setClock = (id, endtime) => {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			updateClock = () => {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

			let timeInterval = setInterval(updateClock, 1000);

				if (t.total <= 0) {
					clearInterval(timeInterval);
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
				}
			};

			updateClock();			
		};

	setClock('timer', deadline);
}
module.exports = timer;
