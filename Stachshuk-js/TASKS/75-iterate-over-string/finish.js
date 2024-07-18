/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
let amountOfIter = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
//  function countMatch(letters, sentence){
//    return letters.reduce((acc, letter) => {
//         for (let i=0; i < sentence.length; i++){
//             if(sentence[i] === letter){
//                 acc+=1
//             }
//         }
//         return vowelsCount = acc;
//     },0)
// }

// countMatch(vowels,str);

str.split("").forEach((char)=>{
    amountOfIter+=1;
    console.log(`Итерация №: ${amountOfIter}`)
    if (vowels.includes(char)){
        vowelsCount +=1;
    }
})

console.log(str.length)
console.log(vowelsCount)
// 9
