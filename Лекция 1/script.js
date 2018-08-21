nextPrime: 
  for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    document.write('Делители числа ' + (i) + ': ' + '<b>' + i + '</b>' + ' и ' + '<b>' + 1 + '</b>' + '<br>')
  }