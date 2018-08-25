let open = document.getElementById('open-btn'),
	
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),

	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],

	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),

	hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
	price;

open.addEventListener('click', () => {
	let timer setTimeout(start, 2000)
});

function start () {
		money = prompt("Ваш бюджет?", "");

		while (isNaN(money) || money == "" || money == null) {
			money = prompt("Ваш бюджет?", "");
		}
		budget_value.textContent = money;
		name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase(); 
	

}

goods_btn.addEventListener('click', () => {
	
	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;

			if ((typeof(a)) === 'string' && (typeof(a)) != null &&  a.length < 50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
			}
	 } 
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

		if (isNaN(items) && items != '') {
				mainList.shopItems = items.split(",");
				mainList.shopItems.sort();  

				items_value.textContent = mainList.shopItems;      
				}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
		if (time <0) {
				console.log('Такого просто не может быть');
				mainList.open = false;
			} else if(time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
				} else if(time < 24) {
					console.log('Уже слишком поздно!');
					mainList.open = false;
					} else {
						console.log('В сутках только 24 часа!');
						mainList.open = false;
					};
		if (mainList.open == true) {
			isopen_value.style.backgroundColor = 'green'
		}
		else {
			isopen_value.style.backgroundColor = 'red'
		}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.readOnly = true;
	count_budget_value.value = money / 30;
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
		if (time > 11 && time < 12) {
			console.log('Время работать!');
			price = (price/100)*80;
			discount_value.style.backgroundColor = 'green';	
		}
		else {
			discount_value.style.backgroundColor = 'red';	
		} 
}); // скидка работает каждый день 1 час

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
			let name = hire_employers_item[i].value;
			mainList.employers[i] = name;

			employers_value.textContent += mainList.employers[i] + ', ';
		} 
});

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],		
}

if (mainList.open = false) {
	goods_btn.disabled = true;
	budget_btn.disabled = true;
	employers_btn.disabled = true;
} 

function shopOpenCheck() {
	items_value.disabled = true;

	goods_btn.disabled = true;
	budget_btn.disabled = true;
	employers_btn.disabled = true;
};
shopOpenCheck();

function goodsCheck(selector, btn) {
	for (let i = 0; i < selector.length; i++) {
		selector[i].addEventListener('keyup', () => {
			let count = 0;

			for (let j = 0; j < selector.length; j++) {
				if (selector[j].value !== '') {
					count++;
				}
			}

			if (count >= 1 && mainList.open == true) {
				btn.disabled = false;
			} else if (count === 0 || mainList.open === false) {
				btn.disabled = true;
			}
		});
	}
}

goodsCheck(goods_item, goods_btn);
goodsCheck(hire_employers_item, employers_btn);
