/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */



const MIN = 1000;
const MAX = 1050;

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const myNumbers = [1023, 1045, 1033, 1022, 1011, 1005];

console.log("<<<Показываем в консоль начальные условния>>>");
console.log("Наш начальный массив: " + myNumbers);
console.log("Начальная длина массива: " + myNumbers.length);

const randomInt = function () {
  randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  console.log(
    "Мы сгенерировали случайное число запустив функцию randomInt(): " +
      randomNumber
  );
  return randomNumber;
};

const addNewNumber = function () {
  for (let i = 0; i < Infinity; i++) {
    randomNumber = randomInt(); // Генерируем случайное число

    let isUnique = true; // Переменная для отслеживания уникальности числа
    for (let j = 0; j < myNumbers.length; j++) {
      if (myNumbers[j] === randomNumber) {
        // Если число уже существует в массиве
        console.log(
          "Значение элемента массива " +
            myNumbers[j] +
            " равно значению случайного числа " +
            randomNumber
        );
        console.log("<<<Запускаем генерацию нового случайного числа>>>");
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      // Если число уникально
      myNumbers.push(randomNumber); // Добавляем уникальное число в массив
      console.log(
        "Добавили новое случайное число " + randomNumber + " в массив."
      );
      break; // Выходим из цикла, так как число добавлено
    }
  }
};
console.log(
  "<<<Запускаем сравнение случайного числа с массивом, и если оно не равно ни одному числу в массиве, то добавится в массив>>>"
);
addNewNumber();

console.log("<<<Новый массив>>>");
console.log(myNumbers);
console.log("<<<Новая длина массива>>>");
console.log(myNumbers.length);
