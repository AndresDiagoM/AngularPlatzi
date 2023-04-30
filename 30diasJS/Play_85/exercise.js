function taskManager() {
    let tasks = new Map();

    function addTask(task, tags) {
        //pasar task a lowercase
        task = task.toLowerCase();
        //Si ya tienen la tarea, se agregan las tags
        if (tasks.has(task)) {
            let currentTags = tasks.get(task);
            tags.forEach(tag => currentTags.add(tag));
            tasks.set(task, currentTags);
        } else {
            //Si no la tienen, se crea la tarea con las tags
            tasks.set(task, new Set(tags));
        }
    }
    
    function printTasks(){
        return tasks;
    }

    return {
        addTask,
        printTasks
    }
}


//EJERCICIO 1
//Input:
const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);

console.log(myTaskManager.printTasks());

//Output:
//Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }