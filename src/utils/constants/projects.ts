import expensesTracker from '../../assets/projects/expenses-tracker.png';
import toDoApp from '../../assets/projects/todo-app.png';
import adviceGenerator from '../../assets/projects/advice-generator.png';

export const PROJECTS = [
  {
    name: 'Expenses Tracker',
    description: 'Plataforma para gestionar tus finanzas',
    img: expensesTracker,
    website: 'https://expenses.javimartinez.dev',
    technologies: [
      'React',
      'Vite',
      'Typescript',
      'Zustand',
      'Firebase Auth',
      'Firestore',
      'Tailwind CSS',
      'ESLint',
    ],
  },
  {
    name: 'ToDo App',
    description: 'Aplicación para organizar y administrar tus tareas',
    img: toDoApp,
    website: 'https://todo-app-javiermrtnez.vercel.app',
    technologies: [
      'React',
      'Vite',
      'Typescript',
      'Redux',
      'Firebase Auth',
      'Firestore',
      'styled-components',
      'ESLint',
    ],
  },
  {
    name: 'Advice Generator',
    description: 'Generador de consejos',
    img: adviceGenerator,
    website: 'https://advice-generator-javiermrtnez.vercel.app',
    technologies: ['Vite', 'React', 'Javascript'],
  },
];
