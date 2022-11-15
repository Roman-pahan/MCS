function sum(x, y) {
    return x + y
  }

console.log(sum(2,5))

function sum1(a,b){
    return a+b
}

console.log(sum1(2,12))

function multiply(a, b) {
    return(a*b)
}

console.log(multiply(3,12))
 
let text = "JavaScript"
console.log(text.length)
console.log(text.toLowerCase())
console.log(text.toUpperCase())


function getCharCount(str) {
    return str.length
}

console.log(getCharCount("Moldova"))

function shoutMyName(name) {
    return name.toUpperCase()
}

console.log(shoutMyName("Moldova"))

function lowKey(name1) {
    return name1.toLowerCase()
}

console.log(lowKey("Moldova"))

lang = "Moldova"

console.log(lang[3])
console.log(lang[lang.length-1]) //динамическая строка



function getFirstChar(name2) {
    return name2[0]
}

function getLastChar(name3) {
    return name3[name3.length-1]
}

console.log(getFirstChar("Роман"))
console.log(getLastChar("Роман"))

let indexStart = 3
let indexEnd = 8

function getName(name4){    
    return name4.substring(indexStart, indexEnd)
}

console.log(getName("HHHRomanHHH"))


let indexStart1 = 1
// let indexEnd1 = 20


function skipFirstChar(text) {
    return text.substring(indexStart1)
}

console.log(skipFirstChar("Roman - голый Король"))


function getFirstTen(text) {
    let indexStart = 0;
    let indexEnd = 10;
    console.log(text.substring(indexStart, indexEnd)); // введите что-нибудь в браузере и проверьте консоль
  }
  
  getFirstTen("RomanRomanRoman")


let first = "Gleb"		
let second = "Kostin"		
let name1 = first + " " + second
console.log(name1)

let name3 = "Gleb"			
name3 += " Kostin"
console.log(name3)



function dateConcat(day, month) {
    console.log(day+" "+month);
}

dateConcat(26, "февраля")


getExcerpt("texttexttexttexttexttexttexttexttexttexttexttext")

function getExcerpt(text) {
    let indexStart = 0;
    let indexEnd = 10;
    console.log(text.substring(indexStart, indexEnd)+"..."); 
}

let multiline = `Это одна шаблонная строка длиной в ${1+2} строчки`
console.log(multiline)
let language = "JavaScript"
let x = `Я учу ${language}`
console.log(x)


function sayHello(name5) {
    return `Привет ${name5}`
}



function getFullName(first, last) {
    return `${first} ${last}`
}

console.log(getFullName("Roman", "Korotkov"))


function spaceOdysseyTagline() {
    return `An epic drama of adventure and exploration`
}

console.log(spaceOdysseyTagline())

function renderTableRow(label, value) {
    return `<tr>
    <td>${label}</td> 
    <td>${value}</td> 
  </tr>`
  }

function getCapitalized(word) {    
    return(word[0].toUpperCase() + word.substring(1,(word.length-1)).toLowerCase())
}

console.log(getCapitalized("RoFGJEWfeewlkfjwe"))



function paradise(solo){
    return solo.toString()
}

console.log(paradise("322"))



function intoString(number) {
    return number.toString()
}

console.log(intoString(376006))

let satan = "666"
Number.parseInt(satan, 10) // 666


function getNextAge(age) {
    return Number.parseInt(age, 10);
 }
  
console.log(getNextAge("12"))

function getRemainder(number, divider) {
    return number%divider
}

console.log(getRemainder(10, 3)) // 1

let artist = "Boulevard Depo"
console.log(artist)

count = 0
count++
console.log(count)
const stableCoin = "$1";
console.log(stableCoin)


