/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь
const sumPositiveNegative = (massive) =>{
    // let positive = 0;
    // let negative = 0;
    // massive.forEach(element => element>0?positive+=element:negative+=element);
    // return {
    //     positive,
    //     negative
    // }
    return massive.reduce((sum,element)=>{
        if(element>0){
            return{
                ...sum,
                positive:sum.positive+element,
                // negative:sum.negative,
            }}else{
                return{
                ...sum,
                // positive: sum.positive,
                negative: sum.negative+element,
            }
            }
    },{positive:0,negative:0})
        
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
