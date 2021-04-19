// let arr = [12, 54, 21, 45, 1, 5, 7, 3, 122, 444, 654, 1000, 6, 4, 99, 13, 34, 71, 2, 100]
// let str = ['Andrii', 'Ksenia', 'Ivan', 'Iryna', 'Max', 'Petro', 'Tanya', 'Vova', 'Galyna', 'Semen']
// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
// let arr1 = arr.sort((a, b) => a - b);
//
//     b) відсортувати його від більшого до меншого.
// let arr1 = arr.sort((a, b) => b - a);
//
//     c) Відфілтрувати числа які є кратними 3.
// let arr1 = arr.filter((numbers) => numbers % 3 === 0);
//
// d) Відфілтрувати числа які є більшими за 10.
// let arr1 = arr.filter((numbers) => numbers > 10);
//
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let arr1 = arr.filter((number) => {
//     document.write(' ' + number)
// });
//
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arr1 = arr.map((number) => number * 3);
//
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arr1 = arr.reduce((number, number1) => number + number1);
// console.log(arr1);


// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// let str1 = str.sort()
//
// b) Відсортувати в зворотньому порядку
// let str1 = str.sort((a, b) => {
//    if(a < b){
//        return 1
//    }
//        return -1
// })
//
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let str1 = str.filter(string => string.length > 4)
//
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let str1 = str.map(str => 'Sam says ' + str)
// console.log(str1)

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// const ageSort = users.sort((a, b) => a.age - b.age)
// console.log(ageSort);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const ageSort = users.sort((a, b) => a.name.length - b.name.length)
// console.log(ageSort);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// const newArr = users.map((a, b) => ({...a, id: b + 1}))
// // console.log(users);
// // console.log(newArr)
// const newUsers = newArr.sort((a, b) => b.id - a.id)
// console.log(newUsers);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// const upUsers = users.reduce((acc, value )=>{
//     if(value.isMarried === true){
//         value.house = true
//         acc.push(value)
//     }
// return acc
// },[])
//
// console.log(upUsers)
