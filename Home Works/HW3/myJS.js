// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let first = 1;
// let ten = 10;
// let minus = -999;
// let pass = 123;
// let pNumber = 3.14;
// let point = 2.17;
// let age = 16;
// let b1 = true;
// let b2 = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello,owu,com,ua,first,ten,minus,pass,pNumber,point,age,b1,b2);
// alert (hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(first);
// alert(ten);
// alert(minus);
// alert(pass);
// alert(pNumber);
// alert(point);
// alert(age);
// alert(b1);
// alert(b2);
// document.write(hello, owu, com, ua, first, ten, minus, pass, pNumber, point, age, b1, b2);

// Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// hello = 'welcome';
// owu = 'superb';
// com = 'gmail';
// ua = 'en';
// first = 1000000;
// ten = 100;
// minus = -3;
// pass = 321;
// pNumber = 3.1415;
// point = 21.7;
// age = 24;
// b1 = false;
// b2 = true;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello,owu,com,ua,first,ten,minus,pass,pNumber,point,age,b1,b2);
// alert (hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(first);
// alert(ten);
// alert(minus);
// alert(pass);
// alert(pNumber);
// alert(point);
// alert(age);
// alert(b1);
// alert(b2);
// document.write(hello, owu, com, ua, first, ten, minus, pass, pNumber, point, age, b1, b2);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// const myName = prompt("yourName");
// const myLastName = prompt("yourLastName");
// let myAge = prompt("yourAge");

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// alert("Вітаю " + myName + myLastName+ ".Тобі" + myAge + "років");

// Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// aboutMe = myName + myLastName + myAge;
// console.log(aboutMe);

// За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let first = prompt("give first number");
// let second = prompt("give second number");
// let  third = prompt("give third number");
// allNumbers = Number(first + second + third);
// console.log(allNumbers);

// За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt. Додати їх всі мож собою і результат вивести в консоль.
// let first = parseInt(prompt("give first number"));
// let second = parseInt(prompt("give second number"));
// let  third = parseInt(prompt("give third number"));
// let  fourth = parseInt(prompt("give fourth number"));
// let  result = (first + second + third + fourth);
// console.log(result);

// За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let first = parseFloat(prompt("give first number"));
// let second = parseFloat(prompt("give second number"));
// let third = parseFloat(prompt("give third number"));
// let result = (first + second + third);
// console.log(result);

// За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let first = parseFloat(prompt("give first number"));
// let second = parseFloat(prompt("give second number"));
// let third = parseFloat(prompt("give third number"));
// let result = (first + second + third);
// let result2 = Math.round(result);
// console.log(result2);

// За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// let first = prompt("give first number");
// let second = prompt("give second number");
// let third = Math.pow(+first, +second);
// console.log(third);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
let a1 = 5 < 6;
let a2 = 5 === 6;
let a3 = 5 >= 6;
let a4 = 5 > 6;
let a5 = 10 === 10;
let a6 = 10 >= 10;
let a7 = 10 !== 10;
let a8 = 10 > 10;
let a9 = 10 < 10;
let a10 = 123 === '123';
let a11 = 123 !== '123';
console.log(a10);
