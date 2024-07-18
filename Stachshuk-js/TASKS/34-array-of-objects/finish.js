/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [{carBrand: "Toyota", price: 320000, isAvailableForSale: true},{carBrand: "Mercedes", price: 400000, isAvailableForSale: false}, {carBrand: "Mercedes", price: 520000, isAvailableForSale: true}]
console.log(cars)
cars.push({carBrand: "Jeep", price: 250000, isAvailableForSale: false})
console.log(cars)