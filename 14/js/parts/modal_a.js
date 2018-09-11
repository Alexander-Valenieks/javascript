function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';

	});
	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let btns = document.getElementsByClassName('description-btn');
    info = document.getElementsByClassName('info')[0];

  	info.addEventListener('click', function(event){    
      	for (let i = 0; i < btns.length; i++) {    
          	if (event.target && event.target.className == 'description-btn') {
              	btns[i].classList.add('more-splash');  //вместо btns можно и this
              	overlay.style.display = "block";
          		btns[i].classList.remove('more-splash');
          		document.body.style.overflow = '';
          	}
      	}    
  	});
}

module.exports = modal;