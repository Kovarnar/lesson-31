// Мінімум

//1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
// підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// передбач можливість введення невірних даних.
let userAge = +prompt('Скільки тобі років?');
if (userAge < 0) {
    console.log('Не може бути!');
} else if (userAge < 12) {
    console.log('Дитинча');
} else if (userAge < 18) {
    console.log('Сигарети тобі не продадуть');
} else if (userAge < 60) {
    console.log('Винце чекає на тебе');
} else if (userAge <= 100) {
    console.log('Час в навколосвітню подорож');
}else if (userAge > 100) {
    console.log('Забагато, не вірю)');
} else  {
    console.log('Це не серйозно :)');
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let userNum = +prompt('введи число від 0 до 9');
switch (userNum) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log(')');
        break;
    default:
        console.log('Трішки не те, спробуй ще ;)');
}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let firstNumber = num_1 = prompt('Введіть перше число з діапазону');
let lastNumber = num_2 = prompt('Введіть останнє число з діапазону');
let sumNum = 0;
if (!isFinite(firstNumber) || !isFinite(lastNumber)) {
    console.log('Сталася прикра помилка');
} else if (firstNumber === null || lastNumber === null) {
    console.log('так не працює');
} else {
    if (firstNumber == '' || lastNumber == '') {
        console.log('Завдання ввести дві цифри!');
    } else if (firstNumber === lastNumber) {
        console.log(`Сума з діапазону від ${num_1} до ${num_2} становить: ${+firstNumber}`)
    } else if (firstNumber > lastNumber) {
        for (lastNumber; lastNumber <= firstNumber; lastNumber++) {
            sumNum += +lastNumber;
        }
        console.log(`Сума з діапазону від ${num_2} до ${num_1} cтановить: ${sumNum}`);
    } else if (lastNumber > firstNumber) {
        for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
            sumNum += +firstNumber;
        }
        console.log(`Сума з діапазону від ${num_1} до ${num_2} становить: ${sumNum}`);
    }
}

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
alert('Введіть 2 числа для визначення найбільшого спільного дільника');
let z = a = +prompt('Введіть перше число');
let y = b = +prompt('Введіть друге число');
let gcd;
while (a != b) {
    (a > b) ? a = a - b : b = b - a;
}
gcd = a;
console.log(`Найбільший спільний дільник чисел ${z} та ${y} - це ${a}`);

// 5. Запитай у користувача число і виведи всі дільники цього числа.
let userNumber = +prompt('Введи число');
if (isNaN(userNumber)) {
    console.log('Не балуйся');
} else { 
    for(let i = 1; i <= userNumber; i++) {
        if (userNumber % i == 0) {
            console.log(`Дільником числа ${userNumber} є ${i}`);
        }
    }
}


// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let num = prompt('Введіть п’ятирозрядне число');
if (num === '') {
    console.log('пропускаєм...');
} else if (num === null) {
    console.log('халтурити не можна)')
} else if (num.length !== 5) {
    console.log('не воно)');
} else {
    if (!isFinite(num)) {
        console.log('ох, уж эти шуточки...')
    } else
    if (num[0] === num[4] && num[1] === num[3]) {
        console.log(`число ${num} є паліндромом`);
    } else console.log(`число ${num} HE паліндром`);
}

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      - від 200 до 300 - знижка буде 3%; 
//      - від 300 до 500 - 5%;
//      - від 500 і вище - 7%.
let sumPurchase = +prompt('Введіть суму покупки');
if (sumPurchase <= 0) {
    console.log('акцією і не пахне')
} else if ( sumPurchase < 200) {
    console.log(`Знижки немає`);
} else if (sumPurchase < 300) {
    console.log(`Сума до сплати зі знижкою в 3 % буде: ${(sumPurchase * 0.97).toFixed(2)}`);
} else if (sumPurchase < 500) {
    console.log(`Сума до сплати зі знижкою в 5 % буде: ${(sumPurchase * 0.95).toFixed(2)}`);
} else if (sumPurchase >= 500 ) {
    console.log(`Сума до сплати зі знижкою в 7 % буде: ${(sumPurchase * 0.93).toFixed(2)}`);
} else console.log('Баловство!)')

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let numbers;
let zero = 0;
let positiveNum = 0;
let negativeNum = 0;
let evenNumber = 0;
let oddNumber = 0;
let lines = 0;
let cansel = 0;

