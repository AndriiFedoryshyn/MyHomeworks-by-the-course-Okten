// 1) створити функцію яка приймає масив та виводить його
// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію
// function newFunction() {
//     for (const value of arguments) {
//
//     }
//     return arguments
// }
// let arr = newFunction(20, 30, 50, 60, 100, 30, );
// console.log(arr);

// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function newFunction1(first, second, third) {
//     if (first => second && second <= third)
//         return second
//     else if (first <= third && first <= third)
//         return first
//     else
//         return third
// }
//
// let number = newFunction1(150, 200, 100)
// console.log(number)


// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function newFunction2(first, second, third) {
//     let maxNumber = first;
//     third < second ? maxNumber = second : maxNumber = third;
//     maxNumber < third ? maxNumber = third : "?";
//     return maxNumber
// }
//  let myNumber = newFunction2(100, 21100, 31100)
// console.log(myNumber)


// створити функцію яка повертає найбільше число з масиву
// function maxFunction(){
//     let max = arguments[0];
//     for (const max1 of arguments) {
//         if (max1 > max ) max = max1;
//     }return max
// }
// const myMaxNumber = maxFunction( 23, 24, 76)
// console.log(myMaxNumber);

// створити функцію яка повертає найменьше число з масиву\
// function minFunction(){
//     let min = arguments[0];
//     for (const minElement of arguments) {
//         if (minElement < min) min = minElement;
//     }return min
// }
// const myMinNumber = minFunction(76, 87 ,90)
// console.log(myMinNumber);

//                                    ??????????
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function newFunction() {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum += argument
//     }
//     return sum
// }
//
// let sum1 = newFunction(23, 43, 56)
// console.log(sum1)


// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function newFunction() {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum += argument
//     }
//     console.log(sum / arguments.length)
//     return sum
// }
// newFunction(23, 43, 54)


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function myArr(MyArr) {
//     let myKey = [];
//     for (const arr of MyArr) {
//         for (let key in arr) {
//             myKey.push(key)
//         }
//     }
//     return myKey
// }
//
// let Keys = myArr([{name: `Andri`, age: 24, car: false}, {name: `Ivan`, age: 30 , car: true},{name:`Max`, age:25, girl: true}])
// console.log(Keys);

//                                ??????????????????
// // Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function myArr(arr) {
//     let myValue = [];
//     for (const valueArr  of arr) {
//         for (const values in valueArr.value){
//             myValue.push(values)
//         }
//             }
//     return myValue
// }
// let Keys = myArr([{name: `Andri`, age: 24, car: false}, {name: `Ivan`, age: 30, car: true}, {
//     name: `Max`,
//     age: 25,
//     girl: true
// }])
// console.log(Keys);


// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sumFunction(arr1, arr2){
//     let sum = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sum.push(arr1[i] + arr2[i]);
//     }return sum
// }
//
// const result =sumFunction([1, 2, 3, 4],  [3, 4, 5, 6])
// console.log(result);


// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function myNewFunction(arr, numberI) {
//     if (numberI < arr.length) {
//         let num = arr[numberI]
//         arr[numberI] = arr[numberI + 1]
//         arr[numberI+1] = num
//         return arr
//     }
// }
// const number = myNewFunction([1, 3, 5, 7, 9], 2)
// console.log(number);


// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function norm(arr){
//     let name1 = []
//     let name = arr.split(' ')
//     for (let nameElement of name) {
//         if( nameElement > ' '){
//             name1.push(nameElement)
//         }
//     }
//     return name1.join(" ")
// }
// let a = norm(n1)
// document.write(a)
// console.log(a)