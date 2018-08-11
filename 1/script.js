var first = "Ваш бюджет на месяц?";
var second = "Название вашего магазина?";

var mainList = {
	budget: null, //не понимаю почему нужно присваивать изначально значение?
	shopName: "", //почему нельзя оставить не присвоенным? 
	shopGoods: [],
	employers: {},
	open: true
}

/*проблема тут в том, что можно ввести любые данные не только числовые,
соответственно дальше при делении может получится NaN, было бы круто
както ограничить сам ввод данных*/
mainList.budget = prompt(first);
mainList.shopName = prompt(second);

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));

//alert(mainList.budget/30); - альтернатива, не знаю как правильней

let oneDayBudget = mainList.budget/30;
alert(oneDayBudget);

console.log(mainList.budget);
console.log(mainList.shopName);
console.log(mainList.shopGoods);