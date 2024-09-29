import React, { useState } from 'react';
import TaskList from './components/TaskList';  // Importa la lista de tareas
import TaskForm from './components/TaskForm';  // Importa el formulario para agregar tareas


function App() {
  // Estado para gestionar las tareas. Comienza con un array vacío.
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Función para agregar nuevas tareas
  const addTask = (taskText) => {
    if (editingIndex !== null) {
      const updatedTasks = tasks.map((task, index) => 
        index === editingIndex ? { ...task, text: taskText } : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      const newTask = { text: taskText, completed: false };
      setTasks([...tasks, newTask]);  // Agrega la nueva tarea al estado
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);  // Filtra las tareas eliminando la seleccionada
    setTasks(newTasks);  // Actualiza el estado con las tareas restantes
  };

  // Función para editar una tarea
  const updateTask = (index) => {
    setEditingIndex(index);  // Guarda el índice de la tarea que se va a editar
  };

  

  return (
    <div  className="container mt-5">
      <h1 className="text-center mb-5">Lista de Tareas</h1>
      {/* Renderiza el formulario para agregar tareas */}
      <TaskForm addTask={addTask} editingIndex={editingIndex} tasks={tasks} />
      
      {/* Renderiza la lista de tareas, pasándole las tareas y la función para eliminarlas */}
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
}

export default App;