import { Task } from "./exercise.mjs";

/**
 * tasks: un array vacío para almacenar las tareas
 * getInstance(): un método que devuelva una instancia de TaskManager. Si ya hay una instancia existente, devuelve esa instancia en lugar de crear una nueva.
 * addTask(task): un método para agregar tareas al array que debe verificar si esta hereda de la clase Task
 * getTasks(): un método que regresará todas las tareas
 * getTaskById(id): un método que buscará una tarea por su id y la retornará, en caso de no existir regresará null
 */
export class TaskManager {
    
    constructor() {
        if (!TaskManager.instance) {
            this._tasks = [];
            TaskManager.instance = Object.freeze(this);
        }
        return TaskManager.instance;
    }

    static getInstance() {
        // Tu código aquí 👈
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }

    addTask(task) {
        // Tu código aquí 👈
        if (task instanceof Task) {
            this._tasks.push(task);
        }
    }

    getTasks() {
        // Tu código aquí 👈
        return this._tasks;
    }

    getTaskById(id) {
        // Tu código aquí 👈
        let task = this._tasks.find(task => task.id === id);
        if (task) {
            return task;
        }else
            return null;
    }
}