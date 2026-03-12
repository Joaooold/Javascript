// Lista original de tarefas
const tasks = [
  { id: 1, task: "Comprar leite", completed: false },
  { id: 2, task: "Estudar javascript", completed: false },
];

// Adicionar tarefas
const addTasks = (tasks, newTasks) => {
  return [...tasks, { id: Date.now(), tasks: newTasks, completed: false }];
};
const novaTask = addTasks(tasks, "Estudar imutabilidade")
console.log( novaTask)

// tarefas completas
const completedTasks = (tasks, tasksId) => {
    return tasks.map((tasks) => tasks.id === tasksId ? {...tasks, completed: true} : tasks)
}
const tasksCompleta = completedTasks(novaTask, 1)
console.log(tasksCompleta)