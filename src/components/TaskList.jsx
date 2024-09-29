import React from 'react';
import Task from './Task';  // Importa el componente Task para renderizar cada tarea

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <ul className='text-center list-unstyled'>
      {tasks.map((task, index) => (
        <Task
          key={index}  // Cada tarea debe tener una clave única
          task={task}
          index={index}
          updateTask={updateTask}  // Pasa la función de edición
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;