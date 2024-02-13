type Task = {
  id?: number; // Уникальный идентификатор задачи
  title: string; // Заголовок задачи
  description?: string; // Описание задачи (опционально)
  category?: string; // Категория задачи (например, "Работа", "Личное", "Учеба" и т.д.)
  priority?: "low" | "medium" | "high"; // Приоритет задачи
  dueDate?: Date; // Крайний срок выполнения задачи (опционально)
  completed?: boolean; // Флаг выполнения задачи
};

type FilterOptions = {
  status?: "all" | "completed" | "pending"; // Статус задачи для фильтрации
  category?: string; // Категория для фильтрации
};

type SortOptions = {
  sortBy: "title" | "dueDate" | "priority"; // Критерий сортировки задач
  sortOrder: "asc" | "desc"; // Порядок сортировки (по возрастанию или убыванию)
};

type SearchOptions = {
  keyword: string; // Ключевое слово для поиска в заголовке или описании задачи
};

const tasks: Task[] = [
  {
    id: 1,
    title: "Записаться на курс по React",
    description: "Найти подходящий курс и записаться на него",
    category: "Учеба",
    priority: "high",
    dueDate: new Date("2024-03-15"),
    completed: false,
  },
  {
    id: 2,
    title: "Подготовить презентацию для конференции",
    category: "Работа",
    priority: "high",
    dueDate: new Date("2024-02-20"),
    completed: true,
  },
  {
    id: 3,
    title: "Купить продукты в магазине",
    description: "Молоко, яйца, хлеб, фрукты",
    category: "Личное",
    priority: "medium",
    dueDate: new Date("2024-02-17"),
    completed: false,
  },
  {
    id: 4,
    title: "Подготовиться к собеседованию",
    category: "Работа",
    priority: "high",
    dueDate: new Date("2024-02-25"),
    completed: false,
  },
  {
    id: 5,
    title: "Сделать уборку в квартире",
    category: "Личное",
    priority: "medium",
    dueDate: new Date("2024-02-18"),
    completed: true,
  },
  {
    id: 6,
    title: "Прочитать новую книгу",
    category: "Личное",
    priority: "low",
    completed: false,
  },
  {
    id: 7,
    title: "Записаться на занятия йогой",
    category: "Спорт",
    priority: "medium",
    completed: false,
  },
  {
    id: 8,
    title: "Сходить в кино с друзьями",
    category: "Личное",
    priority: "low",
    dueDate: new Date("2024-02-22"),
    completed: true,
  },
  {
    id: 9,
    title: "Подготовиться к экзамену",
    category: "Учеба",
    priority: "high",
    dueDate: new Date("2024-03-10"),
    completed: false,
  },
  {
    id: 10,
    title: "Провести вечеринку на выходных",
    category: "Личное",
    priority: "medium",
    completed: false,
  },
];

export default tasks;
