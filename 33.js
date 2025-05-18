//билет 33.добавление, вставка, удаление и клонирование элемента
//node.append(...nodes or strings) – добавляет узлы или строки в конец node
//node.prepend(...nodes or strings) – вставляет узлы или строки в начало node
//node.before(...nodes or strings) –- вставляет узлы или строки до node
// node.after(...nodes or strings) –- вставляет узлы или строки после node
//node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками
//метод elem.insertAdjacentHTML(where, html).Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML»
//remove - метод для удаления узлов
//метод cloneNode - создает полную копию эл-та со всеми потомками 

const newDiv = document.createElement('div');
newDiv.textContent = 'Новый элемент';//создание нового эл-та

const container = document.getElementById('container');//добавление эл-та
container.append(newDiv);//добавление в конец

const prependDiv = document.createElement('div');
prependDiv.textContent = 'Добавлен в начало';
container.prepend(prependDiv);//добавление в начало

const firstPara = document.getElementById('first');
const beforeDiv = document.createElement('div');
beforeDiv.textContent = 'Вставлен перед';
firstPara.before(beforeDiv);//вставляем перед див

const afterDiv = document.createElement('div');
afterDiv.textContent = 'Вставлен после';
firstPara.after(afterDiv);//вставляем после див

const replaceDiv = document.createElement('div');
replaceDiv.textContent = 'Заменяющий элемент';
firstPara.replaceWith(replaceDiv);//заменяем эл-т новым

container.insertAdjacentHTML('beforeend', '<p>Добавлен</p>');//вставляет внутри в конце

const clonedDiv = newDiv.cloneNode(true);//создает полную копию эл-та со всеми потомками 
container.append(clonedDiv);//добавим в конец

setTimeout(() => {
    clonedDiv.remove();//удаляем эл-т
    console.log('Элемент удален');
},5000);//5000 - кол-во мс чтобы видно как удалился эл-т

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Работа с DOM</title>
// </head>
// <body>
//     <div id="container">
//         <p id="first">Первый элемент</p>
//     </div>

//     <script src="script33.js"></script>
// </body>
// </html>