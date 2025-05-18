//билет 38. события клавиатуры
// Конспект: События клавиатуры в JavaScript
// 1. Зачем нужны события клавиатуры?
// События клавиатуры используются для обработки взаимодействия пользователя с клавиатурой, включая:
// Реакцию на нажатие стрелочных клавиш (Up, Down и т.д.)
// Обработку горячих клавиш и комбинаций клавиш.
// 2. Основные события
// keydown: Событие, которое происходит при нажатии клавиши.
// keyup: Событие, которое происходит при отпускании клавиши.
// 3. Свойства события
// event.key: Возвращает символ, соответствующий нажатой клавише. Может различаться в зависимости от состояния клавиши Shift (например, 'z' и 'Z').
// event.code: Возвращает физический код клавиши, который не зависит от состояния клавиши. Например, для клавиши Z код всегда будет 'KeyZ'.

// 3. Изменение заголовка страницы по нажатию клавиши
// Цель: При нажатии определенной клавиши (например, 'H'), изменить текст главного заголовка страницы (<h1>) на новый текст.
// Действия:
//     1.  Добавьте слушателя событий keydown к document.
//     2.  Внутри обработчика события проверьте, нажата ли нужная клавиша (например, event.key === 'H').
//     3.  Если клавиша совпадает, измените текст элемента с id="pageTitle" на новый текст (например, "Заголовок изменен!")
document.addEventListener("DOMContentLoaded", function () {
  const pageTitle = document.getElementById("pageTitle");
  function changeTitle(newText) {
    pageTitle.textContent = newText;
    pageTitle.classList.add("highlighted");
    setTimeout(() => pageTitle.classList.remove("highlighted"), 1000);
  }
  document.addEventListener("keydown", function (event) {
    console.log("Нажата клавиша:", event.key); // Для
    if (event.key === "h" || event.key === "H") {
      changeTitle("Вы нажали клавишу H!");
      return;
    }
    if (event.key === "4") {
      changeTitle("Вы нажали цифру 4!");
    }
  });
});

// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Обработка нажатия клавиш</title>
//     <style>
//         .highlighted {
//             color: #ff5722; /* Оранжевый цвет */
//             text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
//             transition: all 0.3s ease;
//         }
//     </style>
// </head>
// <body>
//     <h1 id="pageTitle">Нажмите клавишу 'H' для изменения текста</h1>
//     <p>Попробуйте также другие клавиши, например цифру 4</p>
//     <script src="script38.js"></script>
// </body>
// </html>
