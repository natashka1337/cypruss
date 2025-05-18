//билет 32. поиск в dom
//если у элемента есть атрибут id, то его можно получить вызовом document.getElementById(id), где бы он ни находился
//значение id должно быть уникальным
//самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору, возвращает первый эл-т, соответствующий данному CSS-селектору
// метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false
//метод closest поднимается вверх от элемента и проверяет каждого из родителей. Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден
//метод contains проверяет, содержится ли один эл-т внутри другого, учитывает вложенность, возвращает тру или фолс
const title = document.getElementById('title');
console.log('Заголовок:', title.textContent);//ищем по айди и выводим текст, самый быстрый метод, возвращает один эл-т

const activeItem = document.querySelector('.active');
console.log('Активный пункт:', activeItem.textContent);//ищем первый элемент с классом активе, находит всегда первый эл-т,м можно искать по классу, тегу и атрибуту

const allItems = document.querySelectorAll('.item');
console.log('Все пункты:');//ищем все пункты с классом итем, возвращает коллекцию, можно перебирать через форич
allItems.forEach(item => {
    console.log('-', item.textContent);
});

const button = document.querySelector('button');
if (button.matches('.btn')) {
    console.log('Это кнопка с классом .бтн'); //проверяем есть ли у кнопки класс бтн, удобно для проверки условий
}

const parent = activeItem.closest('#main');
console.log('Родительский div:', parent.id);//ищем родительский эл-т, проверяет тек эл-т и его предков, удобно для поиска контейнера

const mainDiv = document.getElementById('main');
console.log('Заголовок внутри mainDiv?', mainDiv.contains(title));//проверяет, содержится ли один эл-т внутри другого, учитывает вложенность, возврщает тру или фолс

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Поиск в DOM</title>
// </head>
// <body>
//     <div id="main">
//         <h1 id="title">Тутутуут</h1>
//         <ul>
//             <li class="item">Пункт 1</li>
//             <li class="item active">Пункт 2</li>
//             <li class="item">Пункт 3</li>
//         </ul>
//         <button class="btn">Кнопка</button>
//     </div>

//     <script src="script32.js"></script>
// </body>
// </html>