//билет 35. события нажатия мыши (click, mouseover, mouseup)
//событие - сигнал от браузера о том, что что-то проиозошло. все дом-узлы подают такие синалы 
// Основные события мыши
// 1. click — обычный клик
// Срабатывает, когда пользователь нажал и отпустил левую кнопку мыши на элементе.
// Пример:

  const button = document.getElementById("myButton");
  button.addEventListener("click", () => {
    alert("Кнопка нажата!");
  });
  
// 2. dblclick — двойной клик
// Срабатывает при двойном нажатии левой кнопки мыши.
//Пример:

const button = document.getElementById("myButton");
button.addEventListener("dblclick", () => {
  console.log("Двойной клик!");
});

// 3. mouseover / mouseout — наведение и уход
// mouseover — курсор наведён на элемент.
// mouseout — курсор ушёл с элемента.

  const box = document.getElementById("box");
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
  });

// 4. mousedown / mouseup — нажатие и отпускание
// mousedown — кнопка мыши нажата (но ещё не отпущена).
// mouseup — кнопка мыши отпущена.
// Пример (кнопка меняет цвет при нажатии):

const button = document.getElementById("myButton");
button.addEventListener("mousedown", () => {
  button.style.backgroundColor = "red";
});
button.addEventListener("mouseup", () => {
  button.style.backgroundColor = "";
});

//5. mousemove — движение мыши
//Срабатывает, когда курсор двигается над элементом.
// Пример (отслеживание координат):

  const area = document.getElementById("area");
  area.addEventListener("mousemove", (event) => {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
//   });

//6. contextmenu — клик правой кнопкой
//Срабатывает при правом клике (обычно открывает контекстное меню).
// Пример (запрет меню):

document.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Блокирует меню
  alert("Правый клик заблокирован!");
});

//event.target — элемент, на котором произошло событие.
//Пример (какая кнопка мыши нажата):

document.addEventListener("mousedown", (event) => {
  if (event.button === 0) console.log("Левая кнопка");
  if (event.button === 2) console.log("Правая кнопка");
});

//Когда использовать?
//click — для кнопок, ссылок.

//mouseover / mouseout — для hover-эффектов.

//mousemove — для игр, рисования.

//contextmenu — для кастомных меню


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- <button id="myButton">Нажми меня</button> для 1-го и 2-го и 4-го -->
//     <!-- <div id="box">Наведи на меня</div>для 3-го примера -->
//     <div id="area">Двигай мышью здесь</div><!-- для 5-го -->
// </body>
// <script src="script35.js"></script>
// </html>


//билет 37. события наведения мыши

// 1. mouseover и mouseout
// Эти события срабатывают, когда курсор заходит на элемент или покидает его.

// Как работают:
// mouseover — курсор навелся на элемент
//event.target - эл-т, на который курсор пришел
//event.relatedTarget - эл-т, с которого курсор ушел
//если он происходит на потомке, то всплывает, поэтому если на родительском эл-те есть такой обработчик, то он его вызовет
//происходит при движении мыши, браузер переодически проверяет позицию курсора и, заметив изменения, генерирует событие => если пол-ль быстро двигает мышкой, некоторые дом-эл-ты могут быть пропущены

// mouseout — курсор ушёл с элемента
//event.target - эл-т, с которого курсор ушел
//event.relatedTarget - эл-т, на который курсор пришел
// Особенности:
//он генерируется в том числе, когда указатель переходит с эл-та на его потомка, таким образом, если курсор переходмт на другой эл-т (даже если он дочерниц), то он покидает предыдущий
// Могут срабатывать при переходе на дочерние элементы
// Если внутри <div> есть <p>, то переход с <div> на <p> вызовет:

// mouseout на <div>

// mouseover на <p>

// 2. mouseenter и mouseleave
// Упрощённые версии mouseover/mouseout.

// Чем отличаются:
// Не реагируют на переходы внутри элемента
// Если курсор перешёл с <div> на его дочерний <p> — события не сработают.

// Не всплывают (не передаются родителям).

//ЕСТЬ ПРИМЕРЫ В 35 БИЛЕТЕ