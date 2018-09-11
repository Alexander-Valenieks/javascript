function calc() {
		
		let persons = document.getElementsByClassName('counter-block-input')[0],
				restDays = document.getElementsByClassName('counter-block-input')[1],
				place = document.getElementById('select'),
				totalValue = document.getElementById('total'),
				personsSum = 0,
				daysSum = 0,
				total = 0;

				totalValue.innerHTML = 0;

				persons.addEventListener('change', function(){
					let a = persons.value.replace(/[e+.]/gi, '')
						persons.value = a;

					personsSum = +this.value;

					if (this.value.match(persons)) {
            			this.value = '';
            			totalValue.innerHTML = 0;
        			} else if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0 ) {
            			totalValue.innerHTML = 0;
        			} else {
            			total = (daysSum + personsSum) * 4000;
            			totalValue.innerHTML = total;
        			}	
				});

				restDays.addEventListener('change', function(){
					let a = restDays.value.replace(/[e+.]/gi, '')
						restDays.value = a;

					daysSum = +this.value;

					if (this.value.match(restDays)) {
            			this.value = '';
            			totalValue.innerHTML = 0;
        			} else if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0 ) {
            			totalValue.innerHTML = 0;
        			} else {
            			total = (daysSum + personsSum) * 4000;
            			totalValue.innerHTML = total;
        			}	
				});

				place.addEventListener('change', function() {
					 if (restDays.value == '' || restDays.value == '0' || persons.value == '' || persons.value == '0') {
						totalValue.innerHTML = 0;
					} else {
						let a = total;
						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
					}
				});
}

module.exports = calc;