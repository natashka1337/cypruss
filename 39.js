//билет 39. взаимодействие с элементами формы черещ js
// Формы - для ввода данных
// Все формы входят в спец. коллекцию document.forms
// Поля формы в form.elements - когда форма получена
// Значения полей в .value(строка) или .checked(булево значение) для чекбоксов
// Для select важно .value и .selectedIndex
// В HTML есть два основных типа текстовых полей:
// <input type="text"> — однострочное поле (например, для имени или email).
// <textarea> — многострочное поле (например, для комментариев или длинного текста).
// 2. Подсчет символов в textarea
// Условие:
// Добавьте счетчик символов для поля "Сообщение":
// Показывайте текущее количество символов под полем.
// Если символов больше 100, выводите предупреждение красным цветом.
// 1. Как получить доступ к textarea?
//  Используй document.getElementById("message") или form.elements.message.
// 2. Как создать счетчик символов?
//  Создай элемент <div> для вывода количества символов:
// 3. Как отслеживать ввод текста?
//  Используй событие input:
// 4. Как получить длину текста?
// Свойство value.length вернет количество символов
// 5. Как обновлять счетчик?
//  В функции updateCounter выводи текст в формате Символов: 15/100:
// 6. Как изменить цвет при превышении лимита?
//  Используй условную проверку и style.color:
let textArea=document.getElementById("message");
let text=document.createElement("div");

textArea.parentNode.appendChild(text);
function CounterBom(){
    let light=textArea.value.length;
    text.textContent=`Символов ${light}/100`;
    if (light>100){
        text.style.background="red";
    }else
    text.style.background="white";

}

textArea.addEventListener("input", CounterBom);

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Счетчик символов</title>
// </head>
// <body>
//     <textarea id="message" placeholder="Введите сообщение"></textarea>
    
//     <script src="script39.js"></script>
// </body>
// </html>