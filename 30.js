//билет 30. dom-дерево. навигация по элементам 
// все операции с dom начинаются с объекта document. Главная "точка входп" в dom. Из него можно получить доступ к любому узлу
//Самые верхние эл-ты дерева доступны как св-ва объекта document => document.body
//тег head доступен как document.head
//Нельзя получить доступ к эл-ту, которого езе не существует к момент выполнения скрипта
//Дочерние узлы - эл-ты, которые являются непосредственными детьми узла. Другими словами, эл-ты, которые лежат внутри данного. Например head и body - дети эл-та html
//Потомки - все эл-ты, которые лежат внутри данного, включая детей, их детей и тд
//childNodes содержит список всех детей, включая текстовые узлы. Похож на массив, но это не массив, а коллекция - сособый перебираемый объект-псевдомассив
//firstChild - быстрый доступ к первому дочернему эл-ту
//lastChild - быстрый доступ к последнемму дочернему эл-ту
//Соседи - узлы, у которых один и тот же родитель
//children – коллекция детей, которые являются элементами
//firstElementChild, lastElementChild – первый и последний дочерний элемент
//previousElementSibling, nextElementSibling – соседи-элементы
//parentElement – родитель-элемент

// Получаем контейнер
const container = document.getElementById('container');//находим эл-т по айди
console.log("Дочерние элементы контейнера:");
console.log("Количество элементов:", container.children.length);//выводим дочерние эл-ты, их количество
console.log("Первый элемент:", container.firstElementChild.textContent);//первый доч. эл-т и текст внутри его
console.log("Последний элемент:", container.lastElementChild.textContent);//последний доч. эл-т и текст внутри его

const specialPara = document.querySelector('.special');//ищем первы  эл-т по css-селектору, находим эл-т с классом специал
console.log("\nВыделенный абзац:", specialPara.textContent);//вывродим его текст

console.log("Предыдущий элемент:", 
    specialPara.previousElementSibling?.textContent || "нет");//предыдущий соседний эл-т, значение по умолчанию - нет, если соседа нет
console.log("Следующий элемент:", 
    specialPara.nextElementSibling?.textContent || "нет");//следующий соседний эл-т, значение по умолчанию - нет, если соседа нет

const newPara = document.createElement('p');//создает новый эл-т
newPara.textContent = "Новый добавленный абзац";//добавляем текст
container.appendChild(newPara);//добавляем эл-т в конец контейнера
console.log("\nДобавлен новый элемент.Теперь количество дочерных элементов:", container.children.length);//выводим сколько стало дочерых эл-т

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Пример DOM</title>
// </head>
// <body>
//     <div id="container">
//         <p>Первый абзац текста</p>
//         <p class="special">Второй абзац (выделенный)</p>
//         <p>Третий абзац</p>
//     </div>

//     <script src="script30.js"></script>
// </body>
// </html>