//билет 40. фокусировка элементов
//эл-т получает фокс когда ползователь кликает по нему или использует клавишу таб
//существует хтмл-атрибут autofocus который устанавливает фокус на эл-т, когда страница загружается
//момент потери фокуса - blur мможет быть важнее. это момент, когда пол-ль кликает куда-то еще и нажимает таб, чтобы переключиться на следующее поле формы.
//потеря фокусы обычно означает "данные введены" и мы можем выполнить проверку веденных данныили отправить данные на сервер 
//focus  - вызываетс в момент фокусировки, а blur - когда эл-т теряет фокус 
// распиши подробно условие:
// Задача 2: Подсказка при фокусировке
// Условие:
// Создайте поле для ввода пароля (<input type="password">).
// При получении фокуса (focus) показывайте подсказку: "Пароль должен содержать минимум 6 символов".
// При потере фокуса (blur) скрывайте подсказку.
let element=document.getElementById("password");//получаем эл-т
let hint=document.getElementById("hint");//получаем эл-т

element.addEventListener("focus", function(){//срабатывает прри клике на поле 
    hint.style.display="block";//показывает эл-т
});
element.addEventListener("blur", function(){//срабытвает при клике вне поля
    hint.style.display="none";//скрывает эл-т
});
// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Подсказка для пароля</title>
//     <style>
//         .hint {
//             display: none; /* Сначала подсказка скрыта */
//             color: #666;
//             font-size: 0.8em;
//             margin-top: 5px;
//         }
//         input {
//             padding: 8px;
//             width: 200px;
//         }
//     </style>
// </head>
// <body>
//     <label for="password">Пароль:</label>
//     <input type="password" id="password" placeholder="Введите пароль">
//     <div id="hint" class="hint">Пароль должен содержать минимум 6 символов</div>

//     <script src="script40.js"></script>
// </body>
// </html>



//билет 41. события, сопутствующие обновлению данных
//событие change срабатывает по окнчании изменения эл-та 
//для инпутов это означает, что событие происходит при потере фокуса
//событие инпут срабатывает каждый раз при изменении значения 

// Задача 1: Отображение имени в реальном времени
// 1.  Получите ссылку на поле ввода с id "name" и элемент с id "output".
// 2.  Добавьте слушатель события 'input' к полю ввода "name".
// 3.  Внутри обработчика события, получайте текущее значение поля ввода "name".
// 4.  Отображайте это значение в элементе с id "output".  Например, "Привет, [имя]!".
let namy = document.getElementById("name");
let output = document.getElementById("output");

namy.addEventListener("input", function(){
    let light = namy.value;
    output.textContent = `Ваше имя: ${light}`;
});
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Отображение имени</title>
// </head>
// <body>
//     <input type="text" id="name" placeholder="Введите имя">
//     <div id="output"></div>

//     <script src="script41.js"></script>
// </body>
// </html>