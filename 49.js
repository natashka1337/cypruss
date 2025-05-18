//билет 49. Обработка исключений
//если скрипт содержит ошибки, то его выполнение останавливается и данные об ошибке выводядтся в консоль.Для "отлова" ошибок существует спец. синтаксис. конструкция try...catch, которая вместе остановки скрипта выполняет команды, указанные программистом
//работает следующим образом:
//1. сначала выполняется код внутри блока try{...}
//2.если в нем нет ошибок, то блок catch(err) игнорируется, выполнение доходит до конца try
//3. если же в нем есть ошибка, то выполнение try прекращается и поток управления переходит в начал catch(err). переменная err содержит объект ошибки с подробной информацией о произошедшем

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль невозможно");
    }
    return a / b;
  } catch (error) {
    console.error("Ошибка при делении:", error.message);
    return null;
  }
}
console.log("10/2:", divide(10, 2));
console.log("10/0:", divide(10, 0));

function parseJson(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("Данные успешно распарсены:", data);
    return data;
  } catch (error) {
    console.error("Ошибка парсинга JSON:", error.message);
    return {};
  }
}
console.log("Парсинг JSON ");
parseJson('{"name": "John", "age": 30}');
parseJson("invalid json");
