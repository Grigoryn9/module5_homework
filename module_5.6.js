//!   5.6

//Задание 6         Проверить одинаковые ли элементы

// const arr = [1, 2, NaN, "5", 1, "Привет", 1, 20, "5", 20, NaN]

// for (let i = 0; i < arr.length - 1; i++) {
//     if(arr[i] === arr[i + 1]) {
//         console.log('true')
//     }else {
//         console.log('false')
//     }
// }


//   Задание 7        Посчитать кол-во цифр, четных, нечетных и нулей

let arr = [30, 35, 40, 5, 67, undefined, 0, 10, 15, 20, 25,  45, 50, 8, 0, 3, null, 2]

   let numberSum = 0
   let sumOdd = 0
   let sumPar = 0
   let zeroSum = 0 


for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || isNaN(arr[i])) {
        numberSum++
            if (arr[i] === 0) {
                zeroSum++
        }  else if (arr[i] % 2 === 0) {
            sumPar++
        } else {
            sumOdd++
        }
    } 
}
  
console.log(`В массиве: ${numberSum} цифр, ${zeroSum} нулей, ${sumPar} чётных, ${sumOdd} нечётных!`)