const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const color of colors){
    hexColors.push(color.hex);
    // rgbColors.push(colors)
  }
  console.log(hexColors)
 
// console.log(hexColors);
// console.log(colors);
//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 10;
// if (a === 10) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// a === 10 ? console.log('Вірно'): console.log('Невірно');

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 59;
// if (min >= 0 && min <= 15) {
//     console.log('Перша частина');
// } else if (min >15 && min <= 30) {
//     console.log('Друга частина');
// } else if (min > 30 && min <= 45) {
//     console.log('Третя частина');
// } else if (min > 45 && min <= 59) {
//     console.log('Четверта частина');
// } else {
//     console.log('Такої частини не існує');
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.



// const num = 1;
// let result;
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'літо';
//         break;
//     case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = 'Невірна пора року';
//         break;
// }
// console.log(result);

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;
// while (i <= 50) {
//   console.log(i);
//   i += 1;
// }
// i = i + 1
// i++ don't use very bad

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();

// question === "ecmascript" ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");

// 1 == "1" ? console.log("одне") : console.log("не одне");  // "одне"
// 1 === "1" ? console.log("одне") : console.log("не одне"); // "не одне"

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const globalMinutes = 70;
// const hour = 60;

// const hours = String(Math.floor(globalMinutes / hour)).padStart(2, 0);
// const minutes = String(globalMinutes % hour).padStart(2, 0);

// console.log(hours);
// console.log(minutes);

// console.log(`${hours}:${minutes}`);

// console.log(Math.ceil(1.1));  // 2
// console.log(Math.floor(1.99)); // 1

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// let total = 0;
// const min = 3;
// const max = 15;
// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {
//         continue;
//             }
//     console.log(`Парне число: ${i}`);
//     total += i;
// }
// console.log(`Результат всіх парних чисел: ${total}`);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("Введіть логін");

// if (!login) {
//     console.log("Я вас не знаю");
// } else if (login.toLowerCase() === "адмін") {
//     const password = prompt("Введіть пароль");
//     console.log(password === "Я головний" ? "Добрий день!" : "Невірний пароль!");
// } else {
//     console.log('скасовано');
// }


// const login = prompt("Введіть логін");

// if (login === "Адмін") {

//     const password = prompt("Введіть пароль");

//     if (password === "Я головний") {
//         console.log("Добрий день!");
//     } else if (password === null) {
//         console.log('скасовано');
//     } else {
//         console.log("Невірний пароль!");
//     }

// } else {
//     console.log("Я вас не знаю");
// }



//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// const userInput = Number(prompt("Введіть число"));

// while (!total) {
//     console.log(total);
//     alert(`Загальна сума введених чисел дорівнює ${total}.`);
//     total += 1;
// }


//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let number = 0;
// do {
//     number = prompt("Введіть число більше 100");
// } while (number < 100);

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcade";
// console.log(str.startsWith("a") ? "Так" : "Ні");


//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }