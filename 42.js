//билет 42. загрузка dom, события при загрузке dom
// DOMContentLoaded: Это событие происходит, когда браузер полностью загрузил
//  HTML-код и построил DOM-дерево (структуру документа) но внешние ресурсы, такие как изображения и стили, могут еще не быть загружены.
// load: Это событие срабатывает, когда браузер загрузил все: HTML, изображения, стили и другие ресурсы. На этом этапе все элементы страницы уже доступны.
// beforeunload/unload: Эти события происходят, когда пользователь покидает страницу. С помощью beforeunload можно спросить пользователя, действительно ли он хочет уйти, если есть несохраненные изменения.


document.addEventListener("DOMContentLoaded", function() {
    const domStatus = document.getElementById("domStatus");
    domStatus.textContent = "DOM полностью загружен!";
    domStatus.style.backgroundColor = "#d4edda";
});
// событие load - все ресурсы загружены
window.addEventListener("load", function() {
    const loadStatus = document.getElementById("loadStatus");
    loadStatus.textContent = "Все ресурсы загружены!";
    loadStatus.style.backgroundColor = "#d4edda";
    // проверка загрузки изображения
    const img = document.querySelector("img");
    console.log("Ширина изображения:", img.width);
});


// Событие beforeunload - перед выгрузкой страницы
window.addEventListener("beforeunload", function(event) {
    const text = document.querySelector("textarea").value;
    
    if (text) {
        event.preventDefault();
        event.returnValue = "У вас есть несохраненные изменения. Вы уверены, что хотите уйти?";
    }
});

// Событие unload - при выгрузке страницы
window.addEventListener("unload", function() {
    console.log("Страница выгружается");
});


// Когда что использовать:
// DOMContentLoaded - для основной инициализации скриптов
// load - когда нужны размеры изображений/элементов
// beforeunload - для предупреждений о несохраненных данных
// unload - для финальной очистки


// <!-- <!DOCTYPE html>
// <html>
// <head>
//     <title>События загрузки</title>
//     <style>
//         .status {
//             padding: 10px;
//             margin: 10px 0;
//             border: 1px solid #ccc;
//         }
//     </style>
// </head>
// <body>
//     <div id="domStatus" class="status">Ожидание загрузки DOM...</div>
//     <div id="loadStatus" class="status">Ожидание полной загрузки...</div>
//     <img src="https://avatars.mds.yandex.net/i?id=f50af55a565357c56455f2fddb178d9b43935b26-5232815-images-thumbs&n=13/500x200" alt="Тестовое изображение">
//     <script src="script422.js"></script>
// </body>
// </html> -->

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Подтверждение выхода</title>
// </head>
// <body>
//     <h1>Попробуйте покинуть страницу</h1>
//     <textarea placeholder="Введите текст..."></textarea>
//     <script src="script42.js"></script>
// </body>
// </html>