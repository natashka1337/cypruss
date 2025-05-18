//билет 44. Основы сетевых запросов. Метод fetch()
//js может отправлять сет. запросы на сервер и подгружать новуб информацию по мере необходимости
//метод fetch(url, [options]) url - ссылка для отправки запроса, options - доп. параметры, метод заголоввки и тд
//response.text - читает ответ и возвращает как обычный текст
//response.json - декодирует ответ в формате json
// Получаем кнопку по ID и добавляем обработчик события click
document.getElementById('loadBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.github.com/users/octocat');//отправляем запроси к апи
        const data = await response.json();
        const htmlContent = `
            <h2>${data.name}</h2>
            <p>Логин: ${data.login}</p>
            <p>Биография: ${data.bio || 'Нет информации'}</p>
            <img src="${data.avatar_url}" width="100" alt="Аватар">
            <p><a href="${data.html_url}" target="_blank">Профиль на GitHub</a></p>
        `;//выводим хтмл для вывода данных
        document.getElementById('output').innerHTML = htmlContent;// вставляем результат в страницу
        
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);//обработка ошибок
        document.getElementById('output').innerHTML = 
            '<p style="color: red;">Ошибка при загрузке данных. Проверьте консоль для подробностей.</p>';
    }
});

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Fetch Example</title>
//     <meta charset="UTF-8">
// </head>
// <body>
//     <!-- кнопка для загрузки данных -->
//     <button id="loadBtn">Загрузить данные</button>
//     <div id="output"></div>
//     <script src="script44.js"></script>
// </body>
// </html>