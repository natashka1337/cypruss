//билет 11. условный оператор
//первый блок выполняется если условие истинно, в круглых скобках указывается условие, если условие ложно, то выполняется то условие,что находится в блоке else
//в фигурных скобках размещается блок команд, которые выполняются при истинности условия
// let age =+(prompt("Введите ваш возраст:"));
if (isNaN(age)) {
    console.log("Введите число");
} else {
    if (age < 0) {
        console.log("Возраст не может быть отрицательным!");
    } else if (age <= 14) {
        console.log("Ребенок");
    } else if (age <= 18) {
        console.log("Подросток");
    } else if (age <= 63) {
        console.log("Взрослый");
    } else {
        console.log("Пенсионер");
    }
}
// смысл задачи - по возрасту вывести к какой категории относится человек

//билет 12. тернарный оператор
//это упрощенная форма условного оператор, у него три операнда
//1 операнд - условие, которое проверяется при вычислении с тернарным оператором, далее ставим знак вопроса
//2 операнд - значение, которое возвращается результатом выражение, если условие истинно, далее ставим двоеточие
//3 операнд - значение возвращается если условие ложно 
// const age = +(prompt("Введите ваш возраст:"));
let ticket;
if (isNaN(age)) {
    ticket = "Введите число!";
} else {
    ticket = age < 18 ? "Детский билет" : age <= 63 ? "Взрослый билет" : "Пенсионерский билет";
}

console.log(ticket);
// смысл задачи - с помощью тернарного оператора считаем какой билет будет у пол-ля по его возрасту