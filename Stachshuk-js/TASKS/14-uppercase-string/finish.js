/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myName = "YouKnowMyName"

function UpperCaseToConsole(name){
    let largeLetter
    if((!(name instanceof Object))&&(typeof name ==="string")){
        largeLetter = name.toUpperCase()
    }
    console.log(largeLetter)
    return largeLetter;
}

UpperCaseToConsole(myName)