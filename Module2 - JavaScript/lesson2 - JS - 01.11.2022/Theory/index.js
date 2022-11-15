const savage = 21

if (savage === 21) {
  console.log("Проходной балл") // выполнится
}

const savage1 = 12

if (savage1 >= 21) {
  console.log("Проходной балл")
} else {
  console.log("Недобор баллов") // выполнится
}

const savage2 = 22

if (savage2 < 21) {
  console.log("Недобор баллов")
} else if (savage2 === 21) {
  console.log("Проходной балл")
} else {
  console.log("Перебор баллов") // выполнится
}

function faceControl(age) {
    if(age >= 18){
        console.log("wellcome")
    }
    else{
        console.log("refuse")
    }
}

console.log(faceControl(18)) // "Велкам"
console.log(faceControl(16)) // "Отказ"

function faceControl1(age) {
    if (age >= 18) {
      return "Велкам" //return прерывает операцию, можно без else
    }
    return "Отказ"
  }

  console.log(faceControl1(18)) // "Велкам"
  console.log(faceControl1(16)) // "Отказ"


  function faceControl2(age) { //Можно ограничется if
    if (age === 17) {
      return "Приходи через год"
    }
    if (age >= 18) {
      return "Велкам"
    }
    return "Отказ"
  }

  console.log(faceControl2(18)) // "Велкам"
  console.log(faceControl2(16)) // "Отказ"

  function getExcerpt(text) {
    let z = text.length + 1;
    indexStart = 0;
    indexEnd = 10;
    if (z > 10){
        return (text.substring(indexStart, indexEnd) + "...")}
    if (z <= 10) 
        {
            return(text.substring(indexStart, indexEnd))
        }
    }


console.log(getExcerpt("text"))
console.log(getExcerpt("texttexttexttext"))



// Вместо закоменчаного, ниже упрощенный код


// function isSupercentenarian(age) {
//     if (age >= 110) {
//       return true
//     } else {
//       return false
//     }
//   }


function isSupercentenarian(age) {
    return age >= 110
  }

//   function isSupercentenarian(age) {
//     return !age < 110 //Оператор обратного результата
//   }

  console.log(isSupercentenarian(45)) // false
  console.log(isSupercentenarian(102)) // false
  console.log(isSupercentenarian(113)) // true

  function canRide(height) {
    return height >= 140
}


console.log(canRide(113))
console.log(canRide(153))


console.log("Практика№27")

function evenOrOdd(number) {
    let log = number%2
    if(log === 0){
        return "Четное"
    } else{
        return "Нечетное"
    }
}
console.log(evenOrOdd(112))
console.log(evenOrOdd(153))

    