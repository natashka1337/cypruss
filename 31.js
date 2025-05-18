//билет 31. dom-дерево. свойства узлов
//innerHTML позволяет получить хтмл-содержимое в виде строки, также с помощью его можно добавить новый тег внутри хтмл документа "оператор+=", другими словами делает следующее: старое содержимое удаляется, на его место становится новое значенис добавленной строкой
//outerHTML полностью заменяет один эл-т другим
//innerHTML есть только у узлов-элементов
//свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>
//атрибут и DOM-свойство «hidden» указывает на то, видим ли мы элемент или нет. Его можно использовать его в HTML или назначать при помощи JavaScript.
const container = document.getElementById('container');
console.log('innerHTML контейнера:', container.innerHTML);//находим эл-т по айди, наш контейнер, получаем содержимое html-эл-та

container.innerHTML += '<p class="new">Новый абзац добавлен через innerHTML</p>';//добавляем новый эл-т в контейнер

const exampleDiv = document.getElementById('example');//находим эл-т по айди
console.log('outerHTML элемента:', exampleDiv.outerHTML);//полностью заменяет один эл-т другим
exampleDiv.outerHTML = '<div id="replaced"><p>Элемент был заменен через outerHTML</p></div>';

const paragraphs = document.querySelectorAll('.content');//ищем эл-т 
paragraphs.forEach((p, i) => {
    console.log(`textContent абзаца ${i+1}:`, p.textContent);//выводит текст без хтмл-тега
});

const newElement = document.createElement('div');//создаем новый эл-т класса див
newElement.textContent = '<p>Это будет показано как текст, а не HTML</p>';//будет игнорировать тег р
document.body.appendChild(newElement);

const textInput = document.getElementById('textInput');
console.log('value input:', textInput.value);//получаем текущее значение текстового поля, для формы используется

const link = document.getElementById('link');
console.log('href ссылки:', link.href);//получаем адрес ссылки

const firstParagraph = document.querySelector('.content');//ищем класс контент
firstParagraph.hidden = true; // скрываем первый абзац

//показываем скрытый элемент через 2 секунды
setTimeout(() => {
    firstParagraph.hidden = false;
}, 2000);

// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Свойства узлов DOM</title>
// </head>
// <body>
//     <div id="container">
//         <h1>Пример работы со свойствами DOM</h1>
//         <p class="content">Первый абзац текста</p>
//         <p class="content">Второй абзац с <a href="#">ссылкой</a></p>
//     </div>

//     <div id="example">
//         <p>Этот элемент будет заменен</p>
//     </div>

//     <input type="text" id="textInput" value="Пример текста">
//     <a id="link" href="https://example.com">Ссылка</a>

//     <script src="script31.js"></script>
// </body>
// </html>