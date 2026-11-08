//Написать функцию createCounter, которая при вызове создает функцию, изменяющую локальную переменную count, к которой нет доступа вне функции. 
// То есть мы не можем получить доступ к самой count. Также при вызове созданной функции необходимо выводить в консоль значение локальной переменной.

function createCounter() {

  return function () {
  }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2
