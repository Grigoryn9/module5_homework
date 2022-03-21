//!    5.4


//   Задание 3      Текст наоборот

const text = "Hello"
const reverseText = text.split("").reverse().join("")
console.log(reverseText)


//  Задание  4      Случайное число от 0 до 100

function randomNumberInRange(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumberInRange(0 , 100))