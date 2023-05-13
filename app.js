// // TASK 2

// // Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
// // Підключіть створений файл до HTML-документу.
// console.log("Blyshchyk");

// // Task 3.

// // a) оголосіть дві змінні;
// // b) запишіть у змінні будь-які значення;
// // c) виведіть на екран значення змінних;
// // d) скопіюйте значення однієї змінної в іншу;
// // e) виведіть на екран значення змінних.
// let userName;
// let adminName;
// userName = "Andrew";
// adminName = "Mike";
// alert(`User name: ${userName}; Admin name: ${adminName}`);
// userName = adminName;
// alert(`User name: ${userName}; Admin name: ${adminName}`);

// // TASK 4
// // Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

// const car = {
//   brand: "KIA",
//   manufactureYear: 2022,
//   electricCar: true,
//   batteryCapacity: undefined,
//   producingCountry: null,
// };
// console.log(typeof car.brand);
// console.log(typeof car.manufactureYear);
// console.log(typeof car.electricCar);
// console.log(typeof car.batteryCapacity);
// console.log(typeof car.producingCountry);

// // TASK 5
// // Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
// let isAdult = confirm("Are you adult?");
// console.log(isAdult);

// // TASK 6
// // В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
// //         - ваше ім’я
// //         - ваше прізвище
// //         - навчальна група
// //         - ваш рік народження.
// // Присвойте змінним відповідні значення.
// // Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
// // Визначте тип кожної змінної.
// // Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// // Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

// let name;
// let surname;
// let studyGroup;
// let birthYear;
// name = "Artem";
// surname = "Blyshchyk";
// studyGroup = "UA_1019.JSFundamentals";
// birthYear = 1993;
// const marriedStatus = confirm("Are you married?");
// console.log(typeof name);
// console.log(typeof surname);
// console.log(typeof studyGroup);
// console.log(typeof birthYear);
// console.log(typeof marriedStatus);

// console.log(birthYear);
// console.log(marriedStatus);
// console.log(name);
// console.log(surname);
// console.log(studyGroup);

// const citizenship = null;
// let cuty;
// console.log(typeof citizenship);
// console.log(typeof city);

// // TASK 7
// // За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

// const login = prompt("Write your login!");
// const email = prompt("Write your email!");
// const password = prompt("Write your password!");
// alert(`Dear User, your email is ${email}, your password is ${password}.`);

// // TASK 8 Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
// const secInHour = 60 * 60;
// const secInDate = secInHour * 24;
// const secInMonth = secInDate * 30;
// alert(
//   `Seconds in HOUR: ${secInHour}; Seconds in DATE: ${secInDate}; Seconds in MONTH: ${secInMonth}`
// );

// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створіть веб-додаток для визначення купе в плацкартному вагоні за номером квитка. Користувач вводить номер місця, вивести йому номер купе, тип місця - бічне чи ні, верхнє чи нижнє.

const place = prompt("Введіть місце в плацкартному вагоні!");

if (
  (place == 1 && place % 2 == 0) ||
  (place == 2 && place % 2 == 0) ||
  (place == 3 && place % 2 == 0) ||
  (place == 4 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 1, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 1 && place % 2 == 1) ||
  (place == 2 && place % 2 == 1) ||
  (place == 3 && place % 2 == 1) ||
  (place == 4 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 1, місце ${place}, не бічне, нижнє`);
} else if (place == 0 || place > 54) {
  alert("Такого місця у вагоні не існує");
} else if ((place == 53 && place % 2 == 0) || (place == 54 && place % 2 == 0)) {
  alert(`Номе Вашого купе 1, місце ${place}, бічне, верхнє`);
} else if ((place == 53 && place % 2 == 1) || (place == 54 && place % 2 == 1)) {
  alert(`Номе Вашого купе 1, місце ${place}, бічне, нижнє`);
}

// Друге купе
if (
  (place == 5 && place % 2 == 0) ||
  (place == 6 && place % 2 == 0) ||
  (place == 7 && place % 2 == 0) ||
  (place == 8 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 2, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 5 && place % 2 == 1) ||
  (place == 6 && place % 2 == 1) ||
  (place == 7 && place % 2 == 1) ||
  (place == 8 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 2, місце ${place}, не бічне, нижнє`);
} else if ((place == 51 && place % 2 == 0) || (place == 52 && place % 2 == 0)) {
  alert(`Номе Вашого купе 2, місце ${place}, бічне, верхнє`);
} else if ((place == 51 && place % 2 == 1) || (place == 52 && place % 2 == 1)) {
  alert(`Номе Вашого купе 2, місце ${place}, бічне, нижнє`);
}

