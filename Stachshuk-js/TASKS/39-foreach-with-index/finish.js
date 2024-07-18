/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

// const cityInfo = (cities) =>{
//     cities.forEach((city,index) => {
//        return console.log(`${city} is at the index ${index} in the myCities array`) 
//     }); 
// } 

// cityInfo(myCities)

const cityInfo = ({city,index}) =>
    `${city} is at the index ${index} in the myCities array`

myCities.forEach((city,index)=>console.log(cityInfo({city,index})))