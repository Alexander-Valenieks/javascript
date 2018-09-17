describe("1", function(){
	it("Возвращает ли функция тип данных true?", function() {
		assert.equal(sum(2,2), true)
	})
});
describe("2", function(){
	it("Переменная num должна равна 5?", function() {
		assert.equal(num, 5)
	})
});
describe("3.1", function(){
	it('Функция each выдает массив', function() {
        assert.typeOf(arr, 'Array')
    });
});
describe("3.2", function(){
	it('Функция each выдает такойже результат который был получен вначеле', function() {
        assert.equal([ 8, 7, 6, 5, 4 ], each(arr, myFunc))
    });
});
describe("3.3", function(){
	it('Проверяем длину (5)', function(){
        assert.lengthOf(each(arr, myFunc), 5);
    });
});