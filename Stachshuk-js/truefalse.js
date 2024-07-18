// Выражение 1 && Выражение 2

// Если выражение 1 ложно:

// 1. Выражение 2 игнорируется
// 2. Возвращается результат Выражение 1

// Идет поиск первого ложного значения в выражении

// Выражение 1 || Выражение 2

// Если выражение 1 истинно:

// 1. Выражение 2 игнорируется
// 2. Возвращается результат Выражение 1


// const newPost = (post, addedAt = Date()) =>({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id: 1,
//     author: 'BogdanS'
// }

// console.log(newPost(firstPost))


// const fnWithError = () => {
//     throw new Error('Some error')
// }

// try{
//     fnWithError()
// } catch (error){
//     console.error(error)
//     console.log(error.message)
// }
// console.log('Continue...')


// const userProfile = {
//     name: 'Bogdan',
//     commentQty: 23,
//     hasSignedAgreement: false
// }

// const {name, commentQty} = userProfile
// const {hasSignedAgreement} = userProfile

// console.log(name)
// console.log(commentQty)

// userProfile.name = 'Roman';

// console.log(userProfile.name)

// const fruits = ['Apple', 'Banana']

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne);
// console.log(fruitTwo)

// const userInfo  = ({name, commentQty}) =>{
//     if(!commentQty){
//             return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentQty} comments`
// }

// console.log(userInfo(userProfile))

// // const sumPositiveNumbers = (a,b) => {
// //         if (typeof a!== 'number' || typeof b !== 'number'){
// //                 return 'One of the arguments is not a number'
// //         }

// //         if (a<=0 || b<=0){
// //                 return 'Numbers are not positive'
// //         }

// //         return a+b
// // }

// // console.log(sumPositiveNumbers(2,3))

// // const month = 2

// // switch (month){
// //         case 12:
// //                 console.log('Декабрь')
// //                 break
// //         case 1:
// //                 console.log('Январь')
// //                 break
// //         case 2:
// //                 console.log('Февраль')
// //                 break
// //         default:
// //                 console.log('Это не зимний месяц')
// //         }  

// // const value = 11

// // value?console.log('Условие истинно'):console.log('Условие ложно')

// class Comment {
//         constructor(text){
//                 this.text = text
//                 this.voteQty = 0
//         }

//         upvote(){
//                 this.voteQty += 1
//         }

//         static mergeComments(first, second){
//                 return `${first} ${second}`
//         }
// }


// const firstComment = new Comment('First comment');
// console.log(firstComment)
// firstComment.upvote()
// console.log(firstComment)






// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }



// for (const key in myObject){
//     console.log(key, myObject[key])
// }

// Object.keys(myObject).forEach(key => {console.log(key, myObject[key])})

// Object.values(myObject).forEach(value => console.log(value))

// const myArray = [false,12,null, 'Rom']
// for (const key in myArray){
//     console.log(myArray[key])
// }


// const myString = 'Hey';
// for (const letter of myString){
//     console.log(letter)
// }


// for (const letter of myArray){
//     console.log(letter)
// }



// class NumbersArray extends Array{
//     sum(){
//             return this.reduce((el,acc) => acc += el,0)
//     }
// }

// const myArray = new NumbersArray(2,5,7)

// console.log(myArray)
// myArray.sum()
// console.log(myArray.sum())

// console.log(NumbersArray.prototype === myArray.__proto__)

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => console.log(json))
//       .catch(error=> console.error(error))


// const getData = (url) => 
//     new Promise((resolve, reject) =>
//             fetch(url)
//                     .then(response => response.json())
//                     .then(json => resolve(json))
//                     .catch(error => reject(error))

//     )

// getData('https://jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


// async function asyncFn(){
//     //Всегда возвращает промис
// }

// const asyncFn = async () => {
//     //Всегда возвращает промис
// }

// const AsyncFn = async () => { return 'Success!!!'}

// AsyncFn()
//     .then(value => console.log(value))


// const asyncFn = async  () =>{
//     await 
// }

// asyncFn()


// const timerPromise = () =>
//     new Promise((resolve,reject) =>
//             setTimeout(()=> resolve(),2000))

// const asyncFn = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer ended', endTime-startTime)
// }

// asyncFn()


// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }

// try{
//     const data = await getData(url)
//     console.log(data)
// }catch(error){
//     console.log(error.message)
// }