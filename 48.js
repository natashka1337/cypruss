//билет 48. Локальные хранилища данных LocalStorage и SessinStorage
//веб-хранилища - технология позволябщая сохранять данные прямо в браузере пол-ля. есть два вида
//localStorage - данные сохраняются навсегда пока пол-ль сам их не удалит
//sessionStorage - данные удаляются после закрытия вкладки или кона браузера
// Задача 1: Сохранение имени пользователя
// Условие:
// Пользователь вводит имя в форму Если он закроет вкладку и вернётся, имя должно остаться (localStorage). Подсказки:
// Используйте localStorage.setItem() для долгого хранения.
// Используйте sessionStorage.setItem() для хранения в текущей сессии.
// Получаем элементы DOM
const nameInput = document.getElementById('nameInput');
const saveBtn = document.getElementById('saveBtn');
const showBtn = document.getElementById('showBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');
function saveName() {// функция сохранения имени
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        showMessage('Имя успешно сохранено!');
    } else {
        showMessage('Пожалуйста, введите имя');
    }
}
function showName() {//функция показа имени
    const name = localStorage.getItem('userName');
    if (name) {
        showMessage(`Сохраненное имя: ${name}`);
    } else {
        showMessage('Имя не найдено в хранилище');
    }
}

function clearName() {// функция показа имени
    localStorage.removeItem('userName');
    showMessage('Имя удалено из хранилища');
}

function showMessage(message) {// вспомогательная функция для вывода сообщений
    output.textContent = message;
}

saveBtn.addEventListener('click', saveName);
showBtn.addEventListener('click', showName);
clearBtn.addEventListener('click', clearName);// вешаем обработчики событий
window.addEventListener('DOMContentLoaded', () => {// показываем сохраненное имя при загрузке страницы
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        nameInput.value = savedName;
        showMessage(`Привет, ${savedName}! Ваше имя было загружено.`);
    }
});



// <!DOCTYPE html>
// <html lang="ru">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>LocalStorage Пример</title>
//     <style>
//       body {
//         font-family: Arial, sans-serif;
//         max-width: 400px;
//         margin: 20px auto;
//         padding: 20px;
//       }
//       input,
//       button {
//         padding: 8px;
//         margin: 5px 0;
//         width: 100%;
//         box-sizing: border-box;
//       }
//       #output {
//         margin-top: 10px;
//         padding: 10px;
//         border: 1px solid #ddd;
//         min-height: 20px;
//       }
//     </style>
//   </head>
//   <body>
//     <h2>Пример работы с localStorage</h2>
//     <input type="text" id="nameInput" placeholder="Введите ваше имя" />
//     <button id="saveBtn">Сохранить имя</button>
//     <button id="showBtn">Показать имя</button>
//     <button id="clearBtn">Удалить имя</button>
//     <div id="output"></div>

//     <script src="script48.js"></script>
//   </body>
// </html>
