export interface Habit {
  id: number;
  title: string;
  description: string;
  category: string;
  frequency: string;
  completed: boolean;
  lastUpdated: string;
}

export interface HabitPayload {
  title: string;
  description: string;
  category: string;
  frequency: string;
}

export const DEFAULT_HABITS: Habit[] = [
  {
    id: 1,
    title: 'Не сплетничать с коллегами на работе',
    description: 'Сосредоточьтесь на фактах и поддержании деловой атмосферы, избегая обсуждений людей за их спиной.',
    category: 'Коммуникации',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Сделайте одно действие для завершения задачи',
    description: 'Выберите конкретное действие, которое продвинет текущую задачу, и выполните его перед переключением на другую.',
    category: 'Фокус и эффективность',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Уборка рабочего места в конце дня',
    description: 'Освободите стол от лишних предметов и подготовьте пространство к следующему рабочему дню.',
    category: 'Организация',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Сделайте несколько деловых звонков',
    description: 'Запланируйте и выполните важные звонки, связанные с текущими проектами или партнерами.',
    category: 'Коммуникации',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Ответьте на деловые письма',
    description: 'Разберите входящие письма и отправьте ответы по ключевым темам, чтобы не накапливать задолженности.',
    category: 'Коммуникации',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Сходите на встречу',
    description: 'Посетите запланированную встречу, подготовив ключевые вопросы и заметки.',
    category: 'Взаимодействие',
    frequency: 'Еженедельно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Просмотрите свои заметки',
    description: 'Повторите сделанные записи, обновите статусы задач и зафиксируйте новые идеи.',
    category: 'Фокус и эффективность',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Представьте идею на встрече',
    description: 'Сформулируйте и презентуйте полезную идею для улучшения процессов или продукта.',
    category: 'Развитие',
    frequency: 'Еженедельно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 9,
    title: 'Пять минут на размышления об улучшениях',
    description: 'Ежедневно выделяйте время на анализ своих процессов и поиска точек роста.',
    category: 'Развитие',
    frequency: 'Ежедневно',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 10,
    title: 'Напишите аннотации к обучающим видео',
    description: 'Создавайте краткие заметки к профильным роликам, фиксируя идеи для практического применения.',
    category: 'Обучение',
    frequency: 'После просмотра',
    completed: false,
    lastUpdated: new Date().toISOString(),
  },
];
