// Lista original de tarefas
const tasks = [
  { id: 1, task: "Comprar leite", completed: false },
  { id: 2, task: "Estudar javascript", completed: false },
];

// Adicionar tarefas
const addTasks = (tasks, newTasks) => {
  return [...tasks, { id: Date.now(), tasks: newTasks, completed: false }];
};
const novaTask = addTasks(tasks, "Estudar imutabilidade");
// console.log( novaTask)

// tarefas completas
const completedTasks = (tasks, tasksId) => {
  return tasks.map((tasks) => (tasks.id === tasksId ? { ...tasks, completed: true } : tasks));
};
const tasksCompleta = completedTasks(novaTask, 1);
// console.log(tasksCompleta)

// Gerenciador de tarefas 2
const cart = [
  { id: 1, name: "Arroz", quantity: 1 },
  { id: 2, name: "Macarrao", quantity: 1 },
];

// Adicionar item ao estoque
const addItem = (cart, newItem) => [...cart, { ...newItem, quantity: 1 }];

// Remover item
const removerItem = (cart, itemId) => cart.filter((item) => item.id !== itemId); // Remoção desse item filtrado

// atualizar quantidade
const updateQuantity = (cart, itemId, quantity) => {
  return cart.map((item) => {
    return item.id === itemId ? { ...item, quantity } : item;
  }); // quantity: quantity (Valor argumento)
};
const newCart = addItem(cart, { id: 3, name: "Carro", quantity: 1 });
console.log(newCart);

const removeItem = removerItem(newCart, 2);
console.log(removeItem);

const quantidade = updateQuantity(cart, 1, 5);
console.log(quantidade);
