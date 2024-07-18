/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const name= "Roman";

const surname = "Korotkov";

const profession = "Engineer";

// const sentence = `Меня зовут ${name} ${surname} и я ${profession}`
const sentence = "Меня зовут "+ name+ " " + surname+"и я "+profession

console.log(sentence)