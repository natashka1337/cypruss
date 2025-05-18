//билет 47. работа со стилями и класса
//чтобы задавать динамичсекие стили эл-ту, атрибут style можно забиндить с помощью директивы v-bind
//для динамической работы с css-классами естт 3 способа взаимодействия:
//1 способ в хтмл (тернарный оператор)
//2 способ передаем объект в качестве ключей указываем название класса
//3 способ можно передавать в класс массив, в качестве элементов которого могут быть как классы, так и объекты 
const App = {
  // 1. Блок data - состояние приложения
  data() {
    return {
      newTask: "",
      tasks: [
        { text: "не сдохнутт", completed: true },
        { text: "сдать комплексный", completed: false },
        { text: "напиться", completed: false },
      ],
      filter: "all",
    };
  },

  // 2. Блок computed - вычисляемые свойства
  computed: {
    filteredTasks() {
      switch (this.filter) {
        case "active":
          return this.tasks.filter((t) => !t.completed);
        case "completed":
          return this.tasks.filter((t) => t.completed);
        default:
          return this.tasks;
      }
    },
    totalTasks() {
      return this.tasks.length;
    },
    activeTasks() {
      return this.tasks.filter((t) => !t.completed).length;
    },
    completedTasks() {
      return this.tasks.filter((t) => t.completed).length;
    },
  },

  // 3. Блок methods - методы
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          text: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
  },
};

const app = Vue.createApp(App);
app.mount("#app");


// <!DOCTYPE html>
// <html lang="ru">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Основные блоки Vue 3</title>
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <style>
//       .active {
//         background-color: #e6f7ff;
//       }
//       .error {
//         color: red;
//       }
//       .completed {
//         text-decoration: line-through;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="app">
//       <h1>Список задач</h1>

//       <input
//         v-model="newTask"
//         @keyup.enter="addTask"
//         placeholder="Добавить задачу"
//       />
//       <button @click="addTask">Добавить</button>

//       <ul>
//         <li
//           v-for="(task, index) in filteredTasks"
//           :key="index"
//           :class="{ completed: task.completed }"
//         >
//           <span @click="toggleTask(index)">{{ task.text }}</span>
//           <button @click="removeTask(index)">×</button>
//         </li>
//       </ul>

//       <div>
//         <button @click="filter = 'all'">Все</button>
//         <button @click="filter = 'active'">Активные</button>
//         <button @click="filter = 'completed'">Завершенные</button>
//       </div>

//       <p>
//         Всего: {{ totalTasks }}, Активные: {{ activeTasks }}, Завершенные: {{
//         completedTasks }}
//       </p>
//     </div>

//     <script src="script47.js"></script>
//   </body>
// </html>
