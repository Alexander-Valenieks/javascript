$(document).ready(function() {
//Выбрать тур
	$('.main_btna').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});
//Получить консультацию
	$('.main_btn').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});
//Список туров
	$('li:nth-child(2)').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});

});