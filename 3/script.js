let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}
//start();

 let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
 }

function chooseGoods() {
	 for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	 } 
}
//chooseGoods();

function workTime(time) {
	if (time <0) {
		console.log('Такого просто не может быть');
	} else if(time > 8 && time < 20) {
		console.log('Время работать!')
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			}
}
//workTime(18);

function dailyBudget() {
	alert("Ежедневный бюджет " + parseFloat(mainList.budget / 30));

	console.log(mainList);
}
//dailyBudget();

function discountSystem() {
	if (mainList.discount == true) {
		price = money * 0.8;
		alert("Цена со скидкой " + parseFloat(price));
	} else {
		alert("Скидки нет");
	}	
}
//discountSystem();

function addEmployers() {
	for (let i = 0; i < 4; i++) {
		let a = prompt("Введите имя сотрудника");
		mainList.employers[i] = a;
	} 
}
//addEmployers();

