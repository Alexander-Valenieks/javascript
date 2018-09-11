function modal_b() {
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

module.exports = modal_b;