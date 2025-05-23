//билет 13. основные циклические конструкции
//циклы позволяют многократно повторить определенный блок кода, пока выполняется заданное условие
//for - цикл со счетчиком
//while - цикл с предусловием
// do...while - цикл с постусловием
//существует конструкции, которые используюися в массивах и объектах
//for...of - перебирает эл-ты массива
//for...in - перебирает сво-ва объектов
//"встроенное" объявление переменной - значит, что переменная счетчика i должна быть объявлена пряма в цикле, она существует только внутри цикла 
//обычно цикл завершается если условие равно фолс, но мы можем выти из цикла в любой момент  с помощью директивы - break
const users = [
  { name: "Андрей", age: 25, isActive: true, skills: ["JavaScript", "HTML", "CSS"] },
  { name: "Мария", age: 30, isActive: false, skills: ["Python"] },
  { name: "Иван", age: 22, isActive: true, skills: ["Java"] },
  { name: "Ольга", age: 28, isActive: true, skills: ["JavaScript", "React"] },
  { name: "Сергей", age: 35, isActive: false, skills: ["C++", "Разработчик игр"] }
];// создали массив пол-лей
console.log("Активные пользователи:");
for (const user of users) {
  if (user.isActive) {
    console.log(user.name);
  }
}//вывели активный пол-лей, тех у кого статус активности = тру, то есть, грубо говоря, пробегаем по юзерам из массива пол-лей, если статуст активности юзера равен тру, то выводим имя юзера
console.log("Свойства пользователей:");
for (const user of users) {
  for (const prop in user) {
    console.log(`${prop}: ${user[prop]}`);
  }
}//пробегаем по массиву пользователей, выводим информацию полную о каждом из пол-лей 

let maxAge = 0;
let oldestUser = "";
for (let i = 0; i < users.length; i++) {
  if (users[i].age > maxAge) {
    maxAge = users[i].age;
    oldestUser = users[i].name;
  }//создаем переменную в которую будем записывать максимальный возраст пол-ля и переменную в которой будет хранится его имя 
  //далее берем возраст первого юзера, если он больше максимального, то перезаписываем значение перемеенной, т.е. сохраняем в нее значение этоого возраста
  //вл вторую переменную мы передаем им этого пол-ля, берем из массива
  //продолжаем до трех пор, пока не пробежимя по всем пол-лям массива
}
console.log(`Самый старший пользователь: ${oldestUser}, возраст: ${maxAge}`);//вывели пол-ля с максимальным возрастом

let totalSkills = 0;
let index = 0;
while (index < users.length) {
  totalSkills += users[index].skills.length;
  index++;
}//создаем переменную, в котороц будем считает общее кол-во всех навыков
//если индекс меньше длины массива с пол-ми, то мы в переменную тоталскилл(общее коли-во скиллов) присваиваем новое значение, которое равно длине объектов в скиллах каждого поль-ля
//увиличваем значение индекса, то есть перерходим на следующее значение
console.log(`\nОбщее количество навыков: ${totalSkills}`);


//билет 14. оператор выбора
//используется кода нужно сравнить одно значение с несколькими возможными вариантми, удобнее чем if...else, если у нас много вариантов
//блок case - может быть несколько и является обя-м блоком.
//блок default - необязательный блок
//если у нас нет break, то выполнение поцдет ниже по следующим case, при этом остальные проверки игнорируются
//если существует несколько вариантов case, у который один и тот же код, то можно их сгруппировать
// const grade =+prompt('Введите оценку');//запрашиваем у пол-ля оценку
let description;//переменная, которая по оценку будет выводить описание
if (isNaN(grade)) {
    console.log("Введите число")//если пол-ль ввел не число, то сообщаем об этом
} else { //в обратном случае начинаем использование конструкции switch
switch (grade) {
  case 5://если оценка равно пяти, то выводим "отлично"
    description = "Отлично";
    break;
  case 4:
    description = "Хорошо"; //если оценка равно 4, то выводим "хорошо"
    break;
  case 3:
    description = "Удовлетворительно"; //если равно трем, то выводим "удовлетворительно"
    break;
  case 2://если оценка равно 1 или 2, то выводим "неудовлетворительно" для 2 и плохо для 1 (тернарный оператор)
  case 1:
    description = grade === 2 ? "Неудовлетворительно" : "Плохо";//сразу для двух оценок (1 и 2)
    break;
  default: //во всех остальных случаех просим ввести оценку корректно
    description = "Введите оценку от 1 до 5";//когда ввели другое число 
}
console.log(`Оценка: ${grade}`);//выводим оценку
console.log(`Описание: ${description}`);//выводим если число
}