// Третє купе
if (
  (place == 9 && place % 2 == 0) ||
  (place == 10 && place % 2 == 0) ||
  (place == 11 && place % 2 == 0) ||
  (place == 12 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 3, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 9 && place % 2 == 1) ||
  (place == 10 && place % 2 == 1) ||
  (place == 11 && place % 2 == 1) ||
  (place == 12 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 3, місце ${place}, не бічне, нижнє`);
} else if ((place == 49 && place % 2 == 0) || (place == 50 && place % 2 == 0)) {
  alert(`Номе Вашого купе 3, місце ${place}, бічне, верхнє`);
} else if ((place == 49 && place % 2 == 1) || (place == 50 && place % 2 == 1)) {
  alert(`Номе Вашого купе 3, місце ${place}, бічне, нижнє`);
}

// Четверте купе
if (
  (place == 13 && place % 2 == 0) ||
  (place == 14 && place % 2 == 0) ||
  (place == 15 && place % 2 == 0) ||
  (place == 16 && place % 2 == 0)
) {
  console.log(`Номе Вашого купе 4, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 13 && place % 2 == 1) ||
  (place == 14 && place % 2 == 1) ||
  (place == 15 && place % 2 == 1) ||
  (place == 16 && place % 2 == 1)
) {
  console.log(`Номе Вашого купе 4, місце ${place}, не бічне, нижнє`);
} else if ((place == 47 && place % 2 == 0) || (place == 48 && place % 2 == 0)) {
  console.log(`Номе Вашого купе 4, місце ${place}, бічне, верхнє`);
} else if ((place == 47 && place % 2 == 1) || (place == 48 && place % 2 == 1)) {
  console.log(`Номе Вашого купе 4, місце ${place}, бічне, нижнє`);
}

// П'яте купе
if (
  (place == 17 && place % 2 == 0) ||
  (place == 18 && place % 2 == 0) ||
  (place == 19 && place % 2 == 0) ||
  (place == 20 && place % 2 == 0)
) {
  console.log(`Номе Вашого купе 5, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 17 && place % 2 == 1) ||
  (place == 18 && place % 2 == 1) ||
  (place == 19 && place % 2 == 1) ||
  (place == 20 && place % 2 == 1)
) {
  console.log(`Номе Вашого купе 5, місце ${place}, не бічне, нижнє`);
} else if ((place == 45 && place % 2 == 0) || (place == 46 && place % 2 == 0)) {
  console.log(`Номе Вашого купе 5, місце ${place}, бічне, верхнє`);
} else if ((place == 45 && place % 2 == 1) || (place == 46 && place % 2 == 1)) {
  console.log(`Номе Вашого купе 5, місце ${place}, бічне, нижнє`);
}

// Шосте купе
if (
  (place == 21 && place % 2 == 0) ||
  (place == 22 && place % 2 == 0) ||
  (place == 23 && place % 2 == 0) ||
  (place == 24 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 6, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 21 && place % 2 == 1) ||
  (place == 22 && place % 2 == 1) ||
  (place == 23 && place % 2 == 1) ||
  (place == 24 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 6, місце ${place}, не бічне, нижнє`);
} else if ((place == 43 && place % 2 == 0) || (place == 44 && place % 2 == 0)) {
  alert(`Номе Вашого купе 6, місце ${place}, бічне, верхнє`);
} else if ((place == 43 && place % 2 == 1) || (place == 44 && place % 2 == 1)) {
  alert(`Номе Вашого купе 6, місце ${place}, бічне, нижнє`);
}

// Сьоме купе
if (
  (place == 25 && place % 2 == 0) ||
  (place == 26 && place % 2 == 0) ||
  (place == 27 && place % 2 == 0) ||
  (place == 28 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 7, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 25 && place % 2 == 1) ||
  (place == 26 && place % 2 == 1) ||
  (place == 27 && place % 2 == 1) ||
  (place == 28 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 7, місце ${place}, не бічне, нижнє`);
} else if ((place == 41 && place % 2 == 0) || (place == 42 && place % 2 == 0)) {
  alert(`Номе Вашого купе 7, місце ${place}, бічне, верхнє`);
} else if ((place == 41 && place % 2 == 1) || (place == 42 && place % 2 == 1)) {
  alert(`Номе Вашого купе 7, місце ${place}, бічне, нижнє`);
}

// Восьме купе
if (
  (place == 29 && place % 2 == 0) ||
  (place == 30 && place % 2 == 0) ||
  (place == 31 && place % 2 == 0) ||
  (place == 32 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 8, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 29 && place % 2 == 1) ||
  (place == 30 && place % 2 == 1) ||
  (place == 31 && place % 2 == 1) ||
  (place == 32 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 8, місце ${place}, не бічне, нижнє`);
} else if ((place == 39 && place % 2 == 0) || (place == 40 && place % 2 == 0)) {
  alert(`Номе Вашого купе 8, місце ${place}, бічне, верхнє`);
} else if ((place == 39 && place % 2 == 1) || (place == 40 && place % 2 == 1)) {
  alert(`Номе Вашого купе 8, місце ${place}, бічне, нижнє`);
}

// Дев'яте купе
if (
  (place == 33 && place % 2 == 0) ||
  (place == 34 && place % 2 == 0) ||
  (place == 35 && place % 2 == 0) ||
  (place == 36 && place % 2 == 0)
) {
  alert(`Номе Вашого купе 8, місце ${place}, не бічне, верхнє`);
} else if (
  (place == 33 && place % 2 == 1) ||
  (place == 34 && place % 2 == 1) ||
  (place == 35 && place % 2 == 1) ||
  (place == 36 && place % 2 == 1)
) {
  alert(`Номе Вашого купе 8, місце ${place}, не бічне, нижнє`);
} else if ((place == 37 && place % 2 == 0) || (place == 38 && place % 2 == 0)) {
  alert(`Номе Вашого купе 8, місце ${place}, бічне, верхнє`);
} else if ((place == 37 && place % 2 == 1) || (place == 38 && place % 2 == 1)) {
  alert(`Номе Вашого купе 8, місце ${place}, бічне, нижнє`);
}