for (let i = 1; i <= 10; i++) {
    numbers = prompt(`Введіть ${i}e число с 10 чисел`);
    if (numbers) {
        if (isFinite(numbers)) {
            if (numbers > 0) {
                positiveNum++;
            } else if (numbers < 0) {
                negativeNum++;
            } else zero++;
            if (numbers % 2) {
                oddNumber++;
            } else evenNumber++;
        } else {
            lines++;
            
        }
    } else {
        cansel++;
    }
}
if (cansel > 0) console.log(`Відміна натиснуто ${cansel} раз`);
if (lines > 0) console.log(`Текст введено ${lines} раз`);
if (zero > 0)console.log(`Нулів введено ${zero} шт.`);
if (positiveNum > 0) console.log(`Додатніх чисел введено ${positiveNum} шт.`);
if (negativeNum > 0) console.log(`Відємних чисел введено ${negativeNum} шт.`);
if (oddNumber > 0) console.log(`Непарних чисел введено ${oddNumber} шт.`);
if (evenNumber > 0) console.log(`Парних чисел введено ${evenNumber} шт.`);

// 4. Зацикли відображення днів тижня таким чином: «День тижня. 
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function showDay (x) {
    switch (x) {
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;
    }
}
let today = new Date();
let weekday = +today.getUTCDay();
showDay(weekday);
while (confirm('Показати наступний день тижня?')) {
    weekday++;
    if (weekday > 7) weekday = 1;
    showDay(weekday);
}

// Максимум

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, 
// поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
let n = +prompt(`Введіть число від 0 до 100`);
console.log(`Введено число ${n}`);
let x = 50;
if (isNaN(n) || 0 > n || n > 100) {
    alert('Помилка вводу');
}  else if (n === 0) {
    alert(`Ваше число: 0`);
} else if (n === 100) {
    alert(`Ваше число: 100`);
} else {
    while (x > 0) {
        if (confirm(`Ваше число: ${x}?`)) {
            if(n === x) {
                alert(`Так, це ${x}`);
                break;
            } else {
                alert('Щось пішло не так!');
                break;
            }
        } else {
            if (confirm(`Ваше число > ${x}?`)) {
                x = Math.ceil(x * 1.1);
                console.log(x);
            } else {
                x = Math.ceil(x / 2);
                console.log(x);
            }
        }
    }
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. 
// Кожне число необхідно помножити на числа від 1 до 10.
for (i = 2; i < 10; i++) {
    for (j = 1; j < 11; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
let _year = prompt('Введіть рік'),
    _month = prompt('Введіть місяць'),
    _day = prompt('Введіть день');
    if (_month > 0 && _month < 13) {
        _month--;
    }
    _day++;
let _nextDay = new Date(_year, _month, _day);
console.log(_nextDay);

while (confirm('Вирахувати наступну дату?')) {
    alert('Вам потрібно ввести дату, а саме: день, місяць та рік. Наприклад: 05.09.2022');
    let day = +prompt('Введіть день');
    let month = +prompt('Введіть місяць');
    let year = +prompt('Введіть рік');
    console.log(`Введена дата: ${day}.${month}.${year}`);
    if (day >=1 && day <= 31 && month >=0 && month <=12 && month != 2 ) {
        if (day == 31 && month == 12) {
            year += 1;
            month = 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 31 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 30 && (month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if ((day <= 29) && (month == 4 || month == 6 || month == 9 || month == 11)) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Такої дати немає або помилка вводу');
        }
    } else if (day >=1 && day <= 28 && month == 2 && (((year % 100 == 0) && (year % 400 !=0)) || year % 4 != 0)) {
        if ((day == 28) && month == 2)  {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day < 28 && day != 29 && day != 30 && day != 31 && month == 2) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Такої дати немає або помилка вводу');
        }
    } else if (day >=1 && day <= 29 && month == 2 && (year % 4 == 0)) {
        if (day == 29) {
            month += 1;
            day = 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else if (day <= 28) {
            day += 1;
            console.log(`Наступна дата: ${day}.${month}.${year}`);
        } else {
            console.log('Такої дати немає або помилка вводу');
        }
    } else {
        console.log('Такої дати немає або помилка вводу');
    }
}