//!     5.7

//    Задание 8    Создать произвольный массив где значения ключ — Х, значение — Y  

const myMap = new Map([
    ['дверь', 'door'],
    ['стол', 'table'],
    ['еда', 'food']  
])
myMap.forEach((value, key) => {
    console.log(`слово ${key} - перевод ${value}`)
})