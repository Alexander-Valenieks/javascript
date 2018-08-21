let menu = document.querySelector('.menu');
let item = document.querySelectorAll('.menu-item');

menu.insertBefore(item[1], item[3]);

let li = document.createElement('li');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);
li.classList.add("menu-item"); //присваиваем класс menu-item к li

let body = document.getElementsByTagName('body')[0];
document.body.style.background = "url('img/apple_true.jpg')";

let title = document.getElementById("title");
title.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";

let adv = document.getElementsByClassName('adv')[0];
let column = document.body.getElementsByClassName('column')[1];
column.removeChild(adv);

let question = prompt('Какое Ваше отношение к Apple технике?'),
	block = document.getElementById('prompt');
	block.innerHTML = question;

	
	