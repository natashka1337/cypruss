//билет 26. объекты. методы объектов, ключевое слово this, конструктор
//Длч доступа к информации внутри объекта метод может использовать ключевое слово this
// Значение this - объект "перед точкой", который использовался для вызова метода
// Конструктор — это функция, которая создаёт новые объекты по заданному шаблону.Представьте, что конструктор — это формочка для печенья, а объекты — это готовое печенье с одинаковой формой, но разными параметрами (например, цветом или вкусом).
//метод toString/valueOf - способ реализации преобразование объекто в примитивы (текстовые, числовые или default)
// Часть 1: Создание объекта пользователя
// Создайте функцию-конструктор User, которая принимает: login (логин) cartItems (массив товаров в корзине, по умолчанию []).
//Добавьте методы: addToCart(item) — добавляет товар в корзину. clearCart() — очищает корзину. getCartInfo() — возвращает строку: "Пользователь [логин], товаров в корзине: [количество]".


function User(login, cartItems = []) {
  this.login = login;
  this.cartItems = cartItems;//функция конструктор с пол-лем
  
  this.addToCart = function(item) {
    this.cartItems.push(item);
    console.log(`Товар "${item}" добавлен в корзину пользователя ${this.login}`);
  };//добавление товара в корзину
  
  this.clearCart = function() {
    this.cartItems = [];
    console.log(`Корзина пользователя ${this.login} очищена`);
  };//очищаем корзину
  
  this.getCartInfo = function() {
    return `Пользователь ${this.login}, товаров в корзине: ${this.cartItems.length}`;
  };//получаем информации о корзине
}

const user1 = new User("Лиза");
user1.addToCart("телефон");
user1.addToCart("ноутбук");
console.log(user1.getCartInfo()); //добавляем в корзину товар телефон и ноутбук, выводим: Пользователь Лиза, товаров в корзине - 2

user1.clearCart();//очищаем корзину и сообщаем об этои
console.log(user1.getCartInfo()); //выводм: Пользователь Лиза, товаров в корзине - 0 

const user2 = new User("Наташа", ["ручка", "карандаш"]);
console.log(user2.getCartInfo()); // выводим: пользователь Наташа, товаров в корзине - 2

//билет 27. формат json
//JSON - общий формат для представления значений и объектов. Допусти есть сложный объект и его нужно преобразовать в строку. Для ее представления используется формат JSON
//stringify - преобразование объектов в json
//parse - преобразование обратно в объект
//json подддерживает след. форматы: объекты, массивы, примитивы: строки, числа, лог. знач (true/false), null
//Является независимой от языка спецификацией для данных, поэтому stringify пропускает некоторые специфические св-ва объектов, а именно: свойства-функции(методы), свойства, содержащие undefined
// value (обязательный) — что преобразовываем (объект, массив, число и т.д.). replacer (необязательный) — фильтрует или изменяет свойства перед преобразованием. space (необязательный) — добавляет отступы для красивого форматирования.


//преобразование объекта book с обработкой свойств
const book = {
    title: "JavaScript",
    year: new Date("2020-01-01"),
    secretCode: "qwerty"
};

let json = JSON.stringify(book, (key, value) => {
    if (key === "secretCode") return undefined; //удаляем secretCode
    if (key === "year" && value instanceof Date) {
        return value.getFullYear();
     } // преобразуем Date в год
    return value;
}, 2);

console.log(json);//вывод jsom

let person = {
    name: "Иван",
    age: 30,
    city: "Москва"
};

let jsonString = JSON.stringify(person); // преобразуем объект в строку JSON
console.log("JSON строка:", jsonString); 
// вывод: JSON строка: {"name":"Иван","age":30,"city":"Москва"}

let jsonObject = JSON.parse(jsonString); // преобразуем строку JSON обратно в объект
console.log("Объект:", jsonObject); 
// вывод: Объект: { name: 'Иван', age: 30, city: 'Москва' }

console.log("Имя:", jsonObject.name); // вывод: Имя: Иван
console.log("Возраст:", jsonObject.age); // вывод: Возраст: 30

let pers = {
  name: "bd"
};
let persO = JSON.stringify(pers);
console.log(persO); // вывод: {"name":"bd"}